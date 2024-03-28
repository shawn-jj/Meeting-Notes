package com.meetingNotes.mnbackend.service;

import java.util.ArrayList;
import java.util.List;

import com.meetingNotes.mnbackend.DAO.PeopleDAO;
import com.meetingNotes.mnbackend.entity.MeetingAttendees;
import com.meetingNotes.mnbackend.entity.People;
import org.springframework.stereotype.Service;

@Service
public class PeopleService {

    private final PeopleDAO peopleDAO;

    public PeopleService(PeopleDAO peopleDAO) {
        this.peopleDAO = peopleDAO;
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
            People attendeeData = peopleDAO.selectPeopleByID(attendeeID)
                                           .orElseThrow( () -> new RuntimeException("People not found"));
            attendeesData.add(attendeeData);
        }

        return attendeesData;
    }
}
