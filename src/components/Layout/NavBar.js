import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" to={"/home"} sx={{ flexGrow: 1 }}>
            <Link to={"/"}>State Borders</Link>
          </Typography>
          <Button color="inherit" component={Link} to={"/home"}>
            Home
          </Button>
          <Button color="inherit" component={Link} to={"/about"}>
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
