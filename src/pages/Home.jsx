import { Link } from "react-router-dom";
import { salons } from "../data/salons";
import { Helmet } from "react-helmet";

export default function Home() {
  const visibleSalons = salons.slice(0, 30);

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "16px" }}>
      
      {/* SEO META */}
      <Helmet>
        <title>
          Salon in Ooty | Haircut & Local Hair Salons Directory – ootysalon.com
        </title>
        <meta
          name="description"
          content="Browse salons and haircut services in Ooty. Explore local hair salons, view contact details, working hours, images, and verify services before visiting."
        />
      </Helmet>

      {/* HERO SECTION */}
      <div
        style={{
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          padding: "44px 18px",
          textAlign: "center",
          borderRadius: "14px",
          color: "#fff",
          marginBottom: "12px"
        }}
      >
        <h1 style={{ fontSize: "2.3rem", marginBottom: "8px" }}>
          Salon and Haircut Services in Ooty
        </h1>
        <p style={{ fontSize: "1rem", opacity: 0.95 }}>
          A local salon directory helping users discover haircut and grooming
          services in Ooty with direct contact details.
        </p>
      </div>

      {/* SUBTLE INFORMATION NOTE */}
      <p
        style={{
          textAlign: "center",
          fontSize: "0.78rem",
          color: "#777",
          marginBottom: "28px",
          lineHeight: "1.6"
        }}
      >
        Listings on this website are displayed for informational purposes and are
        not based on rankings, reviews, or service quality. The details and images
        shown on this website are provided by the respective salons and are
        intended to reflect their actual services. Users are advised to verify
        availability, pricing, and services directly with the salon before
        visiting.
        <br />
        <span style={{ fontSize: "0.75rem", color: "#888" }}>
          ootysalon.com is managed by Zero Five September.
        </span>
      </p>

      {/* SECTION HEADING */}
      <h2 style={{ textAlign: "center", marginBottom: "14px" }}>
        Listed Hair Salons in Ooty
      </h2>

      {/* GRID STYLES */}
      <style>{`
        .home-salon-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 1024px) {
          .home-salon-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      {/* SALON GRID */}
      <div className="home-salon-grid">
        {visibleSalons.map((salon) => (
          <div
            key={salon.id}
            style={{
              border: "1px solid #e2e2e2",
              borderRadius: "10px",
              overflow: "hidden",
              background: "#fff"
            }}
          >
            <img
              src={salon.images[0]}
              alt={`${salon.name} salon in Ooty`}
              style={{
                width: "100%",
                height: "90px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "8px" }}>
              <h3 style={{ fontSize: "0.95rem", margin: "4px 0" }}>
                {salon.name}
              </h3>

              <p
                style={{
                  fontSize: "0.75rem",
                  marginBottom: "6px",
                  color: "#555"
                }}
              >
                {salon.description.slice(0, 50)}…
              </p>

              <Link
                to={`/salon/${salon.id}`}
                style={{
                  fontSize: "0.75rem",
                  padding: "5px 10px",
                  background: "#007bff",
                  color: "#fff",
                  borderRadius: "6px",
                  textDecoration: "none",
                  display: "inline-block"
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
