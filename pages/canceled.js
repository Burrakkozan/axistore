import React, { useState, useEffect } from 'react';
import Link from 'next/link';


import { useStateContext } from '../context/StateContext';

const canceled = () => {

  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p className="icon">

        </p>
        <h2>Your order has not been completed!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default canceled