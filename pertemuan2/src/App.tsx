import { useState, useEffect } from "react";
import "./App.css";
import Kartu from "./Kartu";
import Penghitung from "./Penghitung";
import FormTugas from "./FormTugas";
import ItemTugas from "./ItemTugas";

interface Tugas {
  id: number;
  judul: string;
  selesai: boolean;
}

function App() {
  const [daftarTugas, setDaftarTugas] = useState<Tugas[]>(() => {
    const dataTersimpan = localStorage.getItem("daftar-tugas");
    try {
      if (dataTersimpan) return JSON.parse(dataTersimpan) as Tugas[];
    } catch {
      localStorage.removeItem("daftar-tugas");
    }
    return [
      { id: 1, judul: "Memahami konsep state dengan useState", selesai: true },
      { id: 2, judul: "Membuat form input terkontrol", selesai: true },
      { id: 3, judul: "Mempraktikkan event handler di React", selesai: false },
      { id: 4, judul: "Menampilkan daftar dengan map()", selesai: false },
    ];
  });

  const [filter, setFilter] = useState<string>("semua");

  const tambahTugas = (judulBaru: string) => {
    const tugasBaru = { id: Date.now(), judul: judulBaru, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  const ubahStatus = (id: number) => {
    setDaftarTugas(
      daftarTugas.map((tugas) =>
        tugas.id === id ? { ...tugas, selesai: !tugas.selesai } : tugas,
      ),
    );
  };

  const hapusTugas = (id: number) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  const hapusSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  useEffect(() => {
    console.log("Aplikasi Daftar Tugas siap digunakan!");
  }, []);

  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
    document.title = `(${sisa}) Tugas Belum Selesai`;
  }, [daftarTugas]);

  useEffect(() => {
    localStorage.setItem("daftar-tugas", JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  return (
    <div className="wadah">
      <header className="hero">
        <div>
          <span className="label-modul">PERTEMUAN 2</span>
          <h1>React State &amp; Hooks</h1>
          <p>Belajar mengelola interaksi aplikasi dengan state dan efek React.</p>
        </div>
        <div className="materi-pill">⚛️ Hooks Dasar</div>
      </header>

      <div className="layout-dashboard">
        <Penghitung />

        <Kartu judul="Checklist Praktikum" kelas="kartu-tugas">
          <div className="ringkasan-progres">
            <div>
              <strong>{jumlahSelesai}</strong>
              <span>dari {daftarTugas.length} materi selesai</span>
            </div>
            <div className="persentase">
              {daftarTugas.length
                ? Math.round((jumlahSelesai / daftarTugas.length) * 100)
                : 0}
              %
            </div>
          </div>
          <div className="progres">
            <span
              style={{
                width: `${daftarTugas.length ? (jumlahSelesai / daftarTugas.length) * 100 : 0}%`,
              }}
            />
          </div>

          <FormTugas onTambah={tambahTugas} />

          <div className="filter-list" aria-label="Filter tugas">
            {[
              ["semua", "Semua"],
              ["belum", "Belum selesai"],
              ["selesai", "Selesai"],
            ].map(([nilai, label]) => (
              <button
                key={nilai}
                className={filter === nilai ? "aktif" : ""}
                onClick={() => setFilter(nilai)}
              >
                {label}
              </button>
            ))}
          </div>

          <ul className="daftar">
            {daftarTugas
              .filter((tugas) => {
                if (filter === "belum") return !tugas.selesai;
                if (filter === "selesai") return tugas.selesai;
                return true;
              })
              .map((tugas) => (
                <ItemTugas
                  key={tugas.id}
                  tugas={tugas}
                  onUbahStatus={ubahStatus}
                  onHapus={hapusTugas}
                />
              ))}
          </ul>
          {daftarTugas.length > 0 &&
            daftarTugas
              .filter((tugas) => {
                if (filter === "belum") return !tugas.selesai;
                if (filter === "selesai") return tugas.selesai;
                return true;
              }).length === 0 && (
              <p className="kosong">Tidak ada materi pada filter ini.</p>
            )}

          {jumlahSelesai > 0 && (
            <button className="tombol-bersih" onClick={hapusSelesai}>
              Hapus materi yang selesai
            </button>
          )}
        </Kartu>
      </div>
    </div>
  );
}

export default App;
