import {
    Box,
    SkeletonCircle,
    SkeletonText,
} from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import MeetingCard from './components/MeetingCard';
import SidebarWithHeader from './components/SidebarWithHeader'
import { loadMeetings } from "./services/Client.js"


export default function App() {

    // Variables for getting meetings
    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        // Fake loading process
        setTimeout(() => {

            loadMeetings().then(res => {
                setMeetings(res.data)
            }).finally(() => {
                setLoading(false)
            });

        }, 500);

    }, []);

    // Loading UI
    if (loading) {
        return (
            <div>
                <SidebarWithHeader>
                    <Box padding='6' boxShadow='lg' bg='white'>
                        <SkeletonCircle size='10' />
                        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                    </Box>
                </SidebarWithHeader>
            </div>
        )
    }

    // Display meeting data as cards
    return (
        <div>
            <SidebarWithHeader>
                {
                    meetings.map((meeting, index) => (
                            <MeetingCard key={index} {...meeting} />
                        ))
                }
            </SidebarWithHeader>
        </div>
    )
}