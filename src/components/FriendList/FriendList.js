import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem.js';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ id, ...friend }) => (
      <li className={styles.item} key={id}>
        <FriendListItem friend={friend} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
  ).isRequired,
};
export default FriendList;
