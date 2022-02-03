package com.HIPAA.SeniorProject.Service;

import com.HIPAA.SeniorProject.Model.Inventory;
import com.HIPAA.SeniorProject.Repository.InventoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service @Transactional
@Slf4j @RequiredArgsConstructor
public class InventoryService {

    private final InventoryRepository inventoryRepository;

    public List<Inventory> getInventory() {
        log.info("Getting all InventoryItems");
        return inventoryRepository.findAll();
    }
}
