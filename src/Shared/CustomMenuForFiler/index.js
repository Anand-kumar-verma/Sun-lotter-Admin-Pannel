import React,{useState} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {BsCheck2} from 'react-icons/bs'

const CustomMenuForFilter = ({
    setopenMenuButton,
    anchorEl,
    setAnchorEl,
    component
}) => {

    const [data, setdata] = useState('');
   
    const open = Boolean(anchorEl);

    function handleMenuItems(data){
        setdata(data)
        setAnchorEl(null);
        setopenMenuButton(false)
    }

  
  return (
    <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={()=> setAnchorEl(null)}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 14,
              // left: "40%",
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >

       <div className=''>
       {component}
       </div>               
        
        
       
      </Menu>
  );
}

export default CustomMenuForFilter;
