import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./Layout.css";
const Layout = () => {
  return (
    <div>
      <AppBar position="fixed" elevation={0} color="">
        <Toolbar className="app_items">
          <Link to="/">
            <Typography className="logo">Banking Admin Panel</Typography>
          </Link>

          <div className="appbar__right">
            <Link to="/transaction">
              <Typography className="appbar__rightChild">
                Transaction History
              </Typography>
            </Link>
            <Link to="/customers">
              <Typography className="appbar__rightChild">
                View All Customers
              </Typography>
            </Link>
            <Link to="/money">
              <Typography className="appbar__rightChild">
                Money Transfer
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Layout;
