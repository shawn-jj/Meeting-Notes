package com.meetingNotes.mnbackend.DAO;

import java.util.List;
import java.util.Optional;

import com.meetingNotes.mnbackend.entity.Meeting;
import com.meetingNotes.mnbackend.entity.MeetingAttendees;
import com.meetingNotes.mnbackend.entity.People;

public interface PeopleDAO {
    List<People> selectAllPeople();
    Optional<People> selectPeopleByID(int peopleID);
    List<MeetingAttendees> selectAttendeesByMeetingID(int meetingID);
    void deleteAttendeesByMeetingID(int meetingID);
    void insertAttendeesByMeetingID(int meetingID, int peopleID);
}
