package com.HIPAA.SeniorProject.Config;

import com.HIPAA.SeniorProject.Model.Role;
import com.HIPAA.SeniorProject.Model.SignUpObject;
import com.HIPAA.SeniorProject.Model.User;
import com.HIPAA.SeniorProject.Model.UserCredentials;
import com.HIPAA.SeniorProject.Repository.InventoryRepository;
import com.HIPAA.SeniorProject.Repository.UserRepository;
import com.HIPAA.SeniorProject.Service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Date;

@Configuration
public class UserConfig {
    @Bean
    CommandLineRunner commandLineRunner2(UserService userService) {
        return args -> {
            SignUpObject signUpObject = new SignUpObject(
                    "Admin",
                    "Admin",
                    "admin@gmail.com",
                    new Date(System.currentTimeMillis()),
                    "password"

            );
        userService.addNewUser(signUpObject);
        };
    }

}
