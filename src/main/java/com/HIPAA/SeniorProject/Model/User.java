package com.HIPAA.SeniorProject.Model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import static javax.persistence.FetchType.EAGER;
import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = AUTO)
    @Column(name = "user_id")
    private Long id;
    private String first_name;
    private String last_name;
    private String email;
    private String address;
    private Date date_joined;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="cart_cookie")
    private Cart cookie;
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name="role_name")
    private Role role;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
    private UserCredentials userCredentials;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
    private PHI phi;
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name="order_hash")
    private Orders orders;

    public User() {
    }

    public User(String first_name, String last_name, String email, Date date_joined) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.date_joined = date_joined;
    }

    public User(String first_name, String last_name, String email, Date date_joined, Role role) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.date_joined = date_joined;
        this.role = role;
    }

    public User(Long id, String first_name, String last_name, String email, String address, Date date_joined, Role role) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.address = address;
        this.date_joined = date_joined;
        this.role = role;
    }

    public String getFirst_name() {return first_name;}

    public void setFirst_name(String first_name) {this.first_name = first_name;}

    public String getLast_name() {return last_name;}

    public void setLast_name(String last_name) {this.last_name = last_name;}

    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}

    public Date getDate_joined() {return date_joined;}

    public void setDate_joined(Date date_joined) {this.date_joined = date_joined;}


    public Cart getCookie() {
        return cookie;
    }

    public void setCookie(Cart cookie) {
        this.cookie = cookie;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", date_joined=" + date_joined +
                ", cookie=" + cookie +
                ", role=" + role +
                '}';
    }
}
