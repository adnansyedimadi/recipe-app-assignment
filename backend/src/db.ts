import mongoose from "mongoose"
import { MongoMemoryServer } from "mongodb-memory-server"
import { builtRecipes } from "./data"
import { RecipeModel } from "./models"

const createRecipes = async (): Promise<void> => {
  try {
    await RecipeModel.insertMany(builtRecipes)
  } catch (err) {
    console.log("Creation Issue: ", err)
  }
}

export const createAndConnectToServer = async (): Promise<typeof mongoose> => {
  const mongod = await MongoMemoryServer.create()
  const url = mongod.getUri()
  const connection = await mongoose.connect(url, {
    useNewUrlParser: true,
    keepAlive: true,
    connectTimeoutMS: 30000,
  })
  await createRecipes()
  return connection
}
