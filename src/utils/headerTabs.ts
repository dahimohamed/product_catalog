type HeaderTabType = {
  id: number;
  path: string;
  name: string;
};

type HeaderTabsType = Array<HeaderTabType>;

export const headerTabs: HeaderTabsType = [
  {
    id: 1,
    path: '/',
    name: 'home',
  },

  {
    id: 2,
    path: '/phones',
    name: 'phones',
  },

  {
    id: 3,
    path: '/tablets',
    name: 'tablets',
  },

  {
    id: 4,
    path: '/accessories',
    name: 'accessories',
  },
];
