const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Kolam backend is running!");
});

app.post("/api/bookings", (req, res) => {
  const booking = req.body;

  console.log("New booking received:", booking);

  res.status(201).json({
    message: "Booking request received successfully!",
    booking: booking,
  });
});

app.listen(PORT, () => {
  console.log(`Kolam backend running on port ${PORT}`);
});