import { Request, Response, NextFunction } from "express"
import { Recipe, RecipeModel } from "../models"

export const recipeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  try {
    const foundRecipe = await RecipeModel.findById(id);
    res.send(foundRecipe);
  } catch (error) {
    console.error("Error finding recipe:", error)
    res.status(500).send({ error: "Error Finding Recipe" })
  }
}
