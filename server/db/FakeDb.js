import { generateId } from "../utils/GenerateId"

class FakeDb {
  burger = [{ name: 'Big Boi', description: "Three hamburgers stacked on top of each other and stabbed with a steak knife. Free knife.", price: 25, id: generateId() },
  { name: 'Let the Gouda Times Roll', description: "A hamburger loaded with caramelized onions and gouda cheese.", price: 10, id: generateId() }]
}

export const fakeDb = new FakeDb()