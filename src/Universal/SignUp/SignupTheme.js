import { createTheme } from "@mui/material/styles";


const SignupTheme = createTheme({
  typography: {
    // fontFamily: Fontfamily.fontPrimary.fontFamily,
  },

  container: {
    width: '70%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '15%',
    marginTop: '5%',
    border: '1px solid grey',
    borderRadius: '10px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    width: '60%',
    height: '100px',
    marginLeft: '70px',
    marginTop: '70px',
  },
  title: {
    fontWeight: '400',
    marginBottom: '24px', // Replaced theme.spacing(3)
    // // fontFamily: Fontfamily.fontSecondary.fontFamily,
  },
  signin:{
    fontWeight:500,
  // // fontFamily: Fontfamily.fontInter.fontFamily,
  },
  subtitle: {
    fontWeight: '200',
    marginBottom: '16px', // Replaced theme.spacing(2)
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    height: '30vh',
    marginRight: '50px',
  },
  inputField: {
    marginBottom: '10px',
    backgroundColor:'rgba(246, 246, 246, 1)',
  },
  selectContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  selectField: {
    marginBottom: '30px',
    width: '49%',
    backgroundColor:'rgba(246, 246, 246, 1)',
  },
  signUpButton: {
    backgroundColor: 'rgba(42, 41, 39, 1)',
  },
  imageContainer: {
    backgroundColor: 'rgb(34, 94, 205)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '40%',
    borderRadius: '0px 10px 10px 0px',
  },
  imageBox: { 
    marginLeft: '115px',
  },
  imageTitle: {
    fontFamily: 'Comfortaa, sans-serif',
    textAlign: 'center',
    fontWeight:700
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '12px',
    marginTop: '8px', // Replaced theme.spacing(1)
  },
});

export default SignupTheme;