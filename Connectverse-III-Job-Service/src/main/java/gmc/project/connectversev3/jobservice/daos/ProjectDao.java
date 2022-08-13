package gmc.project.connectversev3.jobservice.daos;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import gmc.project.connectversev3.jobservice.entities.ProjectEntity;
import gmc.project.connectversev3.jobservice.entities.EmployeeEntity;

@Transactional
public interface ProjectDao extends JpaRepository<ProjectEntity, Long> {
	List<ProjectEntity> findByIsHidden(Boolean isHidden);
	List<ProjectEntity> findByProjectAdmin(EmployeeEntity projectAdmin);
}
