import css from './FriendsListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => (
    <div className={css.FriendsContainer}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.name}>{name}</p>
        <p className={isOnline ? css.online : css.offline}>{isOnline ? "Online" : "Offlne"}</p>
    </div>
);

export default FriendsListItem;