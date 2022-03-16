package com.HIPAA.SeniorProject.Controller;

import com.HIPAA.SeniorProject.Service.CookieService;
import com.HIPAA.SeniorProject.Service.UserService;
import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(path = "/api")
@Slf4j
public class CookieController {

    private final UserService userService;

    private final CookieService cookieService;

    @Autowired
    public CookieController(UserService userService, CookieService cookieService) {
        this.userService = userService;
        this.cookieService = cookieService;
    }

    @GetMapping("/createCookies")
    public void createCookies(HttpServletResponse response) {
        cookieService.createRandomCookie(response);
    }

    @PostMapping("/updateEcommerceCookie")
    public void updateEcommerceCookie(String cookie, String jwt) throws Exception {
        userService.updateEcommerceCookie(cookie, jwt);
    }

    @GetMapping("/getEcommerceCookie")
    public void getEcommerceCookie(String jwt, HttpServletResponse response) throws Exception {
        userService.getEcommerceCookieIfExists(jwt, response);
    }
}
