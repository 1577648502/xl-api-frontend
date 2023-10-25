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
  logo: 'http://110.41.132.124:9000/public/3HrmkRHc-WX20230508-175957%402x.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20231024%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231024T080103Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b5f43262ded4f6f47ce93d0a8d44d02d79a9a4e114f1f37bfba72bf696de76ea',
  iconfontUrl: 'http://110.41.132.124:9000/public/3HrmkRHc-WX20230508-175957%402x.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20231024%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231024T080103Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b5f43262ded4f6f47ce93d0a8d44d02d79a9a4e114f1f37bfba72bf696de76ea',
};
export default Settings;
