const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware để đọc dữ liệu JSON gửi lên
app.use(express.json());

// Kết nối đến container MongoDB (nammongodb)
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Đã kết nối thành công với container MongoDB (nammongodb)!'))
  .catch((err) => console.error('❌ Lỗi kết nối MongoDB:', err));

// Sử dụng Routes cho API products
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('API Product CRUD đang hoạt động!');
});

app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại cổng ${PORT}`);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// abc