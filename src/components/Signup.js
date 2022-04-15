import {
  Avatar,
  Button,
  Grid,
  Link,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { postRequest } from "../service";

//Register form styles
const useStyles = makeStyles(() => ({
  paperStyle: {
    padding: 10,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  },
  avatarStyle: {
    background: "#17a7d2",
  },
  textFiled: {
    marginBottom: 15,
  },
  btnstyle: {
    margin: "8px 0",
  },
  frLink: {
    marginTop: "8px",
    marginLeft: "50%",
  },
  sgnLink: {
    marginTop: "20px",
    textAlign: "center",
  },
  errormessage: {
    margin: "0",
    color: "red",
    marginLeft: "1",
  },
}));

//sign up form functional component
const initialValues = {
  username: "",
  email: "",
  password: "",
};
function Signup() {
  const classes = useStyles();
  const [FormValues, setFormValues] = useState({ initialValues });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState("");
  //handle the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...FormValues, [name]: value });
    // console.log(FormValues);
  };

  //post the data to data base
  const dataSubmit = () => {
    postRequest("http://localhost:4000/users/register", {
      username: FormValues.username,
      email: FormValues.email,
      password: FormValues.password,
    })
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err))
  };
  //handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(FormValues));
    setIsSubmit(true);
    dataSubmit();
    setFormValues({ username: "", email: "", password: "" });
    // console.log(FormValues.username);
  };

  //show the invalidation errors using the useEffect
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      // console.log(FormValues);
    }
  }, [formError]);

  //validate the inputs on form
  const validate = (values) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const errors = {};
    if (!values.username) {
      errors.username = "User name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter vaild email id";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password should be more than 4 character";
    } else if (values.password.length > 10) {
      errors.password = "Password should be less than 10 character";
    }
    return errors;
  };

  return (
    <div className="Container">
      {Object.keys(formError).length === 0 && isSubmit ? (
        <div
          style={{
            color: "green",
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            marginBottom: "20px",
          }}
        >
          {message}
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <Grid>
          <Paper elevation={10} className={classes.paperStyle}>
            <Grid align="center">
              <Avatar className={classes.avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Register</h2>

              <p className={classes.errormessage}>{formError.username}</p>
              <TextField
                className={classes.textFiled}
                type="text"
                name="username"
                value={FormValues.username}
                onChange={handleChange}
                fullWidth
                autoComplete="off"
                label="Username*"
                placeholder="Enter username"
                variant="outlined"
              />
              <p className={classes.errormessage}>{formError.email}</p>
              <TextField
                className={classes.textFiled}
                name="email"
                value={FormValues.email}
                onChange={handleChange}
                fullWidth
                autoComplete="off"
                label="Email *"
                placeholder="Enter your Email"
                variant="outlined"
              />
              <p className={classes.errormessage}>{formError.password}</p>
              <TextField
                className={classes.textFiled}
                name="password"
                value={FormValues.password}
                onChange={handleChange}
                fullWidth
                autoComplete="off"
                label="Password *"
                placeholder="Enter password"
                type="password"
                variant="outlined"
              />
            </Grid>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.btnstyle}
              fullWidth
            >
              Sign up
            </Button>
            <Typography className={classes.sgnLink}>
              {" "}
              Already have an account ?<Link href="/">Sign in</Link>
            </Typography>
          </Paper>
        </Grid>
      </form>
    </div>
  );
}

export default Signup;
