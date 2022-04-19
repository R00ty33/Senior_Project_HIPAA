package com.HIPAA.SeniorProject.Service;

import com.HIPAA.SeniorProject.Model.Inventory;
import com.HIPAA.SeniorProject.Model.Orders;
import com.HIPAA.SeniorProject.Model.PHI;
import com.HIPAA.SeniorProject.Model.User;
import com.HIPAA.SeniorProject.Repository.OrderRepository;
import com.HIPAA.SeniorProject.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.bridge.Message;
import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.security.crypto.encrypt.TextEncryptor;
import org.springframework.security.crypto.keygen.KeyGenerators;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final UserService userService;
    private final CartService cartService;
    private final InventoryService inventoryService;

    public String checkout(String jwt, String firstName, String lastName, String email, String address,
                         String city, String state, Integer zipcode, String cardNumber, Integer csv, String date, String ecommerceCookie) throws Exception {
        log.info("Checkout processing:");
        String userEmail = userService.authorizationByJWT(jwt);
        String body = jwt + lastName + email + ecommerceCookie;
        byte[] bytesOfMessages = body.getBytes(StandardCharsets.UTF_8);
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] theMD5digest = md.digest(bytesOfMessages);
        User user = userRepository.findUserByEmail(userEmail);
        Set<Inventory> inventory = new HashSet<Inventory>(cartService.getCart(ecommerceCookie));
        if (user == null || inventory == null) throw new Exception("User || Inventory is  null");
        Orders orders = new Orders(theMD5digest.toString(), inventory, user);
        orderRepository.save(orders);
        userService.updateEcommerceCookie(null, jwt);
        final String password = "secret";
        final String salt = KeyGenerators.string().generateKey(); //AES 256
        TextEncryptor encryptor = Encryptors.text(password, salt);
        System.out.println("Salt: \"" + salt + "\"");
        userRepository.updateUserCreditCardNo(encryptor.encrypt(cardNumber), salt, user);
        log.info("Checkout Finished:");
        return theMD5digest.toString();
    }

    public List<Orders> getOrders(String jwt) throws Exception {
        String email = userService.authorizationByJWT(jwt);
        List<Orders> orders = orderRepository.getOrders(email);
        System.out.println("\n\n\n\n\n\n\n" + orders + "\n\n\n\n");
        return orders;
    }
}
