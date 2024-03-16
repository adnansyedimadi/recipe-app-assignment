import React, { useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { useParams } from "react-router-dom"
import * as actions from "../../actions"
import {
    LinearProgress,
    Paper,
    Typography,
    Chip,
  } from "@material-ui/core"
import {useStyles} from "./styles"

const Recipe = ({ getRecipe, recipe, isLoading, error }) => {
    const styles = useStyles()
    const { id } = useParams()
    useEffect(() => {
      if (id) {
        getRecipe(id)
      }
    }, [id])
  
    if (!id) {
      return null
    }

    if (!recipe || isLoading) {
      return <LinearProgress />
    }
  
    if (error || recipe.error) {
      return (
        <Typography variant="h5">
          There was an error fetching the recipe.
        </Typography>
      )
    }

  return (
    <Paper className={styles.paper} elevation={3}>
      <Typography variant="h5" gutterBottom>
        {recipe.name}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Ingredients:
      </Typography>
      <div className={styles.chipContainer}>
        {recipe.ingredients.map((ingredient) => (
          <Chip
            key={ingredient.id}
            label={ingredient.name}
            className={styles.chip}
          />
        ))}
      </div>
      <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
        Instructions:
      </Typography>
      <Typography variant="body1">{recipe.instructions}</Typography>
    </Paper>
  )
}

const mapStateToProps = (state) => {
  const { recipe } = state
  return { ...recipe }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getRecipe: actions.getRecipe,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)