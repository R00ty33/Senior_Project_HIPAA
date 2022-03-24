package com.HIPAA.SeniorProject.Controller;

import com.HIPAA.SeniorProject.Model.Orders;
import com.HIPAA.SeniorProject.Model.SignUpObject;
import com.HIPAA.SeniorProject.Service.OrderService;
import com.HIPAA.SeniorProject.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
/** Handles Request from Client, RESTful web service, creates JSON/XML response body */
@RequestMapping(path = "api/order")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/checkout")
    public void checkout(String jwt, String firstName, String lastName, String email, String address,
                         String city, String state, Integer zipcode, Integer cardNumber, Integer csv, String ecommerceCookie) throws Exception {
        orderService.checkout(jwt, firstName, lastName, email, address, city, state, zipcode, cardNumber, csv, ecommerceCookie);
    }

    @GetMapping("/orders")
    public List<Orders> checkout(String jwt) throws Exception {
        return orderService.getOrders(jwt);
    }


}
