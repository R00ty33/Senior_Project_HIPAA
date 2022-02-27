package com.HIPAA.SeniorProject.Repository;

import com.HIPAA.SeniorProject.Model.PHI;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
/** responsible for data access */
public interface PHIRepository extends JpaRepository<PHI, Long> {

}
