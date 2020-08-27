import React from 'react';
import { Button } from 'react-bootstrap'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,price)=>total+price,0);
    
    let VAT =0;
    if(total>30){
        VAT = 0;
    }
    else if(total>20){
        VAT = 1.99;
    }
    else if(total>6){
        VAT = 2.99;
    }
    
    const tax = (total/10);
    const grandTotal = (total+VAT+Number(tax)).toFixed(2);
    
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }    
    
    return (
        <div id='cart' className='cart'>
            <p>Courses bought : {cart.length}</p>
            <p>Course Price : ${formatNumber(total)}</p>
            <p>Tax+VAT : ${formatNumber(tax+VAT)}</p>
            <p>Total Price : ${grandTotal}</p>
            <Button variant="dark">Check Out</Button>
        </div>
    );
};

export default Cart;