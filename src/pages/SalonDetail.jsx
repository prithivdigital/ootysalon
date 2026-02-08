import { useParams } from "react-router-dom";
import { salons } from "../data/salons";
import { Helmet } from "react-helmet";

export default function SalonDetail() {
  const { id } = useParams();
  const salon = salons.find(s => s.id === parseInt(id));

  if (!salon)
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Salon not found
      </h2>
    );

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      
      {/* SEO META */}
      <Helmet>
        <title>
          {salon.name} | Salon in Ooty – Haircut & Services | ootysalon.com
        </title>
        <meta
          name="description"
          content={`${salon.name} is a listed salon in Ooty offering services such as ${salon.services.join(
            ", "
          )}. View contact details, timings, images, and location before visiting.`}
        />
      </Helmet>

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "14px" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "6px" }}>
          {salon.name}
        </h1>
        <p style={{ fontSize: "0.95rem", color: "#666" }}>
          Salon in Ooty · Listed on ootysalon.com
        </p>
      </div>

      {/* CALL & WHATSAPP */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          marginBottom: "24px",
          flexWrap: "wrap"
        }}
      >
        <a
          href={`tel:${salon.phone}`}
          style={{
            padding: "12px 26px",
            background: "#007bff",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          Call
        </a>

        <a
          href={`https://wa.me/${salon.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "12px 26px",
            background: "#25D366",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          WhatsApp
        </a>
      </div>

      {/* ADDRESS & TIMINGS */}
      <div style={{ marginBottom: "22px" }}>
        <p><strong>Address:</strong> {salon.address}</p>
        <p><strong>Working Hours:</strong> {salon.timings}</p>
      </div>

      {/* SERVICES */}
      <div style={{ marginBottom: "22px" }}>
        <h3>Services Offered</h3>
        <ul>
          {salon.services.map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </div>

      {/* DESCRIPTION */}
      <div style={{ marginBottom: "22px" }}>
        <h3>About This Salon</h3>
        <p>{salon.description}</p>
      </div>

      {/* GALLERY */}
      <div style={{ marginBottom: "24px" }}>
        <h3>Salon Images</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "10px"
          }}
        >
          {salon.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${salon.name} salon in Ooty image ${i + 1}`}
              style={{
                width: "100%",
                height: "130px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />
          ))}
        </div>
      </div>

      {/* LOCATION */}
      <div style={{ marginBottom: "30px" }}>
        <h3>Location</h3>
        <iframe
          title={`${salon.name} location map`}
          src={`https://www.google.com/maps?q=${salon.lat},${salon.lng}&z=16&output=embed`}
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: "8px" }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

      {/* SUBTLE INFORMATION NOTE (BOTTOM) */}
      <p
        style={{
          textAlign: "center",
          fontSize: "0.78rem",
          color: "#777",
          lineHeight: "1.6",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        The details and images shown on this page are provided by the respective
        salon and are displayed for informational purposes only. Listings are not
        based on rankings, reviews, or service quality. Users are advised to
        verify services, pricing, and availability directly with the salon before
        visiting.
        <br />
        <span style={{ fontSize: "0.75rem", color: "#888" }}>
          ootysalon.com is managed by Zero Five September.
        </span>
      </p>
    </div>
  );
}
