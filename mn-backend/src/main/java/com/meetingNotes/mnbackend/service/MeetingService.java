package com.meetingNotes.mnbackend.service;

import java.util.List;

import com.meetingNotes.mnbackend.DAO.MeetingDAO;
import com.meetingNotes.mnbackend.entity.Meeting;
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

    public List<Meeting> getMeetingsByPeopleID(int peopleID) {
        return meetingDAO.selectMeetingsByPeopleID(peopleID);
    }

    public void updateMeeting(int meetingID, Meeting meeting) {
        meetingDAO.updateMeeting(meetingID, meeting);
    }

    public void createMeeting(Meeting meeting) {
        int maxMeetingID = meetingDAO.selectMaxMeetingID();
        meeting.setMeetingID(maxMeetingID + 1);

        meetingDAO.insertMeeting(meeting);
    }

    public void deleteMeetingByID(int meetingID) {
        meetingDAO.deleteMeetingByID(meetingID);
    }
}
