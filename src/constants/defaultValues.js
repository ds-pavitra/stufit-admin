import axios from 'axios';

export const UserRole = {
  Admin: 0,
  Editor: 1,
};

/* 
Menu Types:
"menu-default", "menu-sub-hidden", "menu-hidden"
*/
export const defaultMenuType = 'menu-default';

export const subHiddenBreakpoint = 1280;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = 'en';
export const localeOptions = [
  { id: 'en', name: 'English - LTR', direction: 'ltr' },
  { id: 'es', name: 'Español', direction: 'ltr' },
  { id: 'enrtl', name: 'English - RTL', direction: 'rtl' },
];

export const firebaseConfig = {
  apiKey: 'AIzaSyBBksq-Asxq2M4Ot-75X19IyrEYJqNBPcg',
  authDomain: 'gogo-react-login.firebaseapp.com',
  databaseURL: 'https://gogo-react-login.firebaseio.com',
  projectId: 'gogo-react-login',
  storageBucket: 'gogo-react-login.appspot.com',
  messagingSenderId: '216495999563',
};

export const currentUser = {
  id: 1,
  title: 'Sarah Kortney',
  img: '/assets/img/profiles/l-1.jpg',
  date: 'Last seen today 15:24',
  role: UserRole.Admin,
};

export const adminRoot = '/app';
export const stufitAdminRoot = '/stufit-admin/#/app';

export const buyUrl = 'https://1.envato.market/k4z0';
export const searchPath = `${adminRoot}/pages/miscellaneous/search`;
export const servicePath = 'https://api.coloredstrategies.com';

export const themeColorStorageKey = '__theme_selected_color';
export const isMultiColorActive = false;
export const defaultColor = 'light.bluenavy';
export const isDarkSwitchActive = true;
export const defaultDirection = 'ltr';
export const themeRadiusStorageKey = '__theme_radius';
export const isAuthGuardActive = false;
export const colors = [
  'bluenavy',
  'blueyale',
  'blueolympic',
  'greenmoss',
  'greenlime',
  'purplemonster',
  'orangecarrot',
  'redruby',
  'yellowgranola',
  'greysteel',
];

export const apiBaseUrl = 'http://35.154.8.157/stufit-api/api';

const getTokenFromLocalStorage = () => {
  const cUserData = JSON.parse(localStorage.getItem('stufit_current_user'));
  return cUserData
    ? `${cUserData.uid.token_type} ${cUserData.uid.access_token}`
    : null;
};

export const apiRequestAsync = async (
  method,
  url,
  data,
  headers = {},
  tokenNull
) => {
  try {
    let token;
    console.log(token);
    if (!tokenNull) {
      token = getTokenFromLocalStorage();
    }
    const response = await axios({
      method,
      url,
      data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(token ? { Authorization: token } : {}),
        ...headers,
      },
    });

    const responseData = response.data;
    responseData.status = response.status;
    return responseData;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    if (error.request) {
      throw new Error('No response received from the server.');
    } else {
      throw new Error(`Error: ${error.message}`);
    }
  }
};
