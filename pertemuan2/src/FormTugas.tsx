import { useState, type FormEvent } from "react";
interface FormTugasProps {
  onTambah: (teks: string) => void;
}

function FormTugas({ onTambah }: FormTugasProps) {
  const [teks, setTeks] = useState("");

  const terlaluPanjang = teks.length > 50;
  const tidakValid = teks.trim() === "" || terlaluPanjang;

  const tanganikirim = (event: FormEvent) => {
    event.preventDefault();
    if (tidakValid) return;

    onTambah(teks.trim());
    setTeks("");
  };

  return (
    <form onSubmit={tanganikirim} style={{ marginBottom: "20px" }}>
      <div className="baris">
        <input
          className="input"
          type="text"
          placeholder="Tambah materi yang dipelajari..."
          value={teks}
          onChange={(event) => setTeks(event.target.value)}
        />
        <button className="tombol" type="submit" disabled={tidakValid}>
          <span aria-hidden="true">＋</span>
        </button>
      </div>
      {terlaluPanjang && (
        <p className="galat">Judul tugas maksimal 50 karakter.</p>
      )}
    </form>
  );
}
export default FormTugas;
