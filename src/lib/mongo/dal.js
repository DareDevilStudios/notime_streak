
import mongoose from "mongoose";



import { getMongoSchema } from "./utils";

export class MongoDAL {
  constructor() {
    this.init();
    this.getItemList = this.getItemList.bind(this);
    this.createItem = this.createItem.bind(this);
  }

  async init() {
    await mongoose.connect(env.MONGODB_URI);
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new MongoDAL();
    }
    return this.instance;
  }

  async createItem({ data, resource }) {
    try {
      const model = getMongoSchema(resource);
      const result = await model.create(data);
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async patchItem({ resource, filter, data }) {
    try {
        const model = getMongoSchema(resource);
        // Assuming `data` contains an object with the field to be updated and the new value
        const result = await model.findOneAndUpdate(filter, { $push: data }, {
            new: true,
            upsert: true,
        });
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

  async getItemList({ resource }) {
    try {
      const model = getMongoSchema(resource);
      const result = await model.find({});
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export const mongo = MongoDAL.getInstance();
