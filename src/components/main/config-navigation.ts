import { paths } from 'src/routes/paths';

type PageLink = {
  order: string;
  subheader: string;
  items: {
    title: string;
    path: string;
  }[];
  cover?: string;
  isNew?: boolean;
};

export const pageLinks: PageLink[] = [
  {
    order: '1',
    subheader: 'Marketing',
    cover: '/assets/images/menu/menu_marketing.jpg',
    items: [],
  },
  {
    order: '6',
    subheader: 'Travel',
    cover: '/assets/images/menu/menu_travel.jpg',
    items: [],
  },
  {
    order: '2',
    subheader: 'Career',
    cover: '/assets/images/menu/menu_career.jpg',
    items: [],
  },
  {
    order: '5',
    subheader: 'E-learning',
    cover: '/assets/images/menu/menu_elearning.jpg',
    items: [],
  },
  {
    isNew: true,
    order: '3',
    subheader: 'E-commerce',
    cover: '/assets/images/menu/menu_ecommerce.jpg',
    items: [],
  },
  {
    order: '4',
    subheader: 'Common',
    items: [],
  },
];

type NavConfig = {
  title: string;
  path: string;
  children?: PageLink[];
};

export const navConfig: NavConfig[] = [
  { title: 'Home', path: paths.home },
  { title: 'Featured', path: paths.featured },
  { title: 'Entertainment', path: paths.entertainment },
];
