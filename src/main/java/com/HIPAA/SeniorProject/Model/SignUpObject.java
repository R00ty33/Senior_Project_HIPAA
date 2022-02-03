package com.HIPAA.SeniorProject.Model;

import java.util.Date;

public class SignUpObject {

    private String first_name;
    private String last_name;
    private String email;
    private Date date_joined;
    private String password;

    public SignUpObject(String first_name, String last_name, String email, Date date_joined, String password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.date_joined = date_joined;
        this.password = password;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
