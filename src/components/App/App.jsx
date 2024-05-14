import css from './App.module.css';

import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';

import userData from '../../data/userData.json';
import friends from '../../data/friends.json';

function App() {
  return (
    <div className={css.container}>
      <Profile {...userData} />
      <FriendList friends={friends} />
    </div>
  )
}

export default App;
