const express = require('express');
const exerciseRoutes = require('./routes/exercises');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/api', exerciseRoutes);

app.listen(PORT, () => {
   console.log(`server is running on http://localhost:${PORT}`);
});
