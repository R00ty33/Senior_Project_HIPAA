package com.HIPAA.SeniorProject.Repository;

import com.HIPAA.SeniorProject.Model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Integer>{
    @Query("SELECT s FROM Inventory s WHERE s.product_name = ?1")
    Inventory findByProductName(String product_name);
}
