package com.meetingNotes.mnbackend.utils;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.meetingNotes.mnbackend.entity.People;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

@Component
public class PeopleRowMapper implements RowMapper {

    @Override
    public People mapRow(ResultSet rs, int rowNum) throws SQLException {

        People people = new People(
                rs.getInt("peopleID"),
                rs.getString("name"),
                rs.getString("email")
        );

        return people;
    }
}
