import css from './App.module.css';

import Profile from '../Profile/Profile';

import userData from '../../data/userData.json';

function App() {
  return (
    <div className={css.container}>
      <Profile {...userData} />
    </div>
  )
}

export default App;
