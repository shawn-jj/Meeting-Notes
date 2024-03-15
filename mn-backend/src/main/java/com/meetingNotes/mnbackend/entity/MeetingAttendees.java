package com.meetingNotes.mnbackend.entity;

public class MeetingAttendees {
    private Integer meetingID;
    private Integer peopleID;

    public MeetingAttendees(Integer meetingID, Integer peopleID) {
        this.meetingID = meetingID;
        this.peopleID = peopleID;
    }

    public Integer getMeetingID() {
        return meetingID;
    }

    public void setMeetingID(Integer meetingID) {
        this.meetingID = meetingID;
    }

    public Integer getPeopleID() {
        return peopleID;
    }

    public void setPeopleID(Integer peopleID) {
        this.peopleID = peopleID;
    }
}
