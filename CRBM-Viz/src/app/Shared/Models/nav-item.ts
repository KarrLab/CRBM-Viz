import { NavItemDisplayLevel } from '../Enums/nav-item-display-level';

export interface NavItem {
  id?: string;
  label: string;
  icon?: string;
  iconType?: string;
  children?: string[];
  display: NavItemDisplayLevel;
  route?: (string | number)[];
  click?: string;
  disabled?: boolean;
}

export const navItems: NavItem[] = [
  // Top-level menu
  {
    id: 'Models',
    label: 'Models',
    icon: 'project-diagram',
    iconType: 'fas',
    children: [
      'Models-Browse',
      'Models-New',
      'Models-Yours',
    ],
    display: NavItemDisplayLevel.always,
  },
  {
    id: 'Simulations',
    label: 'Simulations',
    icon: 'timeline',
    iconType: 'mat',
    children: [
      'Simulations-Browse',
      'Simulations-New',
      'Simulations-Yours',
    ],
    display: NavItemDisplayLevel.always,
  },
  {
    id: 'Visualizations',
    label: 'Visualizations',
    icon: 'chart-area',
    iconType: 'fas',
    children: [
      'Visualizations-Browse',
      'Visualizations-New',
      'Visualizations-Yours',
      ],
    display: NavItemDisplayLevel.always,
  },
  {
    id: 'Help',
    label: 'Help',
    icon: 'help',
    iconType: 'mat',
    children: ['Help-Help', 'Help-About'],
    display: NavItemDisplayLevel.always,
  },
  {
    id: 'User',
    label: 'Account',
    icon: 'account_circle',
    iconType: 'mat',
    children: [
      'User-Profile',
      'User-Sign-In',
      'User-Sign-Up',
      'User-Sign-Out',
    ],
    display: NavItemDisplayLevel.always,
  },

  // Models sub-menu
  {
    id: 'Models-Browse',
    label: 'Browse',
    icon: 'view_list',
    iconType: 'mat',
    display: NavItemDisplayLevel.always,
    route: ['/models'],
  },
  {
    id: 'Models-New',
    label: 'New',
    icon: 'add_circle',
    iconType: 'mat',
    display: NavItemDisplayLevel.always,
    route: ['/models/new'],
    disabled: true,
  },
  {
    id: 'Models-Yours',
    label: 'Your models',
    icon: 'account_circle',
    iconType: 'mat',
    display: NavItemDisplayLevel.loggedIn,
    route: ['/user/models'],
    disabled: true,
  },

  // Simulations sub-menu
  {
    id: 'Simulations-Browse',
    label: 'Browse',
    icon: 'view_list',
    iconType: 'mat',
    display: NavItemDisplayLevel.always,
    route: ['/simulations/'],
  },
  {
    id: 'Simulations-New',
    label: 'New',
    icon: 'add_circle',
    iconType: 'mat',
    display: NavItemDisplayLevel.always,
    route: ['/simulations/new'],
    disabled: true,
  },
  {
    id: 'Simulations-Yours',
    label: 'Your simulations',
    icon: 'account_circle',
    iconType: 'mat',
    display: NavItemDisplayLevel.loggedIn,
    route: ['/user/simulations'],
  },

  // Visualizations sub-menu
  {
    id: 'Visualizations-Browse',
    label: 'Browse',
    icon: 'view_list',
    iconType: 'mat',
    display: NavItemDisplayLevel.always,
    route: ['/visualizations'],
  },
  {
    id: 'Visualizations-New',
    label: 'New',
    icon: 'add_circle',
    iconType: 'mat',
    display: NavItemDisplayLevel.always,
    route: ['/visualizations/new'],
    disabled: true,
  },
  {
    id: 'Visualizations-Yours',
    label: 'Your visualizations',
    icon: 'account_circle',
    iconType: 'mat',
    display: NavItemDisplayLevel.loggedIn,
    route: ['/user/visualizations'],
    disabled: true,
  },

  // About sub-menu
  {
    id: 'Help-Help',
    label: 'Help',
    icon: 'help',
    iconType: 'mat',
    display: NavItemDisplayLevel.always,
    route: ['/about/help'],
  },
  {
    id: 'Help-About',
    label: 'About',
    icon: 'info',
    iconType: 'mat',
    display: NavItemDisplayLevel.always,
    route: ['/about'],
  },

  // User account sub-menu
  {
    id: 'User-Profile',
    label: 'Profile',
    icon: 'account_circle',
    iconType: 'mat',
    display: NavItemDisplayLevel.loggedIn,
    route: ['/user'],
  },
  {
    id: 'User-Sign-In',
    label: 'Sign in',
    icon: 'sign-in-alt',
    iconType: 'fas',
    display: NavItemDisplayLevel.loggedOut,
    route: null,
    click: 'toggleLogin',
  },
  {
    id: 'User-Sign-Up',
    label: 'Sign up',
    icon: 'user-plus',
    iconType: 'fas',
    display: NavItemDisplayLevel.loggedOut,
    route: null,
    click: 'toggleLogin',
  },
  {
    id: 'User-Sign-Out',
    label: 'Sign out',
    icon: 'sign-out-alt',
    iconType: 'fas',
    display: NavItemDisplayLevel.loggedIn,
    route: null,
    click: 'toggleLogin',
  },
];
