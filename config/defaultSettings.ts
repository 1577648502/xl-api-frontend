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
  logo: 'http://110.41.132.124:9000/public/KgKkdTOM-WX20230508-175957%402x.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231025T061441Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f70760c11c10b23d348cf390577a58218446e48afc5d9af16a72e33a1369a10d',
  iconfontUrl: 'http://110.41.132.124:9000/public/KgKkdTOM-WX20230508-175957%402x.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20231025%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231025T061441Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f70760c11c10b23d348cf390577a58218446e48afc5d9af16a72e33a1369a10d',
};
export default Settings;
