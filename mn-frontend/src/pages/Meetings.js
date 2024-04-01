import React, { useEffect, useState } from 'react'

import Box from '@mui/joy/Box';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Sheet from '@mui/joy/Sheet';

import MeetingDetails from '../components/MeetingDetails';
import MeetingList from '../components/MeetingList';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { loadMeetings, loadPeople } from "../utils/Client"

export default function Meetings() {

    // Variables for getting people
    const [people, setPeople] = useState([]);
    // Variables for getting meetings
    const [meetings, setMeetings] = useState([]);
    const [selectedMeeting, setSelectedMeeting] = useState([]);
    // Variables for getting meeting attendees
    const [selectedMeetingAttendees, setSelectedMeetingAttendees] = useState([]);

    useEffect(() => {

        loadMeetings().then(res => {
            setMeetings(res.data)
        })

        loadPeople().then(res => {
            setPeople(res.data)
        })

    }, []);

    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>

                <Header /> {/* The Header is for Mobile  */}
                <Sidebar currentPage="Meetings" />

                <Box component="main" className="MainContent" sx={{ flex: 1 }}>
                    <Sheet
                        sx={{
                            flex: 1,
                            width: '100%',
                            mx: 'auto',
                            pt: { xs: 'var(--Header-height)', sm: 0 },
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'minmax(min-content, min(30%, 400px)) 1fr',
                            },
                        }}
                    >
                        <Sheet
                            sx={{
                                position: { xs: 'fixed', sm: 'sticky' },
                                transform: {
                                    xs: 'translateX(calc(100% * (var(--MeetingDetails-slideIn, 1) - 1)))',
                                    sm: 'none',
                                },
                                transition: 'transform 0.4s, width 0.4s',
                                zIndex: 100,
                                width: '100%',
                                top: 52,
                            }}
                        >

                            {/* meeting list */}
                            <MeetingList
                                meetings={meetings}
                                people={people}
                                selectedMeetingID={selectedMeeting.meetingID}
                                setSelectedMeeting={setSelectedMeeting}
                                setSelectedMeetingAttendees={setSelectedMeetingAttendees}
                            />
                        </Sheet>

                        {/* meeting content */}
                        <MeetingDetails 
                            meeting={selectedMeeting} 
                            people={people}
                            attendees={Object.values(selectedMeetingAttendees)}
                        />
                    </Sheet>
                </Box>

            </Box>
        </CssVarsProvider>
    );
}