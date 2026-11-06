import { useState, useEffect } from "react";
import "./App.css";
import KartuProduk, { type Produk } from "./KartuProduk";
import ItemKeranjang, { type CartItem } from "./ItemKeranjang";

// Data Dummy Produk
const DAFTAR_PRODUK: Produk[] = [
  {
    id: 1,
    nama: "Kopi Susu Gula Aren",
    harga: 18000,
    gambar:
      "https://images.unsplash.com/photo-1552346989-e069318e20a5?w=500&auto=format&fit=crop&q=60",
    stok: 10,
  },
  {
    id: 2,
    nama: "Roti Bakar Keju",
    harga: 15000,
    gambar:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=60",
    stok: 5,
  },
  {
    id: 3,
    nama: "Matcha Latte",
    harga: 22000,
    gambar:
      "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=500&auto=format&fit=crop&q=60",
    stok: 8,
  },
  {
    id: 4,
    nama: "Croissant Butter",
    harga: 20000,
    gambar:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60",
    stok: 0,
  },
  {
    id: 5,
    nama: "Air Mineral",
    harga: 5000,
    gambar:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&auto=format&fit=crop&q=60",
    stok: 20,
  },
  {
    id: 6,
    nama: "Kentang Goreng",
    harga: 12000,
    gambar:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60",
    stok: 15,
  },
];

function App() {
  // 1. STATE: Keranjang Belanja (Membaca LocalStorage)
  const [keranjang, setKeranjang] = useState<CartItem[]>(() => {
    const tersimpan = localStorage.getItem("kasir-keranjang");
    return tersimpan ? JSON.parse(tersimpan) : [];
  });

  // 2. EFFECT: Simpan ke LocalStorage tiap ada perubahan
  useEffect(() => {
    localStorage.setItem("kasir-keranjang", JSON.stringify(keranjang));
  }, [keranjang]);

  // 3. FUNGSI IMMUTABLE UPDATE
  const tambahKeKeranjang = (produk: Produk) => {
    const itemAda = keranjang.find((item) => item.produkId === produk.id);

    if (itemAda) {
      setKeranjang(
        keranjang.map((item) =>
          item.produkId === produk.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setKeranjang([
        ...keranjang,
        { produkId: produk.id, nama: produk.nama, harga: produk.harga, qty: 1 },
      ]);
    }
  };

  const tambahQty = (id: number) => {
    setKeranjang(
      keranjang.map((item) =>
        item.produkId === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const kurangQty = (id: number) => {
    const item = keranjang.find((i) => i.produkId === id);
    if (item?.qty === 1) {
      setKeranjang(keranjang.filter((i) => i.produkId !== id));
    } else {
      setKeranjang(
        keranjang.map((i) =>
          i.produkId === id ? { ...i, qty: i.qty - 1 } : i,
        ),
      );
    }
  };

  const prosesPembayaran = () => {
    alert("Transaksi Berhasil! Terima kasih.");
    setKeranjang([]);
  };

  // 4. NILAI TURUNAN (Derived State)
  const totalBayar = keranjang.reduce(
    (total, item) => total + item.harga * item.qty,
    0,
  );

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header" style={{ justifyContent: "center" }}>
        <h1>🛒 Aplikasi Kasir Mini</h1>
      </header>

      {/* KOLOM KIRI: KATALOG PRODUK */}
      <div>
        <h2 style={{ color: "#1E293B", marginBottom: "16px" }}>
          Menu Tersedia
        </h2>
        <div className="grid-produk">
          {DAFTAR_PRODUK.map((produk) => (
            <KartuProduk
              key={produk.id}
              produk={produk}
              onTambah={tambahKeKeranjang}
            />
          ))}
        </div>
      </div>

      {/* KOLOM KANAN: KERANJANG */}
      <div>
        <div className="panel-keranjang">
          <h2 className="judul-keranjang">Keranjang Belanja</h2>

          {keranjang.length === 0 ? (
            <p className="text-kosong">Keranjang masih kosong.</p>
          ) : (
            <div>
              {keranjang.map((item) => (
                <ItemKeranjang
                  key={item.produkId}
                  item={item}
                  onTambahQty={tambahQty}
                  onKurangQty={kurangQty}
                />
              ))}

              <div className="total-bayar">
                <span>Total:</span>
                <span>{formatRupiah(totalBayar)}</span>
              </div>

              <button className="btn-bayar" onClick={prosesPembayaran}>
                Bayar Sekarang
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
