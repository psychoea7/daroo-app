import React from "react";
import "vazir-font/dist/font-face.css";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";
import {
  LocalPharmacy,
  LocalHospital,
  Healing,
  Notifications,
} from "@material-ui/icons";
import headerBackground from "./Assets/pharmaceutical-background.jpg";

const theme = createTheme({
  typography: {
    fontFamily: "Vazir, sans-serif",
  },
});

const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.common.white,
    background: `url(${headerBackground}) center/cover`,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    position: "relative",
    zIndex: 1,
  },
  serviceBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },
  serviceIcon: {
    fontSize: "3rem",
    marginBottom: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className={classes.header}>
          <div className={classes.overlay}></div>
          <div className={classes.content}>
            <Typography variant="h4">
              برای دریافت بهتر خدمات و بهره‌مندی از آخرین اخبار در سایت رشد آزما
              با ما همراه باشید.
            </Typography>
            <Box className={classes.serviceBox}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <LocalPharmacy className={classes.serviceIcon} />
                  <Typography variant="subtitle1">Service 1</Typography>
                </Grid>
                <Grid item>
                  <LocalHospital className={classes.serviceIcon} />
                  <Typography variant="subtitle1">Service 2</Typography>
                </Grid>
                <Grid item>
                  <Healing className={classes.serviceIcon} />
                  <Typography variant="subtitle1">Service 3</Typography>
                </Grid>
                <Grid item>
                  <Notifications className={classes.serviceIcon} />
                  <Typography variant="subtitle1">Service 4</Typography>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
