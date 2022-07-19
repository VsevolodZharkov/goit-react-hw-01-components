import styleTrans from './TransactionHistory.module.css'
import PropTypes from 'prop-types';
const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styleTrans.table}>
      <thead className={styleTrans.thead}>
        <tr className={styleTrans.list}>
          <th className={styleTrans.Type}>Type</th>
          <th className={styleTrans.Amount}>Amount</th>
          <th className={styleTrans.Currency}>Currency</th>
        </tr>
      </thead>
			<tbody className={styleTrans.theadd}>
      {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id} className={styleTrans.list}>
              <td className={styleTrans.type}>{type}</td>
              <td className={styleTrans.amount}>{amount}</td>
              <td className={styleTrans.currency}>{currency}</td>
            </tr>
        ))}
			</tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export { TransactionHistory };