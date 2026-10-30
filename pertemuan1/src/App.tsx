// src/App.tsx

import fotoProfil from "./assets/Profil.jpeg";

function App() {
  const mahasiswa = {
    nama: "Erik Adia Meka",
    npm: "243040013",
    kelas: "IF - Praktikum",
    status: "Aktif",
    fotoUrl: fotoProfil,
    skills: [
      { nama: "React JS", level: "Menengah" },
      { nama: "TypeScript", level: "Pemula" },
      { nama: "HTML & CSS", level: "Mahir" },
    ] as const,
  };

  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF211",
      nama: "Pemrograman Web (React & Laravel)",
      sks: 3,
      hari: "Senin",
    },
    {
      id: 102,
      kode: "IF212",
      nama: "Sistem Basis Data (PostgreSQL)",
      sks: 3,
      hari: "Rabu",
    },
    {
      id: 103,
      kode: "IF213",
      nama: "Rekayasa Perangkat Lunak Terapan",
      sks: 3,
      hari: "Kamis",
    },
    {
      id: 104,
      kode: "IF214",
      nama: "Arsitektur Sistem Terdistribusi",
      sks: 2,
      hari: "Jumat",
    },
  ];

  const daftarProyek = [
    {
      id: 1,
      judul: "Sistem Informasi Perpustakaan",
      deskripsi:
        "Aplikasi desktop/web untuk mengelola sirkulasi buku lengkap dengan fitur katalog digital dan pencarian cepat.",
      teknologi: ["React", "Node.js", "TailwindCSS"],
      linkGithub: "#",
      gambar:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      judul: "Aplikasi Monitoring Cuaca",
      deskripsi:
        "Dashboard cuaca real-time yang mengintegrasikan OpenWeather API dan grafik suhu harian.",
      teknologi: ["Javascript", "API", "CSS3"],
      linkGithub: "#",
      gambar:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      judul: "E-Commerce Mini Shop",
      deskripsi:
        "Toko online sederhana dengan fitur keranjang belanja dan kalkulasi total harga.",
      teknologi: ["React", "Context API", "Bootstrap"],
      linkGithub: "#",
      gambar:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      judul: "Task Management Board",
      deskripsi:
        "Papan manajemen tugas ala Kanban interaktif untuk memantau status pengerjaan proyek harian.",
      teknologi: ["React", "Vite", "LocalStorage"],
      linkGithub: "#",
      gambar:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=600&auto=format&fit=crop",
    },
  ];

 
  const fontTitle = { fontFamily: "'Playfair Display', serif" };
  const fontBody = { fontFamily: "'DM Sans', sans-serif" };

  const bgCream = "#F4F1EA"; 
  const cardBg = "#FFFFFF"; 
  const textDark = "#2D2A26";
  const accentOrange = "#E86A33"; 
  const accentYellow = "#F4D03F"; 
  const borderDark = "2px solid #2D2A26"; 

  return (
    <div
      style={{
        backgroundColor: bgCream,
        minHeight: "100vh",
        padding: "40px 20px",
        ...fontBody,
        color: textDark,
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* HEADER BERGAYA MAJALAH */}
        <header
          style={{
            backgroundColor: accentYellow,
            borderRadius: "4px",
            padding: "40px",
            border: borderDark,
            marginBottom: "40px",
            textAlign: "center",
            boxShadow: "8px 8px 0px 0px #2D2A26", // Bayangan tegas
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              margin: "0 0 16px 0",
              letterSpacing: "1px",
            }}
          >
            ISSUE #01 — PORTOFOLIO MAHASISWA
          </p>
          <h1
            style={{
              ...fontTitle,
              fontSize: "48px",
              margin: "0 0 16px 0",
              lineHeight: "1.1",
            }}
          >
            Erik Adia Meka.
          </h1>
          <p
            style={{
              margin: "0 auto",
              fontSize: "16px",
              fontWeight: "500",
              maxWidth: "500px",
              textAlign: "center",
            }}
          >
            Mahasiswa Informatika yang berfokus pada rekayasa perangkat lunak
            dan pengembangan web modern.
          </p>
        </header>

        {/* SECTION 1: PROFIL & SKILLS */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              ...fontTitle,
              margin: "0 0 20px 0",
              fontSize: "32px",
              borderBottom: borderDark,
              color: "#2D2A26",
              paddingBottom: "8px",
            }}
          >
            Profil & Keahlian
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            {/* Kartu Profil */}
            <div
              style={{
                backgroundColor: cardBg,
                border: borderDark,
                borderRadius: "4px",
                padding: "24px",
                boxShadow: "4px 4px 0px 0px #2D2A26",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <img
                  src={mahasiswa.fotoUrl}
                  alt="profil"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "4px",
                    objectFit: "cover",
                    border: borderDark,
                  }}
                />
                <div>
                  <h3
                    style={{
                      margin: "0 0 4px 0",
                      color: textDark,
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {mahasiswa.nama}
                  </h3>
                  <p
                    style={{ margin: "0", fontSize: "14px", fontWeight: "500" }}
                  >
                    NPM: {mahasiswa.npm}
                  </p>
                  <p
                    style={{
                      margin: "2px 0 0 0",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Kelas: {mahasiswa.kelas}
                  </p>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    backgroundColor: "#D4EDDA",
                    border: "1px solid #155724",
                    color: "#155724",
                  }}
                >
                  STATUS: {mahasiswa.status.toUpperCase()}
                </span>
              </div>
            </div>

            {/* List Skill */}
            <div
              style={{
                backgroundColor: cardBg,
                border: borderDark,
                borderRadius: "4px",
                padding: "24px",
                boxShadow: "4px 4px 0px 0px #2D2A26",
              }}
            >
              <h3
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Tech Stack:
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {mahasiswa.skills.map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "4px",
                      fontSize: "13px",
                      fontWeight: "bold",
                      backgroundColor: accentOrange,
                      color: "#fff",
                      border: borderDark,
                    }}
                  >
                    {skill.nama}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: RENCANA PRAKTIKUM */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              ...fontTitle,
              margin: "0 0 20px 0",
              fontSize: "32px",
              borderBottom: borderDark,
              color: "#2D2A26",
              paddingBottom: "8px",
            }}
          >
            Mata Kuliah
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            {daftarPraktikum.map((matkul) => (
              <div
                key={matkul.id}
                style={{
                  backgroundColor: cardBg,
                  border: borderDark,
                  borderRadius: "4px",
                  padding: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {matkul.kode}
                  </span>
                  <span
                    style={{
                      backgroundColor: textDark,
                      color: "#fff",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "11px",
                      fontWeight: "bold",
                    }}
                  >
                    {matkul.sks} SKS
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "6px",
                  }}
                >
                  {matkul.nama}
                </div>
                <div
                  style={{ fontSize: "12px", fontWeight: "500", color: "#666" }}
                >
                  Hari: {matkul.hari}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: PROYEK MINI */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              ...fontTitle,
              margin: "0 0 20px 0",
              fontSize: "32px",
              borderBottom: borderDark,
              color: "#2D2A26",
              paddingBottom: "8px",
            }}
          >
            Proyek Pilihan
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {daftarProyek.map((proyek) => (
              <div
                key={proyek.id}
                style={{
                  backgroundColor: cardBg,
                  border: borderDark,
                  borderRadius: "4px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "4px 4px 0px 0px #2D2A26",
                }}
              >
                <img
                  src={proyek.gambar}
                  alt={proyek.judul}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "2px",
                    marginBottom: "16px",
                    border: borderDark,
                  }}
                />
                <h3
                  style={{
                    margin: "0 0 8px 0",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {proyek.judul}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.5",
                    marginBottom: "16px",
                    flexGrow: 1,
                  }}
                >
                  {proyek.deskripsi}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "16px",
                  }}
                >
                  {proyek.teknologi.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: "#E5E7EB",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "10px",
                        fontWeight: "bold",
                        border: "1px solid #9CA3AF",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={proyek.linkGithub}
                  style={{
                    display: "block",
                    textAlign: "center",
                    backgroundColor: accentYellow,
                    color: textDark,
                    padding: "10px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: "bold",
                    border: borderDark,
                    transition: "transform 0.1s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-2px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  LIHAT REPOSITORI
                </a>
              </div>
            ))}
          </div>
        </section>

        <footer
          style={{
            textAlign: "center",
            marginTop: "60px",
            paddingBottom: "20px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          <p>&copy; 2026 Erik Adia Meka. </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
