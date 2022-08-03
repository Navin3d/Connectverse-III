package gmc.project.connectversev3.learningservice.services;

import java.util.List;

import gmc.project.connectversev3.learningservice.entities.ProjectEntity;
import gmc.project.connectversev3.learningservice.models.ProjectModel;

public interface ProjectsService {
	public ProjectEntity findById(String id);
	public List<ProjectModel> getAllValidprojects(Boolean isHidden);
}
