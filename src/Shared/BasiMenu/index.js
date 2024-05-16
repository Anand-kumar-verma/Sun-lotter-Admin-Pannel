import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function BasicMenu({
  anchorEl,
  setAnchorEl,
  openMenu,
  menu_list,
  setopenMenu,
  setClickedData
}) {

  // console.log(menu_list)
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
const navigate = useNavigate()

  const handleClose = ({singleItem = ''}) => {
    setAnchorEl(null);
    if(singleItem !== ''){
      navigate(singleItem)
     
    }
    setopenMenu(false)
  };

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          menu_list.map((singleItem,index)=>{
            return <MenuItem key={index} onClick={()=>{
              handleClose({singleItem:singleItem?.navLink})
              setClickedData(singleItem?.navLink)
              }}>{singleItem?.navItem}</MenuItem>
          })
        }
      </Menu>
    </div>
  );
}