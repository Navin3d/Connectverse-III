package gmc.project.connectversev3.userservice.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import gmc.project.connectversev3.userservice.models.WorkType;
import lombok.Data;

@Data
@Entity
@Table(name = "jobs")
public class JobEntity implements Serializable {
	
	private static final long serialVersionUID = -8048295257824581897L;

	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@Column(name = "id")
	private String id;
	
	@Column(name = "tittle")
	private String tittle;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "no_of_days")
	private Integer noOfDays = 10;
	
	@Column(name = "working_hours_per_day")
	private Integer workHoursPerDay = 8;
	
	@Column(name = "pay_per_hour")
	private Integer payPerHour = 100;
	
	@Column(name = "location")
	private String location;
	
	@Enumerated(value = EnumType.STRING)
	private WorkType jobType;
	
	@Column(name = "required_workers")
	private Integer requiredWorkers = 10;
	
	@Column(name = "work_started")
	private Boolean workStarted = false;
	
	@Column(name = "is_blocked")
	private Boolean isBlocked = false;
	
	@Column(name = "isHamletJob")
	private Boolean isHamletJob = false;
	
	@OneToOne(mappedBy = "job", optional = true)
	private HamletEntity hamlet;
	
	@OneToMany(mappedBy = "job")
	private Set<EmployeeEntity> employees = new HashSet<>();
	
	@ManyToOne
	private EmployerEntity employer;

}
