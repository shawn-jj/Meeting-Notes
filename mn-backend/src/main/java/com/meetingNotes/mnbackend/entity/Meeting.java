package com.meetingNotes.mnbackend.entity;

import java.sql.Date;
import java.sql.Time;

public class Meeting {
    private Integer meetingID;
    private String meetingTopic;
    private String meetingNote;
    private String location;
    private Date meetingDate;
    private Time startTime;
    private Time endTime;

    public Meeting(Integer meetingID, String meetingName, String meetingNote,
                   String location, Date meetingDate, Time startTime, Time endTime) {
        this.meetingID = meetingID;
        this.meetingTopic = meetingName;
        this.meetingNote = meetingNote;
        this.location = location;
        this.meetingDate = meetingDate;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }

    public Integer getMeetingID() {
        return meetingID;
    }

    public void setMeetingID(Integer meetingID) {
        this.meetingID = meetingID;
    }

    public String getMeetingTopic() {
        return meetingTopic;
    }

    public void setMeetingTopic(String meetingTopic) {
        this.meetingTopic = meetingTopic;
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

    public Date getMeetingDate() {
        return meetingDate;
    }

    public void setMeetingDate(Date meetingDate) {
        this.meetingDate = meetingDate;
    }

}
