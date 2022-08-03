package gmc.project.connectversev3.learningservice.models;

import java.io.Serializable;

import lombok.Data;

@Data
public class SkillModel implements Serializable {

	private static final long serialVersionUID = 6269667485272414855L;
	
	private String id;
	
	private String imageUrl;
	
	private String name;
	
	private String subTitte;
	
	private String description;
	
}
