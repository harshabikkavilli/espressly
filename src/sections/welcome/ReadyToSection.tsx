import { paths } from 'routes/paths';
import { useRouter } from 'routes/hooks/use-router';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ReadyToSection() {
  const { push } = useRouter();

  const onGetStarted = () => {
    push(paths.loginBackground);
  };
  return (
    <Stack
      alignItems="center"
      sx={{
        px: 4,
        pb: 4,
        maxWidth: '1200px',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" sx={{ pb: 2 }}>
        Plan Your Dream Getaway
      </Typography>

      <Typography sx={{ color: 'text.secondary', pb: 2 }}>
       	Turn your travel dreams into reality. Explore destinations, create itineraries,
        and experience the world with our user-friendly trip planner app. Get started now and make
        memories that last a lifetime!
      </Typography>

      <Button variant="contained" size="large" color="primary" onClick={onGetStarted}>
        Get Started
      </Button>
    </Stack>
  );
}
