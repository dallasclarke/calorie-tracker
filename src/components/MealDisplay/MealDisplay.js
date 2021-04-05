import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink, useRouteMatch } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
//import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { ListItemText } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import {
  getMeals,
  getExercises,
  dailyTotalCalories,
  getMealTotal,
  getExerciseTotal,
} from "../../store/selectors";
import { addMealAction, removeMealAction } from "../../store/meals";
import { addExerciseAction, removeExerciseAction } from "../../store/exercises";

import exercises from "../../store/exercises";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  logout: {
    position: "absolute",
    right: 10,
  },
  reset: {
    position: "absolute",
    right: 110,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Display() {
  const classes = useStyles();

  const meals = useSelector(getMeals);
  const exercises = useSelector(getExercises);
  const dailyTotal = useSelector(dailyTotalCalories);
  const mealTotal = useSelector(getMealTotal);
  const exerciseTotal = useSelector(getExerciseTotal);

  const dispatch = useDispatch();

  

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              dispatch(
                addMealAction("dinner", [
                  { name: "cheese", calories: 20 },
                  { name: "lettuce", calories: 700 },
                ])
              )
            }
          >
            +
          </Button>
          <Button
            className={classes.logout}
            variant="contained"
            color="primary"
          >
            Logout
          </Button>
          <Button className={classes.reset} variant="contained" color="red">
            Reset
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Calories
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={4} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Today
                  </Button>
                  <p>{dailyTotal}</p>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Meals
                  </Button>
                  <p>{mealTotal}</p>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Exercises
                  </Button>
                  <p>{exerciseTotal}</p>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <p>Meals</p>
          <Grid container spacing={4}>
            {meals.map((meal) => (
              <Grid item key={meal.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {meal.name.toUpperCase()}
                    </Typography>
                    <List>
                      {meal.foodItems.map((item) => {
                        return (
                          <ListItem>
                            <ListItemText
                              primary={item.name}
                              secondary={item.calories}
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                    <Typography>
                      {/* {meal.foodItems.reduce(
                        (acc, curr) => curr.calories + acc,
                        0
                      )} */}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => dispatch(removeMealAction(meal.id))}
                    >
                      Remove
                    </Button>
                    <RouterLink to={`/edit/${meal.id}`}>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </RouterLink>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <p>Exercises</p>
          <Grid container spacing={4}>
            {exercises.map((exercise) => (
              <Grid item key={exercise.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {exercise.name}
                    </Typography>
                    <Typography>
                      <h3>Calories Burned</h3>
                      {exercise.calories}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() =>
                        dispatch(removeExerciseAction(exercise.id))
                      }
                    >
                      Remove
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
