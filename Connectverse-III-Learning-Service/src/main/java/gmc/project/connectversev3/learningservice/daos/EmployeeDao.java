package gmc.project.connectversev3.learningservice.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import gmc.project.connectversev3.learningservice.entities.EmployeeEntity;

public interface EmployeeDao extends JpaRepository<EmployeeEntity, String> {

}
