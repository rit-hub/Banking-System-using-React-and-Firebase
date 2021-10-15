import RegisterForm from "./RegisterForm";
import { CssBaseline, Container, Paper, Box } from "@mui/material";
const Register = () => {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <RegisterForm />
        </Paper>
      </Container>
    </>
  );
};
export default Register;
