package com.meetingNotes.mnbackend.controller;

import java.util.List;

import com.meetingNotes.mnbackend.entity.People;
import com.meetingNotes.mnbackend.entity.LoginRequest;
import com.meetingNotes.mnbackend.service.PeopleService;
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
@RequestMapping("api/people")
// @CrossOrigin("http://localhost:3000/")
@CrossOrigin("https://main.d1tlkz71bjbw22.amplifyapp.com/")
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

    @PutMapping("/attendees/update/{meetingID}")
    public void updateAttendeesByMeetingID(
            @PathVariable("meetingID") int meetingID,
            @RequestBody List<Integer> peopleIDList) {
        peopleService.insertAttendeesByMeetingID(meetingID, peopleIDList);
    }

    @PostMapping("/login")
    public People userLogin(@RequestBody LoginRequest loginRequest) {
        return peopleService.userLogin(loginRequest);
    }

    @DeleteMapping("/delete/{meetingID}")
    public void deleteAttendeesByMeetingID(@PathVariable("meetingID") int meetingID) {
        peopleService.deleteAttendeesByMeetingID(meetingID);
    }


}
