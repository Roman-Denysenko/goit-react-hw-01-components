import React from 'react';

import Profile from './profile';
import Statics from './statics';
import FriendList from './friendList';
import Transactions from './transactions';

import userData from '../data/user.json';
import statisticalData from '../data/statics.json';
import friendListData from '../data/friendList.json';
import transactionData from '../data/transactions.json';

const App = () => {
    return (  
        <>
        <Profile
        name = { userData.name }
        tag = { userData.tag }
        location = { userData.location }
        avatar = { userData.avatar }
        stats = { userData.stats }
            />
            
        <Statics title="Upload stats" items={statisticalData} />
            
            <FriendList items={friendListData} />
            
            <Transactions transactionsItems={transactionData }/>
        </>
        
    )
    
}

export default App;