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
    private int age;
    private String password;

    public User() {

    }

    public User(int id, String first_name, String last_name, String email, Date date_joined, int age, String password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.date_joined = date_joined;
        this.age = age;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public Date getDate_joined() {
        return date_joined;
    }

    public void setDate_joined(Date date_joined) {
        this.date_joined = date_joined;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", date_joined=" + date_joined +
                ", age=" + age +
                ", password='" + password + '\'' +
                '}';
    }
}
