import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    minHeight: "50vh",
  },

  Title: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "15px",
    },
    "& h1": {
      color: "black",
      opacity: "80%",
      fontWeight: 900,
      marginBottom: 0,
    },
    "& hr": {
      marginLeft: 0,
      border: "1px solid orange",
      width: "5rem",
      [theme.breakpoints.down("sm")]: {
        marginBottom: 0,
      },
    },
  },

  Deccription: {
    display: "flex",
    minHeight: "50vh",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: "3rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      marginLeft: 0,
    },
    "& p": {
      color: "#A8A8A8",
      fontSize: "13px",
      fontWeight: "lighter",
      lineHeight: "1.3rem",
    },
    "& button": {
      height: "2.5rem",
      width: "8rem",
      margin: "15px 15px 0px 0px",
      outline: "none",
      borderRadius: "3px",
      cursor: "pointer",
    },
  },
  btnWorks: {
    color: "white",
    background: "orange",
    opacity: "80%",
    border: "none",
  },
  btnCV: {
    color: "orange",
    background: "none",
    opacity: "80%",
    border: "2px solid orange",
  },
}));

export default styles;
