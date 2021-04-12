import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ValuesService {
  async find(query = {}) {
    // let values = await dbContext.Values.find(query);
    return ["value1", "value2"];
  }
  async findById(id) {
    let value = await dbContext.Values.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const valuesService = new ValuesService();