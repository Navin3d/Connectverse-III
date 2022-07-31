package gmc.project.connectversev3.authservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gmc.project.connectversev3.authservice.entities.EmployeeEntity;
import gmc.project.connectversev3.authservice.entities.EmployerEntity;
import gmc.project.connectversev3.authservice.models.EmployeeModel;
import gmc.project.connectversev3.authservice.models.EmployerModel;
import gmc.project.connectversev3.authservice.services.AuthService;

@RequestMapping(path = "/auth")
@RestController
public class AuthController {
	
	@Autowired
	private AuthService authService;
	
	@PostMapping(path = "/register/employer")
	private ResponseEntity<String> resgisterEmployer(@RequestBody EmployerModel employerModel) {
		authService.createEmployer(employerModel);
		return ResponseEntity.status(HttpStatus.CREATED).body("The Employer is Registered Successfully...");
	}
	
	@PostMapping(path = "/register/employee")
	private ResponseEntity<String> resgisterEmployee(@RequestBody EmployeeModel employeeModel) {
		authService.createEmployee(employeeModel);
		return ResponseEntity.status(HttpStatus.CREATED).body("The Employee is Registered Successfully...");
	}

}
