package com.meetingNotes.mnbackend.utils;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.meetingNotes.mnbackend.entity.Meeting;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

@Component
public class MeetingRowMapper implements RowMapper {

    @Override
    public Meeting mapRow(ResultSet rs, int rowNum) throws SQLException {

        Meeting meeting = new Meeting(
                rs.getInt("meetingID"),
                rs.getInt("createPeopleID"),
                rs.getString("meetingName"),
                rs.getString("meetingNote"),
                rs.getString("location"),
                rs.getTime("duration"),
                rs.getDate("meetingDate"),
                rs.getDate("createDate")
        );

        return meeting;
    }
}
