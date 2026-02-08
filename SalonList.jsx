import { salons } from "../data/salons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const rotate = (arr) => {
  if (!arr.length) return arr;
  return [...arr.slice(1), arr[0]];
};

export default function SalonList() {
  const [visibleSalons, setVisibleSalons] = useState([]);

  useEffect(() => {
    let top10 = salons.filter(s => s._group === "top10");
    let rest = salons.filter(s => s._group === "rest");

    setVisibleSalons([...top10, ...rest].slice(0, 40));

    const interval = setInterval(() => {
      top10 = rotate(top10);
      rest = rotate(rest);
      setVisibleSalons([...top10, ...rest].slice(0, 40));
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ maxWidth: "100%", padding: "12px" }}>
      <Helmet>
        <title>All Salons in Ooty – Zero Five September</title>
        <meta
          name="description"
          content="Browse all listed salons in Ooty on Ooty Salon – Zero Five September."
        />
      </Helmet>

      <h1
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          marginBottom: "10px"
        }}
      >
        All Salons in Ooty
      </h1>

      {/* COMPACT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "10px"
        }}
      >
        {visibleSalons.map((salon) => (
          <div
            key={salon.id}
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#fff"
            }}
          >
            {/* VERY SMALL IMAGE */}
            <img
              src={salon.images[0]}
              alt={salon.name}
              style={{
                width: "100%",
                height: "80px",
                objectFit: "cover"
              }}
            />

            {/* TIGHT CONTENT */}
            <div style={{ padding: "6px" }}>
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  margin: "2px 0"
                }}
              >
                {salon.name}
              </div>

              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#666",
                  margin: "2px 0 4px"
                }}
              >
                {salon.services.join(", ")}
              </div>

              <Link to={`/salon/${salon.id}`}>
                <button
                  style={{
                    width: "100%",
                    padding: "4px 6px",
                    fontSize: "0.72rem",
                    borderRadius: "5px",
                    border: "none",
                    background: "#007bff",
                    color: "#fff",
                    cursor: "pointer"
                  }}
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
