package gmc.project.connectversev3.userservice.services.implementations;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import gmc.project.connectversev3.userservice.daos.EmployeeDao;
import gmc.project.connectversev3.userservice.daos.EmployerDao;
import gmc.project.connectversev3.userservice.daos.ProjectsDao;
import gmc.project.connectversev3.userservice.daos.SiteSettingsDao;
import gmc.project.connectversev3.userservice.entities.EmployeeEntity;
import gmc.project.connectversev3.userservice.entities.EmployerEntity;
import gmc.project.connectversev3.userservice.entities.ProjectEntity;
import gmc.project.connectversev3.userservice.entities.SiteSettingsEntity;
import gmc.project.connectversev3.userservice.exceptions.UserNotFoundException;
import gmc.project.connectversev3.userservice.models.EmployeeModel;
import gmc.project.connectversev3.userservice.models.EmployerModel;
import gmc.project.connectversev3.userservice.services.UserService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	@Autowired
	private EmployeeDao employeeDao;	
	@Autowired
	private EmployerDao employerDao;
	@Autowired
	private SiteSettingsDao siteSettingsDao;
	@Autowired
	private ProjectsDao projectsDao;
	@Autowired
	private Environment environment;

	@Override
	public EmployerEntity findEmployerByUserName(String userName) {		
		EmployerEntity foundEmployer = null;		
		if(userName.contains("@")) {
			foundEmployer = employerDao.findByEmail(userName);
		} else {
			try {
				Long mobileNumber = Long.valueOf(userName);
				foundEmployer = employerDao.findByMobileNumber(mobileNumber);
			} catch (Exception e) {
				foundEmployer = employerDao.findById(userName).get();
			}
		}		
		if(foundEmployer == null) throw new UserNotFoundException("Employer Not found...");		
		return foundEmployer;
	}

	@Override
	public EmployeeEntity findEmployeeByUserName(String userName) {
		EmployeeEntity foundEmployee = null;
		if(userName.contains("@")) {
			foundEmployee = employeeDao.findByEmail(userName);
		} else {
			try {
				Long mobileNumber = Long.valueOf(userName);
				foundEmployee = employeeDao.findByMobileNumber(mobileNumber);
			} catch (Exception e) {
				foundEmployee = employeeDao.findById(userName).orElse(null);
			}
		}
		if(foundEmployee == null) throw new UserNotFoundException("Employee Not found...");
		return foundEmployee;
	}

	@Override
	public List<EmployeeEntity> createManyEmployees(List<EmployeeModel> employees) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		SiteSettingsEntity batchNo = siteSettingsDao.findById(1L).orElse(null);

		List<EmployeeEntity> employeesDetached = new ArrayList<>();
		employees.forEach(employee -> {
			EmployeeEntity employeeEntity = modelMapper.map(employee, EmployeeEntity.class);
			employeeEntity.setAadharId(bCryptPasswordEncoder.encode(employeeEntity.getAadharId()));
			employeeEntity.setBatchNo(Integer.valueOf(batchNo.getField1()));
			employeesDetached.add(employeeEntity);
		});
		List<EmployeeEntity> saved = employeeDao.saveAllAndFlush(employeesDetached);
		Integer latestBatch = Integer.valueOf(batchNo.getField1())+1;
		Long totalEmployeeCount = employeeDao.count();
		Integer addedCount = employees.size();
		batchNo.setField1(latestBatch.toString());
		batchNo.setField2(totalEmployeeCount.toString());
		batchNo.setField3(addedCount.toString());
		siteSettingsDao.save(batchNo);
		return saved;
		
	}

	@Override
	public void updateEmployer(EmployerModel employerModel) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		EmployerEntity existing = employerDao.findById(employerModel.getId()).orElse(null);
		if(existing == null) throw new UserNotFoundException(employerModel.getId());
		modelMapper.map(employerModel, existing);
		employerDao.save(existing);
	}

	@Override
	public void updateEmployee(EmployeeModel employeeModel) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		EmployeeEntity existing = employeeDao.findById(employeeModel.getId()).orElse(null);
		if(existing == null) throw new UserNotFoundException(employeeModel.getId());
		modelMapper.map(employeeModel, existing);
		employeeDao.save(existing);
	}

	@Override
	public void deleteAllEmployees() {
		Set<EmployeeEntity> foundEmployees = new HashSet<>();

		employeeDao.findAll().forEach(employee -> {			
			ProjectEntity foundEntity = projectsDao.findByProjectAdmin(employee).orElse(null);
			if(foundEntity == null) {
				foundEmployees.add(employee);
			}
		});
		
		foundEmployees.forEach(employee -> {
			employeeDao.delete(employee);
		});
		
		SiteSettingsEntity batchNo = siteSettingsDao.findById(1L).orElse(null);
		batchNo.setField1("1");
		batchNo.setField2("0");
		batchNo.setField3("0");
		siteSettingsDao.save(batchNo);
	}

	@Override
	public List<EmployeeEntity> fetchFromEshram() {
		String eShramUrl = environment.getProperty("eShramUrl");
		String mlServerWageCalculation = environment.getProperty("mlServerWageCalculation");
		String mlServerWorkingCalculation = environment.getProperty("mlServerWorkingCalculation");

		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<EmployeeModel[]> response = restTemplate.getForEntity(eShramUrl, EmployeeModel[].class);
		List<EmployeeModel> employees = new ArrayList<>();
		for(EmployeeModel employee :response.getBody()) {
			log.debug(employee.getFirstName());
			employee.setId(null);
			ResponseEntity<Integer> expectedWage = restTemplate.getForEntity(mlServerWageCalculation, Integer.class);
			ResponseEntity<Integer> workTime = restTemplate.getForEntity(mlServerWorkingCalculation, Integer.class);

			employee.setExpectedWagePerHour(expectedWage.getBody());
			if(workTime.getBody() == 0) {
				employee.setExpectedWorkingHoursPerWeek(20);
			} else {
				employee.setExpectedWorkingHoursPerWeek(40);
			}
			employees.add(employee);
		}
		List<EmployeeEntity> savedEmployees = createManyEmployees(employees);
		restTemplate.delete(eShramUrl);
		return savedEmployees;
	}

}
