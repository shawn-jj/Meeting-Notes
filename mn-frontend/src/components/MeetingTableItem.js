import React, { useEffect, useState } from 'react'

import Typography from '@mui/joy/Typography';
import MeetingTableRowMenu from './MeetingTableRowMenu';
import AvatarGroupWithSize from './AvatarGroupWithSize';
import { loadAttendeesByMeetingID } from "../utils/Client.js"

export default function MeetingTableItem({ meetingID, meetingName, meetingNote, meetingDate }) {

    // Variables for getting attendees
    const [attendees, setAttendees] = useState([]);

    useEffect(() => {

        loadAttendeesByMeetingID(meetingID).then(res => {
            setAttendees(res.data)
        });

    }, []);

    return (
        <tr>
            <td>
                <Typography level="body-xs">{meetingName}</Typography>
            </td>
            <td>
                <Typography level="body-xs">{meetingDate}</Typography>
            </td>
            <td>
                <Typography level="body-xs">
                    {
                        // Limit the length of meeting notes
                        meetingNote.length > 50 ? meetingNote.substring(0, 50) + "..." : meetingNote
                    }
                </Typography>
            </td>
            <td>
                {/* Attendees images */}
                <AvatarGroupWithSize
                    people={attendees}
                    maxNum={4}
                />
            </td>
            <td style={{ textAlign: 'right' }}>
                <MeetingTableRowMenu />
            </td>
        </tr>
    )
}
