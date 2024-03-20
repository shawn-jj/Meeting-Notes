package com.meetingNotes.mnbackend.DAO;

import java.util.List;
import java.util.Optional;

import com.meetingNotes.mnbackend.entity.Meeting;
import com.meetingNotes.mnbackend.entity.MeetingAttendees;
import com.meetingNotes.mnbackend.entity.People;
import com.meetingNotes.mnbackend.utils.MeetingAttendeesRowMapper;
import com.meetingNotes.mnbackend.utils.MeetingRowMapper;
import com.meetingNotes.mnbackend.utils.PeopleRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class MeetingDAOimpl implements MeetingDAO {

    private final JdbcTemplate jdbcTemplate;
    private final MeetingRowMapper meetingRowMapper;
    private final MeetingAttendeesRowMapper meetingAttendeesRowMapper;
    private final PeopleRowMapper peopleRowMapper;

    public MeetingDAOimpl(JdbcTemplate jdbcTemplate, MeetingRowMapper meetingRowMapper, MeetingAttendeesRowMapper meetingAttendeesRowMapper, PeopleRowMapper peopleRowMapper) {
        this.jdbcTemplate = jdbcTemplate;
        this.meetingRowMapper = meetingRowMapper;
        this.meetingAttendeesRowMapper = meetingAttendeesRowMapper;
        this.peopleRowMapper = peopleRowMapper;
    }

    @Override
    public List<Meeting> selectAllMeetings() {
        String sql = """
                SELECT * FROM meeting
                """;

        List<Meeting> meetings = jdbcTemplate.query(sql, meetingRowMapper);

        return meetings;
    }

    @Override
    public Optional<Meeting> selectMeetingByID(int meetingID) {
        String sql = """
                SELECT * FROM meeting WHERE meetingID = ?
                """;

        Optional<Meeting> meeting = jdbcTemplate.query(sql, meetingRowMapper, meetingID).stream().findFirst();

        return meeting;
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
