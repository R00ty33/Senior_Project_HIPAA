package com.HIPAA.SeniorProject.Model;

import javax.persistence.*;

@Entity
@Table(name = "inventory")
public class Inventory {

    @Id
    private int id;
    private String product_name;
    private String product_description;
    private String product_image;
    private Double price;
    private Integer quantity;

    public Inventory() {

    }
    public Inventory(String product_name, String product_description, String product_image, Double price, Integer quantity) {
        this.product_name = product_name;
        this.product_description = product_description;
        this.product_image = product_image;
        this.price = price;
        this.quantity = quantity;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public String getProduct_description() {
        return product_description;
    }

    public void setProduct_description(String product_description) {
        this.product_description = product_description;
    }

    public String getProduct_image() {
        return product_image;
    }

    public void setProduct_image(String product_image) {
        this.product_image = product_image;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Inventory{" +
                "product_name='" + product_name + '\'' +
                ", product_description='" + product_description + '\'' +
                ", product_image='" + product_image + '\'' +
                ", price=" + price +
                ", quantity=" + quantity +
                '}';
    }
}
