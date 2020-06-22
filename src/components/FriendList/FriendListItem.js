import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => (
  <>
    <span
      className={styles.status}
      style={{
        backgroundColor: friend.isOnline ? '#56ab56' : '#f00909',
      }}
    ></span>
    <img
      className={styles.avatar}
      src={friend.avatar}
      alt={friend.name}
      width="128"
    />
    <p className={styles.name}>{friend.name}</p>
  </>
);

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;
