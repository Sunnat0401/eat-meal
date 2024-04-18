import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import imgsss from '../../assets/hamicon.jpg'
import { useTranslation } from "react-i18next";
import './Hamburger.css';
import { Link } from "react-router-dom";
export default function TemporaryDrawer({changeLang}) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer =  () => {
    setOpen(true);
  };
  const onCloseD = () =>{
    setOpen(false)
  }
  const changeLangHandler = (e) =>{
    changeLang(e.target.value)
 }
 const {t} = useTranslation()

  const DrawerList = (
    <Box sx={{ width: 250 }}  >
      <List className="hamburger-open">
           <ul className="hamburger-lists">
            <li  onClick={onCloseD} className="hamburger-list"><Link className="hamburger-link"to="/">{t("main")}</Link></li>
            <li  onClick={onCloseD} className="hamburger-list"><Link className="hamburger-link"to="/fillial">{t("filial")}</Link></li>
            <li   onClick={onCloseD} className="hamburger-list"><Link className="hamburger-link" to="/info">{t("about")}</Link></li>
            <li  onClick={onCloseD} className="hamburger-list"><Link className="hamburger-link"to="/contact">{t("contact")}</Link></li>
            <li  onClick={onCloseD} className="hamburger-list"><Link className="hamburger-link" to="/connect">{t("connect")}</Link></li>
            <select onClick={changeLangHandler}  className="navbar-select hamburgers-select">
                                       <option value="uz">Uz</option>
                                       <option value="en">En</option>
                                    </select>            
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