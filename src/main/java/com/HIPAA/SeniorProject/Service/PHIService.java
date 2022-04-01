package com.HIPAA.SeniorProject.Service;

import com.HIPAA.SeniorProject.Model.PHI;
import com.HIPAA.SeniorProject.Model.PHIObject;
import com.HIPAA.SeniorProject.Model.User;
import com.HIPAA.SeniorProject.Repository.IPHIObject;
import com.HIPAA.SeniorProject.Repository.PHIRepository;
import com.HIPAA.SeniorProject.Repository.UserRepository;
import com.auth0.jwt.JWT;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.codec.binary.Base64;
import org.apache.tomcat.util.codec.binary.StringUtils;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.security.crypto.encrypt.TextEncryptor;
import org.springframework.security.crypto.keygen.KeyGenerators;
import org.springframework.stereotype.Service;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.PBEKeySpec;
import javax.transaction.Transactional;
import java.nio.charset.StandardCharsets;
import java.security.spec.KeySpec;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

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
        IPHIObject phi = phiRepository.findPHIByEmail(email);
        if (phi != null) {
            return true;
        }
        else {
            return false;
        }
    }

    public List<PHIObject> getAllPHI(String jwt) throws Exception {
        userService.authorizationByJWT(jwt);
        String role = JWT.decode(jwt).getClaim("ROLE").asString();
        List<PHIObject> PHIList = new ArrayList<>();
        final String password = "secret";
        if (!role.equalsIgnoreCase("[ROLE_ADMIN]")) {
            log.info("User does not have ROLE_ADMIN to access PHI");
            // throw err
        } else {
            for (int i=0; i<phiRepository.findAll().size(); i++) {
                String email = phiRepository.findAll().get(i).getUser().getEmail();
                IPHIObject tmp = phiRepository.findPHIByEmail(email);
                System.out.println(tmp.toString());
                TextEncryptor decryptor = Encryptors.text(password, tmp.getSalt());
                PHIObject obj = new PHIObject(tmp.getFirstName(), tmp.getLastName(), decryptor.decrypt(tmp.getAge()), decryptor.decrypt(tmp.getHeight()), decryptor.decrypt(tmp.getWeight()));
                PHIList.add(obj);
            }
        }
        return PHIList;
    }
}

