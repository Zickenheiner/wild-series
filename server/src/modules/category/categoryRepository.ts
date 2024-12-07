import client from "../../../database/client";

interface Category {
  id: number;
  name: string;
}

class CategoryRepository {
  async readAll() {
    const [rows] = await client.query("select * from category");
    return rows as Category[];
  }

  async read(id: number) {
    const [row] = await client.query("select * from category where id = ?", [
      id,
    ]);
    return row as Category[];
  }
}

export default new CategoryRepository();
