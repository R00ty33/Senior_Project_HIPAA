package com.HIPAA.SeniorProject.Controller;

import com.HIPAA.SeniorProject.Model.PHI;
import com.HIPAA.SeniorProject.Model.PHIObject;
import com.HIPAA.SeniorProject.Model.SignUpObject;
import com.HIPAA.SeniorProject.Service.InventoryService;
import com.HIPAA.SeniorProject.Service.PHIService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
/** Handles Request from Client, RESTful web service, creates JSON/XML response body */
@RequestMapping(path = "Profile")
public class PHIController {

    private final PHIService phiService;

    @Autowired
    public PHIController(PHIService phiService) {
        this.phiService = phiService;
    }

    @PostMapping("/PHI")
    public void PHI(@RequestParam String jwt, String age, String weight, String height) throws Exception {
        phiService.addPHI(jwt, age, weight, height);
    }

    @GetMapping("/Exists")
    public boolean Exists(String jwt) throws Exception {
        return phiService.doesPHIExist(jwt);
    }

    @GetMapping("/Admin/GetPHI")
    public List<PHIObject> GetAllPHI(@RequestParam String jwt) throws Exception {
        return phiService.getAllPHI(jwt);
    }
}
