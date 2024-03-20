package com.meetingNotes.mnbackend.service;

import java.util.ArrayList;
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

    /**
     * Get meeting data that displayed as cards at front page
     *
     * @return a list of meetings contains: meetingID, meetingName, meetingNote, meetingDate, attendeesNameList
     */
    public List<Meeting> getMeetingDisplay() {
        List<Meeting> allMeetings = meetingDAO.selectAllMeetings();
        List<Meeting> meetingDisplayList = new ArrayList<>();

        for(Meeting meeting : allMeetings) {

            // Get attendees name list
            int meetingID = meeting.getMeetingID();
            List<MeetingAttendees> attendees = meetingDAO.selectAttendeesByMeetingID(meetingID);
            List<String> attendeNameList = new ArrayList<>();

            for(MeetingAttendees attendeeData : attendees) {

                int attendeeID = attendeeData.getPeopleID();
                People attendee = meetingDAO.selectPeopleByID(attendeeID)
                                                .orElseThrow( () -> new RuntimeException("People not found"));
                String attendeeName = attendee.getName();
                attendeNameList.add(attendeeName);
            }

//            // Construct MeetingDisplay
//            Meeting meetingDisplayData = new Meeting(meeting.getMeetingID(), meeting.getMeetingName(),
//                    meeting.getMeetingNote(), meeting.getMeetingDate(), attendeNameList);
//
//            meetingDisplayList.add(meetingDisplayData);
        }
        return meetingDisplayList;
    }

    public List<Meeting> getAllMeetings() {
        return meetingDAO.selectAllMeetings();
    }

    public List<People> getAttendeesByMeetingID(int meetingID) {
        List<MeetingAttendees> attendees = meetingDAO.selectAttendeesByMeetingID(meetingID);
        List<People> attendeesData = new ArrayList<>();

        for(MeetingAttendees attendee : attendees) {
            int attendeeID = attendee.getPeopleID();
            People attendeeData = meetingDAO.selectPeopleByID(attendeeID)
                                      .orElseThrow( () -> new RuntimeException("People not found"));
            attendeesData.add(attendeeData);
        }

        return attendeesData;
    }

    public Meeting getMeetingByID(int meetingID) {
        return meetingDAO.selectMeetingByID(meetingID)
                .orElseThrow( () -> new RuntimeException("Meeting not found"));
    }

    public People getPeopleByID(int peopleID) {
        return meetingDAO.selectPeopleByID(peopleID)
                .orElseThrow( () -> new RuntimeException("People not found"));
    }
}
