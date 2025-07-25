const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdb = require("./config/db");
const clientRoutes = require("./routes/clientRoutes");
const authRoutes = require("./routes/authRoutes");
dotenv.config();
connectdb();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/clients",clientRoutes);
app.use("/api/auth",authRoutes);
const PORT = process.env.PORT || 5700;
app.listen(PORT,()=>console.log('server is running port 5700'));