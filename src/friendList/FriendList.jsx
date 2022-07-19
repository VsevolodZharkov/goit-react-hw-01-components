import styleFriends from './FriendList.module.css';
import PropTypes from 'prop-types';
const FriendList = ({ friends }) => {
  return (
    <ul className={styleFriends.list}>
			{friends.map(({ avatar, name, isOnline, id }) => {
				return 	<li className={styleFriends.item} key={id}>
        					{isOnline?(<span className={styleFriends.green}></span>):(<span className={styleFriends.red}></span>)}
        					<img className={styleFriends.avatar} src={avatar} alt="User avatar" width="48" />
        					<p className={styleFriends.name}>{name}</p>
      					</li>
				})}
    </ul>
  );
};
FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
export { FriendList };
