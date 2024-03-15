package com.meetingNotes.mnbackend.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.meetingNotes.mnbackend.entity.Meeting;
import com.meetingNotes.mnbackend.entity.MeetingAttendees;
import com.meetingNotes.mnbackend.entity.People;
import com.meetingNotes.mnbackend.service.MeetingService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
@CrossOrigin("http://localhost:3000/")
public class MeetingController {
    private final MeetingService meetingService;

    public MeetingController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    @GetMapping("/meetings")
    public List<Meeting> getAllMeetings() {
        return meetingService.getAllMeetings();
    }

    @GetMapping("/meetings/{meetingID}")
    public Meeting getMeetingByID(@PathVariable("meetingID") int meetingID) {
        return meetingService.getMeetingByID(meetingID);
    }

    @GetMapping("/people/{peopleID}")
    public People getPeopleByID(@PathVariable("peopleID") int peopleID) {
        return meetingService.getPeopleByID(peopleID);
    }

    @GetMapping("/meetings/attendees/{meetingID}")
    public List<MeetingAttendees> getAttendeesByMeetingID(@PathVariable("meetingID") int meetingID) {
        return meetingService.getAttendeesByMeetingID(meetingID);
    }
}
