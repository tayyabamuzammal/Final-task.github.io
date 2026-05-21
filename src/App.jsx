import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const destinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    places: [
      { type: "Museum", name: "Louvre Museum", img: "https://images.unsplash.com/photo-1565088965455-7d22ab3e0b60?w=600", reviews: 1240 },
      { type: "Restaurant", name: "Le Comptoir", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600", reviews: 890 },
      { type: "Park", name: "Luxembourg Gardens", img: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600", reviews: 560 },
      { type: "Mall", name: "Galeries Lafayette", img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600", reviews: 720 }
    ]
  },
  {
    id: 2,
    name: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    places: [
      { type: "Museum", name: "Tokyo National Museum", img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600", reviews: 980 },
      { type: "Restaurant", name: "Sushi Saito", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600", reviews: 1120 },
      { type: "Park", name: "Ueno Park", img: "https://images.unsplash.com/photo-1492571350019-8f8fe37c55b9?w=600", reviews: 670 },
      { type: "Mall", name: "Shibuya Scramble", img: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=600", reviews: 1340 }
    ]
  },
  {
    id: 3,
    name: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800",
    places: [
      { type: "Museum", name: "Dubai Museum", img: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=600", reviews: 450 },
      { type: "Restaurant", name: "At.mosphere", img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600", reviews: 890 },
      { type: "Park", name: "Miracle Garden", img: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=600", reviews: 1230 },
      { type: "Mall", name: "Dubai Mall", img: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=600", reviews: 2100 }
    ]
  }
];

const airlines = ["Emirates", "Qatar Airways", "Turkish Airlines", "Singapore Airlines", "Etihad"];

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(10px)',
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  logo: {
    fontSize: '28px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #2563eb, #9333ea)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  button: {
    background: 'linear-gradient(90deg, #2563eb, #9333ea)',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: '0.3s',
    width: '100%'
  },
  buttonDisabled: {
    background: '#d1d5db',
    cursor: 'not-allowed'
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    transition: '0.3s'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box'
  },
  grid: {
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
  }
};

export default function App() {
  const [step, setStep] = useState(0);
  const [selectedDest, setSelectedDest] = useState(null);
  const [bookingData, setBookingData] = useState({
    date: '',
    airline: '',
    name: '',
    cnic: '',
    password: '',
    payment: 'Card'
  });

  const handleBook = (dest) => {
    setSelectedDest(dest);
    setStep(1);
  };

  const handleSubmit = () => {
    setStep(4);
  };

  const resetBooking = () => {
    setStep(0);
    setSelectedDest(null);
    setBookingData({ date: '', airline: '', name: '', cnic: '', password: '', payment: 'Card' });
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>TravelX</h1>
        <button 
          onClick={resetBooking}
          style={{background: 'none', border: 'none', color: '#2563eb', fontWeight: '600', cursor: 'pointer', fontSize: '16px'}}>
          Home
        </button>
      </header>

      <AnimatePresence mode="wait">
        {/* Step 0: Home */}
        {step === 0 && (
          <motion.div key="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <section style={{textAlign: 'center', padding: '60px 20px'}}>
              <h2 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', background: 'linear-gradient(90deg, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Book Your Flight
              </h2>
              <p style={{color: '#6b7280', fontSize: '18px', marginBottom: '32px'}}>Choose destination and fly with comfort</p>
            </section>

            <section style={{padding: '0 20px 80px', maxWidth: '1200px', margin: '0 auto'}}>
              <h3 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '24px', color: '#1f2937'}}>Popular Destinations</h3>
              <div style={styles.grid}>
                {destinations.map(dest => (
                  <motion.div key={dest.id} whileHover={{y:-8}} style={styles.card}>
                    <img src={dest.image} alt={dest.name} style={{width: '100%', height: '220px', objectFit: 'cover'}}/>
                    <div style={{padding: '20px'}}>
                      <h4 style={{fontSize: '22px', fontWeight: 'bold', color: '#1f2937'}}>{dest.name}, {dest.country}</h4>
                      <button onClick={() => handleBook(dest)} style={{...styles.button, marginTop: '16px'}}>
                        Book Flight
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        )}

        {/* Step 1: Search */}
        {step === 1 && selectedDest && (
          <motion.div key="search" initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-100,opacity:0}} 
            style={{padding: '24px 20px', maxWidth: '700px', margin: '0 auto'}}>
            <button onClick={() => setStep(0)} style={{marginBottom: '16px', color: '#2563eb', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer'}}>← Back</button>
            <h2 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '24px', color: '#1f2937'}}>Book to {selectedDest.name}</h2>
            
            <div style={{background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '24px'}}>
              <div style={{marginBottom: '16px'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151'}}>Travel Date</label>
                <input type="date" value={bookingData.date} 
                  onChange={e => setBookingData({...bookingData, date:e.target.value})}
                  style={styles.input}/>
              </div>

              <div>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: '600', color: '#374151'}}>Select Airline</label>
                <select value={bookingData.airline} 
                  onChange={e => setBookingData({...bookingData, airline:e.target.value})}
                  style={styles.input}>
                  <option value="">Choose Airline</option>
                  {airlines.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
            </div>

            <h3 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937'}}>Places to Visit</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px'}}>
              {selectedDest.places.map((place, i) => (
                <div key={i} style={{border: '2px solid #f3f4f6', borderRadius: '12px', overflow: 'hidden', background: 'white'}}>
                  <img src={place.img} alt={place.name} style={{width: '100%', height: '160px', objectFit: 'cover'}}/>
                  <div style={{padding: '16px'}}>
                    <p style={{fontSize: '14px', color: '#9333ea', fontWeight: '600'}}>{place.type}</p>
                    <p style={{fontWeight: 'bold', color: '#1f2937'}}>{place.name}</p>
                    <p style={{fontSize: '14px', color: '#6b7280'}}>⭐ {place.reviews} reviews</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setStep(2)} 
              disabled={!bookingData.date || !bookingData.airline}
              style={!bookingData.date || !bookingData.airline ? {...styles.button, ...styles.buttonDisabled} : styles.button}>
              Continue
            </button>
          </motion.div>
        )}

        {/* Step 2: Passenger Details */}
        {step === 2 && (
          <motion.div key="details" initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-100,opacity:0}} 
            style={{padding: '24px 20px', maxWidth: '600px', margin: '0 auto'}}>
            <button onClick={() => setStep(1)} style={{marginBottom: '16px', color: '#2563eb', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer'}}>← Back</button>
            <h2 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '24px', color: '#1f2937'}}>Passenger Details</h2>
            <div style={{background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
              <input type="text" placeholder="Full Name" value={bookingData.name}
                onChange={e => setBookingData({...bookingData, name:e.target.value})}
                style={{...styles.input, marginBottom: '16px'}}/>
              <input type="text" placeholder="CNIC Number" value={bookingData.cnic}
                onChange={e => setBookingData({...bookingData, cnic:e.target.value})}
                style={{...styles.input, marginBottom: '16px'}}/>
              <input type="password" placeholder="Create Password" value={bookingData.password}
                onChange={e => setBookingData({...bookingData, password:e.target.value})}
                style={styles.input}/>
            </div>
            <button 
              onClick={() => setStep(3)} 
              disabled={!bookingData.name || !bookingData.cnic || !bookingData.password}
              style={!bookingData.name || !bookingData.cnic || !bookingData.password ? {...styles.button, ...styles.buttonDisabled, marginTop: '24px'} : {...styles.button, marginTop: '24px'}}>
              Continue to Payment
            </button>
          </motion.div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <motion.div key="payment" initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-100,opacity:0}} 
            style={{padding: '24px 20px', maxWidth: '600px', margin: '0 auto'}}>
            <button onClick={() => setStep(2)} style={{marginBottom: '16px', color: '#2563eb', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer'}}>← Back</button>
            <h2 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '24px', color: '#1f2937'}}>Payment Method</h2>
            <div style={{background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
              {['Card', 'JazzCash', 'Easypaisa', 'Bank Transfer'].map(method => (
                <label key={method} style={{display: 'flex', alignItems: 'center', padding: '16px', border: '2px solid #e5e7eb', borderRadius: '12px', cursor: 'pointer', marginBottom: '12px'}}>
                  <input type="radio" name="payment" value={method} 
                    checked={bookingData.payment===method}
                    onChange={e => setBookingData({...bookingData, payment:e.target.value})}
                    style={{width: '18px', height: '18px'}}/>
                  <span style={{marginLeft: '12px', fontWeight: '600', color: '#374151'}}>{method}</span>
                </label>
              ))}
            </div>
            <button onClick={handleSubmit} style={{...styles.button, background: 'linear-gradient(90deg, #10b981, #059669)', marginTop: '24px'}}>
              Confirm Booking
            </button>
          </motion.div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <motion.div key="confirm" initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} 
            style={{padding: '24px 20px', textAlign: 'center', maxWidth: '600px', margin: '0 auto'}}>
            <div style={{fontSize: '64px', marginBottom: '16px'}}>✅</div>
            <h2 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937'}}>Booking Confirmed!</h2>
            <div style={{background: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'left', lineHeight: '2'}}>
              <p><strong>Destination:</strong> {selectedDest.name}, {selectedDest.country}</p>
              <p><strong>Date:</strong> {bookingData.date}</p>
              <p><strong>Airline:</strong> {bookingData.airline}</p>
              <p><strong>Passenger:</strong> {bookingData.name}</p>
              <p><strong>Payment:</strong> {bookingData.payment}</p>
            </div>
            <button onClick={resetBooking} style={{...styles.button, marginTop: '24px'}}>
              Book Another Flight
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}