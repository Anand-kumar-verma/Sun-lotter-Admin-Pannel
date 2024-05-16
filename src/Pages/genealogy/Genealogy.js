import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, TablePagination, TextField } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getDirectReferralByUserId } from "../../Services";
import CustomTable from "../../Shared/CustomTable";
const Genealogy = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [visibleRows, setVisibleRows] = React.useState([]);
  const [search, setSearch] = useState("");
  const [value, setvalue] = useState(1);
  const { isLoading, data: direct_referral } = useQuery(
    ["direct_referral_list_data", value],
    () => getDirectReferralByUserId({ id: search }),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const player_new_data = direct_referral?.data?.data || [];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    setVisibleRows(
      player_new_data.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      )
    );
  }, [page, rowsPerPage, player_new_data]);

  const tablehead = [
    <span>S.No.</span>,
    <span>Id</span>,
    <span>User Id</span>,
    <span>Name</span>,
    <span>Mobile</span>,
    <span>Login Id</span>,
    <span>Password</span>,
  ];

  const tablerow = visibleRows?.map((i,index) => {
    return [
      <span>{index+1}</span>,
      <span>{i?.id}</span>,
      <span>{i?.username}</span>,
      <span>{i?.full_name}</span>,
      <span>{i?.mobile}</span>,
      <span>{i?.email}</span>,
      <span>{i?.password}</span>,
    ];
  });

  return (
    <div>
      <div className="flex px-2 !justify-start py-2 gap-2 !place-items-center">
        <TextField
          type="search"
          size="small"
          placeholder="Search by user id"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          onClick={() => setvalue(value + 1)}
          variant="contained"
          endIcon={<FilterAltIcon />}
        >
          Filter
        </Button>
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
    </div>
  );
};

export default Genealogy;
