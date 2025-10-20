import React, { useState } from 'react'; 
import { useLocation } from 'react-router-dom';
import { useCart } from '../Home/CartContext';
import { useNavigate } from 'react-router-dom';
import "../Css/Payment.css";

import Image46 from "../../Img/Image46.png"
import Image38 from "../../Img/Image38.png"
import Image45 from "../../Img/Image45.png"
import Image44 from "../../Img/Image44.png"
import Image37 from "../../Img/Image37.png"

import Image43 from "../../Img/Image43.png"
import Image40 from "../../Img/Image40.png"
import Image42 from "../../Img/Image42.png"
import Image41 from "../../Img/Image41.png"
import Image39 from "../../Img/Image39.png"

import Checkout1 from "../../Img/Checkout1.png"
import ConfirmPic from "../../Img/ConfirmPic.png"
import Payment1 from "../../Img/Payment1.png"

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate(); 
    const { formData } = location.state || {}; 
    const { cartItems } = useCart();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(''); 
    const [errorMessage, setErrorMessage] = useState(''); 

    const calculateTotals = () => {
        const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); 
        const shippingCost = 50000; 
        const packaging = 10000; 
        const grandTotal = subtotal + shippingCost + packaging;

        return { subtotal, shippingCost, packaging, grandTotal };
    };

    const totals = calculateTotals(); 

    const handleProceedToPayment = () => {
        
        if (!selectedPaymentMethod) {
            setErrorMessage('Please select a payment method'); 
            return; 
        } else {
            setErrorMessage(''); 
        }

        navigate('/confirmation', { state: { formData, totals, selectedPaymentMethod } }); 
    };

    const splitTitle = (title) => {
        const words = title.split(' '); 
        const result = [];

        for (let i = 0; i < words.length; i += 3) {
            result.push(words.slice(i, i + 3).join(' ')); 
        }

        return result;
    };

    return (
        <>
         <div className='tricking'>
            <div className='checkOutTap'>
                <img src={Checkout1} alt="" className='trickingImg' />
                <p className='trickingText' >1. Checkout <hr className='trickingHr'/></p>
            </div>
            <div className='paymentTap'>
                <img src={Payment1} alt="" className='trickingImg' />
                <p className='trickingText' style={{ color: '#D84727' }}>2. Payment <hr className='trickingHr' /></p>
            </div>
    
            <div className='confirmationTap'>
                <img src={ConfirmPic} alt="" className='trickingImg' />
                <p className='trickingText'>3. Confirmation </p>
            </div>
        </div>
        <br /> <br />
        <div className='paymentPageParent'>
            <div className='detailsOrderParent'>
                <p className='detailsOrder'>Detail Order</p>
                <p className='detailsOrderPrice'>Subtotal <span className='detailsOrderPriceSpan'>Rp {totals.subtotal.toLocaleString()}0.000</span></p>
                <p className='detailsOrderPrice'>Shipping Cost <span className='detailsOrderPriceSpan'>Rp {totals.shippingCost.toLocaleString()}.000</span></p>
                <p className='detailsOrderPrice'>Packaging <span className='detailsOrderPriceSpan'>Rp {totals.packaging.toLocaleString()}.000</span></p>
                <hr className='detailsOrderHr' />
                <p className='detailsOrderPrice'>Grand Total <span className='detailsOrderPriceSpanGrand'> Rp {totals.grandTotal.toLocaleString()}</span></p>
            </div>

            <div>
                <div className="order-details">
                    <p className='detailsOrder'>Order Details</p>
                    <p className='paymentOrderDetails' style={{marginRight:'30px'}}>Order Number <span className='paymentOrderDetailsSpan'>MTAWEB-3A86D4DB<span style={{color:"#D93F3F" , marginLeft:"30px",cursor:"pointer"}}>COPY</span> <br /><span className='paymentOrderDetailsSpan2'>Always remember Order Number for <br /> easy tracking</span></span> </p>
                    <p className='paymentOrderDetails'>Purchase Date <span className='paymentOrderDetails1'>{new Date().toLocaleString()}</span></p>
                    <p className='paymentOrderAllItem'>
                        Items  
                        <span className='paymentOrderItem'>
                            {cartItems.map(item => (
                                <div key={item.id}>
                                    {splitTitle(item.title).map((line, index) => (
                                        <span key={index}>
                                            {line} <br /> 
                                        </span>
                                    ))}
                                    <span className='paymentOrderDetailsSpan2'>
                                        {item.quantity} x Rp {item.price.toLocaleString()}0.000
                                    </span>
                                    <br />
                                </div>
                            ))} 
                        </span>
                    </p>

                    <p className='paymentOrderDetails'>Name <span className='paymentOrderDetails1'>{formData.fullname}</span></p>
                    <p className='paymentOrderDetails'>Phone <span className='paymentOrderDetails1'>{formData.phone}</span></p>
                    <p className='paymentOrderDetails'>Email <span className='paymentOrderDetails1'>{formData.email}</span></p>
                    <p className='paymentOrderDetails'>Shipping Address <span className='paymentOrderDetails1'>{formData.shippingAddress}</span></p>
                </div>
            </div>
        </div>
        <div className='paymentDetailNumberP'>
            <p className='paymentDetailNumber'>Payment Detail<span className='paymentDetailNumberSpan'>11:55:55</span></p>
            <p className='paymentDetailTitle'>Please make a payment according with the limit time specified, <br />
                starting from now</p>
        </div>
        <div className="paymentMethodParent">
            <p className='detailsOrder'>Payment Method</p>
            <div className="payment-method">
                <div className="payment-options">
                    <label className='paymentOptionsLabel'>
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="creditCard" 
                            className='paymentOptionsInput' 
                            onChange={() => setSelectedPaymentMethod('creditCard')} 
                        />
                        BNI Cicilan 0%
                    </label>
                    <img src={Image46} alt="BNI Cicilan 0%" />
                </div>
                <div className="payment-options">
                    <label className='paymentOptionsLabel'>
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="paypal" 
                            className='paymentOptionsInput' 
                            onChange={() => setSelectedPaymentMethod('paypal')}
                        />
                        Mandiri Cicilan 0%
                    </label>
                    <img src={Image38} alt="Mandiri Cicilan 0%" />
                </div>
                <div className="payment-options">
                    <label className='paymentOptionsLabel'>
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="bankTransfer" 
                            className='paymentOptionsInput' 
                            onChange={() => setSelectedPaymentMethod('bankTransfer')}
                        />
                        Bank Transfer
                    </label>
                    <img src={Image45} alt="Bank Transfer" />
                </div>
                <div className="payment-options">
                    <label className='paymentOptionsLabel'>
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="cashOnDelivery" 
                            className='paymentOptionsInput' 
                            onChange={() => setSelectedPaymentMethod('cashOnDelivery')}
                        />
                        Credit Card
                    </label>
                    <div>
                        <img src={Image44} alt="Credit Card" />
                        <img src={Image37} alt="Credit Card" />
                    </div>
                </div>
            </div>
            <div className="payment-method">
                <div className="payment-options">
                    <label className='paymentOptionsLabel'>
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="creditCardInstallment" 
                            className='paymentOptionsInput' 
                            onChange={() => setSelectedPaymentMethod('creditCardInstallment')}
                        />
                        Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)
                    </label>
                    <div>
                        <img src={Image43} alt="Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)" />
                        <img src={Image40} alt="Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)" />
                        <img src={Image42} alt="Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)" />

                    </div>
                </div>
                <div className="payment-options">
                    <label className='paymentOptionsLabel'>
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="GO-PAY" 
                            className='paymentOptionsInput' 
                            onChange={() => setSelectedPaymentMethod('GO-PAY')}
                        />
                        GO-PAY
                    </label>
                    <img src={Image41} alt="GO-PAY" />
                </div>
                <div className="payment-options">
                    <label className='paymentOptionsLabel'>
                        <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="other" 
                            className='paymentOptionsInput' 
                            onChange={() => setSelectedPaymentMethod('Krdivo')}
                        />
                        Krdivo
                    </label>
                    <img src={Image39} alt="Krdivo" />
                </div>
            </div>
        
        </div>
        {errorMessage && (
                    <p className='error-message' style={{ color: 'red' }}>{errorMessage}</p> 
                )}
        <div className='proceedToPaymentBtnParent'>
            <button onClick={handleProceedToPayment} style={{ marginTop: '20px' }} className='proceedToPaymentBtn'>
                Proceed to Payment
            </button>
        </div>     
               
    </>
    );
};

export default Payment;
