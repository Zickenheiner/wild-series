export interface ProgramProps {
  program: ProgramType;
}

export interface ProgramType {
  country: string;
  id: number;
  poster: string;
  synopsis: string;
  title: string;
  year: number;
}
