package com.HIPAA.SeniorProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class HipaaApplication {

	public static void main(String[] args) {
		SpringApplication.run(HipaaApplication.class, args);
	}

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	/** BCrypt will internally generate a random salt.
	 * It will store the salt inside the hash value itself (The first 22 characters decode to a 16-byte value for the salt.) */
}
