import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {

    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        loadMeetings();
    }, []);

    const loadMeetings = async() => {
        const meetingsResult = await axios.get("http://localhost:8080/api/meetings");
        setMeetings(meetingsResult.data);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>meetingID</th>
                        <th>createPeopleID</th>
                        <th>meetingName</th>
                        <th>meetingNote</th>
                        <th>location</th>
                        <th>duration</th>
                        <th>meetingDate</th>
                        <th>createDate</th>
                        <th>Attendees</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        meetings.map((meeting) => (
                            <tr>
                                <td>{meeting.meetingID}</td>
                                <td>{meeting.createPeopleID}</td>
                                <td>{meeting.meetingName}</td>
                                <td>{meeting.meetingNote}</td>
                                <td>{meeting.location}</td>
                                <td>{meeting.duration}</td>
                                <td>{meeting.meetingDate}</td>
                                <td>{meeting.createDate}</td>
                                <td>TBD</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
