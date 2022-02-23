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
          //Not sure how to do the Inventory title for this one
            Inventory Eight_Hour_Arthritis_Pain = new Inventory(
                "8 Hour Arthritis Pain",
                "Acetaminophen extended release 650 mg tablets. Provides temporary relief of minor arthritis pain.",
                "Images/Acetaminophen.jpg",
                "Pain Reliever",
                6.88,
                10
            );
            Inventory Midol_Liquid_Gels = new Inventory(
                "Midol Liquid Gels",
                "Temporary relief of minor aches and pains due to cramps, backache and muscle aches. Pain reliever and fever reducer in liquid gel 200 mg capsules.",
                "Images/Ibuprofen.jpg",
                "Pain Reliever",
                6.99,
                8
            );
            Inventory Motrin_IB_Migraine = new Inventory(
                "Motrin IB Migraine",
                "Easy to swallow, Ibuprofen liquid gel capsules, 200 mg. A NSAID pain reliever.",
                "Images/Motrin.jpg",
                "Pain Reliever",
                7.99,
                22
            );
            Inventory Orajel = new Inventory(
                "Orajel",
                "Instant pain relief for all mouth sores. Includes 20% Benzocaine to relieve oral pain.",
                "Images/Orajel.jpg",
                "Pain Reliever",
                6.92,
                14
            );
            Inventory Tylenol = new Inventory(
                "Tylenol",
                "Extra strength pain reliever and fever reducer. Caplets are 500 mg each.",
                "Images/Tylenol.jpg",
                "Pain Reliever",
                15.75,
                30
            );
            Inventory Prilosec = new Inventory(
                "Prilosec",
                "Delayed-release acid reducing tablets. Lasts 24hrs to treat frequent onsets of heartburn.",
                "Images/Prilosec.jpg",
                "Acid Reflux",
                11.99,
                35
            );
            Inventory Rolaids = new Inventory(
                "Rolaids",
                "Advanced multi-symptom antacid plus anti-gas. Chewable tablets that provide relief for heartburn and gas.",
                "Images/Rolaids.jpg",
                "Acid Reflux",
                6.69,
                28
            );
            Inventory Tagamet = new Inventory(
                "Tagamet",
                "Acid reducer that relieves and prevents heartburn and acid indigestion. Can be taken anytime it is needed, before, during, and after meals.",
                "Images/Tagamet.jpg",
                "Acid Reflux",
                9.99,
                22
        );
            Inventory Tums = new Inventory(
                "Tums",
                "Ultra strength, fast acting, assorted fruit flavor antacid.",
                "Images/Tums.jpg",
                "Acid Reflux",
                5.49,
                18
            );
            Inventory Zantac = new Inventory(
                "Zantac",
                "Acid reducer that prevents and relieves heartburn due to acid indigestion.",
                "Images/Zantac.jpg",
                "Acid Reflux",
                11.99,
                10
            );
            Inventory Alavert = new Inventory(
                "Alavert",
                "Provides allergy relief in a great tasting mint tablet that melts in the mouth. Effects last 24hrs and relieves sneezing, runny nose, itchy, watery eyes, and itching of the nose and throat.",
                "Images/Alavert.jpg",
                "Allergy",
                23.99,
                26
            );
            Inventory Allegra = new Inventory(
                "Allegra",
                "Allergy relief tablets. Relieves sneezing, runny nose, itchy, watery eyes, and itchy nose or throat. Provides non-drowsy 24hr allergy relief indoor or outdoor.",
                "Images/Allegra.jpg",
                "Acid Reflux",
                28.29,
                8
            );
            Inventory Claritin = new Inventory(
                "Claritin",
                "Non-drowsy indoor and outdoor allergy relief that lasts for 24 hrs.",
                "Images/Claritin.jpg",
                "Allergy",
                14.49,
                17
            );
            Inventory Xyzal = new Inventory(
                "Xyzal",
                "Allergy 24hr relief for sneezing, runny nose, itchy nose or throat, and itchy watery eyes.",
                "Images/Xyzal.jpg",
                "Allergy",
                39.98,
                14
            );
            Inventory Zyrtec = new Inventory(
                "Zyrtec",
                "24hr indoor/outdoor prescription strength allergy protection that provides relief of sneezing, running nose, itchy/watery eyes, and itchy throat or nose.",
                "Images/Zyrtec.jpg",
                "Allergy",
                19.99,
                9
            );
            Inventory Advil_Sinus_Congestion_and_Pain = new Inventory(
                "Advil Sinus Congestion & Pain",
                "Non-drowsy pain reliever and fever reducer that also provides relief from nasal congestion.",
                "Images/Advil.jpg",
                "Decongestant",
                7.59,
                11
            );
            Inventory Nasal_Decongestant_PE = new Inventory(
                "Nasal Decongestant PE",
                "Maximum strength 10 mg tablets for nasal decongestion that provides non-drowsy relief of nasal and sinus congestion and pressure.",
                "Images/Nasal_Decongestant_PE.jpg",
                "Decongestant",
                2.99,
                15
            );
            Inventory MucinexDM = new Inventory(
                "MucinexDM",
                "A maximum strength expectorant and cough suppressant that controls cough and thins and loosens mucus.",
                "Images/Mucinex.jpg",
                "Decongestant",
                8.74,
                29
            );
            Inventory Sinus_Congestion_Relief = new Inventory(
                "Max Strength severe sinus congestion relief",
                "Acetaminophen caplets pain reliever, expectorant, and nasal decongestant. Relieves headache, sinus congestion, and thins & loosens mucus.",
                "Images/Sinus_Congestion_Relief.jpg",
                "Decongestant",
                9.97,
                12
            );
            Inventory Sudafed = new Inventory(
                "Sudafed",
                "Maximum strength decongestant. Extended release 120 mg tablets that provide 12 hours of non-drowsy congestion and sinus pressure relief.",
                "Images/Sudafed.jpg",
                "Decongestant",
                14.95,
                8
            );
            Inventory Elderberry_Gummies = new Inventory(
                "Elderberry Gummies",
                "Vegetarian gummies, also provides immunity support with vitamin c & zinc.",
                "Images/Elderberry.jpg",
                "Vitamin",
                5.75,
                30
            );
            Inventory Omega_Three = new Inventory(
                "Omega-3",
                "Derived from fish oil, but without a fishy aftertaste. Taken for general & heart health. 500mg.",
                "Images/Fish_Oil.jpg",
                "Vitamin",
                12.16,
                21
            );
            Inventory Melatonin = new Inventory(
                "Melatonin",
                "10 mg of melatonin with Lemon Balm. Dietary supplement that may promote restful sleep.",
                "Images/Melatonin.jpg",
                "Vitamin",
                11.88,
                25
            );
            Inventory Multi_Complete = new Inventory(
                "Multi_Complete",
                "Dietary supplement that has 23 key nutrients for daily nutritional support.",
                "Images/Multi_Complete.jpg",
                "Vitamin",
                9.59,
                30
            );
            Inventory Zinc = new Inventory(
                "Zinc",
                "Supports immune health. 50mg",
                "Images/Zinc.jpg",
                "Vitamin",
                6.49,
                15
            );
            inventoryRepository.saveAll(List.of(Eight_Hour_Arthritis_Pain, Midol_Liquid_Gels, Motrin_IB_Migraine, Alavert, Allegra, Claritin,
                    Melatonin, Advil_Sinus_Congestion_and_Pain, MucinexDM, Elderberry_Gummies, Omega_Three, Multi_Complete, Nasal_Decongestant_PE, Orajel, Prilosec,
                    Rolaids, Sinus_Congestion_Relief, Sudafed, Tagamet, Tums, Tylenol, Xyzal, Zantac, Zinc, Zyrtec
            ));

        };
    }
}
