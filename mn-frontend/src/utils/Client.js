import axios from 'axios'

// load a list of Meeting 'List<Meeting>'
export const loadMeetings = async () => {
    return await axios.get("http://localhost:8080/api/meetings");
}

// load a list of People 'List<People>'
export const loadAttendeesByMeetingID = async (meetingID) => {
    return await axios.get(`http://localhost:8080/api/people/attendees/${meetingID}`);
}

// load a list of People 'List<People>'
export const loadPeople = async () => {
    return await axios.get("http://localhost:8080/api/people");
}

// save edited meeting
export const updateMeeting = async (meetingID, meeting) => {
    return await axios.put(`http://localhost:8080/api/meetings/update/${meetingID}`,
    meeting
    );
}

// save meeting attendees
export const updateAttendees = async (meetingID, attendeesIDList) => {
    return await axios.put(`http://localhost:8080/api/people/attendees/update/${meetingID}`,
    attendeesIDList
    );
}

// save new meeting
export const createMeeting = async (meeting) => {
    return await axios.post("http://localhost:8080/api/meetings/create", meeting);
}

// delete meeting data
export const deleteMeeting = async (meetingID) => {
    return await axios.delete(`http://localhost:8080/api/meetings/delete/${meetingID}`);
}

// delete meeting attendees
export const deleteMeetingAttendees = async (meetingID) => {
    return await axios.delete(`http://localhost:8080/api/people/delete/${meetingID}`);
}