import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { Box, Input } from '@mui/joy';
import List from '@mui/joy/List';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import MeetingListItem from './MeetingListItem';
import MeetingFormButton from './MeetingFormButton';

export default function MeetingList({ meetings, people, selectedMeetingID, setSelectedMeeting, setSelectedMeetingAttendees }) {

    return (
        <Sheet
            sx={{
                borderRight: '1px solid',
                borderColor: 'divider',
                height: 'calc(100dvh - var(--Header-height))',
                overflowY: 'auto',
            }}
        >
            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
                p={2}
                pb={1.5}
            >
                <Typography level="h2" component="h1">
                    Meetings
                </Typography>

                {/* Add a new meeting button*/}
                <MeetingFormButton
                    color="primary"
                    startDecorator={<AddRoundedIcon />}
                    size="sm"
                    name="New Note"
                    people={people}

                />

            </Stack>
            <Box sx={{ px: 2, pb: 1.5 }}>
                <Input
                    size="sm"
                    startDecorator={<SearchRoundedIcon />}
                    placeholder="Search"
                    aria-label="Search"
                />
            </Box>
            <List
                sx={{
                    py: 0,
                    '--ListItem-paddingY': '0.75rem',
                    '--ListItem-paddingX': '1rem',
                }}
            >
                {meetings.map((meeting, Index) => (
                    <MeetingListItem
                        key={Index}
                        selectedMeetingID={selectedMeetingID}
                        setSelectedMeeting={setSelectedMeeting}
                        setSelectedMeetingAttendees={setSelectedMeetingAttendees}
                        meeting={meeting}
                    />
                ))}
            </List>
        </Sheet>
    );
}