const express = require('express');
const app = express();
const PORT = process.env.PORT || 5004;
const cors = require('cors');
const dotenv = require('dotenv');

require('./db/db');
dotenv.config(); 

const authRoutes = require('./routes/clientRoutes'); 
const attendanceRoutes = require('./routes/attendanceRoutes')
const leaveRoutes = require('./routes/leaveRoutes.js');
const payrollRoutes = require('./routes/payrollRoutes.js');



app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api',attendanceRoutes);
app.use('/api/leave', leaveRoutes);
app.use('/api/payroll', payrollRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
