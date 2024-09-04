import { paths } from 'routes/paths';

import Box from '@mui/material/Box';

import { usePathname } from 'src/routes/hooks/use-pathname';

import { HEADER } from 'src/layouts/config-layout';

import Footer from './Footer';
import Header from './Header';
import SimpleHeader from './SimpleHeader';

const pathsOnDark = ['/auth/login', '/auth/register', '/travel'];

const spacingLayout = [...pathsOnDark, '/', '/e-learning', '/marketing'];

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isAuth = [paths.loginBackground, paths.registerBackground].includes(pathname);
  const actionPage = (arr: string[]) =>
    arr.some((path) => pathname === path || pathname === `${path}/`);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1, width: 1 }}>
      {!isAuth && (isHome ? <SimpleHeader /> : <Header headerOnDark={actionPage(pathsOnDark)} />)}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {!actionPage(spacingLayout) && <Spacing />}

        {children}
      </Box>

      {!isAuth && <Footer />}
    </Box>
  );
}

function Spacing() {
  return (
    <Box
      sx={{
        height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
      }}
    />
  );
}
