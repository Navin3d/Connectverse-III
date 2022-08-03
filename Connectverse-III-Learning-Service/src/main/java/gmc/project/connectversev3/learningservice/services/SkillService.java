package gmc.project.connectversev3.learningservice.services;

import java.util.List;

import gmc.project.connectversev3.learningservice.entities.SkillEntity;
import gmc.project.connectversev3.learningservice.models.SkillModel;

public interface SkillService {
	public SkillEntity findById(String id);
	public List<SkillModel> findAllSkills();
	public SkillModel findASkill(String id);
	public void saveSkill(SkillModel skillModel);
}
