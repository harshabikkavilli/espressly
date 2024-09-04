import { useEffect } from 'react';
import { paths } from 'routes/paths';
import { useAuth } from 'providers/AuthProvider';

import { Box, Divider, Container } from '@mui/material';

import { useRouter } from 'src/routes/hooks/use-router';

import WelcomeBanner from './WelcomeBanner';
import ReadyToSection from './ReadyToSection';
import FeaturesSection from './FeaturesSection';

export default function Welcome() {
  const {
    authData: { isAuthenticated, userLoading },
  } = useAuth()!;
  const { push } = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      push(paths.home);
    }
  }, [isAuthenticated, push]);

  if (userLoading) {
    return <>Loading</>;
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
         />
      </Box>
      <FeaturesSection />
      <ReadyToSection />
      <Divider flexItem orientation="horizontal" />
    </>
  );
}
