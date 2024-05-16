import { Delete } from "@mui/icons-material";
import { IconButton, TablePagination, TextField } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getViewAssignedMenuList } from "../../Services";
import CustomTable from "../../Shared/CustomTable";
const ViewAssignedMenu = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [visibleRows, setVisibleRows] = React.useState([]);
  const [search, setSearch] = useState("");

  const { isLoading, data: subadmin } = useQuery(
    ["get_viw_assigned_menu_data"],
    () => getViewAssignedMenuList(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const player_new_data = subadmin?.data?.data || [];

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

  const tablehead = [
    <span>S.No.</span>,
    <span>Name</span>,
    <span>Login Id</span>,
    <span>Main Menu</span>,
    <span>Sub Menu</span>,
    <span>Action</span>,
  ];

  const tablerow = visibleRows?.map((i, index) => {
    return [
      <span>{index + 1}</span>,
      <span>{i?.sub_admin_name}</span>,
      <span>{i?.login_id}</span>,
      <span>{i?.mainmenu}</span>,
      <span>{i?.submenu}</span>,
      <span>
        <IconButton>
          <Delete className="!text-red-500"/>
        </IconButton>
      </span>,
    ];
  });

  return (
    <div>
      <div className="flex px-2 !justify-start py-2 gap-2 !place-items-center">
        <TextField
          type="search"
          size="small"
          placeholder="Search Items"
          value={search}
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
      />
    </div>
  );
};
export default ViewAssignedMenu;
