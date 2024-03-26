import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';

export default function PeopleCard() {
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
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                        />
                    </AspectRatio>
                    <CardContent>
                        <br />
                        <Typography level="title-lg" component="div">
                            Name
                        </Typography>
                        <Typography level="body-lg">
                            Role
                        </Typography>
                        <CardActions buttonFlex="none">
                            <Button variant="solid" color="primary" size="sm">
                                View profile
                            </Button>
                        </CardActions>
                    </CardContent>
                    <CardContent>
                        <Typography level="h1">
                            7
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
