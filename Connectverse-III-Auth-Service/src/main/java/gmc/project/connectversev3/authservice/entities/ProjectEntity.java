package gmc.project.connectversev3.authservice.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import gmc.project.connectversev3.authservice.models.ProjectType;
import lombok.Data;

@Data
@Entity
@Table(name = "projects")
public class ProjectEntity implements Serializable {

	private static final long serialVersionUID = 2744408353479015115L;
	
	@Id
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@GeneratedValue(generator = "uuid")
	private String id;
	
	private String tittle;
	
	private String subTittle;
	
	@Lob
	private String detailedDescription;
	
	private Integer durationInMonths;
	
	@Enumerated(value = EnumType.STRING)
	private ProjectType projectType;
	
	private Integer totalMembers;
	
	@Column(name = "is_enabled")
	private Boolean isHidden = true;
	
	@ManyToMany(mappedBy = "projects")
	private Set<SkillEntity> skills = new HashSet<>();

}
