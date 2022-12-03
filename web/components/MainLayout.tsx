import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';
import { differenceInSeconds } from 'date-fns';
import { useRouter } from 'next/router';
import { Layout, Menu, Popover, Alert, Typography, Button, Space, Tooltip } from 'antd';
import {
  SettingOutlined,
  HomeOutlined,
  LineChartOutlined,
  ToolOutlined,
  PlayCircleFilled,
  MinusSquareFilled,
  QuestionCircleOutlined,
  MessageOutlined,
  ExperimentOutlined,
  EditOutlined,
} from '@ant-design/icons';

import classNames from 'classnames';
import { upgradeVersionAvailable } from '../utils/apis';
import { parseSecondsToDurationString } from '../utils/format';

import { OwncastLogo } from './common/OwncastLogo/OwncastLogo';
import { ServerStatusContext } from '../utils/server-status-context';
import { AlertMessageContext } from '../utils/alert-message-context';

import { TextFieldWithSubmit } from './config/TextFieldWithSubmit';
import { TEXTFIELD_PROPS_STREAM_TITLE } from '../utils/config-constants';
import { ComposeFederatedPost } from './ComposeFederatedPost';
import { UpdateArgs } from '../types/config-section';

export type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const context = useContext(ServerStatusContext);
  const { serverConfig, online, broadcaster, versionNumber } = context || {};
  const { instanceDetails, chatDisabled, federation } = serverConfig;
  const { enabled: federationEnabled } = federation;

  const [currentStreamTitle, setCurrentStreamTitle] = useState('');
  const [postModalDisplayed, setPostModalDisplayed] = useState(false);

  const alertMessage = useContext(AlertMessageContext);

  const router = useRouter();
  const { route } = router || {};

  const { Header, Footer, Content, Sider } = Layout;

  const [upgradeVersion, setUpgradeVersion] = useState('');
  const checkForUpgrade = async () => {
    try {
      const result = await upgradeVersionAvailable(versionNumber);
      setUpgradeVersion(result);
    } catch (error) {
      console.log('==== error', error);
    }
  };

  useEffect(() => {
    checkForUpgrade();
  }, [versionNumber]);

  useEffect(() => {
    setCurrentStreamTitle(instanceDetails.streamTitle);
  }, [instanceDetails]);

  const handleStreamTitleChanged = ({ value }: UpdateArgs) => {
    setCurrentStreamTitle(value);
  };

  const handleCreatePostButtonPressed = () => {
    setPostModalDisplayed(true);
  };

  const appClass = classNames({
    'app-container': true,
    online,
  });

  const upgradeVersionString = `${upgradeVersion}` || '';
  const upgradeMessage = `Upgrade to v${upgradeVersionString}`;
  const openMenuItems = upgradeVersion ? ['utilities-menu'] : [];

  const clearAlertMessage = () => {
    alertMessage.setMessage(null);
  };

  const headerAlertMessage = alertMessage.message ? (
    <Alert message={alertMessage.message} afterClose={clearAlertMessage} banner closable />
  ) : null;

  // status indicator items
  const streamDurationString = broadcaster
    ? parseSecondsToDurationString(differenceInSeconds(new Date(), new Date(broadcaster.time)))
    : '';
  const currentThumbnail = online ? (
    <img src="/thumbnail.jpg" className="online-thumbnail" alt="current thumbnail" width="1rem" />
  ) : null;
  const statusIcon = online ? <PlayCircleFilled /> : <MinusSquareFilled />;
  const statusMessage = online ? `Online ${streamDurationString}` : 'Offline';
  const popoverTitle = <Typography.Text>Thumbnail</Typography.Text>;

  const statusIndicator = (
    <div className="online-status-indicator">
      <span className="status-label">{statusMessage}</span>
      <span className="status-icon">{statusIcon}</span>
    </div>
  );
  const statusIndicatorWithThumb = online ? (
    <Popover content={currentThumbnail} title={popoverTitle} trigger="hover">
      {statusIndicator}
    </Popover>
  ) : (
    statusIndicator
  );

  const integrationsMenu = [
    {
      label: <Link href="/admin/webhooks">Webhooks</Link>,
      key: 'webhooks',
    },
    {
      label: <Link href="/admin/access-tokens">Access Tokens</Link>,
      key: 'access-tokens',
    },
    {
      label: <Link href="/admin/actions">External Actions</Link>,
      key: 'actions',
    },
  ];

  const chatMenu = [
    {
      label: <Link href="/admin/chat/messages">Messages</Link>,
      key: 'messages',
    },
    {
      label: <Link href="/admin/chat/users">Users</Link>,
      key: 'chat-users',
    },
  ];

  const utilitiesMenu = [
    {
      label: <Link href="/admin/hardware-info">Hardware</Link>,
      key: 'hardware-info',
    },
    {
      label: <Link href="/admin/stream-health">Stream Health</Link>,
      key: 'stream-health',
    },
    {
      label: <Link href="/admin/logs">Logs</Link>,
      key: 'logs',
    },
    federationEnabled && {
      label: <Link href="/admin/federation/actions">Social Actions</Link>,
      key: 'federation-activities',
    },
  ];

  const configurationMenu = [
    {
      label: <Link href="/admin/config-public-details">General</Link>,
      key: 'config-public-details',
    },
    {
      label: <Link href="/admin/config-server-details">Server Setup</Link>,
      key: 'config-server-details',
    },
    {
      label: <Link href="/admin/config/streamkeys/">Server Setup</Link>,
      key: 'config-streamkeys',
    },
    {
      label: <Link href="/admin/config-video">Video</Link>,
      key: 'config-video',
    },
    {
      label: <Link href="/admin/config-chat">Chat</Link>,
      key: 'config-chat',
    },
    {
      label: <Link href="/admin/config-federation">Social</Link>,
      key: 'config-federation',
    },
    {
      label: <Link href="/admin/config-notify">Notifications</Link>,
      key: 'config-notify',
    },
    {
      label: <Link href="/admin/config/appearance">Appearance</Link>,
      key: 'config-appearance',
    },
    {
      label: <Link href="/admin/config-storage">S3 Storage</Link>,
      key: 'config-storage',
    },
  ];

  const menuItems = [
    { label: <Link href="/admin">Home</Link>, icon: <HomeOutlined />, key: 'home' },
    {
      label: <Link href="/admin/viewer-info">Viewers</Link>,
      icon: <LineChartOutlined />,
      key: 'viewer-info',
    },
    !chatDisabled && {
      key: 'chat-config',
      label: <Link href="/admin/viewer-info">Chat &amp; Users</Link>,
      icon: <MessageOutlined />,
      children: chatMenu,
    },
    federationEnabled && {
      key: 'fediverse-followers',
      label: <Link href="/admin/federation/followers">Followers</Link>,
      icon: (
        <img
          alt="fediverse icon"
          src="/admin/fediverse-white.png"
          width="15rem"
          style={{ opacity: 0.6, position: 'relative', top: '-1px' }}
        />
      ),
    },
    {
      key: 'configuration',
      label: 'Configuration',
      icon: <SettingOutlined />,
      children: configurationMenu,
    },
    {
      key: 'utilities',
      label: 'Utilities',
      icon: <ToolOutlined />,
      children: utilitiesMenu,
    },
    {
      key: 'integrations',
      label: 'Integrations',
      icon: <ExperimentOutlined />,
      children: integrationsMenu,
    },
    upgradeVersion && {
      key: 'upgrade',
      label: <Link href="/upgrade">{upgradeMessage}</Link>,
    },
    {
      key: 'help',
      label: 'Help',
      icon: <QuestionCircleOutlined />,
    },
  ];
  return (
    <Layout className={appClass}>
      <Head>
        <title>Owncast Admin</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
      </Head>

      <Sider width={240} className="side-nav">
        <h1 className="owncast-title">
          <span className="logo-container">
            <OwncastLogo variant="simple" />
          </span>
          <span className="title-label">Owncast Admin</span>
        </h1>
        <Menu
          defaultSelectedKeys={[route.substring(1) || 'home']}
          defaultOpenKeys={openMenuItems}
          mode="inline"
          className="menu-container"
          items={menuItems}
        />
      </Sider>

      <Layout className="layout-main">
        <Header className="layout-header">
          <Space direction="horizontal">
            <Tooltip title="Compose post to your followers">
              <Button
                type="primary"
                shape="circle"
                icon={<EditOutlined />}
                size="large"
                onClick={handleCreatePostButtonPressed}
                style={{ display: federationEnabled ? 'block' : 'none' }}
              />
            </Tooltip>
          </Space>
          <div className="global-stream-title-container">
            <TextFieldWithSubmit
              fieldName="streamTitle"
              {...TEXTFIELD_PROPS_STREAM_TITLE}
              placeholder="What are you streaming now"
              value={currentStreamTitle}
              initialValue={instanceDetails.streamTitle}
              onChange={handleStreamTitleChanged}
            />
          </div>
          <Space direction="horizontal">{statusIndicatorWithThumb}</Space>
        </Header>

        {headerAlertMessage}

        <Content className="main-content-container">{children}</Content>

        <Footer className="footer-container">
          <a href="https://owncast.online/?source=admin" target="_blank" rel="noopener noreferrer">
            About Owncast v{versionNumber}
          </a>
        </Footer>
      </Layout>

      <ComposeFederatedPost
        open={postModalDisplayed}
        handleClose={() => setPostModalDisplayed(false)}
      />
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
