import user from './fileJSON/user';
import stats from './fileJSON/data';
import friends from './fileJSON/friends';
import transactions from './fileJSON/transactions';

import { Profile } from './components/infUser/Profile';
import { Statistics } from './components/statistics/Statistics';
import { FriendList } from './components/friendList/FriendList';
import { TransactionHistory } from './components/transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title='Upload stats' stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
