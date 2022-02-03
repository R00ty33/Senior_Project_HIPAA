package com.HIPAA.SeniorProject.Repository;

import com.HIPAA.SeniorProject.Model.Role;
import com.HIPAA.SeniorProject.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/** Extending from the JpaRepository implements methods for our data repository */
/** Encapsulates storage, retrieval, and search behavior */
@Repository /** responsible for data access */
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);

    Role getRolesByEmail(String email);

    /** findUserByEmail method() */
    @Query("SELECT s FROM User s WHERE s.email = ?1")
    User findUserByEmail(String email);

}