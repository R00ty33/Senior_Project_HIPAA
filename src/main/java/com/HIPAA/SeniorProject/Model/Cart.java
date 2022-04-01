package com.HIPAA.SeniorProject.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@AllArgsConstructor
@Table(name = "cart")
public class Cart implements Serializable {

    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;
    private String cart_cookie;
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "cart_inventory",
            joinColumns = { @JoinColumn(name = "cart_id") },
            inverseJoinColumns = { @JoinColumn(name = "invetory_id") })
    private Collection<Inventory> inventory;

    public Cart() {

    }

    public Cart(String cart_cookie) {
        this.cart_cookie = cart_cookie;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getCart_cookie() {
        return cart_cookie;
    }

    public void setCart_cookie(String cart_cookie) {
        this.cart_cookie = cart_cookie;
    }

    public Collection<Inventory> getInventory() {
        return inventory;
    }

    public void setInventory(Collection<Inventory> inventory) {
        this.inventory = inventory;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id=" + id +
                ", user_cookie=" + cart_cookie +
                '}';
    }
}
