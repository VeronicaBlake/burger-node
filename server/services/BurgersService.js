import { fakeDb } from "../db/FakeDB";
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GenerateId";

class BurgersService {
    async find(query = {}) {
        // let values = await dbContext.Values.find(query);
        return [fakeDb.burgers];
    }
    async findById(id) {
        let value = await dbContext.Burgers.findById(id);
        if (!value) {
            throw new BadRequest("Invalid Id");
        }
        return burger;
    }
    delete(id) {
        let value = fakeDb.burgers.find(e => e.id === id)
        if (!value) {
            throw new BadRequest("Invalid Id - No Burger 4 U");
        }
        fakeDb.burgers = fakeDb.burgers.filter(s => s.id !== id)
    }
    create(newBurger) {
        newBurger.id = generateId()

        fakeDb.burgers.push(newBurger)
        return newBurger
    }
}

export const burgersService = new BurgersService();