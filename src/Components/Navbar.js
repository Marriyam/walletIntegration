// import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from "@mui/icons-material/Adb";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {purple} from "@mui/material/colors";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {useTheme} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import {ethers} from "ethers";
import * as React from "react";

const navItems = ["Home", "Mint", "Document", "Social"];

export default function ButtonAppBar() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [errorMeassage, setErrorMessage] = React.useState("");
  const [defaultAccount, setDefaultAccount] = React.useState("");
  const [userBalance, setUserBalance] = React.useState("");
  const [connButton, setConnButton] = React.useState("Connect Wallet");
  const [open, setOpen] = React.useState("");
  const [notopen, setnotOpen] = React.useState("");

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((results) => {
          accountChangedHandler(results[0]);
          setOpen(true);
        });
    } else {
      setnotOpen(true);
      setErrorMessage("Please install Metamask");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.formatEther(balance));
      });
  };
  const chainChangedHandler = () => {
    window.location.reload();
  };
  window.ethereum.on("accountsChanged", accountChangedHandler);
  window.ethereum.on("chainChanged", chainChangedHandler);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setnotOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#333333" }} position="static">
        <Toolbar>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Typography
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff", paddingRight: 4 }}>
                {item}
              </Button>
            ))}
          </Box>
          <Button
            color="inherit"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              border: 1,
              borderColor: "secondary.main",
              borderRadius: "16px",
            }}
            onClick={connectWalletHandler}
          >
            Connect Wallet
          </Button>
          {/* --------------------------------------Dialog not open-----------------------------------   */}
          <Dialog
            open={notopen}
            onClose={handleClose}
            BackdropProps={{
              style: {
                backgroundColor: "black",
                opacity: 0.7,
              },
            }}
            PaperProps={{
              style: {
                backgroundColor: purple[100],
                boxShadow: "inherit",
                borderRadius: "16px",
                opacity: 0.9,
              },
            }}
            fullScreen={fullScreen}
          >
            <DialogTitle>{"YOUR WALLET IS NOT CONNECTED"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <br /> PLEASE INSTALL METAMASK TO CONNECT YOUR WALLET <br />
                Link : shorturl.at/huxHI
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                okay
              </Button>
            </DialogActions>
          </Dialog>

          {/* --------------------------------------Dialog open-----------------------------------   */}
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            BackdropProps={{
              style: {
                backgroundColor: "black",
                opacity: 0.7,
              },
            }}
            PaperProps={{
              style: {
                backgroundColor: purple[100],
                boxShadow: "inherit",
                borderRadius: "16px",
                opacity: 0.9,
              },
            }}
          >
            <DialogTitle>
              {"CONGRATULATIONS!  Your  wallet  is  connected"}
              <br />
              <br />
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Account: {defaultAccount} <br /> Balance: {userBalance}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={handleClose}
                color="inherit"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: 1,
                  borderColor: "secondary.main",
                  borderRadius: "16px",
                }}
              >
                okay
                <br />
              </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
