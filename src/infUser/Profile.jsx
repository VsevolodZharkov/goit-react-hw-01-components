import styleUser from './Profile.module.css';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styleUser.profile}>
      <div className={styleUser.description}>
        <img
          src={avatar}
          alt={username}
          className={styleUser.avatar}
        />
        <p className={styleUser.name}>{username}</p>
        <p className={styleUser.tag}>{tag}</p>
        <p className={styleUser.location}>{location}</p>
      </div>

      <ul className={styleUser.stats}>
        <li className={styleUser.list}>
          <span className={styleUser.label}>Followers</span>
          <span className={styleUser.quantity}>{stats.followers}</span>
        </li>
        <li className={styleUser.list}>
          <span className={styleUser.label}>Views</span>
          <span className={styleUser.quantity}>{stats.views}</span>
        </li>
        <li className={styleUser.list}>
          <span className={styleUser.label}>Likes</span>
          <span className={styleUser.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export { Profile };
