package com.meetingNotes.mnbackend.entity;

public class People {
    private Integer peopleID;
    private String name;
    private String email;
    private String role;
    private String password;

    public People(Integer peopleID, String name, String email, String role, String password) {
        this.peopleID = peopleID;
        this.name = name;
        this.email = email;
        this.role = role;
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getPeopleID() {
        return peopleID;
    }

    public void setPeopleID(Integer peopleID) {
        this.peopleID = peopleID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
