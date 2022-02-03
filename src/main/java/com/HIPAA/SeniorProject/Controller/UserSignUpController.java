package com.HIPAA.SeniorProject.Controller;

import com.HIPAA.SeniorProject.Model.SignUpObject;
import com.HIPAA.SeniorProject.Model.User;
import com.HIPAA.SeniorProject.Model.UserCredentials;
import com.HIPAA.SeniorProject.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
/** Handles Request from Client, RESTful web service, creates JSON/XML response body */
@RequestMapping(path = "api")
@RequiredArgsConstructor
public class UserSignUpController {

    private final UserService userService;

    @PostMapping("/SignUp")
    public void registerNewUser(@RequestBody SignUpObject signUpObject) {
        userService.addNewUser(signUpObject);
    }
}
