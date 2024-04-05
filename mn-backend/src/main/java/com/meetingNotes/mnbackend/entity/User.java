package com.meetingNotes.mnbackend.entity;

public class User {
    private Integer userID;
    private String password;

    public User(Integer userID, String password) {
        this.userID = userID;
        this.password = password;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
