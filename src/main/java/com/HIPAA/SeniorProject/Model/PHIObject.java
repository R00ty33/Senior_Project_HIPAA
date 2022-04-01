package com.HIPAA.SeniorProject.Model;

import lombok.AllArgsConstructor;

public class PHIObject {
    private String first_name;
    private String last_name;
    private String age;
    private String height;
    private String weight;

    public PHIObject(String first_name, String last_name, String age, String height, String weight) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.height = height;
        this.weight = weight;
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

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }
}
