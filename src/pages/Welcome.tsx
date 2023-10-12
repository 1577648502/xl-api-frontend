import {useModel} from '@umijs/max';
import {Card, theme, Typography} from 'antd';
import React, {useEffect, useState} from 'react';
import {Link, useParams} from "@@/exports";
import GetGiftModal from "@/components/Gift/GetGift";
import {getUserByInvitationCodeUsingPOST} from "@/services/qiApi-backend/userController";


const {Text, Title} = Typography;
/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: any
  index: number;
  desc: any;
  href: string;
}> = ({title, index, desc}) => {
  const {useToken} = theme;
  const {token} = useToken();
  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <br/>
    </div>
  );
};


const Welcome: React.FC = () => {
  const {token} = theme.useToken();
  const {initialState} = useModel('@@initialState');
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<API.UserVO>()
  const params = useParams()
  const getUserByInvitationCode = async () => {
    const res = await getUserByInvitationCodeUsingPOST({invitationCode: params.id})
    if (res.code === 0 && res.data) {
      if (initialState?.loginUser && initialState?.loginUser.invitationCode === params.id) {
        // message.error("不能邀请自己")
        return
      }
      if (!initialState?.loginUser) {
        setOpen(true)
        setData(res.data)
      }
    }
  }
  useEffect(() => {
    if (params.id) {
      getUserByInvitationCode()
    }
  }, [])

  return (
    <>

      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            <Title level={3}> 欢迎使用 Xl-API 接口开放平台 🎉</Title>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href="https://api.qimuu.icu/"
              title={<Title level={5}>多样化的接口选择</Title>}
              desc={<Text
                strong>平台上提供丰富多样的接口供您选择，涵盖了各个领域的功能和服务，满足不同需求。</Text>}
            />
            <InfoCard
              index={2}
              href="https://api.qimuu.icu/"
              title={<Title level={5}>在线调试功能</Title>}
              desc={<Text
                strong>您可以在平台上进行接口在线调试，快速验证接口的功能和效果，节省了开发调试的时间和工作量。</Text>}
            />
          </div>
        </div>
        <GetGiftModal data={data} onCancel={() => setOpen(false)} open={open}/>
      </Card>

    </>
  );
};

export default Welcome;
