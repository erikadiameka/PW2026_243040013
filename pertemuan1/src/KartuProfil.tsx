import BadgeSkill from "./BadgeSkill";

interface Skill {
  nama: string;
  level: "Pemula" | "Menengah" | "Mahir";
}

interface KartuProfilProps {
  nama: string;
  npm: string;
  kelas: string;
  status: string;
  fotoUrl?: string;
  skills: Skill[]; 
}

function KartuProfil({
  nama,
  npm,
  kelas,
  status,
  fotoUrl,
  skills,
}: KartuProfilProps) {
  return (
    <div
      style={{
        border: "1px solid #D0D7DE",
        borderRadius: "12px",
        padding: "24px",
        backgroundColor: "#F8F9FA",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "500px",
      }}
    >
      {/* Bagian Atas: Foto & Info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <img
          src={fotoUrl || "https://via.placeholder.com/100"}
          alt={`Foto ${nama}`}
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #FFF",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        />
        <div>
          <h3
            style={{ margin: "0 0 6px 0", color: "#1B365D", fontSize: "22px" }}
          >
            {nama}
          </h3>
          <p style={{ margin: "2px 0", fontSize: "14px", color: "#555" }}>
            NPM: <strong>{npm}</strong>
          </p>
          <p style={{ margin: "2px 0", fontSize: "14px", color: "#555" }}>
            Kelas: {kelas}
          </p>
        </div>
      </div>

      {/* Bagian Status */}
      <div style={{ marginBottom: "20px" }}>
        <span
          style={{
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "bold",
            backgroundColor: status === "Aktif" ? "#D4EDDA" : "#FFF3CD",
            color: status === "Aktif" ? "#155724" : "#856404",
          }}
        >
          Status Akademik: {status}
        </span>
      </div>

      {/* Bagian Skills (Tugas 1) */}
      <div style={{ borderTop: "1px solid #E1E4E8", paddingTop: "16px" }}>
        <h4 style={{ margin: "0 0 12px 0", color: "#333", fontSize: "15px" }}>
          Keahlian (Skills):
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {skills.map((skill, index) => (
            <BadgeSkill
              key={index}
              namaSkill={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default KartuProfil;
