package gmc.project.connectversev3.jobservice.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Data;

@Entity
@Data
@Table(name = "companies")
public class CompanyEntity implements Serializable {

	private static final long serialVersionUID = 4340008808212377674L;
	
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;
	
	private String name;
	
	private String imageUrl;
	
	private String noOfEmployees;
	
	private String description;
	
	@OneToOne(mappedBy = "company")
	private EmployerEntity employer;

}
