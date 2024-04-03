import React, { useEffect, useState } from 'react'

import Autocomplete from '@mui/joy/Autocomplete';
import Button from '@mui/joy/Button';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import Textarea from '@mui/joy/Textarea';

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import { updateMeeting, createMeeting } from "../utils/Client"

export default function MeetingForm({ setOpen, name, people, attendees, meeting, loadDataOfMeeting }) {

    const [meetingID, setMeetingID] = useState([]);
    const [meetingTopic, setMeetingTopic] = useState([]);
    const [meetingNote, setMeetinNote] = useState([]);
    const [location, setLocation] = useState([]);
    const [meetingDate, setMeetingDate] = useState([]);
    const [startTime, setStartTime] = useState([]);
    const [endTime, setEndTime] = useState([]);
    const [attendeesList, setAttendeesList] = useState([]);

    const meetingData = {
        meetingID,
        meetingTopic,
        meetingNote,
        location,
        meetingDate,
        startTime,
        endTime,
    }

    const updateAttendeesData = { attendeesList }

    useEffect(() => {
        setMeetingID(meeting == null ? 0 : meeting.meetingID)
        setMeetingTopic(meeting == null ? "" : meeting.meetingTopic)
        setMeetinNote(meeting == null ? "" : meeting.meetingNote)
        setLocation(meeting == null ? "" : meeting.location)
        setMeetingDate(meeting == null ? "" : meeting.meetingDate)
        setStartTime(meeting == null ? "" : meeting.startTime)
        setEndTime(meeting == null ? "" : meeting.endTime)
        setAttendeesList(attendees)
    }, [meeting]);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (meetingID == 0) {
            createMeeting(meetingData).then(res => {
                // console.log(res);
            });
        }
        else {
            updateMeeting(meetingID, meetingData).then(res => {
                // console.log(res);
            });
        }
        loadDataOfMeeting();
        setOpen(false);
    };

    return (
        <form onSubmit={handleSubmit} id="meetingForm">
        <Sheet
            sx={{
                borderRadius: 'md',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                height: '120%', // 100% is okay, but display bug caused by <form>
            }}
        >
            <DialogTitle>{name}</DialogTitle>
            <ModalClose />
            <Divider sx={{ mt: 'auto' }} />

            <DialogContent
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                    gap: 1.5,
                }}
            >
                <FormControl sx={{ gridColumn: '1/-1' }}>
                    <FormLabel>Meeting Topic</FormLabel>
                    <Input
                        value={meetingTopic}
                        onChange={(event) => setMeetingTopic(event.target.value)}
                        required
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Meeting Date</FormLabel>
                    <Input
                        type="date"
                        slotProps={{
                            input: {
                                min: '1970-01-01',
                                max: '2100-01-01',
                            },
                        }}
                        value={meetingDate}
                        onChange={(event) => setMeetingDate(event.target.value)}
                        required
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Location</FormLabel>
                    <Input
                        endDecorator={<PlaceOutlinedIcon />}
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Start Time</FormLabel>
                    <Input
                        type="time"
                        value={startTime}
                        onChange={(event) => setStartTime(event.target.value+":00")}
                        required
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>End Time</FormLabel>
                    <Input
                        type="time"
                        value={endTime}
                        onChange={(event) => setEndTime(event.target.value+":00")}
                        required
                    />
                </FormControl>

                <FormControl sx={{ gridColumn: '1/-1' }}>
                    <FormLabel>Attendees</FormLabel>
                    <Autocomplete
                        key={attendees}
                        isOptionEqualTo={(option, value) => option.peopleID === value.peopleID}
                        multiple
                        options={people}
                        getOptionLabel={(option) => option.name}
                        default={attendees}
                        onChange={(event, value) => setAttendeesList(value)}
                    />
                </FormControl>

                <FormControl sx={{ gridColumn: '1/-1' }}>
                    <FormLabel>Meeting Note</FormLabel>
                    <Textarea
                        minRows={10}
                        size="md"
                        variant="outlined"
                        value={meetingNote}
                        onChange={(event) => setMeetinNote(event.target.value)}
                    />
                </FormControl>

            </DialogContent>


            <Divider sx={{ mt: 'auto' }} />
            <Stack
                direction="row-reverse"
                useFlexGap
                spacing={1}
            >
                <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() => setOpen(false)}
                >
                    Cancel
                </Button>

                <Button type="submit">
                    Save
                </Button>
            </Stack>
        </Sheet>
        </form>
    )
}
