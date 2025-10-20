import React, { useState } from 'react';
import { useCart } from '../Home/CartContext';
import { useNavigate } from 'react-router-dom';

import CheckoutPic from "../../Img/CheckoutPic.png"
import ConfirmPic from "../../Img/ConfirmPic.png"
import PaymentPic from "../../Img/PaymentPic.png"

import "../Css/Checkout.css"

const Checkout = () => {
    const { cartItems } = useCart(); 
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        shippingAddress: '',
        country: '',
        state: '',
        city: '',
        zipCode: '',
        courier: ''
    });

    const [errors, setErrors] = useState({}); 

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullname) newErrors.fullname = 'Fullname is required.';
        if (!formData.email) newErrors.email = 'Email is required.';
        if (!formData.phone) newErrors.phone = 'Phone number is required.';
        if (!formData.shippingAddress) newErrors.shippingAddress = 'Shipping address is required.';
        if (!formData.country) newErrors.country = 'Country is required.';
        if (!formData.state) newErrors.state = 'State/Province is required.';
        if (!formData.city) newErrors.city = 'City is required.';
        if (!formData.zipCode) newErrors.zipCode = 'Zip Code is required.';
        if (!formData.courier) newErrors.courier = 'Choose a courier.';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); 
        } else {
            navigate('/payment', { state: { formData } });
        }
    };

    const calculateTotals = () => {
        const subtotal = cartItems.reduce((accumulator, item) => {
            return accumulator + item.price * item.quantity;
        }, 0);

        const shippingCost = 500; 
        const packaging = 50; 
        const grandTotal = subtotal + shippingCost + packaging;

        return { subtotal, shippingCost, packaging, grandTotal };
    };

    const totals = calculateTotals();

    return (
        <>
       <div className='tricking'>
            <div className='checkOutTap'>
                <img src={CheckoutPic} alt="checkOutTap" className='trickingImg' />
                <p className='trickingText' style={{ color: '#D84727' }}>1. Checkout <hr className='trickingHr'/></p>
            </div>
            <div className='paymentTap'>
                <img src={PaymentPic} alt="paymentTap" className='trickingImg' />
                <p className='trickingText' >2. Payment <hr className='trickingHr' /></p>
            </div>
    
            <div className='confirmationTap'>
                <img src={ConfirmPic} alt="confirmationTap" className='trickingImg' />
                <p className='trickingText'>3. Confirmation </p>
            </div>
        </div>

        <div className='checkOutPage'>
            <div className='detailsOrderParent' >
                <p className='detailsOrder'>Detail Order</p>
                <p className='detailsOrderPrice'>Subtotal <span className='detailsOrderPriceSpan'>Rp {totals.subtotal.toLocaleString()}0.000</span> </p>
                <p className='detailsOrderPrice'>Shipping Cost <span className='detailsOrderPriceSpan' >Rp {totals.shippingCost.toLocaleString()}.000</span> </p>
                <p className='detailsOrderPrice'>Packaging <span className='detailsOrderPriceSpan'>Rp {totals.packaging.toLocaleString()}.000</span> </p>
                <hr className='detailsOrderHr'/>
                <p className='detailsOrderPrice'>Grand Total <span className='detailsOrderPriceSpanGrand'> Rp {totals.grandTotal.toLocaleString()}0.000</span></p>
            </div>
            <div className='billingAddressParant'>
                <p className='billingAddress'>Billing Address</p>
                <form onSubmit={handleSubmit} className='theForm'>
                    <div>
                        <label className='billingAddressLabel'>Fullname</label>
                        <br />
                        <input
                            type="text"
                            value={formData.fullname}
                            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                            className='billingAddressInput'
                            placeholder='Ex: Rasyidin Arsyad Nasution'
                        />
                        {errors.fullname && <p style={{ color: 'red' }}>{errors.fullname}</p>}
                    </div>

                    <div>
                        <label className='billingAddressLabel'>Email Address</label>
                        <br />

                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className='billingAddressInput'
                            placeholder='Ex: rasyid.arsyad@gmail.com'

                        />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>

                    <div>
                        <label className='billingAddressLabel'>Phone Number</label>
                        <br />

                        <input
                            type="text"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className='billingAddressInput'
                            placeholder='Ex: 089111888999'

                        />
                        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
                    </div>

                    <div>
                        <label className='billingAddressLabel'>Shipping Address</label>
                        <br />

                        <input
                            type="text"
                            value={formData.shippingAddress}
                            onChange={(e) => setFormData({ ...formData, shippingAddress: e.target.value })}
                            className='billingAddressInput'
                            placeholder='Ex: Patriot Street Number 666, Ngaklik, Sleman'

                        />
                        {errors.shippingAddress && <p style={{ color: 'red' }}>{errors.shippingAddress}</p>}
                    </div>

                    <div>
                        <label className='billingAddressLabel'>Country</label>
                        <br />

                        <select
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className='billingAddressInput'
                        >
                            <option value="">Select Country</option>
                            <option value="USA">United States of America (USA)</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">United Kingdom</option>
                        </select>
                        {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
                    </div>

                    <div>
                        <label className='billingAddressLabel'>State/Province</label>
                        <br />

                        <select
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            className='billingAddressInput'
                        >
                            <option value="">Select State/Province</option>
                            <option value="California">California</option>
                            <option value="New York">New York</option>
                        </select>
                        {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
                    </div>
                <div className='cityAndZip'>
                    <div>
                        <label className='billingAddressLabel'>City</label>
                        <br />

                        <select
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className='billingAddressInput'
                            style={{width:"90%" , marginRight:"180px"}}
                        >
                            <option value="">Select City</option>
                            <option value="San Francisco">San Francisco</option>
                            <option value="Los Angeles">Los Angeles</option>
                        </select>
                        {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
                    </div>

                    <div>
                        <label className='billingAddressLabel'>Zip Code</label>
                        <br />

                        <input
                            type="text"
                            value={formData.zipCode}
                            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                            className='billingAddressInput'
                            style={{marginBottom:"30px"}}
                        />
                        {errors.zipCode && <p style={{ color: 'red' }}>{errors.zipCode}</p>}
                    </div>
                </div>
                    <div>
                        <label className='billingAddressLabel'>Choose Courier</label>
                        <br />

                        <select
                            value={formData.courier}
                            onChange={(e) => setFormData({ ...formData, courier: e.target.value })}
                            className='billingAddressInput'
                        >
                            <option value="">Select Courier</option>
                            <option value="DHL">DHL</option>
                            <option value="FedEx">FedEx</option>
                        </select>
                        {errors.courier && <p style={{ color: 'red' }}>{errors.courier}</p>}
                    </div>
                    <br />
                </form>

            </div>
        </div>
            <div className='CheckoutBtns'>
                <button className='continueShoppingBtn'onClick={() => navigate('/')}>
                    Continue Shopping
                </button>

                <button type="submit" className='placeOrderBtn' onClick={handleSubmit}>
                    Place My Order
                </button>
            </div>

        </>   
    );
};

export default Checkout;
