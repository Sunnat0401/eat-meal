import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import imgsss from '../../assets/hamicon.jpg'
import './Hamburger.css';
import { Link } from "react-router-dom";
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer =  () => {
    setOpen(true);
  };
  const onCloseD = () =>{
    setOpen(false)
  }
  

  const DrawerList = (
    <Box sx={{ width: 250 }}  >
      <List className="hamburger-open">
           <ul className="hamburger-lists">
            <li  onClick={onCloseD} className="hamburger-list"><Link className="hamburger-link"to="/">Главная</Link></li>
            <li  onClick={onCloseD} className="hamburger-list"><Link className="hamburger-link"to="/fillial">Филиалы</Link></li>
            <li   onClick={onCloseD} className="hamburger-list"><Link className="hamburger-link" to="/info">О нас</Link></li>
            <li  onClick={onCloseD} className="hamburger-list"><Link className="hamburger-link"to="/contact">Контакты</Link></li>
            <li  onClick={onCloseD} className="hamburger-list"><Link className="hamburger-link" to="/connect">Войти</Link></li>
           </ul>

      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer}>
        <img className="hamicon" src={imgsss} alt="hamburger " />
      </Button>
      <Drawer open={open} onClose={onCloseD}>
        {DrawerList}
      </Drawer>
    </div>
  );
}