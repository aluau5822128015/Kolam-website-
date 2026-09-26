function Booking() {
  return (
    <section id="booking">

      <h2>Book Your Stay</h2>
      <p>Fill in your details to request a booking.</p>

      <form>

        <input
          type="text"
          placeholder="Guest Name"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <input
          type="date"
        />

        <input
          type="date"
        />

        <input
          type="number"
          placeholder="Number of Guests"
          min="1"
        />

        <select>
          <option value="">Select Room Type</option>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
        </select>

        <button type="submit">
          Book Now
        </button>

      </form>

    </section>
  );
}

export default Booking;