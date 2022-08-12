package gmc.project.connectversev3.learningservice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gmc.project.connectversev3.learningservice.models.ProjectCreateOrUpdateModel;
import gmc.project.connectversev3.learningservice.models.ProjectModel;
import gmc.project.connectversev3.learningservice.models.ListProjectModel;
import gmc.project.connectversev3.learningservice.services.ProjectsService;

@RestController
@RequestMapping(path = "/project")
public class ProjectController {

	@Autowired
	private ProjectsService projectsService;
	
	@GetMapping
	private ResponseEntity<List<ListProjectModel>> getAllProjects() {
		List<ListProjectModel> returnValue = projectsService.getAllValidprojects(false);
		return ResponseEntity.status(HttpStatus.OK).body(returnValue);
	}
	
	@GetMapping(path = "/{projectId}")
	private ResponseEntity<ProjectModel> getAProject(@PathVariable String projectId) {
		ProjectModel returnValue = projectsService.findOneProject(Long.valueOf(projectId));
		return ResponseEntity.status(HttpStatus.OK).body(returnValue);
	}
	
	@PostMapping
	private ResponseEntity<String> createOrUpdateProject(@RequestBody ProjectCreateOrUpdateModel projectCreateOrUpdateModel) {
		projectsService.saveProject(projectCreateOrUpdateModel);
		return ResponseEntity.status(HttpStatus.OK).body("Project Saved Successfully...");
	}
	
	@DeleteMapping
	private ResponseEntity<String> deleteAllProjects() {
		projectsService.deleteAllProjects();
		return ResponseEntity.status(HttpStatus.OK).body("Project Deleted Successfully...");
	}

}
