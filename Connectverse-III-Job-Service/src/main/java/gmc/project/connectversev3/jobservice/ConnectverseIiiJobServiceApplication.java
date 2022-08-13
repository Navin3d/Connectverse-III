package gmc.project.connectversev3.jobservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class ConnectverseIiiJobServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConnectverseIiiJobServiceApplication.class, args);
	}

}
