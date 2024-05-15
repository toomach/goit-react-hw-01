import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <table className={css.table}>
        <thead className={css.thead}>
            <tr className={css.theadTr}>
                <th className={css.theadTh}>Type</th>
                <th className={css.theadTh}>Amount</th>
                <th className={css.theadTh}>Currency</th>
            </tr>
        </thead>

        <tbody className={css.tbody}>
            {items.map(({ id, type, amount, currency }) => (
                <tr className={css.tbodyTr} key={id}>
                    <td className={css.tbodyTd}>{type}</td>
                    <td className={css.tbodyTd}>{amount}</td>
                    <td className={css.tbodyTd}>{currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default TransactionHistory;



