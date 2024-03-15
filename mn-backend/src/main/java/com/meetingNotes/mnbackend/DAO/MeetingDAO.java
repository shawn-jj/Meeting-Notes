package com.meetingNotes.mnbackend.DAO;

import java.util.List;
import java.util.Optional;

import com.meetingNotes.mnbackend.entity.Meeting;
import com.meetingNotes.mnbackend.entity.MeetingAttendees;
import com.meetingNotes.mnbackend.entity.People;

public interface MeetingDAO {
    List<Meeting> selectAllMeetings();
    Optional<Meeting> selectMeetingByID(int meetingID);
    Optional<People> selectPeopleByID(int peopleID);
    List<MeetingAttendees> selectAttendeesByMeetingID(int meetingID);
}
