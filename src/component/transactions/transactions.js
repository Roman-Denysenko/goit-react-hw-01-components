import React from 'react';
import PropTypes from 'prop-types';

const TransactionsItem = ({id, type, amount, currency }) => {
    return (
        <tr key={ id}>
            <td>{ type }</td>
            <td>{ amount}</td>
            <td>{ currency}</td>
    </tr>
    )
}

const TransactionsBody = ({ items }) => {
      if (items.length === 0) {
        return null
    }
    return (
<tbody>
   {items.map(TransactionsItem)}
  </tbody>
    )
}

const Transactions = ({ transactionsItems }) => {
  
    return (
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
            <TransactionsBody items={transactionsItems }/>
  
</table>
    )
}

TransactionsItem.propTypes = {
    id:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
}

export default Transactions;