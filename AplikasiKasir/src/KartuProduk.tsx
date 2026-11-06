import BadgeStok from "./BadgeStok";

export interface Produk {
  id: number;
  nama: string;
  harga: number;
  gambar: string;
  stok: number;
}

interface KartuProdukProps {
  produk: Produk;
  onTambah: (produk: Produk) => void;
}

function KartuProduk({ produk, onTambah }: KartuProdukProps) {
  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="card-produk">
      <img src={produk.gambar} alt={produk.nama} className="produk-img" />
      <h3 className="produk-nama">{produk.nama}</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span className="produk-harga">{formatRupiah(produk.harga)}</span>
        <BadgeStok stok={produk.stok} />
      </div>
      <button
        className="btn-tambah"
        onClick={() => onTambah(produk)}
        disabled={produk.stok === 0}
      >
        {produk.stok > 0 ? "+ Tambah" : "Stok Habis"}
      </button>
    </div>
  );
}
export default KartuProduk;
