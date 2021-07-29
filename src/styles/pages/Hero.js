import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    background: "#FAFAFA",
  },

  TextContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: "26px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "20px",
    },
    "& h1": {
      marginBottom: 0,
      color: "black",
      opacity: "80%",
    },
    "& p": {
      marginTop: "10px",
      color: "gray",
    },
    "& button": {
      marginTop: "10px",
      height: "2.5rem",
      width: "9rem",
      color: "white",
      background: "orange",
      opacity: "80%",
      border: "none",
      borderRadius: "3px",
      outline: "none",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "lighter",
    },
  },

  ImgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
      display: "block",
    },
  },
}));

export default styles;
