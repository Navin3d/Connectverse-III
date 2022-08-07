package gmc.project.connectversev3.learningservice.services.implementations;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gmc.project.connectversev3.learningservice.daos.ProjectDao;
import gmc.project.connectversev3.learningservice.entities.ProjectEntity;
import gmc.project.connectversev3.learningservice.exceptions.ProductNotFoundException;
import gmc.project.connectversev3.learningservice.models.ProjectModel;
import gmc.project.connectversev3.learningservice.services.ProjectsService;

@Service
public class ProjectServiceImpl implements ProjectsService {
	
	@Autowired
	private ProjectDao projectDao;

	@Override
	public ProjectEntity findById(String id) {
		ProjectEntity returnValue = projectDao.findById(id).orElse(null);
		if(returnValue == null) throw new ProductNotFoundException();
		return returnValue;
	}

	@Override
	public List<ProjectModel> getAllValidprojects(Boolean isHidden) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<ProjectModel> returnValue = new ArrayList<>();
		projectDao.findByIsHidden(isHidden).stream().iterator()
					.forEachRemaining(project -> {
						returnValue.add(modelMapper.map(project, ProjectModel.class));
						});
		
		return returnValue;
	}

	@Override
	public void saveProject(ProjectEntity project) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		if(project.getId() == null) {
			
		}
	}

}
