import { Helmet } from "react-helmet";

export default function ListYourSalon() {
  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
     
      <Helmet>
        <title>List Your Salon on ootysalon.com</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

     
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "10px" }}>
          List Your Salon on ootysalon.com
        </h1>
        <p style={{ fontSize: "1rem", color: "#555" }}>
          A limited salon listing platform for Ooty, managed by Zero Five September.
        </p>
      </div>

      <p style={{ lineHeight: "1.7", marginBottom: "20px" }}>
        <strong>ootysalon.com</strong> is a dedicated online salon directory created
        to help salon and barbershop owners in Ooty improve visibility and receive
        direct customer enquiries through a single, trusted platform.
      </p>

      <p style={{ lineHeight: "1.7", marginBottom: "20px" }}>
        To maintain quality, manageability, and fair exposure, salon listings are
        strictly limited. Only a fixed number of salons are accepted for each
        yearly cycle.
      </p>

     
      <div
        style={{
          background: "#f8f9fa",
          padding: "16px",
          borderRadius: "8px",
          marginBottom: "24px"
        }}
      >
        <strong>Listing Limit:</strong> Only <strong>30 salons</strong> will be
        listed for the current listing period. Once slots are filled, no new
        listings will be accepted until renewal or expansion.
      </div>

     
      <h2 style={{ marginBottom: "10px" }}>Listing Structure & Pricing (1 Year)</h2>

      <ul style={{ lineHeight: "1.9", marginBottom: "24px" }}>
        <li><strong>Premium Top Listing</strong> – Rs. 6,000 (5 slots)</li>
        <li><strong>Premium Listing</strong> – Rs. 5,000 (5 slots)</li>
        <li><strong>High Visibility Listing</strong> – Rs. 4,000 (5 slots)</li>
        <li><strong>Popular Listing</strong> – Rs. 3,000 (5 slots)</li>
        <li><strong>Standard Listing</strong> – Rs. 2,000 (5 slots)</li>
        <li><strong>Starter Listing</strong> – Rs. 1,000 (5 slots)</li>
      </ul>

      <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "24px" }}>
        All listings are valid for one full year from the activation date.
        There are no monthly payment options. Payment is one-time only.
      </p>

      <h2 style={{ marginBottom: "10px" }}>What Your Listing Includes</h2>

      <ul style={{ lineHeight: "1.9", marginBottom: "24px" }}>
        <li>Salon name and description</li>
        <li>Shop address and Google Map location</li>
        <li>Call button (direct phone contact)</li>
        <li>WhatsApp direct chat button</li>
        <li>Business working hours</li>
        <li>Services offered</li>
        <li>Shop images (interior / exterior)</li>
        <li>Optional owner image</li>
      </ul>

     
      <h2 style={{ marginBottom: "10px" }}>Renewal & Priority Policy</h2>

      <p style={{ lineHeight: "1.7", marginBottom: "20px" }}>
        Renewal for the next listing cycle will be opened first to salons that are
        already listed on ootysalon.com. Existing listed salons will be notified
        before allowing new shops to enter.
      </p>

      <p style={{ lineHeight: "1.7", marginBottom: "24px" }}>
        New salons may be accepted only if slots become available due to
        non-renewal or if Zero Five September decides to expand the platform
        structure or revise listing capacity.
      </p>

      {/* DISCLAIMER */}
      <h2 style={{ marginBottom: "10px" }}>Important Information</h2>

      <p style={{ lineHeight: "1.7", fontSize: "0.9rem", color: "#555" }}>
        Salon listing order is not based on quality, reviews, ratings, or service
        standards. Listings are displayed according to the platform structure and
        slot availability. Customer response may vary depending on individual
        salon services, pricing, and demand.
      </p>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a
          href="https://wa.me/9360491063"
          style={{
            padding: "14px 30px",
            background: "#25D366",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            display: "inline-block"
          }}
        >
          Contact on WhatsApp to Get Listed
        </a>
      </div>

    
      <p
        style={{
          textAlign: "center",
          fontSize: "0.75rem",
          color: "#777",
          marginTop: "30px"
        }}
      >
       
      </p>
    </div>
  );
}
