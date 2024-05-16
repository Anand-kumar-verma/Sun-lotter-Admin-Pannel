import { Notifications } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { IoColorPalette } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import BreadCrumbs from "../Shared/BreadCrumbs";
import CustomDialogBox from "../Shared/CustomDialogBox";
import Sidebar from "../Shared/Sidebar";
import MobileNavigation from "../Shared/Sidebar/MobileNavigation";
const Layout = ({ component, navItem, navLink, id }) => {
  const isMediumScreen = useMediaQuery({ maxWidth: 800 });

  const [user_exist, setuser_exist] = useState("");
  const user = localStorage.getItem("erp_username");
  const background = localStorage.getItem("background_url");
  const [color, setcolor] = useState(
    background ||
      "https://aaraerp.s3.amazonaws.com/media/background_image/background4_VxrVIay_02MDQXY_J8Ld4WR.webp"
  );
  const user1 = localStorage.getItem("role_user");
  const [openCustomDialogBox, setopenCustomDialogBox] = useState(false);
  const colorsData = [
    {
      HEX: "https://aaraerp.s3.amazonaws.com/media/background_image/background4_VxrVIay_02MDQXY_J8Ld4WR.webp",
    },
    {
      HEX: "https://e0.pxfuel.com/wallpapers/210/205/desktop-wallpaper-plain-plain-color.jpg",
    },
    {
      HEX: "https://www.wallpapertip.com/wmimgs/29-292932_blue-bubbles-wallpaper.jpg",
    },
    {
      HEX: "https://wallpapertag.com/wallpaper/middle/7/d/b/377249-blue-wallpaper-hd-1920x1080-for-pc.jpg",
    },
    {
      HEX: "https://wallpapertag.com/wallpaper/middle/d/8/9/130350-download-free-water-backgrounds-2560x1600-for-ios.jpg",
    },
    {
      HEX: "https://wallpapercave.com/wp/wp7076634.jpg",
    },
    {
      HEX: "https://img.freepik.com/premium-photo/abstract-hd-blue-background-light-blue-color-theme-with-3d-geometry-pattern_1000823-2007.jpg",
    },
    {
      HEX: "https://media.istockphoto.com/id/1427557002/photo/the-banner-of-summer-colorful-theme-with-palm-trees-background-as-texture-frame-image.webp?b=1&s=170667a&w=0&k=20&c=TSoQXoLDSDDroRzEzJiaaWwvmzx4YmCBpwTW9yUWBH0=",
    },
    {
      HEX: "https://img.freepik.com/free-photo/watercolor-texture-background-pink-wallpaper_53876-102532.jpg",
    },
    {
      HEX: "https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg?w=996&t=st=1711965128~exp=1711965728~hmac=9a6ee27ee0576de5c255ff4eb36ab07b8a4354a2c58e12bab5f97f7b1ff51d4b",
    },
    {
      HEX: "https://img.freepik.com/free-photo/blue-background-banner-perfect-canva_1361-3591.jpg?w=996&t=st=1711965251~exp=1711965851~hmac=dca3c77a0ef8ff7d75cecd47c1318196534aecc04c2ed65635ad9486b52d029e",
    },
    {
      HEX: "https://img.freepik.com/free-vector/gradient-blue-background_23-2149347096.jpg?w=996&t=st=1711965319~exp=1711965919~hmac=6ae1b0cab19460a820fb34b4c2ad5be62d3acc37d582676fbb9c2ccae9e08a9f",
    },
    {
      HEX: "https://img.freepik.com/free-vector/gradient-abstract-with-diagonal-lines-background_23-2150527316.jpg?w=996&t=st=1711965358~exp=1711965958~hmac=9cf93e70ea2edbc9add0d61d2e8917b28f734ca33d564c1cc7edcf8233764347",
    },
    {
      HEX: "https://img.freepik.com/premium-photo/watercolor-blue-painting_145343-697.jpg?w=360",
    },
    {
      HEX: "https://img.freepik.com/premium-vector/light-blue-gradient-with-halftone-elements_72655-78.jpg?w=1060",
    },
    {
      HEX: "https://img.freepik.com/premium-vector/colorful-flat-geometrical-background_301033-347.jpg",
    },
    {
      HEX: "https://img.freepik.com/premium-vector/trendy-blue-abstract-background-with-dynamic-shapes_3589-1154.jpg",
    },
    {
      HEX: "https://img.freepik.com/premium-vector/abstract-elegant-geometric-decorative-design-banner-background-vector_392592-176.jpg",
    },
  ];

  useEffect(() => {
    setuser_exist(user1);
  }, [user1]);

  return (
    <div
      style={{
        backgroundImage: `url(${color})`,
        backgroundSize: "cover",
      }}
      className={`!bg-white lg:flex lg:h-screen h-[110vh] w-screen `}
    >
      {!isMediumScreen ? <Sidebar /> : <MobileNavigation />}
      <div className="flex flex-col gap-3 h-screen w-full   lg:p-5 ">
        {!isMediumScreen && (
          <div className="flex flex-col h-[17vh] w-full">
            <div className="flex w-full mb-4 items-center rounded justify-between">
              <p className="text-xl font-semibold">{navItem}</p>
              <div className="flex items-center gap-5">
                <IoColorPalette
                  onClick={() => {
                    setopenCustomDialogBox(true);
                  }}
                  className="text-2xl text-blue-700 cursor-pointer"
                />

                <div className="flex items-center gap-3 glass p-3 shadow rounded-md">
                  <Avatar alt={user?.user_name} src={user?.store_logo} />
                  <span className="flex flex-col">
                    <p className="font-bold text-red-500 ">{user}</p>
                    <p className="text-xs text-blue-700 capitalize">
                      {localStorage.getItem("role")?.replace("_", " ")} &nbsp;
                      Admin
                    </p>
                  </span>
                  <IconButton>
                    <Notifications />
                  </IconButton>
                </div>
              </div>
            </div>
            {!isMediumScreen && (
              <div className="overflow-x-scroll w-[95%]">
                <BreadCrumbs navItem={navItem} navLink={navLink} id={id} />
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col overflow-y-auto w-full lg:h-[83vh] !h-[100vh] glass lg:!p-1 !rounded-md">
          {component}
        </div>

        {!isMediumScreen && (
          <span className="flex text-secondary px-2  justify-between">
            <p>All Rights reserved to Game Zone Software 2024</p>

            <span className="flex gap-2">
              <p>Review</p> | <p>Purchase</p> | <p>Docs</p>
            </span>
          </span>
        )}
      </div>

      {openCustomDialogBox && (
        <CustomDialogBox
          openCustomDialogBox={openCustomDialogBox}
          setOpenCustomDialogBox={setopenCustomDialogBox}
          component={
            <div className="grid grid-cols-4 gap-4">
              {colorsData.map((i) => {
                return (
                  <div
                    className="!cursor-pointer"
                    onClick={() => {
                      localStorage.setItem("background_url", i?.HEX);
                      setcolor(i?.HEX);
                    }}
                  >
                    <img className="!h-32 !w-32" src={i?.HEX} />
                  </div>
                );
              })}
            </div>
          }
          title="Choose background"
        />
      )}
    </div>
  );
};

export default Layout;
