package gmc.project.connectversev3.authservice.entities;

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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import gmc.project.connectversev3.authservice.models.DifficultyLevel;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
//@Getter
//@Setter
@Entity
//@EqualsAndHashCode(onlyExplicitlyIncluded = true) // important
@EqualsAndHashCode(exclude = {"personsRequested", "team", "skills", "projectAdmin"})
@Table(name = "projects")
public class ProjectEntity implements Serializable {

	private static final long serialVersionUID = 2744408353479015115L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "tittle")
	private String tittle;
	
	@Column(name = "sub_tittle")
	private String subTittle;

	@Column(name = "description")
	private String description;
	
	@Lob
	@Column(name = "detailed_description")
	private String detailedDescription;
	
	@Column(name = "duration_in_months")
	private Integer durationInMonths;
	
	@Enumerated(value = EnumType.STRING)
	private DifficultyLevel difficultyLevel;
	
	@Column(name = "total_members")
	private Integer totalMembers;
	
	@Column(name = "is_hidden")
	private Boolean isHidden;
	
	@Column(name = "is_completed")
	private Boolean isCompleted;
	
	@Column(name = "started_on")
	private LocalDate startedOn;
	
	@OneToOne(targetEntity = EmployeeEntity.class)
	private EmployeeEntity projectAdmin;
	
	@ManyToMany(targetEntity = SkillEntity.class)
	@JoinTable(name = "project_skills", 
		joinColumns = @JoinColumn(name = "project_id"),
		inverseJoinColumns = @JoinColumn(name = "skill_id")
	)
	private Set<SkillEntity> skills;
	
	@ManyToMany(mappedBy = "requestedProjects", targetEntity = EmployeeEntity.class)
	private Set<EmployeeEntity> personsRequested;
	
	@ManyToMany(mappedBy = "projects", targetEntity = EmployeeEntity.class)
	private Set<EmployeeEntity> team;
	
	@OneToMany(mappedBy = "project")
	private Set<MessageEntity> messages;
	
	public ProjectEntity() {
		super();
		this.skills = new HashSet<>();
		this.personsRequested = new HashSet<>();
		this.team = new HashSet<>();
		this.messages = new HashSet<>();
	}

}