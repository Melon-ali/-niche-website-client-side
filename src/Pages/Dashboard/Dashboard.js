import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink
  } from "react-router-dom";
import { Button } from '@mui/material';
import ManageOrders from './DashboardPanell/ManageOrders/ManageOrders';
import Payment from './DashboardPanell/Payment/Payment';
import Review from './DashboardPanell/Review/Review';
import MyOrders from './DashboardPanell/MyOrders/MyOrders';
import MakeAdmin from './DashboardPanell/MakeAdmin/MakeAdmin';
import useAuth from '../../hooks/useAuth';
import AddProduct from './DashboardPanell/AddProduct/AddProduct';
import DashboardHome from './DashboardPanell/DashboardHome/DashboardHome';
  

const drawerWidth = 240;

function Dashboard(props) {
  const {admin, logOut} = useAuth();
    let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
        
          { admin && 
          <Box>
            <Link style={{textDecoration: 'none', marginBottom: '10px'}} to={`${url}/manageorders`}>
            <Button>Manage Order</Button>
            </Link>
            <br />
            <Link style={{textDecoration: 'none', marginBottom: '10px'}} to={`${url}/makeadmin`}>
            <Button>Make Admin</Button>
            </Link>
            <br />
            <Link style={{textDecoration: 'none', marginBottom: '10px'}} to={`${url}/addproduct`}>
                <Button>Add Product</Button>
            </Link>
          </Box>}
        
        <br />
        <Link style={{textDecoration: 'none', marginBottom: '10px'}} to={`${url}/myorders`}>
            <Button>My Orders</Button>
        </Link>
        
        <br />
        <Link style={{textDecoration: 'none', marginBottom: '10px'}} to={`${url}/payment`}>
            <Button>Payment</Button>
        </Link>
        <br />
        <Link style={{textDecoration: 'none', marginBottom: '10px'}} to={`${url}/review`}>
            <Button>Review</Button>
        </Link>

        <br />
        
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/"><button className="mt-2 py-3 px-7 mb-10 hover:bg-gray-50 hover:text-gray-800 rounded text-gray bg-gray transition duration-300"><i className="fas fa-arrow-circle-left mr-2"></i> HOME</button></NavLink>

          <Typography variant="h6" style={{margin: '10px'}} noWrap component="div">
            Dashboard
          </Typography>
          <Button onClick={logOut} className="btn" variant="contained" color="success"><i className="fas fa-sign-out-alt mr-2"></i> LogOut</Button>
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
            <Route exact path={`${path}`}>
                <DashboardHome></DashboardHome>
            </Route>
            <Route  path={`${path}/myorders`}>
                <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/manageorders`}>
                <ManageOrders></ManageOrders>
            </Route>
            <Route path={`${path}/addproduct`}>
                <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/payment`}>
                <Payment></Payment>
            </Route>
            <Route path={`${path}/review`}>
                <Review></Review>
            </Route>
            
            <Route path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
            </Route>
        </Switch>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
