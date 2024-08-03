package com.meetingNotes.mnbackend.controller;

import java.util.List;

import com.meetingNotes.mnbackend.entity.Meeting;
import com.meetingNotes.mnbackend.service.MeetingService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/meetings")
//@CrossOrigin("http://localhost:3000/")
@CrossOrigin("https://main.dhshb110fulh9.amplifyapp.com/")
public class MeetingController {
    private final MeetingService meetingService;

    public MeetingController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    @GetMapping
    public List<Meeting> getAllMeetings() {
        return meetingService.getAllMeetings();
    }

    @GetMapping("/{meetingID}")
    public Meeting getMeetingByID(@PathVariable("meetingID") int meetingID) {
        return meetingService.getMeetingByID(meetingID);
    }

    @GetMapping("/people/{peopleID}")
    public List<Meeting> getMeetingsByPeopleID(@PathVariable("peopleID") int peopleID) {
        return meetingService.getMeetingsByPeopleID(peopleID);
    }

    @PutMapping("/update/{updateMeetingID}")
    public void updateMeeting(
            @PathVariable("updateMeetingID") int meetingID,
            @RequestBody Meeting meeting) {
        meetingService.updateMeeting(meetingID, meeting);
    }

    @PostMapping("/create")
    public void createMeeting(@RequestBody Meeting meeting) {
        meetingService.createMeeting(meeting);
    }

    @DeleteMapping("/delete/{meetingID}")
    public void deleteMeetingByID(@PathVariable("meetingID") int meetingID) {
        meetingService.deleteMeetingByID(meetingID);
    }
}
