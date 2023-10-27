import React, {useEffect, useRef, useState} from "react";
import {Button, message, Modal} from "antd";
import {ProFormText} from "@ant-design/pro-form";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {LoginForm} from "@ant-design/pro-components";
import {ProFormInstance} from "@ant-design/pro-form/lib";

export type Props = {
  open: boolean;
  onCancel: () => void;
  data?: API.UserUpdateRequest
  setPassword: (values: API.UserUpdateRequest) => Promise<void>;
};

const PasswordModal: React.FC<Props> = (props) => {
  const formRef = useRef<ProFormInstance>();
  const [key, setKey] = useState<"bind" | "unbind">()
  const {open, data, onCancel,setPassword} = props;
  useEffect(() => {
    // 关闭表单时刷新form
    if (!open) {
      formRef.current?.resetFields()
    }
  }, [open]);
  return (
    <Modal
      footer={null}
      centered
      open={open}
      width={500}
      onCancel={onCancel}
    >
      <LoginForm
        formRef={formRef}
        contentStyle={{
          minWidth: 280,
          maxWidth: '75vw',
        }}
        submitter={
          {
            render: () => {
              return [
                <>
                  <Button
                    type={"primary"}
                    key="submit"
                    block
                    onClick={() => {
                      setKey("bind")
                      formRef.current?.submit()
                    }}
                  >
                    {'设置密码'}
                  </Button>
                </>
              ];
            },
          }
        }
        onFinish={async (values:any) => {
          const {password,newPassword} = values
          if (password!=newPassword){
            message.error('密码不一致');
            return
          }
            setPassword?.({
              id:data?.id,
              userPassword:values.password
            })
        }}
      >
        <ProFormText.Password
          placeholder="密码"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined/>,
          }}
          width="md"
          name="password"
          label="密码"
        />
        <ProFormText.Password
          placeholder="确认密码"
          rules={[
            {
              required: true,
              message: '请输入确认密码',
            },
          ]}
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined/>,
          }}
          width="md"
          name="newPassword"
          label="确认密码"
        />
      </LoginForm>
    </Modal>
  );
};

export default PasswordModal;
