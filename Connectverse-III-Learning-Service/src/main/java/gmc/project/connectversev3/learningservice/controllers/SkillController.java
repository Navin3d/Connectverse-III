package gmc.project.connectversev3.learningservice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gmc.project.connectversev3.learningservice.models.SkillModel;
import gmc.project.connectversev3.learningservice.services.SkillService;

@RestController
@RequestMapping(path = "/skill")
public class SkillController {
	
	@Autowired
	private SkillService skillService;
	
	@GetMapping
	private ResponseEntity<List<SkillModel>> getAllSkills() {
		List<SkillModel> returnValue = skillService.findAllSkills();
		return ResponseEntity.status(HttpStatus.OK).body(returnValue);
	}
	
	@PostMapping
	private ResponseEntity<String> saveSkills(@RequestBody SkillModel skillModel) {
		skillService.saveSkill(skillModel);
		return ResponseEntity.status(HttpStatus.OK).body("Skill Successfully saved...");
	}

}
