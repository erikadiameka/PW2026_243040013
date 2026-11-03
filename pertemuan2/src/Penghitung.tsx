import { useState } from "react";
import Kartu from "./Kartu";

function Penghitung() {
  const [jumlah, setJumlah] = useState(0);

  const tambah = () => setJumlah(jumlah + 1);
  const ulangi = () => setJumlah(0);

  return (
    <Kartu judul="useState Playground" kelas="kartu-penghitung">
      <p className="deskripsi-kartu">Ubah nilai state saat tombol diklik.</p>
      <div className="angka-penghitung">
        <span>{jumlah}</span>
        <small>total klik</small>
      </div>
      {jumlah >= 5 ? (
        <p className="pesan-state sukses">✓ State berhasil diperbarui!</p>
      ) : (
        <p className="pesan-state">Klik minimal 5 kali untuk melihat efeknya.</p>
      )}
      <div className="aksi-penghitung">
        <button className="tombol-primary" onClick={tambah}>
          <span>＋</span> Tambah
        </button>
        <button className="tombol-reset" onClick={ulangi} disabled={jumlah === 0}>
          Reset
        </button>
      </div>
    </Kartu>
  );
}
export default Penghitung;
