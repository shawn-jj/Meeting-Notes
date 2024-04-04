package com.meetingNotes.mnbackend.DAO;

import java.util.List;
import java.util.Optional;

import com.meetingNotes.mnbackend.entity.Meeting;
import com.meetingNotes.mnbackend.entity.MeetingAttendees;

public interface MeetingDAO {
    List<Meeting> selectAllMeetings();
    Optional<Meeting> selectMeetingByID(int meetingID);
    int selectMaxMeetingID();
    void updateMeeting(int meetingID, Meeting meeting);
    void insertMeeting(Meeting meeting);
    void deleteMeetingByID(int meetingID);
}
