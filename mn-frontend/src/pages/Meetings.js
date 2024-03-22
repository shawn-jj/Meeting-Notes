import React, { useEffect, useState } from 'react'
import MeetingCard from '../components/MeetingCard';
import SidebarWithHeader from '../components/SidebarWithHeader'
import { loadMeetings } from "../services/Client.js"


export default function Meetings() {

    // Variables for getting meetings
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {

        loadMeetings().then(res => {
            setMeetings(res.data)
        })

    }, []);

    // Display meeting data as cards
    return (
        <div>
            <SidebarWithHeader pageName={"Meetings"}>
                {
                    meetings.map((meeting, index) => (
                        <MeetingCard key={index} {...meeting} />
                    ))
                }
            </SidebarWithHeader>
        </div>
    )
}
