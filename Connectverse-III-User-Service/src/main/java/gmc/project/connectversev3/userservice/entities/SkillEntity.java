package gmc.project.connectversev3.userservice.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Data;


@Data
@Entity
@Table(name = "skills")
public class SkillEntity implements Serializable {

	private static final long serialVersionUID = -1050686383563171113L;
	
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;
	
	@Lob
	private String imageUrl;
	
	private String name;
	
	private String subTitte;
	
	private String description;
	
	@Lob
	private String roadMapUrl;
	
	@ManyToMany
	private Set<ProjectEntity> projects = new HashSet<>();

}
