package gmc.project.connectversev3.userservice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import gmc.project.connectversev3.userservice.daos.JobsDao;
import gmc.project.connectversev3.userservice.entities.EmployeeEntity;
import gmc.project.connectversev3.userservice.entities.JobEntity;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class SchedulingService {
	
	@Autowired
	private JobsDao jobsDao;
	@Autowired
	private UserService userService;
	
	@Scheduled(fixedDelay = 60000)
	public void fetchAndAssignJob() {
		log.error("One Min...");
		List<EmployeeEntity> savedEmployee = userService.fetchFromEshram();
		savedEmployee.forEach(employee -> {
			List<JobEntity> foundJobs = jobsDao.findByIsTechnicalJob(false);
			
			foundJobs.forEach(job -> {
				if(job.getPayPerHour() >= employee.getExpectedWagePerHour()) {
					
					if(job.getWorkHoursPerWeek().equals(employee.getExpectedWorkingHoursPerWeek())) {
						
						if(job.getDrivingLicenceRequired().equals(employee.getHasDrivingLicence())) {
							
							if(job.getVehicleWanted().equals(employee.getHasVehicle())) {
								
							} else {
								
							}
						} else {
							
						}
					}
				}
			});
//			foundJobs.stream().filter(job -> job.getPayPerHour() == employee.getExpectedWagePerHour());
//			foundJobs.stream().filter(job -> job.getWorkHoursPerDay() == employee.getExpectedWorkingHoursPerWeek());
		});
	}
}
