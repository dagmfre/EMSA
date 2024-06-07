export default function Map() {
  return (
    <div className="gmap-cont">
      <div>
        <h1>Visit Us</h1>
        <i class="fa-solid fa-location-dot"></i>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34278.322778297115!2d38.745953740282005!3d9.014959163973117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1716379801465!5m2!1sen!2sus"
        width="600"
        title="gmap"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
