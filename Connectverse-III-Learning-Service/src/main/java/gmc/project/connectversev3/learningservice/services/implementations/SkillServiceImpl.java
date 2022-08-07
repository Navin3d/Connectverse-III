package gmc.project.connectversev3.learningservice.services.implementations;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gmc.project.connectversev3.learningservice.daos.SkillDao;
import gmc.project.connectversev3.learningservice.entities.SkillEntity;
import gmc.project.connectversev3.learningservice.exceptions.SkillNotFoundException;
import gmc.project.connectversev3.learningservice.models.SkillModel;
import gmc.project.connectversev3.learningservice.services.SkillService;

@Service
public class SkillServiceImpl implements SkillService {

	@Autowired
	private SkillDao skillDao;

	@Override
	public SkillEntity findById(String id) {
		SkillEntity foundSkill = skillDao.findById(id).orElse(null);
		if (foundSkill == null)
			throw new SkillNotFoundException("Skill id: " + id);
		return foundSkill;
	}

	@Override
	public List<SkillModel> findAllSkills() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<SkillModel> returnValue = new ArrayList<>();
		skillDao.findAll().stream().iterator().forEachRemaining(skill -> {
			returnValue.add(modelMapper.map(skill, SkillModel.class));
		});
		return returnValue;
	}

	@Override
	public SkillModel findASkill(String id) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		SkillModel skillModel = modelMapper.map(findById(id), SkillModel.class);
		return skillModel;
	}

	@Override
	public void saveSkill(SkillModel skillModel) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		if (skillModel.getId() == null) {
			SkillEntity detached = modelMapper.map(skillModel, SkillEntity.class);
			SkillEntity saved = skillDao.save(detached);
			saved.getCourseContents().forEach(courseContents -> {
				courseContents.setSkill(saved);
			});
			skillDao.save(saved);
		} else {
			SkillEntity existing = findById(skillModel.getId());
			existing.setTittle(skillModel.getTittle());
			existing.setSubTittle(skillModel.getSubTittle());
			existing.setSkillsGained(skillModel.getSkillsGained());
			existing.setProvider(skillModel.getProvider());
			existing.setJobTittles(skillModel.getJobTittles());
			existing.setPreRequirements(skillModel.getPreRequirements());
			existing.setAverageTimeToFinishCourse(skillModel.getAverageTimeToFinishCourse());
			existing.setJobsCanBeApplied(skillModel.getJobsCanBeApplied());
			existing.setImageUrl(skillModel.getImageUrl());
			existing.setIsHidden(skillModel.getIsHidden());
			skillDao.save(existing);
		}
	}

}
