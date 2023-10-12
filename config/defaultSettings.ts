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
  logo: 'http://127.0.0.1:9000/public/5XsZ2S8h-WX20230508-175957%402x.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20231011%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231011T062721Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=db0a69b604c005a2bcba356227af89deeab155886616860c87c67d8a714eeb39',
  iconfontUrl: 'http://127.0.0.1:9000/public/5XsZ2S8h-WX20230508-175957%402x.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20231011%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231011T062721Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=db0a69b604c005a2bcba356227af89deeab155886616860c87c67d8a714eeb39',
};
export default Settings;
