interface Tugas {
  id: number;
  judul: string;
  selesai: boolean;
}

interface ItemTugasProps {
  tugas: Tugas;
  onUbahStatus: (id: number) => void;
  onHapus: (id: number) => void;
}

function ItemTugas({ tugas, onUbahStatus, onHapus }: ItemTugasProps) {
  return (
    <li className="item">
      <label className="item-tugas">
        <input
          type="checkbox"
          checked={tugas.selesai}
          onChange={() => onUbahStatus(tugas.id)}
        />
        <span className="checkbox-custom" />
        <span className={tugas.selesai ? "teks-selesai" : ""}>{tugas.judul}</span>
      </label>
      <button
        className="hapus-item"
        onClick={() => onHapus(tugas.id)}
        aria-label={`Hapus ${tugas.judul}`}
      >
        ×
      </button>
    </li>
  );
}
export default ItemTugas;
