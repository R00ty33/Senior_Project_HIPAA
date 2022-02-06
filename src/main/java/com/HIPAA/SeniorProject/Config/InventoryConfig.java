package com.HIPAA.SeniorProject.Config;

import com.HIPAA.SeniorProject.Model.Inventory;
import com.HIPAA.SeniorProject.Repository.InventoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.swing.text.html.HTML;
import java.util.List;

@Configuration
public class InventoryConfig {
    @Bean
    CommandLineRunner commandLineRunner(InventoryRepository inventoryRepository) {
        return args -> {
            Inventory Acetaminophen = new Inventory(
                "Acetaminophen",
                " ",
                " ",
                "Pain Reliever",
                0.0,
                10
            );
            Inventory Ibuprofen = new Inventory(
                "Ibuprofen",
                "Nonsteroidal anti-inflammatory drug to treat fever and mild to severe pain",
                "",
                "Pain Reliever",
                8.99,
                10
            );
            Inventory Motrin = new Inventory(
                "Motrin",
                " ",
                " ",
                "Pain Reliever",
                0.0,
                10
            );
            Inventory Orajel = new Inventory(
                "Orajel",
                " ",
                " ",
                "Pain Reliever",
                0.0,
                10
            );
            Inventory Tylenol = new Inventory(
                "Tylenol",
                " ",
                " ",
                "Pain Reliever",
                0.0,
                10
            );
            Inventory Prilosec = new Inventory(
                "Prilosec",
                " ",
                " ",
                "Acid Reflux",
                0.0,
                10
            );
            Inventory Rolaids = new Inventory(
                "Rolaids",
                " ",
                " ",
                "Acid Reflux",
                0.0,
                10
            );
            Inventory Tagamet = new Inventory(
                "Tagamet",
                " ",
                " ",
                "Acid Reflux",
                0.0,
                10
        );
            Inventory Tums = new Inventory(
                "Tums",
                " ",
                " ",
                "Acid Reflux",
                0.0,
                10
            );
            Inventory Zantac = new Inventory(
                "Zantac",
                " ",
                " ",
                "Acid Reflux",
                0.0,
                10
            );
            Inventory Alavert = new Inventory(
                "Alavert",
                " ",
                " ",
                "Allergy",
                0.0,
                10
            );
            Inventory Allegra = new Inventory(
                "Allegra",
                " ",
                " ",
                "Acid Reflux",
                0.0,
                10
            );
            Inventory Claritin = new Inventory(
                "Claritin",
                " ",
                " ",
                "Allergy",
                0.0,
                10
            );
            Inventory Xyzal = new Inventory(
                "Xyzal",
                " ",
                " ",
                "Allergy",
                0.0,
                10
            );
            Inventory Zyrtec = new Inventory(
                "Zyrtec",
                " ",
                " ",
                "Allergy",
                0.0,
                10
            );
            Inventory Advil = new Inventory(
                "Advil",
                " ",
                " ",
                "Decongestant",
                0.0,
                10
            );
            Inventory Nasal_Decongestant_PE = new Inventory(
                "Nasal Decongestant PE",
                " ",
                " ",
                "Decongestant",
                0.0,
                10
            );
            Inventory Mucinex = new Inventory(
                "Mucinex",
                " ",
                " ",
                "Decongestant",
                0.0,
                10
            );
            Inventory Sinus_Congestion_Relief = new Inventory(
                "Sinus Congestion Relief",
                " ",
                " ",
                "Decongestant",
                0.0,
                10
            );
            Inventory Sudafed = new Inventory(
                "Sudafed",
                " ",
                " ",
                "Decongestant",
                0.0,
                10
            );
            Inventory Elderberry = new Inventory(
                "Elderberry",
                " ",
                " ",
                "Vitamin",
                0.0,
                10
            );
            Inventory Fish_Oil = new Inventory(
                "Fish Oil",
                " ",
                " ",
                "Vitamin",
                0.0,
                10
            );
            Inventory Melatonin = new Inventory(
                "Melatonin",
                " ",
                " ",
                "Vitamin",
                0.0,
                10
            );
            Inventory Multi_Complete = new Inventory(
                "Multi_Complete",
                " ",
                " ",
                "Vitamin",
                0.0,
                10
            );
            Inventory Zinc = new Inventory(
                "Zinc",
                " ",
                " ",
                "Vitamin",
                0.0,
                10
            );
            inventoryRepository.saveAll(List.of(Acetaminophen, Advil, Alavert, Allegra, Claritin, Elderberry, Fish_Oil, Ibuprofen,
                    Melatonin, Motrin, Mucinex, Multi_Complete, Nasal_Decongestant_PE, Orajel, Prilosec,
                    Rolaids, Sinus_Congestion_Relief, Sudafed, Tagamet, Tums, Tylenol, Xyzal, Zantac, Zinc, Zyrtec
            ));

        };
    }
}
