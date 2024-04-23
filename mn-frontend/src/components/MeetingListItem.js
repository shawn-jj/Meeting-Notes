import * as React from 'react';
import Box from '@mui/joy/Box';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

import AvatarGroupWithNumber from './AvatarGroupWithNumber';
import { loadAttendeesByMeetingID } from "../utils/Client"
import { toggleMeetingDetails } from '../utils/DrawerConfig';


export default function MeetingListItem({ meeting, selectedMeetingID, setSelectedMeeting, setSelectedMeetingAttendees }) {

    // Variables for getting attendees
    const [attendees, setAttendees] = React.useState([]);

    React.useEffect(() => {

        loadAttendeesByMeetingID(meeting.meetingID).then(res => {
            setAttendees(res.data)
        }).catch(err => {
            console.log(err);
        });

    }, [meeting]); // Reload attendees when meeting updated

    return (
        <React.Fragment>
            <ListItem>
                <ListItemButton
                    onClick={() => {
                        toggleMeetingDetails();
                        setSelectedMeeting({ ...meeting });
                        setSelectedMeetingAttendees({ ...attendees });
                    }}
                    selected={selectedMeetingID === meeting.meetingID}
                    color="neutral"
                    sx={{
                        flexDirection: 'column',
                        alignItems: 'initial',
                        gap: 1,
                    }}
                >
                    <Stack direction="row" spacing={1.5}>
                        <Box sx={{ flex: 1 }}>
                            <Typography level="title-sm">{meeting.meetingTopic}</Typography>
                            <Typography level="body-sm">{meeting.meetingDate}</Typography>
                        </Box>
                        <Box
                            sx={{
                                lineHeight: 1.5,
                                textAlign: 'right',
                            }}
                        >
                            {/* Attendees images */}
                            <AvatarGroupWithNumber
                                people={attendees}
                                maxNum={2}
                            />
                        </Box>
                    </Stack>
                    <Typography
                        level="body-sm"
                        sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {meeting.meetingNote}
                    </Typography>
                </ListItemButton>
            </ListItem>
            <ListDivider sx={{ margin: 0 }} />
        </React.Fragment>
    );
}