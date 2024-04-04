package com.meetingNotes.mnbackend.service;

import java.util.ArrayList;
import java.util.List;

import com.meetingNotes.mnbackend.DAO.MeetingDAO;
import com.meetingNotes.mnbackend.DAO.PeopleDAO;
import com.meetingNotes.mnbackend.entity.MeetingAttendees;
import com.meetingNotes.mnbackend.entity.People;
import org.springframework.stereotype.Service;

@Service
public class PeopleService {

    private final PeopleDAO peopleDAO;
    private final MeetingDAO meetingDAO;

    public PeopleService(PeopleDAO peopleDAO, MeetingDAO meetingDAO) {
        this.peopleDAO = peopleDAO;
        this.meetingDAO = meetingDAO;
    }

    public List<People> getAllPeople() {
        return peopleDAO.selectAllPeople();
    }

    public People getPeopleByID(int peopleID) {
        return peopleDAO.selectPeopleByID(peopleID)
                         .orElseThrow( () -> new RuntimeException("People not found"));
    }

    public List<People> getAttendeesByMeetingID(int meetingID) {
        List<MeetingAttendees> attendees = peopleDAO.selectAttendeesByMeetingID(meetingID);

        List<People> attendeesData = new ArrayList<>();
        for(MeetingAttendees attendee : attendees) {
            int attendeeID = attendee.getPeopleID();

            // Handle meetings without attendees
            if (attendeeID == 0) {
                break;
            }
            People attendeeData = peopleDAO.selectPeopleByID(attendeeID)
                                           .orElseThrow( () -> new RuntimeException("People not found"));
            attendeesData.add(attendeeData);
        }

        return attendeesData;
    }

    public void deleteAttendeesByMeetingID(int meetingID) {
        peopleDAO.deleteAttendeesByMeetingID(meetingID);
    }

    public void insertAttendeesByMeetingID(int meetingID, List<Integer> peopleIDList){
        // Handle meetings without attendees
        if (peopleIDList.size() == 0) {
            return;
        }
        // Handle new meetings
        if (meetingID == 0) {
            int newMeetingID = meetingDAO.selectMaxMeetingID(); // insert into the new meeting
            for (int peopleID : peopleIDList) {
                peopleDAO.insertAttendeesByMeetingID(newMeetingID, peopleID);
            }
        }
        // Existing meetings
        else {
            // Delete existing attendees, then insert modified attendees
            peopleDAO.deleteAttendeesByMeetingID(meetingID);
            for (int peopleID : peopleIDList) {
                peopleDAO.insertAttendeesByMeetingID(meetingID, peopleID);
            }
        }
    }
}
