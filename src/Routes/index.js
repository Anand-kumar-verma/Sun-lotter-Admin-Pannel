import Attendance from "../Pages/attandence";
import Changepassword from "../Pages/changepassword/Changepassword";
import ColorPrediction1Min from "../Pages/colorprediction/ColorPrediction1Min";
import ColorPrediction2Min from "../Pages/colorprediction/ColorPrediction2Min";
import ColorPrediction3Min from "../Pages/colorprediction/ColorPrediction3Min";
import ColorPredictionDeposit from "../Pages/colorprediction/ColorPredictionDeposit";
import ColorPredictionWithdrawl from "../Pages/colorprediction/ColorPredictionWithdrawl";
import DepositCricket from "../Pages/cricket/DepositCricket";
import WithdrawlCricket from "../Pages/cricket/WithdrawlCricket";
import Dashboard from "../Pages/dashboard/Dashboard";
import Fund from "../Pages/fund/Fund";
import FundHistory from "../Pages/fund/FundHistory";
import ApprovedRequest from "../Pages/gamewithdrawlrequest/ApprovedRequest";
import GameWithdrawlRequest from "../Pages/gamewithdrawlrequest/GameWithdrawlRequest";
import RejectRequest from "../Pages/gamewithdrawlrequest/RejectRequest";
import DownLine from "../Pages/genealogy/DownLine";
import Genealogy from "../Pages/genealogy/Genealogy";
import IncomeReport from "../Pages/income-report/IncomeReport";
import MLM from "../Pages/mlm/MLM";
import AddPlayer from "../Pages/player/AddPlayer";
import Player from "../Pages/player/Player";
import AddSubAdmin from "../Pages/subadmin/AddSubAdmin";
import AssignSubAdminMenu from "../Pages/subadmin/AssignSubAdminMenu";
import ViewAssignedMenu from "../Pages/subadmin/ViewAssignedMenu";
import ViewSubAdmin from "../Pages/subadmin/ViewSubAdmin";

export const routes = [
  {
    id: 1,
    path: "/dashboard",
    component: <Dashboard />,
    navItem: "Dashboard",
  },
  {
    id: 2,
    path: "/attendance",
    component: <Attendance />,
    navItem: "Attendance",
  },
  {
    id: 3,
    path: "/player",
    component: <Player />,
    navItem: "Player",
  },
  {
    id: 4,
    path: "/mlm",
    component: <MLM />,
    navItem: "MLM",
  },
  {
    id: 5,
    path: "/game-withdrawl-request",
    component: <GameWithdrawlRequest />,
    navItem: "Game Withdrawl Request",
  },
  {
    id: 6,
    path: "/genealogy",
    component: <Genealogy />,
    navItem: "Direct",
  },
  {
    id: 7,
    path: "/genealogy/downline",
    component: <DownLine />,
    navItem: "Downline",
  },
  {
    id: 8,
    path: "/income-report",
    component: <IncomeReport/>,
    navItem: "Income Report",
  },
  {
    id: 9,
    path: "/fund",
    component: <Fund/>,
    navItem: "Fund",
  },
  {
    id: 10,
    path: "/player/add-player",
    component: <AddPlayer/>,
    navItem: "Add Player",
  },
  {
    id: 11,
    path: "/change-password",
    component: <Changepassword/>,
    navItem: "Change Password",
  },
  {
    id: 12,
    path: "/game-withdrawl-request/approved-request",
    component: <ApprovedRequest/>,
    navItem: "Approved Request",
  },
  {
    id: 13,
    path: "/game-withdrawl-request/reject-request",
    component: <RejectRequest/>,
    navItem: "Reject Request",
  },
  {
    id: 14,
    path: "/add-subadmin",
    component: <AddSubAdmin/>,
    navItem: "Add Subadmin",
  },
  {
    id: 15,
    path: "/all-view-subadmin",
    component: <ViewSubAdmin/>,
    navItem: "Subadmin",
  },
  {
    id: 16,
    path: "/all-view-subadmin",
    component: <ViewSubAdmin/>,
    navItem: "Subadmin",
  },
  {
    id: 17,
    path: "/view-assigned-menu",
    component: <ViewAssignedMenu/>,
    navItem: "View Assigned Menu",
  },
  {
    id: 18,
    path: "/assign-subadmin-menu",
    component: <AssignSubAdminMenu/>,
    navItem: "Assign Subadmin Menu",
  },
  {
    id: 19,
    path: "/cricket-deposit",
    component: <DepositCricket/>,
    navItem: "Deposit",
  },
  {
    id: 20,
    path: "/color-prediction-deposit",
    component: <ColorPredictionDeposit/>,
    navItem: "Deposit",
  },
  {
    id: 21,
    path: "/cricket-withdrawl",
    component: <WithdrawlCricket/>,
    navItem: "Withdrawl",
  },
  {
    id: 22,
    path: "/color-prediction-withdrawl",
    component: <ColorPredictionWithdrawl/>,
    navItem: "Withdrawl",
  },
  {
    id: 23,
    path: "/color-prediction-1-min",
    component: <ColorPrediction1Min/>,
    navItem: "Color Prediction 1 Min",
  },
  {
    id: 24,
    path: "/color-prediction-2-min",
    component: <ColorPrediction2Min/>,
    navItem: "Color Prediction 2 Min",
  },
  {
    id: 25,
    path: "/color-prediction-3-min",
    component: <ColorPrediction3Min/>,
    navItem: "Color Prediction 3 Min",
  },
  {
    id: 26,
    path: "/fund/transfer-fund-history",
    component: <FundHistory/>,
    navItem: "Fund History",
  },

];

// UpdatePermissions