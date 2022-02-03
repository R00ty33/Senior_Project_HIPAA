package com.HIPAA.SeniorProject.Repository;

import com.HIPAA.SeniorProject.Model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolesRepository extends JpaRepository<Role, Integer> {
}
