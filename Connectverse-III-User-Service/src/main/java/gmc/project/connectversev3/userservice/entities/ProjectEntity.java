package gmc.project.connectversev3.userservice.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import gmc.project.connectversev3.userservice.models.DifficultyLevel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

//@Data
@Getter
@Setter
@Entity
//@EqualsAndHashCode(exclude = {"personsRequested", "team", "skills"})
@Table(name = "projects")
public class ProjectEntity implements Serializable {

	private static final long serialVersionUID = 2744408353479015115L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String tittle;
	
	private String subTittle;

	private String description;
	
	@Lob
	private String detailedDescription;
	
	private Integer durationInMonths;
	
	@Enumerated(value = EnumType.STRING)
	private DifficultyLevel difficultyLevel;
	
	private Integer totalMembers;
	
	@Column(name = "is_enabled")
	private Boolean isHidden = true;
	
	private Boolean isCompleted = false;
	
	private LocalDate startedOn;
	
	@ManyToOne
	private EmployeeEntity projectAdmin;
	
	@ManyToMany(mappedBy = "projects")
	private Set<SkillEntity> skills = new HashSet<>();
	
	@ManyToMany(mappedBy = "requestedProjects")
	private Set<EmployeeEntity> personsRequested = new HashSet<>();
	
	@ManyToMany(mappedBy = "projects")
	private Set<EmployeeEntity> team = new HashSet<>();
	
	@OneToMany(mappedBy = "project")
	private Set<MessageEntity> messages = new HashSet<>();

}
