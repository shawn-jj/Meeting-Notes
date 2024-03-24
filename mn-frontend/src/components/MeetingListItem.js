import React, { useEffect, useState } from 'react'

import Typography from '@mui/joy/Typography';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import MeetingTableRowMenu from './MeetingTableRowMenu';
import AvatarGroupWithSize from './AvatarGroupWithSize';
import { loadAttendeesByMeetingID } from "../utils/Client.js"

export default function MeetingListItem({ meetingID, meetingName, meetingNote, meetingDate }) {

    // Variables for getting attendees
    const [attendees, setAttendees] = useState([]);

    useEffect(() => {

        loadAttendeesByMeetingID(meetingID).then(res => {
            setAttendees(res.data)
        });

    }, []);

    return (
        <ListItem
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
            }}
        >
            <ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'start' }}>
                <ListItemDecorator>
                    {/* Attendees images */}
                    <AvatarGroupWithSize
                        people={attendees}
                        maxNum={2}
                    />
                </ListItemDecorator>
                <div>
                    <Typography fontWeight={600} gutterBottom>
                        {meetingName}
                    </Typography>
                    <Typography level="body-xs" gutterBottom>
                        {meetingDate}
                    </Typography>
                    <Typography level="body-xs">
                        {
                            // Limit the length of meeting notes
                            meetingNote.length > 50 ? meetingNote.substring(0, 50) + "..." : meetingNote
                        }
                    </Typography>
                </div>
            </ListItemContent>

            <MeetingTableRowMenu />

        </ListItem>
    )
}
