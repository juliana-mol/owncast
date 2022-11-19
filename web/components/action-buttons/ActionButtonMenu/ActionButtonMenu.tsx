import { FC } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { EllipsisOutlined, HeartOutlined, BellOutlined } from '@ant-design/icons';
import styles from './ActionButtonMenu.module.scss';
import { ExternalAction } from '../../../interfaces/external-action';

const NOTIFY_KEY = 'notify';
const FOLLOW_KEY = 'follow';

export type ActionButtonMenuProps = {
  actions: ExternalAction[];
  showFollowItem?: boolean;
  showNotifyItem?: boolean;
  externalActionSelected: (action: ExternalAction) => void;
  notifyItemSelected: () => void;
  followItemSelected: () => void;
};

export const ActionButtonMenu: FC<ActionButtonMenuProps> = ({
  actions,
  externalActionSelected,
  notifyItemSelected,
  followItemSelected,
  showFollowItem,
  showNotifyItem,
}) => {
  const onMenuClick = a => {
    if (a.key === NOTIFY_KEY) {
      notifyItemSelected();
      return;
    }
    if (a.key === FOLLOW_KEY) {
      followItemSelected();
      return;
    }
    const action = actions.find(x => x.url === a.key);
    externalActionSelected(action);
  };

  const items = actions.map(action => ({
    key: action.url,
    label: (
      <span className={styles.item}>
        {action.icon && <img className={styles.icon} src={action.icon} alt={action.title} />}{' '}
        {action.title}
      </span>
    ),
  }));

  if (showFollowItem) {
    items.unshift({
      key: FOLLOW_KEY,
      label: (
        <span className={styles.item}>
          <HeartOutlined className={styles.icon} /> Follow this stream
        </span>
      ),
    });
  }

  if (showNotifyItem) {
    items.unshift({
      key: NOTIFY_KEY,
      label: (
        <span className={styles.item}>
          <BellOutlined className={styles.icon} />
          Notify when live
        </span>
      ),
    });
  }

  const menu = <Menu items={items} onClick={onMenuClick} />;

  return (
    <Dropdown overlay={menu} placement="bottomRight" trigger={['click']} className={styles.menu}>
      <div className={styles.buttonWrap}>
        <Button
          type="default"
          onClick={e => e.preventDefault()}
          size="large"
          icon={<EllipsisOutlined size={6} style={{ rotate: '90deg' }} />}
        />
      </div>
    </Dropdown>
  );
};
