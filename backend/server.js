import express from 'express';
import mongoose from 'mongoose';  // 'Order' nahi, 'mongoose' hoga
import cors from 'cors';

const app = express();
const PORT = 3000;

const MONGODB_URI = 'mongodb://mongo:LcTaTcfNkZZljgTOKmoCUvqMJBPUQSJr@thomas.proxy.rlwy.net:59234/mongo?authSource=admin';

app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB Connected ✅'))
.catch(err => console.log('Mongo Error:', err));

// Schema simple - tumhare 20 person ke fields
const OrderSchema = new mongoose.Schema({
  userEmail: String,
  name: String,
  product: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now }
});
const Order = mongoose.model('Order', OrderSchema);

// POST - 20 ka array bhi save karega
app.post('/api/order', async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      await Order.insertMany(req.body);
      res.json({ success: true, count: req.body.length });
    } else {
      await Order.create(req.body);
      res.json({ success: true, count: 1 });
    }
  } catch (err) {
    res.status(500).json({ error: err.message }); // yahan bracket theek hai
  }
});

// GET - saare 20 dikhayega
app.get('/api/order', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message }); // yahan bhi bracket
  }
});

app.listen(PORT, () => console.log(`Server ON http://localhost:${PORT}`));