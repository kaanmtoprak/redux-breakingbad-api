import React from 'react'
import { useParams,Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { quotesSelector } from '../redux/quotesSlice';

const QuoteDetail = () => {
    const {quote_id} = useParams();

    const items = useSelector(quotesSelector);

    const quote = items.find(item=> item.quote_id === Number(quote_id));

    if (!quote){
return<Navigate to="/quotes"/>
    }

  return (
    <>
    <h1>QuoteDetail</h1>
    <pre>{JSON.stringify(quote,null,2)}</pre>
    </>
  )
}

export default QuoteDetail