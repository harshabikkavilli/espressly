import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'components/image';

import { useRouter } from 'routes/hooks/use-router';
import { paths } from 'routes/paths';

import { bgGradient } from 'theme/css';

export default function WelcomeBanner() {
  const {push} = useRouter();
  const theme = useTheme();

  const onGetStarted = () => {
    push(paths.loginBackground);
  };

  const renderOverlay = (
    <Box
      sx={{
        ...bgGradient({
          startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
          endColor: `${theme.palette.common.black} 75%`,
        }),
        backgroundColor: alpha(theme.palette.common.black, 0.24),
        top: 0,
        left: 0,
        zIndex: 8,
        width: 1,
        height: 1,
        position: 'absolute',
      }}
    />
  );

  return (
    <Box
      sx={{
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        position: 'relative',
        color: 'common.white',
        justifyContent: 'center',
      }}
    >
      <Stack
        alignItems="center"
        sx={{
          zIndex: 9,
          py: { xs: 20, md: 0 },
          position: { md: 'absolute' },
        }}
      >
        <Typography variant="h2" sx={{ color: 'info.main', maxWidth: 480, mb: 5 }}>
          Your Ultimate Travel Companion!
        </Typography>

        <Typography variant="subtitle1" sx={{ mb: 5, maxWidth: 600 }}>
          Embark on unforgettable journeys, plan your dream vacations, and explore the world with
          our powerful trip planner app.
        </Typography>

        <Button variant="contained" size="large" color="primary" onClick={onGetStarted}>
          Get Started
        </Button>
      </Stack>
      <Box
        sx={{
          width: 1,
          height: 1,
          position: {
            xs: 'absolute',
            md: 'relative',
          },
        }}
      >
        {renderOverlay}

        <Image
          alt="hero"
          src="/assets/images/travel/travel_post_hero.jpg"
          sx={{
            width: 1,
            height: { xs: 1, md: '100vh' },
          }}
        />
      </Box>
    </Box>
  );
}
