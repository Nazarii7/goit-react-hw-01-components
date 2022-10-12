import React from "react";
import PropTypes from "prop-types"
import { 
    TableTransHistory,
    HeadTransHistory,
    BodyTransHistory,
    TrTransHistory,
    ThTransHistory,
    TdTransHistory } from "./transactionhistory.styled";



export const TransactionHistory = ({items}) => {
    return (
        <TableTransHistory>
  <HeadTransHistory>
    <TrTransHistory>
      <ThTransHistory>Type</ThTransHistory>
      <ThTransHistory>Amount</ThTransHistory>
      <ThTransHistory>Currency</ThTransHistory>
    </TrTransHistory>
  </HeadTransHistory>

  <BodyTransHistory>
    {items.map(({ id, type, amount, currency}) => {
        return (
    <TrTransHistory key={id}>
      <TdTransHistory>{type}</TdTransHistory>
      <TdTransHistory>{amount}</TdTransHistory>
      <TdTransHistory>{currency}</TdTransHistory>
    </TrTransHistory>
        );
    })}
  </BodyTransHistory>
</TableTransHistory>
    );
};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};