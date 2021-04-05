import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMealAction, editMealAction } from "../../store/meals";
import { useRouteMatch, useHistory } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const editMatch = useRouteMatch("/edit/:id");
  const id = editMatch && editMatch.params.id;

  const currentMeal = useSelector((state) => {
    if (id) {
      return state.meals.find((element) => element.id === id) || null;
    }
    return null;
  });

  console.log(currentMeal);

  const classes = useStyles();
  const [meal, setMeal] = useState((currentMeal && currentMeal.name) || "");
  const [inputList, setInputList] = useState(
    (currentMeal && [...currentMeal.foodItems, { name: "", calories: "" }]) || [
      { name: "", calories: "" },
    ]
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    // const list = [...inputList];
    // list[index][name] = value;
    // https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/#updating-an-item-in-an-array
    const list = inputList.map((inputItem, inputItemIndex) => {
      if (inputItemIndex !== index) {
        return inputItem;
      }

      return {
        ...inputItem,
        [name]: value,
      };
    });

    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    // const list = [...inputList];
    // list.splice(index, 1);
    // https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/#inserting-and-removing-items-in-arrays
    const list = inputList.filter((inputItem, inputItemIndex) => {
      return index !== inputItemIndex;
    });
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { name: "", calories: "" }]);
  };

  function handleSubmit(event) {
    event.preventDefault();
    // You should see email and password in console.
    // ..code to submit form to backend here...
    if (currentMeal) {
      dispatch(editMealAction(id, meal, inputList));
    } else {
      dispatch(addMealAction(meal, inputList));
    }

    /* push the home route onto the history stack. */
    history.push("/");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {currentMeal ? "Edit" : "Add"} Item
        </Typography>
        {inputList.map((x, i) => {
          return (
            <div className="box">
              <input
                name="name"
                placeholder="Enter Meal Item"
                value={x.name}
                onChange={(e) => handleInputChange(e, i)}
              />
              <input
                className="ml10"
                name="calories"
                placeholder="Enter Calories"
                value={x.calories}
                type="number"
                onChange={(e) => handleInputChange(e, i)}
              />
              <div className="btn-box">
                {inputList.length !== 1 && (
                  <button className="mr10" onClick={() => handleRemoveClick(i)}>
                    Remove
                  </button>
                )}
                {inputList.length - 1 === i && (
                  <button onClick={handleAddClick}>Add</button>
                )}
              </div>
            </div>
          );
        })}
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="meal"
            label="Meal"
            name="meal"
            autoComplete="meal"
            autoFocus
            value={meal}
            onInput={(e) => setMeal(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

// const inputList = [
//   { name: "a", calories: "100"},
//   { name: "b", calories: "23"},
//   { name: "c", calories: "321"}
// ]

// const index = 1;
// const name = "calories";
// const value = "58"

// inputList[index][name] = value

// inputList.map((inputItem, inputItemIndex) => {
//   if (inputeItemIndex !== index) {
//     return inputItem;
//   }

//   return {
//     ...inputItem,
//     [name]: value
//   };
// });

// [
//   { name: "a", calories: "100" }, /// === inputList[0]
//   { name: "b", calories: "58" }, /// !== inputList[1]
//   { name: "c", calories: "321" } /// === inputList[2]
// ];

// const list = [ 0, 1, 1, 1, 0, 1];

// list.filter((item) => {
//   return item === 0;
// });

// function Component({ name })) {
//   const [input, setInput] = useState(name || "");

//   return <div>{input}</div>
// }
