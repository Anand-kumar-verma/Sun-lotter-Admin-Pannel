import { Edit } from "@mui/icons-material";
import { IconButton, Switch, TablePagination, TextField } from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { get_all_player_data } from "../../Services";
import CustomTable from "../../Shared/CustomTable";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Player = () => {
  const navigate = useNavigate();
  const isMediumScreen = useMediaQuery({ maxWidth: 800 });
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [visibleRows, setVisibleRows] = React.useState([]);
  const [search, setSearch] = useState("");
  const client = useQueryClient();
  const { isLoading, data: player } = useQuery(
    ["player_data"],
    () => get_all_player_data(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const player_new_data = player?.data?.data || [];

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

  const changePlayerStatusFunction = async (reqBody) => {
    try {
      const res = await axiosInstance.put(
        API_URLS?.update_player_status,
        reqBody
      );
      if (res) client.refetchQueries("player_data");
    } catch (e) {
      console.log(e);
    }
  };
  const tablehead = [
    <span>Id</span>,

    <span>Name</span>,
    <span>User Id</span>,
    <span>Sponser Id</span>,
    <span>Sponser Name</span>,
    <span>Mobile</span>,
    <span>Email</span>,
    <span>Join Date</span>,
    <span>Login Status</span>,
    <span>Login Action</span>,
    <span>User Type</span>,
    <span>Withdrawl Type</span>,
    <span>Action</span>,
  ];

  const tablerow = visibleRows?.map((i) => {
    return [
      <span>{i?.id}</span>,
      <span>{i?.full_name}</span>,
      <span>{i?.username}</span>,
      <span>{i?.sname}</span>,
      <span>{i?.sfullname}</span>,
      <span>{i?.mobile}</span>,
      <span>{i?.email}</span>,
      <span>{moment(i?.created_at)?.format("DD-MM-YYYY")}</span>,
      <span>{i?.status === "1" ? "Active" : "Inactive"}</span>,
      <span>
        <Switch
          onClick={() => {
            changePlayerStatusFunction({ id: i?.id });
          }}
          checked={i?.status === "1" ? true : false}
        />
      </span>,
      <span>{"INR"}</span>,
      <span>{"Manual"}</span>,
      <p className="!text-center">
        <IconButton
          onClick={() =>
            navigate("/player/add-player", {
              state: {
                id: i
              },
            })
          }
        >
          <Edit />
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
        labelRowsPerPage={isMediumScreen && "Rows"}
      />
    </div>
  );
};

export default Player;
