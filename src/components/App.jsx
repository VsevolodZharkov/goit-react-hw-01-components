import user from '../infUser/user';
import stats from '../statistics/data';
import friends from '../friendList/friends';
import transactions from '../transactionHistory/transactions';

import { Profile } from '../infUser/Profile';
import { Statistics } from '../statistics/Statistics';
import { FriendList } from '../friendList/FriendList';
import { TransactionHistory } from '../transactionHistory/TransactionHistory';

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
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
