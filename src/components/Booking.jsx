function handleSubmit(event) {
  event.preventDefault();

  alert(
    "Your booking request has been received. Our front desk team will check availability and contact you."
  );
}

function Booking() {
  return (
    <section id="booking">

      <h2>Book Your Stay</h2>

      <p>
        Send us your booking request. Our front desk team will check
        availability and contact you for confirmation.
      </p>

      <form onSubmit={handleSubmit}>

        <label>Guest Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          required
        />

        <label>Check-in Date</label>
        <input
          type="date"
          required
        />

        <label>Check-out Date</label>
        <input
          type="date"
          required
        />

        <label>Number of Guests</label>
        <select required>
          <option value="">Select number of guests</option>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
        </select>

        <label>Preferred Room Type</label>
        <select required>
          <option value="">Select room type</option>
          <option value="king">King Room</option>
          <option value="queen">Queen Room</option>
          <option value="twin">Twin Room</option>
          <option value="no-preference">No Preference</option>
        </select>

        <label>Message / Special Request</label>
        <textarea
          placeholder="Tell us any special request or requirement..."
          rows="5"
        ></textarea>

        <p>
          Maximum 3 guests are allowed per booking.
        </p>

        <button type="submit">
          Send Booking Request
        </button>

      </form>

    </section>
  );
}

export default Booking;