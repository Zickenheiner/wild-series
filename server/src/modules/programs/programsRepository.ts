import client from "../../../database/client";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

class ProgramsRepository {
  async readAll() {
    const [rows] = await client.query("select * from program");
    return rows as Program[];
  }

  async read(id: number) {
    const [rows] = await client.query("select * from program where id = ?", [
      id,
    ]);
    return rows as Program[];
  }
}

export default new ProgramsRepository();
