import axios from 'axios'

// load a list of Meeting 'List<Meeting>'
export const loadMeetings = async () => {
    return await axios.get("http://localhost:8080/api/meetings");
}

// load a list of People 'List<People>'
export const loadAttendeesByMeetingID = async (meetingID) => {
    return await axios.get(`http://localhost:8080/api/meetings/attendees/${meetingID}`);
}