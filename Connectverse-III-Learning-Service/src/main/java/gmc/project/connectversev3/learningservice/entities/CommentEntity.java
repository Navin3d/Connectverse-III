package gmc.project.connectversev3.learningservice.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Data;

@Table(name = "comments")
@Entity
@Data
public class CommentEntity implements Serializable {

	private static final long serialVersionUID = -4949418123705019550L;
	
	@Id
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@GeneratedValue(generator = "uuid")
	private String id;
	
	private Integer likes;
	
	private Integer reports;
	
	private String comment;
	
	private String commentedBy;
	
	@OneToMany
	private Set<ReplyEntity> replies = new HashSet<>();

}
