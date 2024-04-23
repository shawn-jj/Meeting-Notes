import React, { useEffect, useState } from 'react';
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

import { updateMeeting, createMeeting, updateAttendees } from "../utils/Client"

export default function MeetingForm({ loadMeetingData, setOpen, setSnackbarOpen, name, people, attendees, meeting }) {

    const now = new Date();
    const nowDate = now.getFullYear() + "-" + ('0' + (now.getMonth() + 1)).slice(-2) + "-" + ('0' + now.getDate()).slice(-2);
    const nowTime = ('0' + now.getHours()).slice(-2) + ":" + ('0' + now.getMinutes()).slice(-2) + ":00";

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

    // Asynchronous ajax returns the data list and then renders the component after getting the value.
    const IDList = attendeesList && attendeesList.map(attendeesData => attendeesData.peopleID);
    const attendeesIDList = IDList == undefined ? [] : IDList;

    useEffect(() => {
        setMeetingID(meeting == null ? 0 : meeting.meetingID);
        setMeetingTopic(meeting == null ? "" : meeting.meetingTopic);
        setMeetinNote(meeting == null ? "" : meeting.meetingNote);
        setLocation(meeting == null ? "" : meeting.location);
        setMeetingDate(meeting == null ? nowDate : meeting.meetingDate);
        setStartTime(meeting == null ? nowTime : meeting.startTime);
        setEndTime(meeting == null ? nowTime : meeting.endTime);
        setAttendeesList(attendees);
    }, [meeting]); // Reset data when meeting updated

    // meetingID == 0
    const handleCreate = () => {

        createMeeting(meetingData).then(res => {

            updateAttendees(meetingID, attendeesIDList).then(res => {

                loadMeetingData();
                setOpen(false);
                setSnackbarOpen(true);

            }).catch(err => {
                console.log(err);
            });

        }).catch(err => {
            console.log(err);
        });

        setSnackbarOpen(false);
    }

    // meetingID != 0
    const handleUpdate = () => {

        updateMeeting(meetingID, meetingData).then(res => {

            updateAttendees(meetingID, attendeesIDList).then(res => {

                // loadMeetingData(); // bug: loadMeetingData() is not a function
                setOpen(false);
                setSnackbarOpen(true);

            }).catch(err => {
                console.log(err);
            });

        }).catch(err => {
            console.log(err);
        });

        setSnackbarOpen(false);
        setTimeout(() => (window.location.reload()), 2500) // refresh the page
    }

    return (
        <Sheet
            sx={{
                borderRadius: 'md',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                height: '100%',
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
                        onChange={(event) => setStartTime(event.target.value + ":00")}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>End Time</FormLabel>
                    <Input
                        type="time"
                        value={endTime}
                        onChange={(event) => setEndTime(event.target.value + ":00")}
                    />
                </FormControl>

                <FormControl sx={{ gridColumn: '1/-1' }}>
                    <FormLabel>Attendees</FormLabel>
                    <Autocomplete
                        key={attendees}
                        multiple
                        options={people}
                        getOptionLabel={(option) => option.name}
                        defaultValue={attendees}
                        onChange={(event, value) => setAttendeesList(value)}
                        isOptionEqualToValue={(option, value) => option.peopleID === value.peopleID}
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

                {
                    // save new meeting
                    meetingID === 0 && (
                        <Button onClick={() => handleCreate()}>
                            Save
                        </Button>
                    )
                }
                {
                    // save edited meeting
                    meetingID !== 0 && (
                        <Button onClick={() => handleUpdate()}>
                            Save
                        </Button>
                    )
                }
            </Stack>
        </Sheet>
    )
}
