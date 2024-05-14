import css from './FriendList.module.css';

import FriendsListItem from './FriendsListItem/FriendsListItem';

const FriendList = ({ friends }) => (
    <ul className={css.frendsList}>
        {friends.map(({ avatar, name, isOnline, id }) => {
            return (
                <FriendsListItem
                    key={id}
                    id={id}
                    avatar={avatar}
                    isOnline={isOnline}
                    name={name}
                />
            );
        })}
    </ul>
);

export default FriendList;