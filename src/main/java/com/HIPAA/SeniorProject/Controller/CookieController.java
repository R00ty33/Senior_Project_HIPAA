package com.HIPAA.SeniorProject.Controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.utility.RandomString;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(path = "/api")
@RequiredArgsConstructor
@Slf4j
public class CookieController {

    @GetMapping("/createCookies")
    public void createCookies(HttpServletResponse response) {
        log.info("Creating ecommerceCookie");
        String cookieValue = RandomString.make();
        Cookie ecommerceCookie = new Cookie("ecommerceCookie", cookieValue);
        ecommerceCookie.setMaxAge(86400); // 1 day
        ecommerceCookie.setSecure(true); // https
        ecommerceCookie.setHttpOnly(false);
        ecommerceCookie.setDomain("localhost");
        ecommerceCookie.setPath("/");
        response.addCookie(ecommerceCookie);
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Access-Control-Allow-Credentials", "true");
    }
}
