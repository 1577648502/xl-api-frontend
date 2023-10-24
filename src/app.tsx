import {SettingDrawer} from '@ant-design/pro-components';
import type {RunTimeLayoutConfig} from '@umijs/max';
import {history} from '@umijs/max';
import {AvatarDropdown, AvatarName} from './components/RightContent/AvatarDropdown';
import {requestConfig} from '@/requestConfig';
import Settings from '../config/defaultSettings';
import {valueLength} from "@/pages/User/UserInfo";
import {getLoginUserUsingGET} from "@/services/qiApi-backend/userController";
import React from "react";
import {Docs, helloWord} from "@/components/RightContent";
import NoFoundPage from "@/pages/404";

const loginPath = '/user/login';
const whiteList = [loginPath, "/", "/account/center"]

const baiduStatistics = () => {
  const hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1c3c7a064d6a39da5a90bf71821b4a9a";
  const s = document.getElementsByTagName("script")[0];
  // @ts-ignore
  s.parentNode.insertBefore(hm, s);
};


const stats: InitialState = {
  loginUser: undefined,
  settings: Settings,
  open: false
};

export async function getInitialState(): Promise<InitialState> {
  console.log(`%c${helloWord}`, 'color:#e59de3')
  try {
    const res = await getLoginUserUsingGET();
    if (res.data && res.code === 0) {
      stats.loginUser = res.data;
    }
  } catch (error) {
    history.push(loginPath);
  }
  return stats;
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({initialState, setInitialState}) => {
  return {
    actionsRender: () => [<Docs key="doc"/>],
    waterMarkProps: {
      content: initialState?.loginUser?.userName,
    },
    // logo: logo,
    avatarProps: {
      src: valueLength(initialState?.loginUser?.userAvatar) ? initialState?.loginUser?.userAvatar :
        "https://img.qimuu.icu/typory/notLogin.png",
      title: initialState?.loginUser ? <AvatarName/> : "游客",
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>
      },
    },
    onPageChange: () => {
      // 百度统计
      baiduStatistics()
      const {location} = history;
      // if (!whiteList.includes(location.pathname)) {
      //   getInitialState();
      // }
      // 如果没有登录，重定向到 login
      if (!initialState?.loginUser && !/^\/\w+\/?$/.test(location.pathname) && location.pathname !== '/'
        && location.pathname !== '/interface/list' && !location.pathname.includes("/interface_info/")) {
        history.push(loginPath);
      }
    },
    // 自定义 403 页面
    unAccessible: <NoFoundPage/>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading/>;
      return (
        <>
          {children}
          <SettingDrawer
            disableUrlParams
            enableDarkTheme
            settings={initialState?.settings}
            onSettingChange={(settings) => {
              setInitialState((preInitialState) => ({
                ...preInitialState,
                settings,
              }));
            }}
          />
        </>
      );
    },
    ...initialState?.settings
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = requestConfig;
