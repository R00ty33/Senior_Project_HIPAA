package com.HIPAA.SeniorProject.Repository;

import com.HIPAA.SeniorProject.Model.Cart;
import com.HIPAA.SeniorProject.Model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    @Query("SELECT s FROM Cart s WHERE s.cart_cookie = ?1")
    Cart findByCookie(String cart_cookie);

}
