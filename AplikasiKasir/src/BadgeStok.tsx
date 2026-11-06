interface BadgeStokProps {
  stok: number;
}

function BadgeStok({ stok }: BadgeStokProps) {
  const styleBadge = {
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "11px",
    fontWeight: "bold" as const,
    backgroundColor: stok > 0 ? "#D1FAE5" : "#FEE2E2",
    color: stok > 0 ? "#065F46" : "#991B1B",
  };

  return <span style={styleBadge}>{stok > 0 ? `Sisa ${stok}` : "Habis"}</span>;
}
export default BadgeStok;
