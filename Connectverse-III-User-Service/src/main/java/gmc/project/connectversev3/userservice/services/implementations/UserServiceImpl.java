package gmc.project.connectversev3.userservice.services.implementations;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import gmc.project.connectversev3.userservice.daos.EmployeeDao;
import gmc.project.connectversev3.userservice.daos.EmployerDao;
import gmc.project.connectversev3.userservice.entities.EmployeeEntity;
import gmc.project.connectversev3.userservice.entities.EmployerEntity;
import gmc.project.connectversev3.userservice.exceptions.UserNotFoundException;
import gmc.project.connectversev3.userservice.models.EmployeeModel;
import gmc.project.connectversev3.userservice.models.EmployerModel;
import gmc.project.connectversev3.userservice.services.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	@Autowired
	private EmployeeDao employeeDao;	
	@Autowired
	private EmployerDao employerDao;

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
	public void createManyEmployees(List<EmployeeModel> employees) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);		
		List<EmployeeEntity> employeesDetached = new ArrayList<>();
		employees.forEach(employee -> {
			EmployeeEntity employeeEntity = modelMapper.map(employee, EmployeeEntity.class);
			employeeEntity.setAadharId(bCryptPasswordEncoder.encode(employeeEntity.getAadharId()));
			employeesDetached.add(employeeEntity);
		});
		
		employeeDao.saveAllAndFlush(employeesDetached);
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

}
