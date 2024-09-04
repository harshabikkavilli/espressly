import Collapse from '@mui/material/Collapse';

import NavSectionVertical from 'src/components/nav-section/vertical/nav-section-vertical';
import { useBoolean } from 'src/hooks/use-boolean';
import { useActiveLink } from 'src/routes/hooks';
import { NavListProps } from '../types';
import NavItem from './NavItem';

export default function NavList({ data }: NavListProps) {
  const active = useActiveLink(data.path, !!data.children);

  const menuOpen = useBoolean();

  return (
    <>
      <NavItem
        open={menuOpen.value}
        onClick={menuOpen.onToggle}
        //
        title={data.title}
        path={data.path}
        //
        active={active}
        hasChild={!!data.children}
        externalLink={data.path.includes('http')}
      />

      {!!data.children && (
        <Collapse in={menuOpen.value} unmountOnExit>
          <NavSectionVertical
            data={data.children}
            slotProps={{
              rootItem: {
                pl: 1,
                minHeight: 30,
              },
              subheader: {
                pl: 1,
              },
            }}
          />
        </Collapse>
      )}
    </>
  );
}
