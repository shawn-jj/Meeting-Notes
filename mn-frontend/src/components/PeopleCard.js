import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import Sheet from '@mui/joy/Sheet';

import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

import { loadMeetingsByPeopleID } from "../utils/Client"

export default function PeopleCard({ person }) {

    // Variables for getting meetings
    const [meetings, setMeetings] = React.useState([]);
    
    // Show 4 recent meetings
    const meetingsDisplay = meetings.length <= 4 ? meetings : meetings.slice(0, 4); 

    React.useEffect(() => {

        loadMeetingsByPeopleID(person.peopleID).then(res => {
            setMeetings(res.data)
        });

    }, []);

    return (
        <Card
            variant="outlined"
            sx={{
                minWidth: 300,
            }}
        >
            {/* Card header */}
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Avatar
                    variant="outlined"
                    sx={{ borderRadius: '50%' }}
                >
                    {
                        // Handle the display of names with one or two words
                        person.name.includes(' ') ? person.name.split(' ')[0][0] + person.name.split(' ')[1][0] : person.name.split(' ')[0][0]
                    }
                </Avatar>
                <div>
                    <Typography level="title-md">{person.name}</Typography>
                    <Typography level="body-xs">{person.role}</Typography>
                </div>
            </Box>

            <CardContent>
                <Typography level="body-xs">Recent meetings</Typography>
                <Sheet
                    sx={{
                        borderRadius: 'md',
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Stepper orientation="vertical" sx={{ width: 200 }}>
                        {
                            meetingsDisplay.map((meeting, index) => (
                                <Step key={index}>{meeting.meetingTopic}</Step>
                            ))
                        }
                    </Stepper>
                </Sheet>
            </CardContent>

            <CardActions orientation="horizontal">
                <Button
                    variant="plain"
                    endDecorator={<KeyboardArrowRightRoundedIcon fontSize="small" />}
                >
                    View More
                </Button>
            </CardActions >
        </Card>
    );
}
