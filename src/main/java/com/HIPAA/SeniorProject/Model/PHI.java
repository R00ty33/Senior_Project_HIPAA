package com.HIPAA.SeniorProject.Model;

import javax.persistence.*;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "phi")
public class PHI {

    @Id
    @GeneratedValue(strategy = AUTO)
    private int id;
    private String age;
    private String height;
    private String weight;
    private String salt;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    public PHI() {

    }

    public PHI(String age, String height, String weight, User user) {
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.user = user;
    }

    public PHI(String age, String height, String weight, String salt, User user) {
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.salt = salt;
        this.user = user;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    @Override
    public String toString() {
        return "PHI{" +
                "id=" + id +
                ", age=" + age +
                ", height=" + height +
                ", weight=" + weight +
                '}';
    }
}

