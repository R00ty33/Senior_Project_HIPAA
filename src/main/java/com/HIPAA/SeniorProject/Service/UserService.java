package com.HIPAA.SeniorProject.Service;


import com.HIPAA.SeniorProject.Model.*;
import com.HIPAA.SeniorProject.Repository.RolesRepository;
import com.HIPAA.SeniorProject.Repository.UserCredentialsRepository;
import com.HIPAA.SeniorProject.Repository.UserRepository;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Verification;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Service @Transactional @Slf4j @RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserCredentialsRepository userCredentialsRepository;
    private final RolesRepository rolesRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        log.info(email);
        User user = userRepository.findByEmail(email);
        if (user == null) {
            log.error("User not found in the DB");
            throw new UsernameNotFoundException("User not found in the DB");
        } else {
            log.info("User found in the database: {}", email);
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole().getName()));

        return new org.springframework.security.core.userdetails.User(user.getEmail(), userCredentialsRepository.findUsersPassword(user.getEmail()), authorities);
    }

    public void addNewUser(SignUpObject signUpObject) {
        log.info("Adding new user to DB");
        User user = userRepository.findUserByEmail(signUpObject.getEmail());
        if (user != null) {
            log.info("Users email: {} already found in DB", signUpObject.getEmail());
            throw new IllegalStateException("Email Taken");
        }
        else {
            Role role = new Role();
            role.setName("ROLE_USER");
            User newUser = new User(signUpObject.getFirstName(), signUpObject.getLastName(), signUpObject.getEmail(), new Date());
            newUser.setRole(role);
            System.out.println(signUpObject.getFirstName());
            UserCredentials newUserCredentials = new UserCredentials(signUpObject.getPassword(), newUser);
            saveUserCredentials(newUserCredentials);
            log.info("New user successfully added to the DB");
        }
    }

    public void saveUserCredentials(UserCredentials userCredentials) {
        userCredentials.setPassword(passwordEncoder.encode(userCredentials.getPassword()));
        userCredentialsRepository.save(userCredentials);
        /** Encode()
         * BCrypt will internally generate a random salt.
         * It will store the salt inside the hash value itself (The first 22 characters decode to a 16-byte value for the salt.) */
    }

    public String authorizationByJWT(String jwt) throws Exception {
        String email = JWT.decode(jwt).getSubject();
        User user = userRepository.findUserByEmail(email);
        if (user == null) {
            log.error("User not found in the DB");
            throw new UsernameNotFoundException("User not found in the DB");
        } else {
            log.info("User found in the database: {}", email);
            try {
                /* verify token */
                Algorithm algorithm = Algorithm.HMAC256("secret");
                Verification verifier = JWT.require(algorithm);
                verifier.build().verify(jwt);
                log.info("Authorized");
                return email;
            } catch (Exception e) {
                System.out.println("error: " + e);
                log.info("Unauthorized");
                throw new Exception("Unauthorized");
            }
        }
    }

    public void addRoleToUser(String email, String roleName) {
        User user = userRepository.findUserByEmail(email);
        Role role = new Role();
        role.setName(roleName);
        user.setRole(role);
    }
}
