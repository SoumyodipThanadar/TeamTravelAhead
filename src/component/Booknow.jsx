import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './css/Booknow.css';


const Booknow = () => 
  {
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialDestination = queryParams.get('destination') || '';



  



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: initialDestination,
    transport: '',
    transportClass: '',
    hotel: '',
    persons: 1,
    totalCost: 0,
    payment: '',
    upi_id: '',
    cc_number: '',
    cc_expiry: '',
    cc_cvv: '',
    dc_number: '',
    dc_expiry: '',
    dc_cvv: '',
    bank_name: '',
    paypal_email: '',
    paytm_mobile: '',
    phonepe_mobile: '',
    message: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  const destinations = {
   

Darjeeling: { bus: { regular: 3200, luxury: 8500 }, train: { economy: 5200, firstClass: 6200 }, plane: { economy: 6300, business: 12500 } },
Sikkim: { bus: { regular: 3100, luxury: 8200 }, train: { economy: 5100, firstClass: 6100 }, plane: { economy: 6200, business: 12200 } },
Doars: { bus: { regular: 3150, luxury: 8300 }, train: { economy: 5150, firstClass: 6150 }, plane: { economy: 6250, business: 12300 } },
Kashmir: { bus: { regular: 3250, luxury: 8600 }, train: { economy: 5300, firstClass: 6300 }, plane: { economy: 6400, business: 12700 } },
Rajasthan: { bus: { regular: 3000, luxury: 8000 }, train: { economy: 5000, firstClass: 6000 }, plane: { economy: 6100, business: 12100 } },
Nanital: { bus: { regular: 3050, luxury: 8100 }, train: { economy: 5050, firstClass: 6050 }, plane: { economy: 6150, business: 12250 } },
Manali: { bus: { regular: 3100, luxury: 8300 }, train: { economy: 5100, firstClass: 6100 }, plane: { economy: 6200, business: 12350 } },
Ooty: { bus: { regular: 3200, luxury: 8500 }, train: { economy: 5200, firstClass: 6200 }, plane: { economy: 6300, business: 12500 } },
Meghalaya: { bus: { regular: 3150, luxury: 8400 }, train: { economy: 5150, firstClass: 6150 }, plane: { economy: 6250, business: 12400 } },
Kanyakumari: { bus: { regular: 3100, luxury: 8250 }, train: { economy: 5100, firstClass: 6100 }, plane: { economy: 6200, business: 12600 } },
Digha: { bus: { regular: 3050, luxury: 8200 }, train: { economy: 5050, firstClass: 6050 }, plane: { economy: 6150, business: 12200 } },
Puri: { bus: { regular: 3200, luxury: 8600 }, train: { economy: 5200, firstClass: 6200 }, plane: { economy: 6300, business: 12400 } },
Sundarbans: { bus: { regular: 3250, luxury: 8700 }, train: { economy: 5300, firstClass: 6250 }, plane: { economy: 6350, business: 12700 } },
Lonavala: { bus: { regular: 3100, luxury: 8300 }, train: { economy: 5150, firstClass: 6100 }, plane: { economy: 6200, business: 12650 } },
Haridwar: { bus: { regular: 3150, luxury: 8400 }, train: { economy: 5200, firstClass: 6200 }, plane: { economy: 6250, business: 12300 } }


  
  
  };

  const hotels = {
     
Darjeeling: { "The Hillside Retreat": 1200, "Darjeeling Royal Stay": 1800, "Tea Garden Inn": 1500, "Mountain View Lodge": 2000, "Summit Palace": 2500 },
Sikkim: { "Sikkim Serenity Hotel": 1300, "Mountain Haven": 1900, "Himalayan Bliss": 1600, "Sikkim Grand": 2100, "Peak View Resort": 2600 },
Doars: { "Doars Resort": 1100, "Riverbend Lodge": 1700, "Jungle Retreat": 1400, "Doars Palace": 1900, "Forest View Inn": 2400 },
Kashmir: { "Kashmir Luxury Suites": 1400, "Paradise Inn": 2000, "Snow Peak Lodge": 1600, "Kashmir Grand Hotel": 2100, "Valley View Retreat": 2700 },
Rajasthan: { "Rajasthan Royal Hotel": 1500, "Desert Oasis Inn": 2100, "Palace Stay": 1700, "Rajasthan Heritage": 2200, "Golden Sands Resort": 2800 },
Nanital: { "Nanital Heights": 1300, "Lake View Lodge": 1900, "Hilltop Resort": 1600, "Nanital Grand": 2100, "Mountain Retreat": 2700 },
Manali: { "Manali Mountain Lodge": 1200, "Snowfall Inn": 1800, "River View Hotel": 1500, "Manali Grand Stay": 2000, "Alpine Retreat": 2600 },
Ooty: { "Ooty Oasis": 1400, "Green Hills Resort": 2000, "Valley View Lodge": 1600, "Ooty Grand Hotel": 2100, "Tea Estate Inn": 2700 },
Meghalaya: { "Meghalaya Grand": 1300, "Hillside Haven": 1900, "Meghalaya Lodge": 1500, "Mountain Resort": 2000, "Forest Retreat": 2600 },
Kanyakumari: { "Kanyakumari Beach Hotel": 1400, "Ocean View Inn": 2000, "Sunset Lodge": 1600, "Kanyakumari Grand": 2100, "Coastal Retreat": 2700 },
Digha: { "Digha Sea Resort": 1100, "Beachfront Inn": 1700, "Digha Lodge": 1400, "Seaside Retreat": 1900, "Oceanview Grand": 2400 },
Puri: { "Puri Beach Hotel": 1300, "Temple View Lodge": 1900, "Puri Grand Stay": 1500, "Ocean Breeze Inn": 2000, "Seaside Resort": 2700 },
Sundarbans: { "Sundarbans Eco Lodge": 1200, "River Retreat": 1800, "Forest Lodge": 1500, "Sundarbans Grand": 2000, "Wildlife View Inn": 2500 },
Lonavala: { "Lonavala Hill Resort": 1300, "Valley View Hotel": 1900, "Lonavala Grand Stay": 1600, "Mountain Retreat": 2100, "Scenic Inn": 2600 },
Haridwar: { "Haridwar Serenity": 1400, "Riverbank Inn": 2000, "Temple View Lodge": 1600, "Haridwar Grand": 2100, "Ganges Retreat": 2700 }




  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const calculateTotalCost = () => {
    const { destination, transport, transportClass, hotel, persons } = formData;
    if (destination && transport && transportClass && hotel) {
      const transportCost = destinations[destination][transport][transportClass];
      const hotelCost = hotels[destination][hotel];
      const totalCost = (transportCost + hotelCost) * persons;
      setFormData(prevFormData => ({
        ...prevFormData,
        totalCost
      }));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Successful! Transaction ID: ${Math.random().toString(36).substr(2, 9)}`);
    // Clearing the form data after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      transport: '',
      transportClass: '',
      hotel: '',
      persons: 1,
      totalCost: 0,
      payment: '',
      upi_id: '',
      cc_number: '',
      cc_expiry: '',
      cc_cvv: '',
      dc_number: '',
      dc_expiry: '',
      dc_cvv: '',
      bank_name: '',
      paypal_email: '',
      paytm_mobile: '',
      phonepe_mobile: '',
      message: '',
    });
    setPaymentMethod('');
  };

  useEffect(() => {
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => option.style.display = 'none');
    if (paymentMethod) {
      document.getElementById(`${paymentMethod}-details`).style.display = 'block';
    }
  }, [paymentMethod]);

  return (
   


















    
    <div className="container book-now-form">
      <h2 className="text-center">Book Your Tour Destination with Us</h2>
      <form onSubmit={handleSubmit}>
        {/* Basic Info */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Destination and Transport */}

        

         <div className="form-group">
          <label>Destination</label>
          <select
            className="form-control"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Destination</option>
            {Object.keys(destinations).map((dest) => (
              <option key={dest} value={dest}>
                {dest}
              </option>
            ))}
          </select>
        </div> 






        <div className="form-group">
          <label>Transport</label>
          <select
            className="form-control"
            name="transport"
            value={formData.transport}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Transport</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="plane">Aeroplane</option>
          </select>
        </div>
        {formData.transport && (
          <div className="form-group">
            <label>Class</label>
            <select
              className="form-control"
              name="transportClass"
              value={formData.transportClass}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Class</option>
              {Object.keys(destinations[formData.destination][formData.transport]).map((classType) => (
                <option key={classType} value={classType}>
                  {classType.charAt(0).toUpperCase() + classType.slice(1)} - ₹{destinations[formData.destination][formData.transport][classType]}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="form-group">
          <label>Hotel</label>
          <select
            className="form-control"
            name="hotel"
            value={formData.hotel}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Hotel</option>
            {formData.destination &&
              Object.keys(hotels[formData.destination]).map((hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel} - ₹{hotels[formData.destination][hotel]}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label>Number of Persons</label>
          <input
            type="number"
            className="form-control"
            name="persons"
            value={formData.persons}
            onChange={handleInputChange}
            min="1"
            required
          />
        </div><br></br>
        <button
          type="button"
          className="btn btn-primary"
          onClick={calculateTotalCost}
        > 
          Calculate Total Cost
        </button>
        {formData.totalCost > 0 && (
          /* <div className="form-group mt-3">
            <h4>Total Cost: ₹{formData.totalCost}</h4>
          </div> */
          <div className="form-group mt-3">
    <h4 style={{ color: '#FF5733' }}> Total Cost : ₹{formData.totalCost} </h4>
</div>








        )}

        {/* Payment Details */}
        
        <div className="form-group">
        <br></br><label>Payment Method</label>
          <select
            className="form-control"
            name="payment"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="upi">UPI</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="netBanking">Net Banking</option>
            <option value="paypal">PayPal</option>
            <option value="paytm">Paytm</option>
            <option value="phonepe">PhonePe</option>
          </select>
        </div>

        <div id="payment-details" className="form-group">
          {/* UPI */}
          {paymentMethod === 'upi' && (
            <div id="upi-details" className="payment-option">
              <label>UPI ID</label>
              <input
                type="text"
                className="form-control"
                name="upi_id"
                value={formData.upi_id}
                onChange={handleInputChange}
              />
            </div>
          )}

          {/* Credit Card */}
          {paymentMethod === 'creditCard' && (
            <div id="creditCard-details" className="payment-option">
              <label>Credit Card Number</label>
              <input
                type="text"
                className="form-control"
                name="cc_number"
                value={formData.cc_number}
                onChange={handleInputChange}
              />
              <label>Expiry Date</label>
              <input
                type="text"
                className="form-control"
                name="cc_expiry"
                value={formData.cc_expiry}
                onChange={handleInputChange}
              />
              <label>CVV</label>
              <input
                type="text"
                className="form-control"
                name="cc_cvv"
                value={formData.cc_cvv}
                onChange={handleInputChange}
              />
            </div>
          )}

          {/* Debit Card */}
          {paymentMethod === 'debitCard' && (
            <div id="debitCard-details" className="payment-option">
              <label>Debit Card Number</label>
              <input
                type="text"
                className="form-control"
                name="dc_number"
                value={formData.dc_number}
                onChange={handleInputChange}
              />
              <label>Expiry Date</label>
              <input
                type="text"
                className="form-control"
                name="dc_expiry"
                value={formData.dc_expiry}
                onChange={handleInputChange}
              />
              <label>CVV</label>
              <input
                type="text"
                className="form-control"
                name="dc_cvv"
                value={formData.dc_cvv}
                onChange={handleInputChange}
              />
            </div>
          )}

          {/* Net Banking */}
          {paymentMethod === 'netBanking' && (
            <div id="netBanking-details" className="payment-option">
              <label>Bank Name</label>
              <input
                type="text"
                className="form-control"
                name="bank_name"
                value={formData.bank_name}
                onChange={handleInputChange}
              />
              {/* <label>Bank Account Number</label>
              <input
                type="number"
                className="form-control"
                name="bank_name_a"
                value={formData.bank_name_a}
                onChange={handleInputChange}
              />

            <label>Bank IFSC CODE</label>
              <input
                type="text"
                className="form-control"
                name="bank_name_a"
                value={formData.bank_name_a}
                onChange={handleInputChange}
              /> */}

              <label>Bank Account Number</label>
<input
  type="number"
  className="form-control"
  name="bank_account_number"
  value={formData.bank_account_number}
  onChange={handleInputChange}
/>

<label>Bank IFSC CODE</label>
<input
  type="text"  // Change type to "text" for IFSC code
  className="form-control"
  name="bank_ifsc_code"
  value={formData.bank_ifsc_code}
  onChange={handleInputChange}
/>






            </div>
          )}

          {/* PayPal */}
          {paymentMethod === 'paypal' && (
            <div id="paypal-details" className="payment-option">
              <label>PayPal Email</label>
              <input
                type="email"
                className="form-control"
                name="paypal_email"
                value={formData.paypal_email}
                onChange={handleInputChange}
              />
            </div>
          )}

          {/* Paytm */}
          {paymentMethod === 'paytm' && (
            <div id="paytm-details" className="payment-option">
              <label>Paytm Mobile Number</label>
              <input
                type="text"
                className="form-control"
                name="paytm_mobile"
                value={formData.paytm_mobile}
                onChange={handleInputChange}
              />
            </div>
          )}

          {/* PhonePe */}
          {paymentMethod === 'phonepe' && (
            <div id="phonepe-details" className="payment-option">
              <label>PhonePe Mobile Number</label>
              <input
                type="text"
                className="form-control"
                name="phonepe_mobile"
                value={formData.phonepe_mobile}
                onChange={handleInputChange}
              />
            </div>
          )}
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Message (if any Query/Issue)</label>
          <textarea
            className="form-control"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div><br></br>

        <button type="submit" className="btn btn-primary">Book Now</button>
      </form>
      
    </div>
    
  );
};

export default Booknow;
