package com.meetingNotes.mnbackend.utils;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.meetingNotes.mnbackend.entity.Meeting;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

@Component
public class MeetingRowMapper implements RowMapper {

    @Override
    // rs: a ResultSet object maintains a cursor pointing to its current row of data
    public Meeting mapRow(ResultSet rs, int rowNum) throws SQLException {

        Meeting meeting = new Meeting(
                rs.getInt("meetingID"),
                rs.getString("meetingTopic"),
                rs.getString("meetingNote"),
                rs.getString("location"),
                rs.getDate("meetingDate"),
                rs.getTime("startTime"),
                rs.getTime("endTime")
        );

        return meeting;
    }
}
