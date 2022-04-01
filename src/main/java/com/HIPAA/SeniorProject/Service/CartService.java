package com.HIPAA.SeniorProject.Service;

import com.HIPAA.SeniorProject.Model.Cart;
import com.HIPAA.SeniorProject.Model.Inventory;
import com.HIPAA.SeniorProject.Repository.CartRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
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
            System.out.println("\n\n\n\n\n\n" + inventory.getCart().toString() + "\n" + cart.getInventory().toString() + "\n\n\n\n\n\n");
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

    public Collection<Inventory> getCart(String cookie) {
        Cart cart = cartRepository.getCartInventoryIds(cookie);
        Collection<Inventory> cartInventory = cart.getInventory();
        return cartInventory;
    }
}
