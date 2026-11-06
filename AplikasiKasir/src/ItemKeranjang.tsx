export interface CartItem {
  produkId: number;
  nama: string;
  harga: number;
  qty: number;
}

interface ItemKeranjangProps {
  item: CartItem;
  onTambahQty: (id: number) => void;
  onKurangQty: (id: number) => void;
}

function ItemKeranjang({ item, onTambahQty, onKurangQty }: ItemKeranjangProps) {
  return (
    <div className="item-cart">
      <div className="item-cart-info">
        <h4>{item.nama}</h4>
        <p>Rp {item.harga.toLocaleString("id-ID")}</p>
      </div>
      <div className="item-cart-aksi">
        <button className="btn-qty" onClick={() => onKurangQty(item.produkId)}>
          -
        </button>
        <span
          style={{ fontWeight: "bold", width: "20px", textAlign: "center" }}
        >
          {item.qty}
        </span>
        <button className="btn-qty" onClick={() => onTambahQty(item.produkId)}>
          +
        </button>
      </div>
    </div>
  );
}
export default ItemKeranjang;
