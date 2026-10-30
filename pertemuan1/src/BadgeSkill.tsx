// src/BadgeSkill.tsx
interface BadgeSkillProps {
  namaSkill: string;
  level: "Pemula" | "Menengah" | "Mahir";
}

function BadgeSkill({ namaSkill, level }: BadgeSkillProps) {
 
  let warnaBg = "#E2E8F0"; 
  let warnaText = "#4A5568";

  if (level === "Pemula") {
    warnaBg = "#FEF3C7"; 
    warnaText = "#92400E";
  } else if (level === "Menengah") {
    warnaBg = "#DBEAFE"; 
    warnaText = "#1E40AF";
  } else if (level === "Mahir") {
    warnaBg = "#D1FAE5"; 
    warnaText = "#065F46";
  }

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: warnaBg,
        color: warnaText,
        padding: "6px 16px",
        borderRadius: "20px",
        fontSize: "14px",
        fontWeight: "bold",
        margin: "4px",
        border: `1px solid ${warnaText}33`, 
      }}
    >
      {namaSkill} <span style={{ margin: "0 6px", opacity: 0.5 }}>|</span>{" "}
      {level}
    </div>
  );
}

export default BadgeSkill;
