package gmc.project.connectversev3.learningservice.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import gmc.project.connectversev3.learningservice.entities.ProjectEntity;

public interface ProjectDao extends JpaRepository<ProjectEntity, String> {
	List<ProjectEntity> findByIsHidden(Boolean isHidden);
}
