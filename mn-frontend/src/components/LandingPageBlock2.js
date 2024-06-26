import * as React from 'react';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function LandingPageBlock2() {
  return (
    <TwoSidedLayout imgpath = "https://github.com/shawn-jj/Meeting-Notes/blob/main/assets/preview-v090.jpg?raw=true">
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        Faster and easier
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Meeting minutes at your fingertips
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Easily create your meeting minutes with presets, no need to worry about formatting and layout.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          my: 2,
          '& > *': { flex: 'auto' },
        }}
      >
        <Button size="lg" variant="outlined" color="neutral">
          Learn More
        </Button>
        <Button 
          size="lg" 
          endDecorator={<ArrowForward fontSize="xl" />}
          onClick={()=>{window.location.href="/login"}}
        >
          Get Started
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          textAlign: 'left',
          '& > *': {
            flexShrink: 0,
          },
        }}
      >
        <AvatarGroup size="lg">
          <Avatar>SK</Avatar>
          <Avatar>RH</Avatar>
          <Avatar>...</Avatar>
        </AvatarGroup>
        <Typography textColor="text.secondary">
          Join us to <b>unleash</b> your productivity <br />
          and save <b>20%</b> of your time!
        </Typography>
      </Box>
      <Typography
        level="body-xs"
        sx={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        © Meeting Notes {new Date().getFullYear()}
      </Typography>
    </TwoSidedLayout>
  );
}