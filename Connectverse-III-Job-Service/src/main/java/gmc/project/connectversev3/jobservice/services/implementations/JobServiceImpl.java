package gmc.project.connectversev3.jobservice.services.implementations;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gmc.project.connectversev3.jobservice.daos.CompanyDao;
import gmc.project.connectversev3.jobservice.daos.EmployeeDao;
import gmc.project.connectversev3.jobservice.daos.EmployerDao;
import gmc.project.connectversev3.jobservice.daos.JobDao;
import gmc.project.connectversev3.jobservice.daos.SkillDao;
import gmc.project.connectversev3.jobservice.entities.CompanyEntity;
import gmc.project.connectversev3.jobservice.entities.EmployeeEntity;
import gmc.project.connectversev3.jobservice.entities.EmployerEntity;
import gmc.project.connectversev3.jobservice.entities.JobEntity;
import gmc.project.connectversev3.jobservice.entities.SkillEntity;
import gmc.project.connectversev3.jobservice.exceptions.EmployeeNotFoundException;
import gmc.project.connectversev3.jobservice.exceptions.JobNotFoundException;
import gmc.project.connectversev3.jobservice.exceptions.SkillNotFoundException;
import gmc.project.connectversev3.jobservice.models.JobCreateOrUpdateModel;
import gmc.project.connectversev3.jobservice.models.JobModel;
import gmc.project.connectversev3.jobservice.models.ListJobModel;
import gmc.project.connectversev3.jobservice.services.JobService;

@Service
public class JobServiceImpl implements JobService {

	@Autowired
	private JobDao jobDao;
	@Autowired
	private SkillDao skillDao;
	@Autowired
	private CompanyDao companyDao;
	@Autowired
	private EmployerDao employerDao;
	@Autowired
	private EmployeeDao employeeDao;

	@Override
	public JobEntity findOne(Long jobId) {
		JobEntity returnValue = jobDao.findById(jobId).orElse(null);
		if (returnValue == null)
			throw new JobNotFoundException("Job Id: " + jobId);
		return returnValue;
	}

	@Override
	public List<ListJobModel> getAllJobs() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<ListJobModel> returnValue = new ArrayList<>();
		jobDao.findByIsCompleted(false).forEach(job -> {
			returnValue.add(modelMapper.map(job, ListJobModel.class));
		});
		return returnValue;
	}
	
	@Override
	public JobModel getAJob(Long jobId) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		JobEntity foundJob = findOne(jobId);
		JobModel returnValue = modelMapper.map(foundJob, JobModel.class);
		returnValue.setEmployerId(foundJob.getCompany().getEmployer().getId());
		return returnValue;
	}

	@Override
	public void createOrUpdateJob(JobCreateOrUpdateModel jobCreateOrUpdateModel) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		if (jobCreateOrUpdateModel.getId() == null) {
			JobEntity detached = modelMapper.map(jobCreateOrUpdateModel, JobEntity.class);
			if (jobCreateOrUpdateModel.getSkillIds() != null) {
				Set<SkillEntity> skills = new HashSet<>();
				jobCreateOrUpdateModel.getSkillIds().forEach(skillId -> {
					SkillEntity reqestedSkill = skillDao.findById(skillId).orElse(null);
					if (reqestedSkill == null)
						throw new SkillNotFoundException("Skill Id: " + skillId);
					skills.add(reqestedSkill);
				});
				detached.setSkills(skills);
			}
			EmployerEntity employer = employerDao.findById(jobCreateOrUpdateModel.getEmployerId()).orElse(null);
			CompanyEntity company = employer.getCompany();
			detached.setCompany(company);
			JobEntity savedJob = jobDao.save(detached);
			company.getJobs().add(savedJob);
			company.setIsEnabled(true);
			companyDao.save(company);
			if (jobCreateOrUpdateModel.getSkillIds() != null) {
				jobCreateOrUpdateModel.getSkillIds().forEach(skillId -> {
					SkillEntity reqestedSkill = skillDao.findById(skillId).orElse(null);
					if (reqestedSkill == null)
						throw new SkillNotFoundException("Skill Id: " + skillId);
					reqestedSkill.getJobs().add(savedJob);
					skillDao.save(reqestedSkill);
				});
			}
		} else {
			JobEntity detached = findOne(jobCreateOrUpdateModel.getId());
			modelMapper.map(jobCreateOrUpdateModel, detached);
			if (jobCreateOrUpdateModel.getSkillIds() != null) {
				Set<SkillEntity> skills = new HashSet<>();
				jobCreateOrUpdateModel.getSkillIds().forEach(skillId -> {
					SkillEntity reqestedSkill = skillDao.findById(skillId).orElse(null);
					if (reqestedSkill == null)
						throw new SkillNotFoundException("Skill Id: " + skillId);
					skills.add(reqestedSkill);
				});
				detached.setSkills(skills);
			}

			EmployerEntity employer = employerDao.findById(jobCreateOrUpdateModel.getEmployerId()).orElse(null);
			CompanyEntity company = employer.getCompany();
			detached.setCompany(company);
			JobEntity savedJob = jobDao.save(detached);
			company.getJobs().add(savedJob);
			companyDao.save(company);
			if (jobCreateOrUpdateModel.getSkillIds() != null) {
				jobCreateOrUpdateModel.getSkillIds().forEach(skillId -> {
					SkillEntity reqestedSkill = skillDao.findById(skillId).orElse(null);
					if (reqestedSkill == null)
						throw new SkillNotFoundException("Skill Id: " + skillId);
					reqestedSkill.getJobs().add(savedJob);
					skillDao.save(reqestedSkill);
				});
			}
		}
	}

	@Override
	public void applyForJob(Long jobId, String employeeId) {
		JobEntity foundJob = findOne(jobId);
		EmployeeEntity foundEmployee = employeeDao.findById(employeeId).orElse(null);
		if(foundEmployee == null)
			throw new EmployeeNotFoundException("Employee Id: " + employeeId);
		foundEmployee.getJobsApplied().add(foundJob);
		foundJob.getEmployeesApplied().add(foundEmployee);
		jobDao.save(foundJob);
	}

	@Override
	public void acceptJoiningRequest(Long jobId, String employeeId) {
		JobEntity foundJob = findOne(jobId);
		EmployeeEntity foundEmployee = employeeDao.findById(employeeId).orElse(null);
		if(foundEmployee == null)
			throw new EmployeeNotFoundException("Employee Id: " + employeeId);
		foundEmployee.getJobsApplied().remove(foundJob);
		foundJob.getEmployeesApplied().remove(foundEmployee);
		foundEmployee.setJob(foundJob);
		foundJob.getEmployees().add(foundEmployee);
		jobDao.save(foundJob);
	}

	@Override
	public void rejectJoiningRequest(Long jobId, String employeeId) {
		JobEntity foundJob = findOne(jobId);
		EmployeeEntity foundEmployee = employeeDao.findById(employeeId).orElse(null);
		if(foundEmployee == null)
			throw new EmployeeNotFoundException("Employee Id: " + employeeId);
		foundEmployee.getJobsApplied().remove(foundJob);
		foundJob.getEmployeesApplied().remove(foundEmployee);
		jobDao.save(foundJob);
	}

}
