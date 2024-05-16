import AddTaskIcon from "@mui/icons-material/AddTask";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import LockResetIcon from "@mui/icons-material/LockReset";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
export const all_Data = [
  {
    id: 1,
    navLink: "/dashboard",
    navItem: "Dashboard",
    navIcon: (
      <span>
        <DashboardCustomizeIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },
  {
    id: 2,
    navLink: "/player",
    navItem: "Player",
    navIcon: (
      <span>
        <SportsEsportsIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 2.2,
        navLink: "/player",
        navItem: "All Player",
        navIcon: (
          <span>
            <Diversity1Icon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 2.3,
        navLink: "/player/add-player",
        navItem: "Add Player",
        navIcon: (
          <span>
            <AddToPhotosIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 3,
    navLink: "/attendance",
    navItem: "Attendance",
    navIcon: (
      <span>
        <AddTaskIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },
  {
    id: 5,
    navLink: "/game-withdrawl-request",
    navItem: "Game Withdrawl Request",
    navIcon: (
      <span>
        <FormatShapesIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 5.1,
        navLink: "/game-withdrawl-request",
        navItem: "Withdrawl Request",
        navIcon: (
          <span>
            <SportsEsportsIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 5.2,
        navLink: "/game-withdrawl-request/approved-request",
        navItem: "Approved Request",
        navIcon: (
          <span>
            <SportsEsportsIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 5.3,
        navLink: "/game-withdrawl-request/reject-request",
        navItem: "Reject Request",
        navIcon: (
          <span>
            <SportsEsportsIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 123,
    navLink: "/all-view-subadmin",
    navItem: "Sub Admin",
    navIcon: (
      <span>
        <FormatShapesIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 5.1,
        navLink: "/add-subadmin",
        navItem: "Add SubAdmin",
        navIcon: (
          <span>
            <SportsEsportsIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 5.2,
        navLink: "/assign-subadmin-menu",
        navItem: "Assign SubAdmin Menu",
        navIcon: (
          <span>
            <SportsEsportsIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 5.3,
        navLink: "/view-assigned-menu",
        navItem: "View Assigned Menu",
        navIcon: (
          <span>
            <SportsEsportsIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 6,
    navLink: "/genealogy",
    navItem: "Genealogy",
    navIcon: (
      <span>
        <CardGiftcardIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 6.1,
        navLink: "/genealogy",
        navItem: "Direct",
        navIcon: (
          <span>
            <CardGiftcardIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 6.2,
        navLink: "/genealogy/downline",
        navItem: "Downline",
        navIcon: (
          <span>
            <CardGiftcardIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 7,
    navLink: "/income-report",
    navItem: "Income Report",
    navIcon: (
      <span>
        <ViewCarouselIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 7.1,
        navLink: "/income-report/user-rewards",
        navItem: "User Rewards",
        navIcon: (
          <span>
            <ViewCarouselIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 7.2,
        navLink: "/income-report/team-salary",
        navItem: "Team Salary",
        navIcon: (
          <span>
            <ViewCarouselIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 7.3,
        navLink: "/income-report/referral-bonus",
        navItem: "Referral Bonus",
        navIcon: (
          <span>
            <ViewCarouselIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 8,
    navLink: "/fund",
    navItem: "Fund",
    navIcon: (
      <span>
        <ViewCarouselIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 8.1,
        navLink: "/fund",
        navItem: "Add Fund",
        navIcon: (
          <span>
            <ViewCarouselIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 8.2,
        navLink: "/fund/transfer-fund-history",
        navItem: "Transfer Fund History",
        navIcon: (
          <span>
            <ViewCarouselIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 8,
    navLink: "/change-password",
    navItem: "Change Password",
    navIcon: (
      <span>
        <LockResetIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },
  {
    id: 9,
    navLink: "/cricket-deposit",
    navItem: "Cricket",
    navIcon: (
      <span>
        <LockResetIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 9.1,
        navLink: "/cricket-deposit",
        navItem: "Deposit",
        navIcon: (
          <span>
            <ViewCarouselIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 9.2,
        navLink: "/cricket-withdrawl",
        navItem: "Withdrawl",
        navIcon: (
          <span>
            <ViewCarouselIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 10,
    navLink: "/color-prediction-deposit",
    navItem: "Color Prediction",
    navIcon: (
      <span>
        <LockResetIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 10.1,
        navLink: "/color-prediction-deposit",
        navItem: "Deposit",
        navIcon: (
          <span>
            <ViewCarouselIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 10.2,
        navLink: "/color-prediction-withdrawl",
        navItem: "Withdrawl",
        navIcon: (
          <span>
            <ViewCarouselIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 11,
    navLink: "/color-prediction-1-min",
    navItem: "Wingo",
    navIcon: (
      <span>
        <LockResetIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 11.1,
        navLink: "/color-prediction-1-min",
        navItem: "Wingo 1 Min",
        navIcon: (
          <span>
            <ViewCarouselIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 11.2,
        navLink: "/color-prediction-2-min",
        navItem: "Wingo 2 Min",
        navIcon: (
          <span>
            <ViewCarouselIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 11.3,
        navLink: "/color-prediction-3-min",
        navItem: "Wingo 3 Min",
        navIcon: (
          <span>
            <ViewCarouselIcon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
];
