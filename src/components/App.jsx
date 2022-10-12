import user from "./Json/user.json"
import data from "./Json/data.json"
import friends from "./Json/friends.json"
import transactions from "./Json/transactions.json"

import { Profile } from "./Profile/profile";
import { Statistics } from "./Statistics/statistics";
import { FriendList } from "./FriendList/friendlist";
import { TransactionHistory } from "./TransactionHistory/transactiohistory";

const {username, tag, location, avatar, stats} = user;

export const App = () => {
  return (
    <div>
      <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}/>

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends}/>
      
      <TransactionHistory items={transactions}/>
    </div>
  );
};
