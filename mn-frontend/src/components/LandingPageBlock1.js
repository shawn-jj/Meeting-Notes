/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from './TwoSidedLayout';

export default function LandingPageBlock1() {
  return (
    <TwoSidedLayout imgpath = "https://github.com/shawn-jj/Meeting-Notes/blob/main/assets/preview-v080-1.jpg?raw=true">
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        The power of simplicity
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Meeting minutes are clear at a glance
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Easily manage your meeting minutes without worrying about clutter and disorganization.
      </Typography>
      <Button 
        size="lg" 
        endDecorator={<ArrowForward fontSize="xl" />} 
        onClick={()=>{window.location.href="/login"}}
      >
        Get Started
      </Button>
      <Typography>
        Already a member? <Link fontWeight="lg" href="/login">Sign in</Link>
      </Typography>
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