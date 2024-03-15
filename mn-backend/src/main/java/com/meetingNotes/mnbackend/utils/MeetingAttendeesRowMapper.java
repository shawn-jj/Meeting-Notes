package com.meetingNotes.mnbackend.utils;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.meetingNotes.mnbackend.entity.MeetingAttendees;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

@Component
public class MeetingAttendeesRowMapper implements RowMapper {

    @Override
    public MeetingAttendees mapRow(ResultSet rs, int rowNum) throws SQLException {

        MeetingAttendees meetingAttendees = new MeetingAttendees(
                rs.getInt("meetingID"),
                rs.getInt("peopleID")
        );

        return meetingAttendees;
    }
}
