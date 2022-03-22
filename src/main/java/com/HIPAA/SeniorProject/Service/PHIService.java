package com.HIPAA.SeniorProject.Service;

import com.HIPAA.SeniorProject.Model.PHI;
import com.HIPAA.SeniorProject.Model.User;
import com.HIPAA.SeniorProject.Repository.PHIRepository;
import com.HIPAA.SeniorProject.Repository.UserRepository;
import com.auth0.jwt.JWT;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.security.crypto.encrypt.TextEncryptor;
import org.springframework.security.crypto.keygen.KeyGenerators;
import org.springframework.stereotype.Service;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.PBEKeySpec;
import javax.transaction.Transactional;
import java.security.spec.KeySpec;

@Service @Transactional
@Slf4j @RequiredArgsConstructor
public class PHIService {

    private final PHIRepository phiRepository;
    private final UserRepository userRepository;
    private final UserService userService;

    public void addPHI(String jwt, String age, String weight, String height) throws Exception {
        String email = userService.authorizationByJWT(jwt);
        if (email != null && !doesPHIExist(jwt)) {
            final String password = "secret";
            final String salt = KeyGenerators.string().generateKey(); //AES 256
            TextEncryptor encryptor = Encryptors.text(password, salt);
            System.out.println("Salt: \"" + salt + "\"");
            //TextEncryptor decryptor = Encryptors.text(password, salt);
            //String decryptedText = decryptor.decrypt(encryptedText);
            User user = userRepository.findUserByEmail(email);
            PHI phi = new PHI(encryptor.encrypt(age), encryptor.encrypt(weight), encryptor.encrypt(height), salt, user);
            phiRepository.save(phi);
        }
        /**
         * else {
         *    updatePHI
         * }
         */
    }

    public boolean doesPHIExist(String jwt) throws Exception {
        String email = userService.authorizationByJWT(jwt);
        PHI phi = phiRepository.findPHIByEmail(email);
        if (phi != null) {
            return true;
        }
        else {
            return false;
        }
    }
}
