package com.HIPAA.SeniorProject.Repository;

import com.HIPAA.SeniorProject.Model.User;
import com.HIPAA.SeniorProject.Model.UserCredentials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserCredentialsRepository extends JpaRepository<UserCredentials, Long>  {

    @Query("SELECT c.password FROM UserCredentials c LEFT JOIN User s ON c.user = s.id WHERE s.email = ?1")
    String findUsersPassword(String email);
}
