package com.HIPAA.SeniorProject.Repository;

import com.HIPAA.SeniorProject.Model.Cart;
import com.HIPAA.SeniorProject.Model.Orders;
import com.HIPAA.SeniorProject.Model.PHI;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
/** responsible for data access */
public interface OrderRepository extends JpaRepository<Orders, Long> {
    @Query("SELECT DISTINCT o from Orders o left join fetch o.order_inventory WHERE o.user = (SELECT u from User u WHERE u.email = ?1)")
    List<Orders> getOrders(String email);
}