import { Box, Container, Divider } from '@mui/material';
import { useEffect } from 'react';
import { useRouter } from 'src/routes/hooks/use-router';

import { useAuth } from 'providers/AuthProvider';

import { paths } from 'routes/paths';

import FeaturesSection from './FeaturesSection';
import ReadyToSection from './ReadyToSection';
import WelcomeBanner from './WelcomeBanner';

export default function Welcome() {
  const {
    authData: { isAuthenticated, userLoading },
  } = useAuth()!;
  const {push} = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      push(paths.home);
    }
  }, [isAuthenticated]);

  if (userLoading) {
    return <></>;
  }
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <WelcomeBanner />

        <Container
          sx={{
            mb: { md: 10 },
            left: { md: 0 },
            right: { md: 0 },
            bottom: { md: 0 },
            mx: { md: 'auto' },
            pt: { xs: 3, md: 0 },
            position: { md: 'absolute' },
          }}
        ></Container>
      </Box>
      <FeaturesSection />
      <ReadyToSection />
      <Divider flexItem orientation="horizontal" />
    </>
  );
}
