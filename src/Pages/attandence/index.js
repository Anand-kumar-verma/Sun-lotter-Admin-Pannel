import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Dialog,
  IconButton,
  TablePagination,
  TextField,
} from "@mui/material";
import moment from "moment/moment";
import React, { useMemo, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { get_all_attendance_data_fun } from "../../Services";
import CustomTable from "../../Shared/CustomTable";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useMediaQuery } from "react-responsive";
const Attendance = () => {
  const [openDialog, setOpenDialog] = useState();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [visibleRows, setVisibleRows] = React.useState([]);
  const [search, setSearch] = useState("");
  const client = useQueryClient();
  const [amount, setAmount] = useState(0);
  const isMediumScreen = useMediaQuery({ maxWidth: 800 });
  const { isLoading, data: attendance } = useQuery(
    ["attendance_data"],
    () => get_all_attendance_data_fun(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const player_new_data = attendance?.data?.data || [];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    const filteredRows = player_new_data.filter((row) =>
      Object.values(row).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(search.toLowerCase())
      )
    );

    setVisibleRows(
      filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [page, rowsPerPage, player_new_data, search]);

  const deleteAttendanceByIdFunction = async (id) => {
    try {
      const res = await axiosInstance.delete(
        API_URLS?.delete_attendance_data + `?id=${id}`
      );
      if (res) client.refetchQueries("attendance_data");
    } catch (e) {
      console.log(e);
    }
  };
  const updateAttendanceByIdFunction = async (id, amount) => {
    if (!id || !amount) return toast("Please enter amount.");
    try {
      const res = await axiosInstance.put(
        API_URLS?.update_attendance_data + `?id=${id}&amount=${amount}`
      );
      toast(res?.data?.message);
      if (res) {
        client.refetchQueries("attendance_data");
        setOpenDialog();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const addNewAttendance = async () => {
    if (!amount) return toast("Please enter amount.");
    try {
      const reqBody = {
        amount: amount,
      };
      const res = await axiosInstance.post(
        API_URLS?.add_attendance_data,
        reqBody
      );
      toast(res?.data?.message);
      if (res) {
        client.refetchQueries("attendance_data");
        setOpenDialog();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const tablehead = useMemo(() => {
    return [
      <span>Id</span>,
      <span>Date</span>,
      <span>Amount</span>,
      <span>Status</span>,
      <span>Action</span>,
    ];
  }, []);

  const tablerow = visibleRows?.map((i, index) => {
    return [
      <span>{index + 1}</span>,
      <span>{moment(i?.datetime)?.format("DD-MM-YYYY")}</span>,
      <span>{i?.amount}</span>,
      <span>{i?.status}</span>,
      <p className="!text-center">
        <IconButton
          onClick={() => {
            setAmount(i.amount);
            setOpenDialog(i.id);
          }}
          className="lg:!p-2 !p-0"
        >
          <Edit />
        </IconButton>
        <IconButton className="sm:!p-0" onClick={() => deleteAttendanceByIdFunction(i.id)}>
          <Delete className="!text-red-600" />
        </IconButton>
      </p>,
    ];
  });

  return (
    <div>
      <div className="flex px-2 !justify-between py-2">
        <TextField
          type="search"
          size="small"
          placeholder="Search Entries"
          onChange={(e) => setSearch(e.target.value)}
        />
        {!isMediumScreen ? (
          <Button
            onClick={() => {
              setOpenDialog(true);
            }}
            className="!bg-blue-500"
            variant="contained"
          >
            Add New
          </Button>
        ) : (
          <IconButton
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        )}
      </div>
      <CustomTable
        tablehead={tablehead}
        tablerow={tablerow}
        isLoading={isLoading}
      />
      <TablePagination
        rowsPerPageOptions={[8, 10, 20, 50]}
        component="div"
        count={player_new_data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Dialog
        open={openDialog ? true : false}
        onClose={() => setOpenDialog()}
        maxWidth="500px"
      >
        <div className=" lg:px-20 md:px-10 mb:5 lg:mb-20 md:mb-10 lg:mt-5 md:mt-3  mt-2">
          <p className="!text-center !font-bold">
            {openDialog === true ? "Add Attendance" : "Edit Amount"}
          </p>
          <TextField
            fullWidth
            className="!mt-5"
            size="small"
            placeholder="Enter Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button
            onClick={() => {
              openDialog === true
                ? addNewAttendance()
                : updateAttendanceByIdFunction(openDialog, amount);
            }}
            className="!bg-green-500 !mt-5 !w-full"
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default Attendance;
