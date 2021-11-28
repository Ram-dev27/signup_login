import { Avatar,Button,Grid,makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

//sign in form styles
const useStyles=makeStyles(()=>({
    paperStyle:{
        padding:10,
        height:'60vh',
        width: 300,
        margin: '30px auto',
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
    },
    errormessage:{
        margin:'0',
        color:'red',
        marginLeft:'1'
    },
}))
 
//Login form functional Component
const Login = () => {
    const classes = useStyles()
    const [Formvalues, setFormvalues] = useState({
        email:"",
        password:"",
    })
    const [formerror, setFormError] =useState({});
    const [isSubmit,setIsSubmit] =useState(false);

//handle the form inputs changes
const handleChange = (e)=>{
    const {name,value} =e.target
    setFormvalues({...Formvalues,[name]:value})
    console.log(Formvalues)

 }

    //handle the form submit
    const handleSubmit=(e)=>{
        e.preventDefault()
        setFormError(validate(Formvalues))
        setIsSubmit(true)
    }

    //show the invalidation errors using the useEffect
    useEffect(() => {
        if(Object.keys(formerror).length === 0 && isSubmit){
           console.log(Formvalues)
        }
    }, [formerror])

    //validate the inputs on form
    const validate = (values)=>{
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        const errors = {};
           if(!values.email){
               errors.email = "Email is required"
           }else if(!regex.test(values.email)){
               errors.email = "Enter vaild email id"}
           if(!values.password){
               errors.password = "Password is required"
           }
           return errors
       };
    
    return (
        <div className="Container">

            {/* showing the success message after Successful sign in */}

             {Object.keys(formerror).length === 0 && isSubmit ? (
                    <div style={{color:'green',display:'flex',justifyContent:'center',fontSize:'20px', marginBottom:'20px'}}>
                        You have successfully logged in {Formvalues.email.split('@')[0]} !!
                        </div>
                    )
                        :null}

        <form onSubmit={handleSubmit}>
        <Grid >
            <Paper elevation={10} className={classes.paperStyle}>
            <Grid align='center'>
                <Avatar className={classes.avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign in</h2>
                <p className={classes.errormessage}>{formerror.email}</p>
                <TextField 
                    className={classes.textFiled} 
                    fullWidth 
                    autoComplete="off" 
                    name='email' 
                    label="Email*" 
                    variant="outlined" 
                    onChange= {handleChange}
                />
                <p className={classes.errormessage}>{formerror.password}</p>
                <TextField   
                    className={classes.textFiled} 
                    fullWidth 
                    autoComplete="off" 
                    name='password'
                    label="Password*" 
                    type='password' 
                    variant="outlined" 
                    onChange ={handleChange}
                />
            </Grid>
            <Button type='submit' color='primary' variant="contained" className={classes.btnstyle} fullWidth>Sign in</Button>
            <Typography >
                <Link to='/' className={classes.frLink}>
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
        </div>
    )
}

export default Login
