package com.HIPAA.SeniorProject.Model;

import lombok.AllArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

import static javax.persistence.GenerationType.AUTO;

@Entity
@AllArgsConstructor
@Table(name = "orders")
public class Orders implements Serializable {

    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;
    private String order_hash;
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "orders_inventory",
            joinColumns = {@JoinColumn(name = "order_id")},
            inverseJoinColumns = {@JoinColumn(name = "invetory_id")})
    private Set<Inventory> order_inventory;
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name="user_id")
    private User user;

    public Orders() {

    }

    public Orders(String order_hash, Set<Inventory> order_inventory, User user) {
        this.order_hash = order_hash;
        this.order_inventory = order_inventory;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOrder_hash() {
        return order_hash;
    }

    public void setOrder_hash(String order_hash) {
        this.order_hash = order_hash;
    }

    public Set<Inventory> getInventory() {
        return order_inventory;
    }

    public void setInventory(Set<Inventory> inventory) {
        this.order_inventory = inventory;
    }
}
