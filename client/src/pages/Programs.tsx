import { useEffect, useState } from "react";
import Program from "../components/Program";
import type { ProgramType } from "../types/type";
import "../styles/Programs.css";

export default function Programs() {
  const [programs, setPrograms] = useState<ProgramType[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const response = await fetch("http://localhost:3310/api/programs");
      const data = await response.json();
      setPrograms(data);
    };
    fetchPrograms();
  }, []);

  return (
    <div>
      <h1>Programs</h1>
      <div className="all-programs-container">
        {programs.map((program: ProgramType) => (
          <Program key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}
