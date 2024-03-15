package com.meetingNotes.mnbackend.service;

import java.util.List;

import com.meetingNotes.mnbackend.DAO.MeetingDAO;
import com.meetingNotes.mnbackend.entity.Meeting;
import com.meetingNotes.mnbackend.entity.MeetingAttendees;
import com.meetingNotes.mnbackend.entity.People;
import org.springframework.stereotype.Service;

@Service
public class MeetingService {

    private final MeetingDAO meetingDAO;

    public MeetingService(MeetingDAO meetingDAO) {
        this.meetingDAO = meetingDAO;
    }

    public List<Meeting> getAllMeetings() {
        return meetingDAO.selectAllMeetings();
    }

    public Meeting getMeetingByID(int meetingID) {
        return meetingDAO.selectMeetingByID(meetingID)
                .orElseThrow( () -> new RuntimeException("Meeting not found"));
    }

    public People getPeopleByID(int peopleID) {
        return meetingDAO.selectPeopleByID(peopleID)
                .orElseThrow( () -> new RuntimeException("People not found"));
    }

    public List<MeetingAttendees> getAttendeesByMeetingID(int meetingID) {
        return meetingDAO.selectAttendeesByMeetingID(meetingID);
    }
}
