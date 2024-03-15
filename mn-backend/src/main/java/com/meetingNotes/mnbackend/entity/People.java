package com.meetingNotes.mnbackend.entity;

public class People {
    private Integer peopleID;
    private String name;
    private String email;

    public People(Integer peopleID, String name, String email) {
        this.peopleID = peopleID;
        this.name = name;
        this.email = email;
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
