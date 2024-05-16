import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Button, TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getdownlinebyid } from "../../Services";
import CustomTable from "../../Shared/CustomTable";
const DownLine = () => {
  const visibleRows = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [search, setSearch] = useState("");
  const [value, setvalue] = useState(1);
  const { isLoading, data: data } = useQuery(
    ["downline_referral_list_data", value],
    () => getdownlinebyid({ username: `${search}` }),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const result = data?.data?.data?.teamMembersByLevel;
  const all_data = data?.data?.data;

  const tablehead = [
    <div className="w-full grid grid-cols-3 pr-2">
    <span className="!text-center">Levels</span>
    <p className="!text-center">
      Members
    </p>
    <p className="!text-center">
      Deposit Amount
    </p>
  </div>
  ];

  const tablerow = visibleRows?.map((i, index) => {
    return [
      <div>
        {
          <Accordion className="!rounded-lg">
            <AccordionSummary
              expandIcon={
                <ArrowDownwardIcon className="!bg-white !bg-opacity-5" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ background: "#4737BD", color: "white" }}
            >
              <div className="w-full grid grid-cols-3 pr-2">
                <span className="!text-center">Level:{index + 1}</span>
                <p className="!text-center">
                  {result?.[`level_${index + 1}`]?.length || 0}
                </p>
                <p className="!text-center">
                  {"Rs"}{" "}
                  <span className="text-green-200">
                    {all_data?.deposit_member_amount?.[index] || 0}
                  </span>{" "}
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails className="!bg-opacity-5">
              <Box sx={{ paddingTop: 2 }}>
                <Box>
                  <div className="!grid !grid-cols-3  pl-2 !place-items-center ">
                    <span>S.No.</span>
                    <span>User Id</span>
                    <span className="">Name</span>
                  </div>
                  <div className="h-[2px] w-full !py-2"></div>
                  {result?.[`level_${index + 1}`]?.map((i, index) => {
                    return (
                      <>
                        <div className="!grid !grid-cols-3  pl-2 !place-items-center !py-2">
                          <span>{index + 1}</span>
                          <span className="!text-center ">
                            {i?.id || "No data found"}
                          </span>
                          <span className="!text-center ">
                            {i?.full_name || "No data found"}
                          </span>
                        </div>
                        <div className="!h-[1px] !w-full !bg-black"></div>
                      </>
                    );
                  })}
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        }
      </div>,
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
    </div>
  );
};

export default DownLine;
