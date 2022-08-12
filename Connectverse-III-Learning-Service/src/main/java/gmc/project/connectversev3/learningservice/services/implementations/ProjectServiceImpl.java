package gmc.project.connectversev3.learningservice.services.implementations;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gmc.project.connectversev3.learningservice.daos.EmployeeDao;
import gmc.project.connectversev3.learningservice.daos.ProjectDao;
import gmc.project.connectversev3.learningservice.daos.SkillDao;
import gmc.project.connectversev3.learningservice.entities.EmployeeEntity;
import gmc.project.connectversev3.learningservice.entities.ProjectEntity;
import gmc.project.connectversev3.learningservice.entities.SkillEntity;
import gmc.project.connectversev3.learningservice.exceptions.ProjectNotFoundException;
import gmc.project.connectversev3.learningservice.exceptions.ProjectRulesViolationException;
import gmc.project.connectversev3.learningservice.exceptions.SkillNotFoundException;
import gmc.project.connectversev3.learningservice.exceptions.UserNotFoundException;
import gmc.project.connectversev3.learningservice.models.ListEmployeeModel;
import gmc.project.connectversev3.learningservice.models.ListProjectModel;
import gmc.project.connectversev3.learningservice.models.MessageModel;
import gmc.project.connectversev3.learningservice.models.ProjectCreateOrUpdateModel;
import gmc.project.connectversev3.learningservice.models.ProjectModel;
import gmc.project.connectversev3.learningservice.models.SkillModel;
import gmc.project.connectversev3.learningservice.services.ProjectsService;

@Service
public class ProjectServiceImpl implements ProjectsService {

	@Autowired
	private EmployeeDao employeeDao;
	@Autowired
	private ProjectDao projectDao;
	@Autowired
	private SkillDao skillDao;

	@Override
	public ProjectEntity findById(Long id) {
		ProjectEntity returnValue = projectDao.findById(id).orElse(null);
		if (returnValue == null)
			throw new ProjectNotFoundException();
		return returnValue;
	}

	@Override
	public List<ListProjectModel> getAllValidprojects(Boolean isHidden) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		
		List<ListProjectModel> returnValue = new ArrayList<>();
		List<ProjectEntity> foundProjects = projectDao.findByIsHidden(isHidden);
		foundProjects.forEach(project -> {
			returnValue.add(modelMapper.map(project, ListProjectModel.class));	
		});
		return returnValue;
	}

	private Boolean isLegal = true;

	public Boolean getIsLegal() {
		return isLegal;
	}

	public void setIsLegal(Boolean isLegal) {
		this.isLegal = isLegal;
	}

	@Override
	public void saveProject(ProjectCreateOrUpdateModel projectCreateOrUpdateModel) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

		if (projectCreateOrUpdateModel.getId() == null) {
			ProjectEntity detached = modelMapper.map(projectCreateOrUpdateModel, ProjectEntity.class);
			EmployeeEntity projectAdmin = employeeDao.findById(projectCreateOrUpdateModel.getProjectAdminId())
					.orElse(null);
			if (projectAdmin == null)
				throw new UserNotFoundException();
			List<ProjectEntity> projects = projectDao.findByProjectAdmin(projectAdmin);
			for (ProjectEntity project : projects)
				if (!project.getIsCompleted())
					setIsLegal(false);
			if (!getIsLegal())
				throw new ProjectRulesViolationException("You are Already an Admin of unfinihsed Project");
			detached.setProjectAdmin(projectAdmin);
			Set<SkillEntity> skills = new HashSet<>();
			projectCreateOrUpdateModel.getSkillIds().forEach(skillId -> {
				SkillEntity foundSkill = skillDao.findById(skillId).orElse(null);
				if (foundSkill == null)
					throw new SkillNotFoundException(skillId);
				skills.add(foundSkill);
			});
			detached.setProjectAdmin(projectAdmin);
			detached.setIsCompleted(false);
			detached.setSkills(skills);
			detached.setIsHidden(true);
			detached.setStartedOn(LocalDate.now());
			ProjectEntity saved = projectDao.save(detached);
			projectAdmin.getProjects().add(saved);
			employeeDao.save(projectAdmin);
		} else {
			ProjectEntity detached = findById(projectCreateOrUpdateModel.getId());
			detached.setTittle(projectCreateOrUpdateModel.getTittle());
			detached.setSubTittle(projectCreateOrUpdateModel.getSubTittle());
			detached.setDescription(projectCreateOrUpdateModel.getDescription());
			detached.setDurationInMonths(projectCreateOrUpdateModel.getDurationInMonths());
			detached.setDifficultyLevel(projectCreateOrUpdateModel.getDifficultyLevel());
			detached.setTotalMembers(projectCreateOrUpdateModel.getTotalMembers());
			detached.setIsCompleted(projectCreateOrUpdateModel.getIsCompleted());
			Set<SkillEntity> skills = new HashSet<>();
			projectCreateOrUpdateModel.getSkillIds().forEach(skillId -> {
				SkillEntity foundSkill = skillDao.findById(skillId).orElse(null);
				if (foundSkill == null)
					throw new SkillNotFoundException(skillId);
				skills.add(foundSkill);
			});
			detached.setSkills(skills);
			projectDao.save(detached);
		}
	}

	@Override
	public void deleteAllProjects() {
		projectDao.deleteAll();	
	}

	@Override
	public ProjectModel findOneProject(Long projectId) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		
		ProjectEntity foundProject = findById(projectId);		
		ProjectModel returnValue =  new ProjectModel();
		returnValue.setId(projectId);
		returnValue.setTittle(foundProject.getTittle());
		returnValue.setSubTittle(foundProject.getSubTittle());
		returnValue.setDescription(foundProject.getDescription());
		returnValue.setDetailedDescription(foundProject.getDetailedDescription());
		returnValue.setDurationInMonths(foundProject.getDurationInMonths());
		returnValue.setDifficultyLevel(foundProject.getDifficultyLevel());
		returnValue.setTotalMembers(foundProject.getTotalMembers());
		returnValue.setIsCompleted(foundProject.getIsCompleted());
		returnValue.setStartedOn(foundProject.getStartedOn());
		returnValue.setProjectAdminId(foundProject.getProjectAdmin().getId());
		returnValue.setProjectAdminName(foundProject.getProjectAdmin().getFirstName());
		
		List<SkillModel> projectSkills = new ArrayList<>();
		foundProject.getSkills().forEach(skill -> {
			SkillModel convSkill = modelMapper.map(skill, SkillModel.class);
			projectSkills.add(convSkill);
		});
		returnValue.setSkills(projectSkills);
		
		List<ListEmployeeModel> joiningRequests = new ArrayList<>();
		foundProject.getPersonsRequested().forEach(person -> {
			ListEmployeeModel converted = new ListEmployeeModel();
			converted.setId(person.getId());
			converted.setFirstName(person.getFirstName());
			joiningRequests.add(converted);
		});		
		returnValue.setJoiningRequests(joiningRequests);
		
		List<ListEmployeeModel> team = new ArrayList<>();
		foundProject.getTeam().forEach(person -> {
			ListEmployeeModel converted = new ListEmployeeModel();
			converted.setId(person.getId());
			converted.setFirstName(person.getFirstName());
			team.add(converted);
		});		
		returnValue.setTeam(team);
		
		List<MessageModel> projectMessages = new ArrayList<>();
		foundProject.getMessages().forEach(msg -> {
			MessageModel msgMd = modelMapper.map(msg, MessageModel.class);
			projectMessages.add(msgMd);
		});
		returnValue.setMessages(projectMessages);
		
		return returnValue;
	}

}
