import { Button, makeStyles, TextField } from "@material-ui/core"
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '60%',
      },
  '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));
  
const Register = () => {
    const classes = useStyles();
    return (
        <div>
            <form className={classes.root}>
                <TextField label="First Name" variant="filled" required />
                <TextField label="Last Name" variant="filled" required />
                <TextField label="Email" variant="filled" type="email" required />
                <TextField label="Password" variant="filled" type="password" required />
            </form>

        </div>
    )
}

export default Register