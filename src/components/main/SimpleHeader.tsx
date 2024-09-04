import Logo from 'components/logo';
import { bgBlur } from 'theme/css';
import { paths } from 'routes/paths';
import { RouterLink } from 'routes/components';
import HeaderShadow from 'components/HeaderShadow';
import { useOffSetTop } from 'hooks/use-off-set-top';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import { HEADER } from 'src/layouts/config-layout';

export default function SimpleHeader() {
  const theme = useTheme();
  const offset = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offset && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Logo />
        <Stack
          spacing={1}
          flexGrow={1}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Link
            href={paths.loginBackground}
            component={RouterLink}
            color="inherit"
            sx={{ typography: 'subtitle2' }}
          >
            Login
          </Link>

          <Button variant="contained" color="primary" href={paths.registerBackground}>
            Register
          </Button>
        </Stack>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}
