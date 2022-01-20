package com.HIPAA.SeniorProject.Service;

import com.HIPAA.SeniorProject.Model.Inventory;
import com.HIPAA.SeniorProject.Repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {

    private final InventoryRepository inventoryRepository;

    @Autowired
    public InventoryService(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    public List<Inventory> getInventory() {
        System.out.println(inventoryRepository.findAll());
        return inventoryRepository.findAll();
    }
}
