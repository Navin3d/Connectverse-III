package gmc.project.connectversev3.learningservice.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import lombok.Data;

@Data
public class SkillModel implements Serializable {

	private static final long serialVersionUID = 6269667485272414855L;
	
	private String id;
	
	private String tittle;
	
	private String subTittle;
	
	private String skillsGained;
	
	private String provider;
	
	private String jobTittles;
	
	private String preRequirements;
	
	private String averageTimeToFinishCourse;
	
	private String jobsCanBeApplied;
	
	private String roadMapUrl;
	
	private String youtubeUrl;
	
	private String useFulLink;
	
	private String imageUrl;
	
	private Boolean isHidden;
	
	private Set<CourseContentModel> courseContents = new HashSet<>();
	
}
