const express = require('express');
const cors = require('cors');
const exerciseRoutes = require('./routes/exercises');

const PORT = 5000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.listen(PORT, () => {
   console.log(`server is running on http://localhost:${PORT}`);
});
