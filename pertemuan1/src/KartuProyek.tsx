// src/KartuProyek.tsx
interface KartuProyekProps {
  judul: string;
  deskripsi: string;
  teknologi: string[];
  linkGithub: string;
  gambar?: string;
}

function KartuProyek({
  judul,
  deskripsi,
  teknologi,
  linkGithub,
  gambar,
}: KartuProyekProps) {
  return (
    <div
      style={{
        backgroundColor: "#1e1e2f",
        borderRadius: "16px",
        padding: "24px",
        color: "#fff",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow =
          "0 12px 40px 0 rgba(0, 212, 255, 0.3)";
        e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(0, 0, 0, 0.37)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
      }}
    >
      {gambar && (
        <img
          src={gambar}
          alt={judul}
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        />
      )}
      <h3 style={{ margin: "0 0 12px 0", color: "#00d4ff", fontSize: "20px" }}>
        {judul}
      </h3>
      <p
        style={{
          color: "#a0a0b0",
          fontSize: "14px",
          lineHeight: "1.6",
          flexGrow: 1,
          marginBottom: "20px",
        }}
      >
        {deskripsi}
      </p>

      {/* Tagar Teknologi */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        {teknologi.map((tech, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "rgba(0, 212, 255, 0.1)",
              color: "#00d4ff",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
              border: "1px solid rgba(0, 212, 255, 0.2)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Tombol GitHub */}
      <a
        href={linkGithub}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          textAlign: "center",
          backgroundColor: "#00d4ff",
          color: "#0a0a14",
          padding: "10px 16px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "14px",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#00b0d4")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#00d4ff")
        }
      >
        Lihat Repositori Github
      </a>
    </div>
  );
}

export default KartuProyek;
