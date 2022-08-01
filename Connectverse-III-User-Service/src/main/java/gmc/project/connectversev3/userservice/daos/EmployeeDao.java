package gmc.project.connectversev3.userservice.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import gmc.project.connectversev3.userservice.entities.EmployeeEntity;

public interface EmployeeDao extends JpaRepository<EmployeeEntity, String> {
	EmployeeEntity findByEmail(String email);
	EmployeeEntity findByMobileNumber(Long mobileNumber);
}
