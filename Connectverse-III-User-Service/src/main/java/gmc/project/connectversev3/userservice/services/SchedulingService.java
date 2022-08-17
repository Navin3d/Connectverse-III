package gmc.project.connectversev3.userservice.services;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class SchedulingService {
	@Scheduled(fixedDelay = 60000)
	public void fetchAndAssignJob() {
		log.error("One Min...");
	}
}
