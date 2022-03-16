package com.HIPAA.SeniorProject.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.utility.RandomString;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class CookieService {

    public void createRandomCookie(HttpServletResponse response) {
        log.info("Creating ecommerceCookie");
        String cookieValue = RandomString.make();
        Cookie ecommerceCookie = new Cookie("ecommerceCookie", cookieValue);
        ecommerceCookie.setMaxAge(86400); // 1 day
        ecommerceCookie.setSecure(true); // https
        ecommerceCookie.setHttpOnly(false);
        ecommerceCookie.setDomain("localhost");
        ecommerceCookie.setPath("/");
        response.addCookie(ecommerceCookie);
        response.setHeader("Access-Control-Allow-Origin", "https://localhost:3000");
        response.setHeader("Access-Control-Allow-Credentials", "true");
    }

    public void createCookie(HttpServletResponse response, String cookieValue) {
        log.info("Creating ecommerceCookie");
        Cookie ecommerceCookie = new Cookie("ecommerceCookie", cookieValue);
        ecommerceCookie.setMaxAge(86400); // 1 day
        ecommerceCookie.setSecure(true); // https
        ecommerceCookie.setHttpOnly(false);
        ecommerceCookie.setDomain("localhost");
        ecommerceCookie.setPath("/");
        response.addCookie(ecommerceCookie);
        response.setHeader("Access-Control-Allow-Origin", "https://localhost:3000");
        response.setHeader("Access-Control-Allow-Credentials", "true");
    }
}
