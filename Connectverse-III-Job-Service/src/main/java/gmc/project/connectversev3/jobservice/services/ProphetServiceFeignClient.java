package gmc.project.connectversev3.jobservice.services;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import gmc.project.connectversev3.jobservice.shared.MailingModel;

@FeignClient("Connectverse-Prophet-Service")
public interface ProphetServiceFeignClient {
	
	@PostMapping("/mail")
	public ResponseEntity<String> sendMail(@RequestBody MailingModel mailingModel);

}
