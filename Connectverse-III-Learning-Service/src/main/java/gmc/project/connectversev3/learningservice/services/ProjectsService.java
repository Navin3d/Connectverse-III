package gmc.project.connectversev3.learningservice.services;

import java.util.List;

import gmc.project.connectversev3.learningservice.entities.ProjectEntity;
import gmc.project.connectversev3.learningservice.models.ProjectCreateOrUpdateModel;
import gmc.project.connectversev3.learningservice.models.ProjectModel;
import gmc.project.connectversev3.learningservice.models.ListProjectModel;

public interface ProjectsService {
	public ProjectEntity findById(Long id);
	public ProjectModel findOneProject(Long projectId);
	public List<ListProjectModel> getAllValidprojects(Boolean isHidden);
	public void saveProject(ProjectCreateOrUpdateModel projectCreateOrUpdateModel);
	public void deleteAllProjects();
}
