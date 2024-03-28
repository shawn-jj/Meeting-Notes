package com.meetingNotes.mnbackend.DAO;

import java.util.List;
import java.util.Optional;

import com.meetingNotes.mnbackend.entity.MeetingAttendees;
import com.meetingNotes.mnbackend.entity.People;
import com.meetingNotes.mnbackend.utils.MeetingAttendeesRowMapper;
import com.meetingNotes.mnbackend.utils.PeopleRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PeopleDAOimpl implements PeopleDAO{

    private final JdbcTemplate jdbcTemplate;
    private final PeopleRowMapper peopleRowMapper;
    private final MeetingAttendeesRowMapper meetingAttendeesRowMapper;

    public PeopleDAOimpl(JdbcTemplate jdbcTemplate, PeopleRowMapper peopleRowMapper, MeetingAttendeesRowMapper meetingAttendeesRowMapper) {
        this.jdbcTemplate = jdbcTemplate;
        this.peopleRowMapper = peopleRowMapper;
        this.meetingAttendeesRowMapper = meetingAttendeesRowMapper;
    }

    @Override
    public List<People> selectAllPeople() {
        String sql = """
                SELECT * FROM people
                """;

        List<People> people = jdbcTemplate.query(sql, peopleRowMapper);

        return people;
    }

    @Override
    public Optional<People> selectPeopleByID(int peopleID) {
        String sql = """
                SELECT * FROM people WHERE peopleID = ?
                """;

        Optional<People> people = jdbcTemplate.query(sql, peopleRowMapper, peopleID).stream().findFirst();

        return people;
    }

    @Override
    public List<MeetingAttendees> selectAttendeesByMeetingID(int meetingID) {
        String sql = """
                SELECT m.meetingID, p.peopleID
                FROM meeting m
                LEFT JOIN meetingattendees ma ON m.meetingID = ma.meetingID
                LEFT JOIN people p ON ma.peopleID = p.peopleID
                WHERE m.meetingID = ?
                """;

        List<MeetingAttendees> meetingAttendees = jdbcTemplate.query(sql, meetingAttendeesRowMapper, meetingID);

        return meetingAttendees;
    }
}
