package gmc.project.connectversev3.learningservice.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import lombok.Data;

@Data
public class ProjectModel implements Serializable {
	
	private static final long serialVersionUID = 6394745010227075586L;
	
	private String id;
	
	private String tittle;
	
	private String subTittle;
	
	private String detailedDescription;
	
	private Integer durationInMonths;
	
	private ProjectType projectType;
	
	private Integer totalMembers;
	
	private Set<SkillModel> projects = new HashSet<>();


}
