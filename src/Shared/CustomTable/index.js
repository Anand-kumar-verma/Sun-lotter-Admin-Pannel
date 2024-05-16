import {
  Skeleton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import React from "react";

const CustomTable = ({ tablehead , tablerow, className, isLoading }) => {
  // console.log(tablerow)

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: "4px 8px", // Adjust the padding values as needed
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
     
        <TableContainer fontSize="small" sx={{}}>
          <Table size="small" stickyHeader aria-label="sticky table">
            <TableHead className="!bg-white !bg-opacity-50">
              <TableRow>
                {tablehead.map((column) => (
                  <TableCell className="!text-black !font-bold !bg-white !bg-opacity-50 !text-center">
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15].map((i) => {
                  return (
                    <StyledTableRow>
                      {tablehead.map(() => (
                        <TableCell>
                          <Skeleton />
                        </TableCell>
                      ))}
                    </StyledTableRow>
                  );
                })
              ) : tablerow?.length === 0 ? (
                <TableRow>
                  {tablehead
                    ?.slice(0, parseInt(tablehead?.length / 2 - 1))
                    .map((column) => (
                      <TableCell></TableCell>
                    ))}
                  <TableCell>No data Found</TableCell>
                </TableRow>
              ) : (
                tablerow.map((row, index) => (
                  <StyledTableRow
                    key={index}
                    className="hover:!bg-purple-200 cursor-pointer"
                  >
                    {row?.map((i) => {
                      return (
                        <StyledTableCell
                          component="th"
                          scope="row"
                          className="capitalize !text-center !py-[10px]"
                        >
                          {i}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
    
    </>
  );
};

export default CustomTable;