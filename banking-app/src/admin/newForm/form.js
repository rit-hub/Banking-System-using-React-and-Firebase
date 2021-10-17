import React, { useEffect, useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import db from "../../firebase";
const theme = createTheme();

export default function Form() {
  let textInput = useRef(null);
  let textInput2 = useRef(null);
  let textInput3 = useRef(null);
  let textInput4 = useRef(null);
  let textInput5 = useRef(null);
  let textInput6 = useRef(null);

  const [formData, setformData] = useState({});
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");
  const [error, setError] = useState({});
  const [validation, setValidation] = useState(true);
  const [showAlart, setShowAlart] = useState(false);
  const [storeData, setStoreData] = useState({});

  useEffect(() => {
    if (
      Object.keys(formData).length &&
      !validation &&
      amount != "" &&
      account != ""
    ) {
      let info2 = {
        ...formData,
        date: new Date().toLocaleString(),
        status: "successful",
        tid: Math.ceil(Math.random() * 111) * 1256525698,
      };
      setStoreData(info2);
      if (Object.keys(storeData).length) {
        db.collection("transactions").add(storeData);
        console.log(storeData);
        setShowAlart(true);
        textInput.current.value = "";
        textInput2.current.value = "";
        textInput3.current.value = "";
        textInput4.current.value = "";
        textInput5.current.value = "";
        textInput6.current.value = "";
      }
    }
  }, [formData]);

  const handleSelectChange = (event) => {
    setPurpose(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidation(
      error.accountError ||
        error.amountError ||
        error.confAccountError ||
        error.confAmountError
    );

    const data = new FormData(event.currentTarget);
    let info = {
      amount: data.get("amount"),
      accNo: data.get("account"),
      name: data.get("name"),
      purpose: purpose,
    };
    setformData(info);
  };

  const checkAmount = (event) => {
    if (isNaN(event.target.value)) {
      setError({
        ...error,
        amountError: true,
        amountErrorMsg: "Must be a number",
      });
    } else {
      setError({
        ...error,
        amountError: false,
        amountErrorMsg: "",
      });
      setAmount(event.target.value);
    }
  };
  const checkConfAmount = (event) => {
    if (event.target.value != amount) {
      setError({
        ...error,
        confAmountError: true,
        confAmountErrorMsg: "Must be a same",
      });
    } else {
      setError({
        ...error,
        confAmountError: false,
        confAmountErrorMsg: "",
      });
    }
  };
  const checkAccount = (event) => {
    if (isNaN(event.target.value)) {
      console.log(event.target.value.length);
      setError({
        ...error,
        accountError: true,
        accountErrorMsg: "Enter a valid account number",
      });
    } else if (event.target.value.length <= 9) {
      setError({
        ...error,
        accountError: true,
        accountErrorMsg: "Must be greater than 10 digit",
      });
    } else {
      setError({
        ...error,
        accountError: false,
        accountErrorMsg: "",
      });
      setAccount(event.target.value);
    }
  };
  const checkConfAccount = (event) => {
    if (event.target.value != account) {
      setError({
        ...error,
        confAccountError: true,
        confAccountErrorMsg: "Must be a same number ",
      });
    } else {
      setError({
        ...error,
        confAccountError: false,
        confAccountErrorMsg: "",
      });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#6c63ff" }}>
            <AccountBalanceIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Money Transfer
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="amount"
                  required
                  fullWidth
                  id="amount"
                  label="Amount"
                  autoFocus
                  inputRef={textInput}
                  onChange={checkAmount}
                  {...(error.amountError && {
                    error: true,
                    helperText: error.amountErrorMsg,
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="confAmount"
                  label="Confirm Amount"
                  inputRef={textInput2}
                  name="confAmount"
                  onChange={checkConfAmount}
                  {...(error.confAmountError && {
                    error: true,
                    helperText: error.confAmountErrorMsg,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="account"
                  label="Account Number"
                  name="account"
                  inputRef={textInput3}
                  onChange={checkAccount}
                  {...(error.accountError && {
                    error: true,
                    helperText: error.accountErrorMsg,
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confAccount"
                  label="Confirm Account"
                  inputRef={textInput4}
                  id="confAccount"
                  onChange={checkConfAccount}
                  {...(error.confAccountError && {
                    error: true,
                    helperText: error.confAccountErrorMsg,
                  })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  name="name"
                  label="Full Name"
                  inputRef={textInput5}
                  id="name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="purpose">Purpose</InputLabel>
                  <Select
                    labelId="select-purpose"
                    id="select-purpose"
                    inputRef={textInput6}
                    value={purpose}
                    label="Purpose"
                    onChange={handleSelectChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Deposite"}>Deposite</MenuItem>
                    <MenuItem value={"Payment"}>Payment</MenuItem>
                    <MenuItem value={"Gift"}>Gift</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              onSubmit={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: "#6c63ff",
              }}
            >
              Send Money
            </Button>
          </Box>
          {showAlart ? (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="success">
                Money sent successfully to Account {account}
              </Alert>
            </Stack>
          ) : null}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
