package com.HIPAA.SeniorProject.Service;

import com.HIPAA.SeniorProject.Model.Cart;
import com.HIPAA.SeniorProject.Model.Inventory;
import com.HIPAA.SeniorProject.Repository.CartRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@Service @Transactional
@Slf4j @RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final UserService userService;
    private final InventoryService inventoryService;

    public void addItem(String product_name, String cart_cookie) {
        if (cartRepository.findByCookie(cart_cookie) == null) {
            Cart cart = new Cart(cart_cookie);
            Inventory inventory = inventoryService.getProductByName(product_name);
            cart.setInventory(Set.of(inventory));
            inventory.getCart().add(cart);
            cartRepository.save(cart);
        }
        else {
            Cart cart = cartRepository.findByCookie(cart_cookie);
            System.out.println(inventoryService.getProductByName(product_name));
            Inventory inventory = inventoryService.getProductByName(product_name);
            cart.getInventory().add(inventory);
            inventory.getCart().add(cart);
            cartRepository.save(cart);
        }
    }

    public void deleteItem(String product_name, String cart_cookie) {
        if (cartRepository.findByCookie(cart_cookie) == null) {
            // throw error
        }
        else {
            Cart cart = cartRepository.findByCookie(cart_cookie);
            System.out.println(inventoryService.getProductByName(product_name));
            Inventory inventory = inventoryService.getProductByName(product_name);
            cart.getInventory().remove(inventory);
            inventory.getCart().add(cart);
            cartRepository.save(cart);
        }
    }

    public Set<Inventory> getCart(String cookie) {
        Cart cart = cartRepository.getCartInventoryIds(cookie);
        Set<Inventory> cartInventory = cart.getInventory();
        return cartInventory;
    }
}
