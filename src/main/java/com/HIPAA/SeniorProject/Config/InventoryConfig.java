package com.HIPAA.SeniorProject.Config;

import com.HIPAA.SeniorProject.Model.Inventory;
import com.HIPAA.SeniorProject.Repository.InventoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class InventoryConfig {
    @Bean
    CommandLineRunner commandLineRunner(InventoryRepository inventoryRepository) {
        return args -> {
            Inventory items = new Inventory(
                "Ibuprofen",
                "Nonsteroidal anti-inflammatory drug to treat fever and mild to severe pain",
                "https://www.cvs.com/bizcontent/merchandising/productimages/large/50428431986.jpg",
                8.99,
                10
            );
            inventoryRepository.saveAll(List.of(items));
        };
    }
}
