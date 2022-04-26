package com.HIPAA.SeniorProject.Repository;

import java.util.Arrays;
import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import com.HIPAA.SeniorProject.Security.LoginAttemptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("userDetailsService")
@Transactional
public class MyUserDetailsService implements UserDetailsService {
 
    @Autowired
    private UserRepository userRepository;
 
    @Autowired
    private RolesRepository rolesRepository;
 
    @Autowired
    private LoginAttemptService loginAttemptService;
 
    @Autowired
    private HttpServletRequest request;
 
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        String ip = getClientIP();
        if (loginAttemptService.isBlocked(ip)) {
            throw new RuntimeException("blocked");
        }
 
        try {
            User user = userRepository.findByEmail(email);
            if (user == null) {
                return new org.springframework.security.core.userdetails.User(
                  " ", " ", true, true, true, true, 
                  getAuthorities(Arrays.asList(rolesRepository.findByName("ROLE_USER"))));
            }
 
            return new org.springframework.security.core.userdetails.User(
              user.getEmail(), user.getPassword(), user.isEnabled(), true, true, true, 
              getAuthorities(user.getRoles()));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private String getClientIP() {
        String xfHeader = request.getHeader("X-Forwarded-For");
        if (xfHeader == null){
            return request.getRemoteAddr();
        }
        return xfHeader.split(",")[0];
    }
}