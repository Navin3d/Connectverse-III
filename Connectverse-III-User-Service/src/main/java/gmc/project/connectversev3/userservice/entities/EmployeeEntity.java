package gmc.project.connectversev3.userservice.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import gmc.project.connectversev3.userservice.models.Gender;
import gmc.project.connectversev3.userservice.models.WorkType;
import lombok.Data;

@Data
@Entity
@Table(name = "employees")
public class EmployeeEntity implements Serializable {
	
	private static final long serialVersionUID = -2116205916321723098L;
	
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@Column(name = "id")
	private String id;
	
	@Column(name = "first_name", nullable = false)
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "age")
	private Integer age = 18;
	
	@Enumerated(value = EnumType.STRING)
	private Gender gender;
	
	@Enumerated(value = EnumType.STRING)
	private WorkType prefferedWorkType;
	
	@Lob
	@Column(name = "cv_url")
	private String cvUrl;
	
	@Column(name = "aadhar_id")
	private String aadharId;

	@Column(name = "email")
	private String email;
	
	@Column(name = "mobile_number")
	private Long mobileNumber;
		
	@Column(name = "address")
	private String address;
	
	@Column(name = "location")
	private String location;
	
	@Column(name = "expected_wage_per_hour")
	private Integer expectedWagePerHour;
	
	@Column(name = "expected_working_hour_per_week")
	private Integer expectedWorkingHoursPerWeek;
	
	@Column(name = "is_technical_worler")
	private Boolean isTechnicalWorker = false;
	
	@Column(name = "is_occupied")
	private Boolean isOccupied = false;
	
	@Column(name = "is_blocked")
	private Boolean isBlocked = true;
	
	@ManyToOne(optional = true)
	private JobEntity job;
	
	@ManyToOne(optional = true)
	private HamletEntity hamlet;
	
}
