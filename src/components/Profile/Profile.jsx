import css from './Profile.module.css';

const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes }
}) => (
    <div className={css.userContainer}>
        <div className={css.userInformation}>
            <img className={css.img}
                src={avatar}
                alt="User avatar"
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.userList}>
            <li className={css.userItem}>
                <span className={css.statisticText}>Followers</span>
                <span className={css.statisticNumber}>{followers}</span>
            </li>
            <li className={css.userItem}>
                <span className={css.statisticText}>Views</span>
                <span className={css.statisticNumber}>{views}</span>
            </li>
            <li className={css.userItem}>
                <span className={css.statisticText}>Likes</span>
                <span className={css.statisticNumber}>{likes}</span>
            </li>
        </ul>
    </div>
);

export default Profile;