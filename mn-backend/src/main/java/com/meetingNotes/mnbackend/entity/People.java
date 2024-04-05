package com.meetingNotes.mnbackend.entity;

public class People {
    private Integer peopleID;
    private String name;
    private String email;
    private String role;

    public People(Integer peopleID, String name, String email, String role) {
        this.peopleID = peopleID;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
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
