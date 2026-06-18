import React, { useState, useEffect } from "react";

// Standard Master Items List - Exactly 5 High Quality Premium Products Per Category
const bakeryItems = [
  // Cakes
  { id: 1, name: "Luxury Chocolate Truffle Cake", price: 25, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", category: "cake" },
  { id: 2, name: "Velvet Strawberry Mousse Cake", price: 28, image: "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?w=600", category: "cake" },
  { id: 3, name: "Artisanal Red Velvet Sponge", price: 30, image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600", category: "cake" },
  { id: 4, name: "Premium Madagascar Vanilla", price: 45, image: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600", category: "cake" },

  // Donuts
  { id: 5, name: "Gourmet Glazed Fondant Donut", price: 4, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600", category: "donut" },

  { id: 7, name: "Frosted Wild Berry Donut", price: 4, image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=600", category: "donut" },
  { id: 22, name: "White Chocolate Crumb Donut", price: 4, image: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=600", category: "donut" },


  // Cookies
  { id: 8, name: "Classic Choco-Chip Chunk", price: 2, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600", category: "cookie" },
  { id: 9, name: "Danish Salted Butter Cookie", price: 2, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600", category: "cookie" },
  { id: 10, name: "Organic Honey Oatmeal Oat", price: 2.5, image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=600", category: "cookie" },
  { id: 24, name: "Fudge Double Chocolate Crisp", price: 3, image: "https://images.unsplash.com/photo-1600431521340-491eca880813?w=600", category: "cookie" },
  { id: 25, name: "Premium Almond Shortbread", price: 3.5, image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600", category: "cookie" },

  // Ice Cream
  { id: 11, name: "French Vanilla Pod Gelato", price: 6, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600", category: "icecream" },
  { id: 12, name: "Pure Swiss Chocolate Melt", price: 7, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600", category: "icecream" },

  { id: 26, name: "Rich Mint Choco Infusion", price: 8, image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600", category: "icecream" },
  { id: 27, name: "Sicilian Green Pistachio", price: 8.5, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600", category: "icecream" },

  // Pastries
  { id: 14, name: "Flaky Parisian Croissant", price: 5, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600", category: "pastry" },
  { id: 15, name: "Brown Sugar Cinnamon Swirl", price: 6, image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600", category: "pastry" },
  { id: 16, name: "Seasonal Fresh Glazed Tart", price: 12, image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=600", category: "pastry" },


  // Muffins
  { id: 18, name: "Bursting Blueberry Crumb Muffin", price: 5, image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600", category: "muffin" },

  { id: 29, name: "Ultimate Lava Chocolate Muffin", price: 5.5, image: "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?w=600", category: "muffin" },
  { id: 30, name: "Zesty Orange Poppyseed Muffin", price: 5.5, image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600", category: "muffin" },


  // Brownies
  { id: 20, name: "Fudge Cocoa Walnut Brownie", price: 10, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600", category: "brownie" },
  { id: 32, name: "Gooey Roasted Pecan Brownie", price: 11, image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600", category: "brownie" },

  { id: 34, name: "Double Shot Espresso Injected", price: 11, image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600", category: "brownie" },
      { id: 8, name: "Butter Croissant", price: 7, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff" },
    { id: 9, name: "French Macarons", price: 12, image: "https://images.unsplash.com/photo-1558326567-98ae2405596b" },
    { id: 10, name: "Pancakes Stack", price: 9, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93" },
    { id: 11, name: "Blueberry Muffin", price: 6, image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa" },
    { id: 12, name: "Red Velvet Cake", price: 16, image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f" },

    { id: 18, name: "Cinnamon Roll", price: 8, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff" },
    { id: 19, name: "Fruit Tart", price: 12, image: "https://images.unsplash.com/photo-1464306076886-da185f6a9d05" },
    { id: 20, name: "Birthday Cake", price: 25, image: "https://images.unsplash.com/photo-1559628233-100c798642d4" },
  

];

const mainCategories = [
  { id: "all", name: "All Confections" },
  { id: "cake", name: "Cakes" },
  { id: "donut", name: "Donuts" },
  { id: "cookie", name: "Cookies" },
  { id: "icecream", name: "Ice Cream" },
  { id: "pastry", name: "Pastries" },
  { id: "muffin", name: "Muffins" },
  { id: "brownie", name: "Brownies" }
];

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [addedItemId, setAddedItemId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(0);
  const [feedback, setFeedback] = useState({ name: "", email: "", message: "", rating: "" });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [orderDetails, setOrderDetails] = useState({ name: "", address: "", phone: "", cnic: "" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=12")
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(() => setReviews([]));
  }, []);

  const filteredItems = selectedCategory === "all" ? bakeryItems : bakeryItems.filter(item => item.category === selectedCategory);

  
const addToCart = async (item) => {
    // 1. Cart state update
    const existingItem = cart.find(c => c.id === item.id);
    if (existingItem) {
      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 1000);

    // 2. Backend pe auto save
    try {
      await fetch('http://localhost:3000/api/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: item.id.toString(),
          name: item.name,
          price: item.price,
          quantity: 1,
          userEmail: 'guest@test.com'
        })
      });
    } catch (err) {
      console.log('Backend error:', err);
    }
  };
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart(cart.map(item => item.id === id ? { ...item, qty } : item));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = discountApplied === 20 ? subtotal * 0.2 : 0;
  const totalBill = subtotal - discount;

  const applyDiscount = () => {
    if (discountCode.toUpperCase() === "SWEET20") {
      setDiscountApplied(20);
      alert("20% Discount Applied! 🎉");
    } else {
      alert("Invalid Code. Try SWEET20");
    }
  };

  const handleOrder = () => {
    if (!orderDetails.name.trim() || !orderDetails.address.trim() || !orderDetails.phone.trim() || !orderDetails.cnic.trim()) {
      alert("Action Denied: Complete all details including a valid CNIC card number to verify security records.");
      return;
    }
    setOrderPlaced(true);
    setCart([]);
    setTimeout(() => {
      setOrderPlaced(false);
      setOrderDetails({ name: "", address: "", phone: "", cnic: "" });
      setPage("home");
    }, 4000);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedback.name.trim() || !feedback.email.trim() || !feedback.message.trim() || !feedback.rating) {
      alert("Form Incomplete: Kindly input all feedback fields appropriately.");
      return;
    }
    setFeedbackSubmitted(true);
    setFeedback({ name: "", email: "", message: "", rating: "" });
    setTimeout(() => setFeedbackSubmitted(false), 3000);
  };

  return (
    <div style={styles.body}>
      {/* Universal Global Header Brand Strip */}
      <div style={styles.navbar}>
        <h1 style={styles.logo} onClick={() => setPage("home")}>Sweet Dreams</h1>
        <div style={styles.navButtons}>
          <button style={page === "home" ? styles.activeNavBtn : styles.navBtn} onClick={() => setPage("home")}>Home</button>
          <button style={page === "about" ? styles.activeNavBtn : styles.navBtn} onClick={() => setPage("about")}>About</button>
          <button style={page === "items" ? styles.activeNavBtn : styles.navBtn} onClick={() => setPage("items")}>Menu</button>
          <button style={page === "bogo" ? styles.activeNavBtn : styles.navBtn} onClick={() => setPage("bogo")}>BOGO Offer</button>
          <button style={page === "discount" ? styles.activeNavBtn : styles.navBtn} onClick={() => setPage("discount")}>Offers</button>
          <button style={page === "order" ? styles.activeNavBtn : styles.navBtn} onClick={() => setPage("order")}>Order Online</button>
          <button style={page === "cart" ? styles.activeNavBtn : styles.navBtn} onClick={() => setPage("cart")}>Cart ({cart.reduce((a, b) => a + b.qty, 0)})</button>
          <button style={page === "contact" ? styles.activeNavBtn : styles.navBtn} onClick={() => setPage("contact")}>Contact</button>
        </div>
      </div>

      <main style={{ minHeight: "calc(100vh - 180px)" }}>
        
        {/* PAGE 1: HOME PANEL */}
        {page === "home" && (
          <div>
            <div style={styles.hero}>
              <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600" alt="Boutique Luxury Bakery Counter" style={styles.heroImg} />
              <div style={styles.heroOverlay}>
                <h1 style={styles.heroTitle}>SWEET DREAMS BAKERY</h1>
                <p style={styles.heroText}>Premium Handcrafted Confections Baked Daily</p>
                <button style={styles.heroBtn} onClick={() => setPage("items")}>Discover Menu</button>
              </div>
            </div>

            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>The Artisanal Standards</h2>
              <div style={styles.featureGrid}>
                <div style={styles.featureCard}>
                  <h3 style={styles.cardHeading}>Premium Ingredients</h3>
                  <p style={styles.text}>Hand-selected Belgian chocolates, organic dairy creams, and freshly ground berries.</p>
                </div>
                <div style={styles.featureCard}>
                  <h3 style={styles.cardHeading}>Express Safe Delivery</h3>
                  <p style={styles.text}>Carefully temperature-regulated dispatch ensuring pristine product arrivals at your steps.</p>
                </div>
                <div style={styles.featureCard}>
                  <h3 style={styles.cardHeading}>Bespoke Gatherings</h3>
                  <p style={styles.text}>Meticulous custom arrangements sculpted elegantly by seasoned master confection chefs.</p>
                </div>
                <div style={styles.featureCard}>
                  <h3 style={styles.cardHeading}>Absolute Quality Assurance</h3>
                  <p style={styles.text}>Uncompromising focus on taste profiles, textures, and elite visual execution.</p>
                </div>
              </div>
            </div>

            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Signature Highlights</h2>
              <div style={styles.grid}>
                {bakeryItems.slice(0, 5).map(item => (
                  <div key={item.id} style={styles.card}>
                    <img src={item.image} alt={item.name} style={styles.cardImg} />
                    <h4 style={styles.itemName}>{item.name}</h4>
                    <p style={styles.price}>${item.price.toFixed(2)}</p>
                    <button style={styles.addBtn} onClick={() => addToCart(item)}>Add to Cart</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PAGE 2: ABOUT PANEL */}
        {page === "about" && (
          <div style={styles.center}>
            <h1 style={styles.heading}>The Bakery Heritage</h1>
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200" alt="Master Chefs At Work" style={styles.aboutImg} />
            <p style={styles.text}>Established globally, Sweet Dreams began as an ambitious boutique confectionery workshop dedicated to re-imagining traditional pastry blueprints. Over the decade, we have scaled our delivery channels while rigorously maintaining our fine-dining core values.</p>
            <p style={styles.text}>We run specialized micro-kitchen layouts under sterile conditions where moisture levels, flour refinement, and baking intervals are systematically calibrated by our expert culinary team.</p>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}><h2 style={styles.statNumber}>15+</h2><p style={styles.text}>Years operating</p></div>
              <div style={styles.statCard}><h2 style={styles.statNumber}>50+</h2><p style={{ ...styles.text, margin: 0 }}>Pastry Experts</p></div>
              <div style={styles.statCard}><h2 style={styles.statNumber}>5k+</h2><p style={{ ...styles.text, margin: 0 }}>Daily Assured Orders</p></div>
              <div style={styles.statCard}><h2 style={styles.statNumber}>35+</h2><p style={{ ...styles.text, margin: 0 }}>Bespoke Creations</p></div>
            </div>
          </div>
        )}

        {/* PAGE 3: MENU MATRIX */}
        {page === "items" && (
          <div style={styles.center}>
            <h1 style={styles.heading}>Our Delicious Menu</h1>
            <div style={styles.categoryBar}>
              {mainCategories.map(cat => (
                <button key={cat.id} style={selectedCategory === cat.id ? styles.activeCatBtn : styles.catBtn} onClick={() => setSelectedCategory(cat.id)}>
                  {cat.name}
                </button>
              ))}
            </div>
            <div style={styles.grid}>
              {filteredItems.map(item => (
                <div key={item.id} style={styles.card}>
                  <img src={item.image} alt={item.name} style={styles.cardImg} onError={(e) => e.target.src = "https://via.placeholder.com/300x200?text=Premium+Bakery"} />
                  <h4 style={styles.itemName}>{item.name}</h4>
                  <p style={styles.price}>${item.price.toFixed(2)}</p>
                  <button style={addedItemId === item.id ? styles.addedBtn : styles.addBtn} onClick={() => addToCart(item)}>
                    {addedItemId === item.id ? "Added ✓" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 4: BOGO PROMOTION COMPONENT */}
        {page === "bogo" && (
          <div style={styles.center}>
            <h1 style={styles.heading}>Exclusive Dual Promotions</h1>
            <p style={styles.text}>Complimentary matching rewards applicable across certified premium selections below.</p>
            <div style={styles.offerBox}>
              <h2 style={{ color: "#5d4037", marginBottom: "12px", fontSize: "22px" }}>Buy Single Specialty Cake & Attain Gourmet Cupcake Gift</h2>
              <p style={styles.text}>Add sophistication to your routines. Order any custom signature cake item from this exclusive dashboard and get automated complimentary baked gifts securely enclosed within your parcel package.</p>
              <button style={styles.heroBtn} onClick={() => setPage("items")}>Browse Live Items</button>
            </div>
            <div style={styles.grid}>
              {bakeryItems.filter(i => i.category === "cake").slice(0, 5).map(item => (
                <div key={item.id} style={styles.card}>
                  <img src={item.image} alt={item.name} style={styles.cardImg} />
                  <h4 style={styles.itemName}>{item.name}</h4>
                  <p style={styles.price}>${item.price.toFixed(2)} + Included Gift</p>
                  <button style={styles.addBtn} onClick={() => addToCart(item)}>Secure Promotion</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 5: DISCOUNT PROMO MANAGMENT */}
        {page === "discount" && (
          <div style={styles.center}>
            <h1 style={styles.heading}>Strategic Seasonal Reductions</h1>
            <div style={styles.offerBox}>
              <h2 style={{ color: "#5d4037", fontSize: "20px" }}>Active Promotional Voucher: SWEET20</h2>
              <p style={styles.text}>Apply validation token code to unlock an absolute 20% markdown threshold parameters on orders scaling above $50.</p>
              <input type="text" placeholder="Enter Valid Token Code" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} style={styles.input} />
              <button style={styles.submitBtn} onClick={applyDiscount}>Apply Code</button>
              {discountApplied > 0 && <p style={styles.success}>System Notice: 20% Discount parameters initiated. Reduction: ${(discount).toFixed(2)}</p>}
            </div>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}><h3 style={{ color: "#5d4037", margin: "0 0 10px" }}>10% Welcome</h3><p style={styles.text}>Voucher: WELCOME10</p></div>
              <div style={styles.statCard}><h3 style={{ color: "#5d4037", margin: "0 0 10px" }}>Free Shipping</h3><p style={styles.text}>Voucher: FREESHIP</p></div>
              <div style={styles.statCard}><h3 style={{ color: "#5d4037", margin: "0 0 10px" }}>Student Deal</h3><p style={styles.text}>Voucher: STUDENT15</p></div>
            </div>
          </div>
        )}

        {/* PAGE 6: ORDER SYSTEM PANEL */}
        {page === "order" && (
          <div style={styles.center}>
            <h1 style={styles.heading}>Secure Checkout Desk</h1>
            <div style={styles.orderGrid}>
              <div style={styles.orderForm}>
                <h3 style={{ color: "#5d4037", marginBottom: "15px" }}>online order</h3>
                
                <input placeholder="Full Name" value={orderDetails.name} onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })} style={styles.input} required />
                <input placeholder="Phone Contact" value={orderDetails.phone} onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })} style={styles.input} required />
                <input placeholder="CNIC Number (e.g., 34101XXXXXXXX)" value={orderDetails.cnic} onChange={(e) => setOrderDetails({ ...orderDetails, cnic: e.target.value })} style={styles.input} required />
                <textarea placeholder="Complete Structured Delivery Address Details" value={orderDetails.address} onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })} style={styles.textarea} required />
                
                <h3 style={{ color: "#5d4037", margin: "20px 0 10px" }}>Payment Strategy Selection</h3>
                <label style={styles.radioLabel}><input type="radio" name="pay" defaultChecked /> Standard Cash On Delivery Routing</label>
                <label style={styles.radioLabel}><input type="radio" name="pay" /> High-End Secure Card Processing Gateway</label>
                <button style={styles.submitBtn} onClick={handleOrder}>Finalize Delivery Dispatch</button>
                {orderPlaced && <p style={styles.success}>Verification Success: Your fresh order dispatch matrix has been logged securely!</p>}
              </div>

              <div style={styles.orderSummary}>
                <h3 style={{ color: "#5d4037", marginBottom: "15px" }}>Invoice Parameters</h3>
                {cart.length === 0 ? <p style={styles.text}>No items assigned to invoice summary currently.</p> : cart.map(item => (
                  <div key={item.id} style={styles.summaryItem}>
                    <span style={styles.text}>{item.name} x {item.qty}</span>
                    <span style={{ fontWeight: "600" }}>${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                ))}
                <hr style={{ borderTop: "1px solid #efebe9", margin: "15px 0" }} />
                <div style={styles.summaryItem}><span style={styles.text}>Gross Subtotal:</span> <span style={{ fontWeight: "600" }}>${subtotal.toFixed(2)}</span></div>
                {discount > 0 && <div style={styles.summaryItem}><span style={{ color: "#2e7d32" }}>Active Markdown:</span> <span style={{ color: "#2e7d32", fontWeight: "600" }}>-${discount.toFixed(2)}</span></div>}
                <div style={styles.summaryItem}><span style={{ fontWeight: "700" }}>Total Due Bill:</span> <span style={styles.price}>${totalBill.toFixed(2)}</span></div>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 7: SHOPPING BASKET SUMMARY */}
        {page === "cart" && (
          <div style={styles.center}>
            <h1 style={styles.heading}>Your Shopping Cart</h1>
            {cart.length === 0 ? (
              <p style={styles.text}>Your cart is empty. <button style={styles.linkBtn} onClick={() => setPage("items")}>Shop Menu Selections</button></p>
            ) : (
              <>
                {cart.map(item => (
                  <div key={item.id} style={styles.cartItem}>
                    <img src={item.image} alt={item.name} style={styles.cartImg} />
                    <div style={styles.cartInfo}>
                      <h4 style={styles.itemName}>{item.name}</h4>
                      <p style={styles.price}>${item.price.toFixed(2)}</p>
                    </div>
                    <div style={styles.qtyBox}>
                      <button onClick={() => updateQty(item.id, item.qty - 1)} style={styles.qtyBtn}>-</button>
                      <span style={{ fontWeight: "600", minWidth: "20px" }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} style={styles.qtyBtn}>+</button>
                    </div>
                    <button style={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                ))}
                <h2 style={styles.total}>Accumulated Value: ${totalBill.toFixed(2)}</h2>
                <button style={{ ...styles.submitBtn, marginTop: "20px" }} onClick={() => setPage("order")}>Proceed to Payment Desk</button>
              </>
            )}
          </div>
        )}

        {/* PAGE 8: CONTACT CENTER DISPATCH */}
        {page === "contact" && (
          <div style={styles.center}>
            <h1 style={styles.heading}>Contact us</h1>
            <div style={styles.contactGrid}>
              <div style={styles.contactBox}>
                <h3 style={{ color: "#5d4037", margin: "0 0 8px" }}>Flagship Boutique Headquarters</h3>
                <p style={styles.text}>123 Baker Street<br/ >fawara chowk gujrat</p>
                <h3 style={{ color: "#5d4037", margin: "20px 0 8px" }}>Direct Helpline Lines</h3>
                <p style={styles.text}>+1 800 555 1234</p>
                <h3 style={{ color: "#5d4037", margin: "20px 0 8px" }}>Electronic Business Relations</h3>
                <p style={styles.text}>happy@sweetdreams.com</p>
              </div>

              <form onSubmit={handleFeedbackSubmit} style={styles.feedbackForm}>
                <h3 style={{ color: "#5d4037", marginBottom: "15px" }}>Log Corporate Guest Book</h3>
                <input type="text" placeholder="Full Legal Name" value={feedback.name} onChange={(e) => setFeedback({ ...feedback, name: e.target.value })} style={styles.input} required />
                <input type="email" placeholder="Verified Mailing Address" value={feedback.email} onChange={(e) => setFeedback({ ...feedback, email: e.target.value })} style={styles.input} required />
                <textarea placeholder="Articulate Your Dining Experience Remarks..." value={feedback.message} onChange={(e) => setFeedback({ ...feedback, message: e.target.value })} style={styles.textarea} required />
                <p style={styles.ratingLabel}>Rate Quality Standard Protocols:</p>
                <div style={styles.ratingGroup}>
                  {["Excellent", "Good", "Average", "Poor"].map(r => (
                    <label key={r} style={styles.ratingOption}>
                      <input type="radio" name="rating" value={r} checked={feedback.rating === r} onChange={(e) => setFeedback({ ...feedback, rating: r })} required />
                      <span style={styles.text}>{r}</span>
                    </label>
                  ))}
                </div>
                <button type="submit" style={styles.submitBtn}>Transmit Feedback Form</button>
                {feedbackSubmitted && <p style={styles.success}>Submission Complete: Your notes have reached our service inspectors safely! 💕</p>}
              </form>
            </div>
          </div>
        )}

      </main>

      <footer style={styles.footer}>
        <p style={{ margin: 0, fontSize: "14px", letterSpacing: "0.5px" }}>© 2026 Sweet Dreams Artisan Confections Group. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// Highly Professional, Muted Warm Earthy Tone Configuration System Object
const styles = {
  body: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    background: "#fbf8f3",
    minHeight: "100vh",
    color: "#4e342e",
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },
  navbar: {
    background: "#5d4037",
    padding: "16px 5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    gap: "15px",
    flexWrap: "wrap"
  },
  logo: {
    color: "#fbe9e7",
    fontWeight: "700",
    fontSize: "23px",
    margin: 0,
    cursor: "pointer",
    letterSpacing: "0.5px"
  },
  navButtons: {
    display: "flex",
    gap: "6px",
    flexWrap: "wrap"
  },
  navBtn: {
    background: "transparent",
    color: "#d7ccc8",
    border: "none",
    padding: "8px 14px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "13px",
    transition: "all 0.2s ease"
  },
  activeNavBtn: {
    background: "#8d6e63",
    color: "#ffffff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "13px"
  },
  hero: {
    position: "relative",
    height: "480px",
    overflow: "hidden"
  },
  heroImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.5)"
  },
  heroOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#ffffff",
    width: "90%",
    maxWidth: "800px"
  },
  heroTitle: {
    fontSize: "clamp(30px, 4.5vw, 44px)",
    fontWeight: "800",
    marginBottom: "12px",
    letterSpacing: "1.5px"
  },
  heroText: {
    fontSize: "clamp(15px, 2vw, 19px)",
    marginBottom: "25px",
    color: "#f5f5f5",
    fontWeight: "300"
  },
  heroBtn: {
    background: "#8d6e63",
    color: "white",
    border: "none",
    padding: "12px 36px",
    borderRadius: "4px",
    fontSize: "14.5px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.12)"
  },
  section: {
    padding: "50px 5%",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  sectionTitle: {
    textAlign: "center",
    color: "#5d4037",
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "35px"
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px"
  },
  featureCard: {
    background: "#ffffff",
    padding: "30px 20px",
    borderRadius: "6px",
    textAlign: "center",
    border: "1px solid #efebe9",
    boxShadow: "0 4px 10px rgba(93,64,55,0.02)"
  },
  cardHeading: {
    fontSize: "17px",
    fontWeight: "600",
    color: "#5d4037",
    marginBottom: "10px"
  },
  center: {
    padding: "40px 5%",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center"
  },
  heading: {
    color: "#5d4037",
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "25px"
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.65",
    color: "#6d4c41",
    margin: "0 auto 15px",
    maxWidth: "750px"
  },
  itemName: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#4e342e",
    margin: "12px 0 5px"
  },
  aboutImg: {
    width: "100%",
    maxWidth: "720px",
    maxHeight: "360px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "25px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.04)"
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginTop: "35px"
  },
  statCard: {
    background: "#f4ebe1",
    padding: "20px",
    borderRadius: "5px",
    border: "1px solid #efebe9"
  },
  statNumber: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#5d4037",
    margin: "0 0 4px"
  },
  categoryBar: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "35px"
  },
  catBtn: {
    background: "#ffffff",
    color: "#5d4037",
    border: "1px solid #d7ccc8",
    padding: "8px 18px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "13px"
  },
  activeCatBtn: {
    background: "#5d4037",
    color: "#ffffff",
    border: "1px solid #5d4037",
    padding: "8px 18px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "13px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "25px"
  },
  card: {
    background: "#ffffff",
    padding: "15px",
    borderRadius: "6px",
    border: "1px solid #efebe9",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.01)"
  },
  cardImg: {
    width: "100%",
    height: "170px",
    objectFit: "cover",
    borderRadius: "4px"
  },
  price: {
    color: "#8d6e63",
    fontWeight: "700",
    fontSize: "17px",
    margin: "5px 0 10px"
  },
  addBtn: {
    background: "#8d6e63",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "13px",
    width: "100%"
  },
  addedBtn: {
    background: "#689f38",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "13px",
    width: "100%"
  },
  offerBox: {
    background: "#f3e9dc",
    padding: "35px 20px",
    borderRadius: "6px",
    marginBottom: "35px",
    border: "1px dashed #baa38f"
  },
  input: {
    width: "100%",
    maxWidth: "360px",
    padding: "11px 14px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #d7ccc8",
    fontSize: "13.5px",
    display: "block",
    margin: "10px auto",
    outlineColor: "#8d6e63"
  },
  textarea: {
    width: "100%",
    maxWidth: "360px",
    padding: "11px 14px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #d7ccc8",
    fontSize: "13.5px",
    minHeight: "85px",
    display: "block",
    margin: "10px auto",
    fontFamily: "inherit",
    outlineColor: "#8d6e63"
  },
  submitBtn: {
    background: "#5d4037",
    color: "white",
    border: "none",
    padding: "11px 28px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "13.5px"
  },
  success: {
    color: "#388e3c",
    fontWeight: "600",
    marginTop: "12px",
    fontSize: "14.5px"
  },
  orderGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginTop: "20px"
  },
  orderForm: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "6px",
    border: "1px solid #efebe9",
    textAlign: "left"
  },
  orderSummary: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "6px",
    border: "1px solid #efebe9",
    textAlign: "left"
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0"
  },
  radioLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
    cursor: "pointer",
    fontSize: "13.5px"
  },
  cartItem: {
    background: "#ffffff",
    padding: "15px",
    margin: "12px auto",
    borderRadius: "6px",
    border: "1px solid #efebe9",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    maxWidth: "680px",
    flexWrap: "wrap"
  },
  cartImg: {
    width: "70px",
    height: "70px",
    borderRadius: "4px",
    objectFit: "cover"
  },
  cartInfo: {
    flex: "1 1 150px",
    textAlign: "left"
  },
  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },
  qtyBtn: {
    background: "#e8dfd8",
    color: "#4e342e",
    border: "none",
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    cursor: "pointer",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  removeBtn: {
    background: "#d32f2f",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "12px"
  },
  total: {
    color: "#5d4037",
    fontSize: "22px",
    fontWeight: "700",
    marginTop: "25px"
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginTop: "20px"
  },
  contactBox: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "6px",
    border: "1px solid #efebe9",
    textAlign: "left"
  },
  feedbackForm: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "6px",
    border: "1px solid #efebe9",
    textAlign: "left"
  },
  ratingLabel: {
    fontWeight: "600",
    marginBottom: "8px",
    fontSize: "13.5px",
    color: "#4e342e"
  },
  ratingGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "15px"
  },
  ratingOption: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer"
  },
  linkBtn: {
    background: "none",
    border: "none",
    color: "#8d6e63",
    cursor: "pointer",
    fontWeight: "600",
    textDecoration: "underline"
  },
  footer: {
    background: "#4e342e",
    color: "#d7ccc8",
    textAlign: "center",
    padding: "24px 20px",
    marginTop: "60px",
    borderTop: "3px solid #5d4037"
  }
};
