package com.meetingNotes.mnbackend.DAO;

import java.util.List;
import java.util.Optional;

import com.meetingNotes.mnbackend.entity.Meeting;
import com.meetingNotes.mnbackend.utils.MeetingRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class MeetingDAOimpl implements MeetingDAO {

    private final JdbcTemplate jdbcTemplate;
    private final MeetingRowMapper meetingRowMapper;

    public MeetingDAOimpl(JdbcTemplate jdbcTemplate, MeetingRowMapper meetingRowMapper) {
        this.jdbcTemplate = jdbcTemplate;
        this.meetingRowMapper = meetingRowMapper;
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
}
