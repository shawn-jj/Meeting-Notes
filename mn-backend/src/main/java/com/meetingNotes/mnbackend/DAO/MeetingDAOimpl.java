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
                SELECT * FROM meeting ORDER BY meetingDate DESC
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
    public int selectMaxMeetingID() {
        String sql = """
                SELECT max(meetingID) FROM meeting
                """;
        int maxMeetingID = jdbcTemplate.queryForObject(sql, Integer.class);

        return maxMeetingID;
    }

    @Override
    public void updateMeeting(int meetingID, Meeting meeting) {
        String sql = """
                UPDATE meeting
                SET meetingTopic = ?, meetingNote = ?, location = ?, meetingDate = ?, startTime = ?, endTime = ?
                WHERE meetingID = ?
                """;
        jdbcTemplate.update(
                sql,
                meeting.getMeetingTopic(),
                meeting.getMeetingNote(),
                meeting.getLocation(),
                meeting.getMeetingDate(),
                meeting.getStartTime(),
                meeting.getEndTime(),
                meetingID
        );
    }

    @Override
    public void insertMeeting(Meeting meeting) {
        var sql = """
                INSERT INTO meeting (meetingID, meetingTopic, meetingNote, location, meetingDate, startTime, endTime)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                """;
        jdbcTemplate.update(
                sql,
                meeting.getMeetingID(),
                meeting.getMeetingTopic(),
                meeting.getMeetingNote(),
                meeting.getLocation(),
                meeting.getMeetingDate(),
                meeting.getStartTime(),
                meeting.getEndTime()
        );
    }

    @Override
    public void deleteMeetingByID(int meetingID) {
        var sql = """
                DELETE FROM meeting WHERE meetingID = ?
                """;
        jdbcTemplate.update(sql, meetingID);
    }
}
