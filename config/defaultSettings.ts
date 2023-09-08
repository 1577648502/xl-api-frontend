import {ProLayoutProps} from '@ant-design/pro-components';

const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
  navTheme?: string
} = {
  navTheme: 'light',
  colorPrimary: "#1677FF",
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  splitMenus: false,
  title: '柒木接口',
  pwa: false,
  // logo: 'https://img.qimuu.icu/typory/logo.gif',
  iconfontUrl: 'https://img.qimuu.icu/typory/logo.gif',
};
export default Settings;
