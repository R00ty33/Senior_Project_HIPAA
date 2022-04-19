package com.HIPAA.SeniorProject.Model;

import javax.persistence.*;

import java.util.Date;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "user_credentials")
public class UserCredentials {

    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;
    private String password;
    private String creditCardNO;
    private String expiryDate;
    private String salt;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    public UserCredentials() {
    }

    public UserCredentials(String password) {
        this.password = password;
    }

    public UserCredentials(String password, String creditCardNO) {
        this.password = password;
        this.creditCardNO = creditCardNO;
    }

    public UserCredentials(String password, User user) {
        this.password = password;
        this.user = user;
    }

    public String getPassword() {return password;}

    public void setPassword(String password) {this.password = password;}

    public String getCreditCardNO() {return creditCardNO;}

    public void setCreditCardNO(String creditCardNO) {this.creditCardNO = creditCardNO;}

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "UserCredentials{" +
                "id=" + id +
                ", password='" + password + '\'' +
                ", creditCardNO='" + creditCardNO + '\'' +
                ", expiryDate='" + expiryDate + '\'' +
                ", salt='" + salt + '\'' +
                ", user=" + user +
                '}';
    }
}
