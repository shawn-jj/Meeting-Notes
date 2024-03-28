package com.meetingNotes.mnbackend.controller;

import java.util.List;

import com.meetingNotes.mnbackend.entity.People;
import com.meetingNotes.mnbackend.service.PeopleService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/people")
@CrossOrigin("http://localhost:3000/")
public class PeopleController {
    private final PeopleService peopleService;

    public PeopleController(PeopleService peopleService) {
        this.peopleService = peopleService;
    }

    @GetMapping
    public List<People> getAllPeople() {
        return peopleService.getAllPeople();
    }

    @GetMapping("/{peopleID}")
    public People getPeopleByID(@PathVariable("peopleID") int peopleID) {
        return peopleService.getPeopleByID(peopleID);
    }

    @GetMapping("/attendees/{meetingID}")
    public List<People> getAttendeesByMeetingID(@PathVariable("meetingID") int meetingID) {
        return peopleService.getAttendeesByMeetingID(meetingID);
    }
}
