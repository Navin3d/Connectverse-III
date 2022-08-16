package gmc.project.connectversev3.jobservice.services;

import java.util.List;

import gmc.project.connectversev3.jobservice.entities.JobEntity;
import gmc.project.connectversev3.jobservice.models.JobCreateOrUpdateModel;
import gmc.project.connectversev3.jobservice.models.JobModel;
import gmc.project.connectversev3.jobservice.models.ListJobModel;

public interface JobService {
	public JobEntity findOne(Long jobId);
	public List<ListJobModel> getAllJobs();
	public JobModel getAJob(Long jobId);
	public void applyForJob(Long jobId, String employeeId);
	public void acceptJoiningRequest(Long jobId, String employeeId);
	public void rejectJoiningRequest(Long jobId, String employeeId);
	public void createOrUpdateJob(JobCreateOrUpdateModel jobCreateOrUpdateModel);
}
