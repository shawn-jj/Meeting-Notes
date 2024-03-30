import React, { useEffect, useState } from 'react'

import Box from '@mui/joy/Box';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Sheet from '@mui/joy/Sheet';

import MeetingDetails from '../components/MeetingDetails';
import MeetingList from '../components/MeetingList';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { loadMeetings } from "../utils/Client"

export default function Meetings() {

    // Variables for getting meetings
    const [meetings, setMeetings] = useState([]);
    const [selectedMeeting, setSelectedMeeting] = useState([]);

    useEffect(() => {

        loadMeetings().then(res => {
            setMeetings(res.data)
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
                                selectedMeetingID={selectedMeeting.meetingID}
                                setSelectedMeeting={setSelectedMeeting}
                            />
                        </Sheet>

                        {/* meeting content */}
                        <MeetingDetails meeting={selectedMeeting} />
                    </Sheet>
                </Box>

            </Box>
        </CssVarsProvider>
    );
}