package com.HIPAA.SeniorProject.Repository;

import com.HIPAA.SeniorProject.Model.PHI;
import com.HIPAA.SeniorProject.Model.PHIObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
/** responsible for data access */
public interface PHIRepository extends JpaRepository<PHI, Long> {

    @Query("SELECT u.first_name as firstName, u.last_name as lastName, p.age as age, p.height as height, p.weight as weight, p.salt as salt FROM PHI p JOIN User u ON p.user = u.id WHERE u.email = ?1")
    IPHIObject findPHIByEmail(String email);
}
