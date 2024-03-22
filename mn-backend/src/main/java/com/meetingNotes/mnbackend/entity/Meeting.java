package com.meetingNotes.mnbackend.entity;

import java.sql.Date;
import java.sql.Time;

public class Meeting {
    private Integer meetingID;
    private Integer createPeopleID;
    private String meetingName;
    private String meetingNote;
    private String location;
    private Time duration;
    private Date meetingDate;
    private Date createDate;

    public Meeting(Integer meetingID, Integer createPeopleID, String meetingName, String meetingNote,
                   String location, Time duration, Date meetingDate, Date createDate) {
        this.meetingID = meetingID;
        this.createPeopleID = createPeopleID;
        this.meetingName = meetingName;
        this.meetingNote = meetingNote;
        this.location = location;
        this.duration = duration;
        this.meetingDate = meetingDate;
        this.createDate = createDate;
    }

    public Integer getMeetingID() {
        return meetingID;
    }

    public void setMeetingID(Integer meetingID) {
        this.meetingID = meetingID;
    }

    public Integer getCreatePeopleID() {
        return createPeopleID;
    }

    public void setCreatePeopleID(Integer createPeopleID) {
        this.createPeopleID = createPeopleID;
    }

    public String getMeetingName() {
        return meetingName;
    }

    public void setMeetingName(String meetingName) {
        this.meetingName = meetingName;
    }

    public String getMeetingNote() {
        return meetingNote;
    }

    public void setMeetingNote(String meetingNote) {
        this.meetingNote = meetingNote;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Time getDuration() {
        return duration;
    }

    public void setDuration(Time duration) {
        this.duration = duration;
    }

    public Date getMeetingDate() {
        return meetingDate;
    }

    public void setMeetingDate(Date meetingDate) {
        this.meetingDate = meetingDate;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
}
