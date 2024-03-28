import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';

export default function PeopleCard({name, email, role}) {
    const [flex, setFlex] = React.useState(true);
    return (
        <Box>
            <Stack
                spacing={4}
                sx={{
                    display: 'flex',
                    mx: 'auto',
                    py: { xs: 1, md: 1 },
                }}
            >
                <Card
                    orientation="horizontal"
                    variant="outlined"
                    sx={{ boxShadow: 'none' }}
                >
                    {/* How large is the image */}
                    <AspectRatio ratio="3/4" flex={flex} sx={{ flexBasis: 100 }}>
                        {/* <img
                            src=""
                        /> */}
                        <Typography level="title-lg" component="div">
                            {name.includes(' ') ? name.split(' ')[0][0] + name.split(' ')[1][0] : name.split(' ')[0][0]}
                        </Typography>
                    </AspectRatio>
                    <CardContent>
                        <br />
                        <Typography level="title-lg" component="div">
                            {name}
                        </Typography>
                        <Typography level="body-lg">
                            {role}
                        </Typography>
                        <CardActions buttonFlex="none">
                            <Button variant="solid" color="primary" size="sm">
                                View profile
                            </Button>
                        </CardActions>
                    </CardContent>
                    <CardContent>
                        <Typography level="h1">
                            Num
                        </Typography>
                        <Typography>
                            Meetings with you
                        </Typography>
                        <CardActions buttonFlex="none">
                            <Button variant="outlined" color="neutral" size="sm">
                                See details
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
}
