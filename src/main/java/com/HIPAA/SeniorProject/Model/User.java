package com.HIPAA.SeniorProject.Model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "users")
public class User {

    @Id
    private int id;
    private String first_name;
    private String last_name;
    private String email;
    private Date date_joined;

    public User() {

    }

    public User(String first_name, String last_name, String email, Date date_joined) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.date_joined = date_joined;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDate() {
        return date_joined;
    }

    public void setDate(Date date_joined) {
        this.date_joined = date_joined;
    }

    @Override
    public String toString() {
        return "Inventory{" +
                "first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", date=" + date_joined +
                '}';
    }
}
