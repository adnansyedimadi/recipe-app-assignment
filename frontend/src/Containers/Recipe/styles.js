import {
    makeStyles,
  } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.light,
      padding: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    chipContainer: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: theme.spacing(2),
    },
    chip: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  }));