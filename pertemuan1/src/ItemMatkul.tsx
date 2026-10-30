interface ItemMatkulProps {
  kode: string;
  nama: string;
  sks: number;
  hari: string;
}

function ItemMatkul({ kode, nama, sks, hari }: ItemMatkulProps) {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#FFFFFF",
        borderLeft: "5px solid #1B365D",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "12px",
      }}
    >
      <div>
        <span
          style={{ fontWeight: "bold", color: "#1B365D", marginRight: "8px" }}
        >
          {kode}
        </span>
        <span style={{ color: "#333" }}>{nama}</span>
        <div style={{ fontSize: "13px", color: "#777", marginTop: "4px" }}>
          Jadwal: {hari}
        </div>
      </div>
      <span
        style={{
          backgroundColor: "#E1E4E8",
          padding: "6px 12px",
          borderRadius: "12px",
          fontSize: "13px",
          fontWeight: "bold",
          color: "#444",
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;
