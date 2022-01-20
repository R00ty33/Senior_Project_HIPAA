package com.HIPAA.SeniorProject.Controller;

import com.HIPAA.SeniorProject.Service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/inventory")
public class InventoryController {

    private final InventoryService inventoryService;

    @Autowired
    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @GetMapping("/getInventory/v1")
    public Object[] getInventory() {
        System.out.println("called");
        return new Object[]{inventoryService.getInventory()};
    }


}
