import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, MenuItem, TablePagination, TextField } from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomTable from "../../Shared/CustomTable";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";
const WithdrawlCricket = () => {
  const navigate = useNavigate();
  const [loding, setloding] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [visibleRows, setVisibleRows] = React.useState([]);
  const [data, setData] = useState([]);
  const client = useQueryClient();
  const [from_date, setFrom_date] = useState();
  const [to_date, setTo_date] = useState();
  const [type, setType] = useState("All");

  const withdrawlRequestFunction = async () => {
    setloding(true);
    // if (!from_date || !to_date) return toast("Both date should be selected");
    try {
      const res = await axiosInstance.get(API_URLS?.cricket_withdrawl, {
        params: {
          from_date: from_date,
          to_date: to_date,
          type: type,
        },
      });
      setData(res?.data?.data || []);
      // if (res) {
      //   setTo_date("");
      //   setFrom_date("");
      // }
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  };
  useEffect(() => {
    withdrawlRequestFunction();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    setVisibleRows(
      data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    );
  }, [page, rowsPerPage, data]);

  const tablehead = [
    <span>SNo.</span>,
    <span>Id</span>,
    <span>User Id</span>,
    <span>Name</span>,
    <span>Transaction Id</span>,
    <span>Amount</span>,
    <span>Account No</span>,
    <span>Holder</span>,
    <span>Date</span>,
    <span>Status</span>,
    <span>Bank</span>,
    // <span>Action</span>,
  ];

  const tablerow = visibleRows?.map((i, index) => {
    return [
      <span>{index + 1}</span>,
      <span>{i?.id}</span>,
      <span>{i?.username}</span>,
      <span>{i?.full_name}</span>,
      <span>{i?.tran_id}</span>,
      <span>{i?.amount}</span>,
      <span>{i?.account}</span>,
      <span>{i?.holder_name}</span>,
      <span>{moment(i?.date)?.format("YYYY-MM-DD")}</span>,
      <span>{i?.status}</span>,
      <span>{i?.bank_name}</span>,
    ];
  });

  return (
    <div>
      <div className="flex px-2 !justify-start py-2 gap-2 !place-items-center">
        <span className="font-bold">From:</span>
        <TextField
          type="date"
          size="small"
          value={from_date}
          onChange={(e) => setFrom_date(e.target.value)}
        />
        <span className="font-bold">To:</span>
        <TextField
          type="date"
          size="small"
          value={to_date}
          onChange={(e) => setTo_date(e.target.value)}
        />
        <TextField
          select
          type="text"
          size="small"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Approve">Approve</MenuItem>
          <MenuItem value="Reject">Reject</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Pending">Processing</MenuItem>
        </TextField>
        <Button
          onClick={() => withdrawlRequestFunction()}
          variant="contained"
          startIcon={<FilterAltIcon />}
        >
          Filter
        </Button>
      </div>
      <CustomTable
        tablehead={tablehead}
        tablerow={tablerow}
        isLoading={loding}
      />
      <TablePagination
        rowsPerPageOptions={[8, 10, 20, 50]}
        component="div"
        count={data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default WithdrawlCricket;
