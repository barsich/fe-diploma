import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OrderingSucceeded from '../components/OrderingSucceed';

function OrderingSucceededPage() {
  return (
    <>
      <Header pageType={'orderingSucceeded'} />
      <div className="succeed-wrapper">
        <OrderingSucceeded />
      </div>
      <Footer />
    </>
  );
}

export default OrderingSucceededPage;
