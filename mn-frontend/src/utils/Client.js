import axios from 'axios';

// const API_BASE_URL = "http://localhost:8080/api/";
const API_BASE_URL = "http://meetingnotes.ap-southeast-2.elasticbeanstalk.com/api/";

// load a list of Meeting 'List<Meeting>'
export const loadMeetings = async () => {
    return await axios.get(API_BASE_URL + "meetings");
}

// load a list of Meeting 'List<Meeting>'
export const loadMeetingsByPeopleID = async (peopleID) => {
    return await axios.get(API_BASE_URL + `meetings/people/${peopleID}`);
}

// load a list of People 'List<People>'
export const loadAttendeesByMeetingID = async (meetingID) => {
    return await axios.get(API_BASE_URL + `people/attendees/${meetingID}`);
}

// load a list of People 'List<People>'
export const loadPeople = async () => {
    return await axios.get(API_BASE_URL + "people");
}

// save edited meeting
export const updateMeeting = async (meetingID, meeting) => {
    return await axios.put(API_BASE_URL + `meetings/update/${meetingID}`,
    meeting
    );
}

// save meeting attendees
export const updateAttendees = async (meetingID, attendeesIDList) => {
    return await axios.put(API_BASE_URL + `people/attendees/update/${meetingID}`,
    attendeesIDList
    );
}

// save new meeting
export const createMeeting = async (meeting) => {
    return await axios.post(API_BASE_URL + "meetings/create", meeting);
}

// user login
// returns the data of logged in user as 'People' entity
export const userLogin = async (loginRequest) => {
    return await axios.post(API_BASE_URL + "people/login", loginRequest);
}

// delete meeting data
export const deleteMeeting = async (meetingID) => {
    return await axios.delete(API_BASE_URL + `meetings/delete/${meetingID}`);
}

// delete meeting attendees
export const deleteMeetingAttendees = async (meetingID) => {
    return await axios.delete(API_BASE_URL + `people/delete/${meetingID}`);
}