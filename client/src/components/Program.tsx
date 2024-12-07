import "../styles/Program.css";
import type { ProgramProps } from "../types/type";

export default function Program({ program }: ProgramProps) {
  return (
    <div className="program-container">
      <h2 className="program-title">{program.title}</h2>
      <img src={program.poster} alt="img-program" className="program-img" />
    </div>
  );
}
