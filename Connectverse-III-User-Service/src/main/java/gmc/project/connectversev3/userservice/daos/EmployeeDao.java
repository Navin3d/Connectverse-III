package gmc.project.connectversev3.userservice.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import gmc.project.connectversev3.userservice.entities.EmployeeEntity;

public interface EmployeeDao extends JpaRepository<EmployeeEntity, String> {
	List<EmployeeEntity> findByIsTechnicalWorker(Boolean isTechnicalWorker);
	EmployeeEntity findByEmail(String email);
	EmployeeEntity findByMobileNumber(Long mobileNumber);
}
