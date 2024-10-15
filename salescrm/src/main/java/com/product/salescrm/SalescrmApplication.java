package com.product.salescrm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com.product.salescrm", "com.speedment.jpastreamer"})
public class SalescrmApplication {

	public static void main(String[] args) {
		SpringApplication.run(SalescrmApplication.class, args);
	}

}
