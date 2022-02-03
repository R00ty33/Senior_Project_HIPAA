package com.HIPAA.SeniorProject.Model;

import javax.persistence.*;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Table(name = "user_credentials")
public class UserCredentials {

    @Id
    @GeneratedValue(strategy = AUTO)
    private Long id;
    private String password;
    private String creditCardNO;
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

    @Override
    public String toString() {
        return "UserCredentials{" +
                "password='" + password + '\'' +
                ", creditCardNO='" + creditCardNO + '\'' +
                '}';
    }
}
