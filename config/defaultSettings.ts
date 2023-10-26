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
  title: 'Xl-API 接口开放平台',
  pwa: false,
  logo: 'http://110.41.132.124:9000/public/KgKkdTOM-WX20230508-175957%402x.png',
  iconfontUrl: 'http://110.41.132.124:9000/public/KgKkdTOM-WX20230508-175957%402x.png',
};
export default Settings;
