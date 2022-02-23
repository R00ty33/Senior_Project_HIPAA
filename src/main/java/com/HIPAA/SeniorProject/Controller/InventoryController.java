package com.HIPAA.SeniorProject.Controller;

import com.HIPAA.SeniorProject.Model.Inventory;
import com.HIPAA.SeniorProject.Service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/inventory")
public class InventoryController {

    private final InventoryService inventoryService;

    @Autowired
    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @GetMapping("/getAllItems/v1")
    public List<Inventory> getInventory() {
        System.out.println("called");
        return inventoryService.getInventory();
    }


}
