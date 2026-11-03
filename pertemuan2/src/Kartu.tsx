import { type ReactNode } from "react";

interface KartuProps {
  judul?: string;
  children: ReactNode;
  kelas?: string;
}

function Kartu({ judul, children, kelas = "" }: KartuProps) {
  return (
    <section className={`kartu ${kelas}`}>
      {judul && <h2 className="kartu-judul">{judul}</h2>}
      {children}
    </section>
  );
}
export default Kartu;
