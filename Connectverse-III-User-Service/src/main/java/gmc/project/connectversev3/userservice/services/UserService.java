package gmc.project.connectversev3.userservice.services;

import java.util.List;

import gmc.project.connectversev3.userservice.entities.EmployeeEntity;
import gmc.project.connectversev3.userservice.entities.EmployerEntity;
import gmc.project.connectversev3.userservice.models.EmployeeModel;
import gmc.project.connectversev3.userservice.models.EmployerModel;


public interface UserService {
	public EmployerEntity findEmployerByUserName(String userName);
	public EmployeeEntity findEmployeeByUserName(String userName);
	public void updateEmployer(EmployerModel employerEntity);
	public void updateEmployee(EmployeeModel employeeEntity);	
	public List<EmployeeEntity> createManyEmployees(List<EmployeeModel> employees);
	public void deleteAllEmployees();
	public List<EmployeeEntity> fetchFromEshram();
}
