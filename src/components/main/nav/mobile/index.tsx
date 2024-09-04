import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { useEffect } from 'react';

import Iconify from '../../../iconify';
import Scrollbar from '../../../scrollbar';
import { NavProps } from '../types';
import NavList from './NavList';

import { usePathname } from 'routes/hooks/use-pathname';
import Logo from 'src/components/logo';
import { useBoolean } from 'src/hooks/use-boolean';
import { NAV } from 'src/layouts/config-layout';

export default function NavMobile({ data }: NavProps) {
  const pathname = usePathname();

  const mobileOpen = useBoolean();

  useEffect(() => {
    if (mobileOpen.value) {
      mobileOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <IconButton onClick={mobileOpen.onTrue} sx={{ ml: 1, color: 'inherit' }}>
        <Iconify icon="carbon:menu" />
      </IconButton>

      <Drawer
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_VERTICAL,
          },
        }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          <List component="nav" disablePadding>
            {data.map((list) => (
              <NavList key={list.title} data={list} />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}
