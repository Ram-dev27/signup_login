import { Avatar,Button,Grid,makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react'
import { Link } from 'react-router-dom';

const useStyles=makeStyles(()=>({
    paperStyle:{
        padding:10,
        height:'70vh',
        width: 300,
        margin: '20px auto',
    },
    avatarStyle:{
        background: '#17a7d2',
    },
    textFiled:{
       marginBottom:15,
   
    },
    btnstyle:{
        margin:'8px 0'
    },
    frLink:{
        marginTop:'8px',
        marginLeft: "50%",
        textDecoration: 0,
    },
    sgnLink:{
        marginTop:'20px',
        textAlign:'center',
        marginLeft:'10px',
        textDecoration: 0,
    },
    txtdont:{
        marginTop:'20px',
        textAlign:'center',
    }
}))

const Login = () => {
    const classes = useStyles()
    return (
        <form>
        <Grid >
            <Paper elevation={10} className={classes.paperStyle}>
            <Grid align='center'>
                <Avatar className={classes.avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign in</h2>

                <TextField className={classes.textFiled} fullWidth autoComplete="off"  label="User name" variant="outlined" required/>
                <TextField   className={classes.textFiled} fullWidth autoComplete="off" label="Password" type='password' variant="outlined" required/>
            </Grid>
            <FormControlLabel 
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
            />
            <Button type='submit' color='primary' variant="contained" className={classes.btnstyle} fullWidth>Sign in</Button>
            <Typography >
                <Link to='/signup' className={classes.frLink}>
                    Forgot password ?
                </Link>
            </Typography>
            
            <Typography className={classes.txtdont}>Don't have an account ?
                <Link className={classes.sgnLink}  to="/signup">
                          Sign up
                </Link>
            </Typography>
            
            </Paper>
        </Grid>
        </form>
    )
}

export default Login
