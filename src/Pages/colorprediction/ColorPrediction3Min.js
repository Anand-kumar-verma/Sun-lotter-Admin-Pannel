import { Box, Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { get_next_id_one_min } from "../../Services";
import { useSocket } from "../../Shared/ScoketProvider";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";

const ColorPrediction3Min = () => {
  const socket = useSocket();
  const [three_min_time, setThree_min_time] = useState("0_0");
  const show_this_three_min_time_sec = React.useMemo(
    () => String(three_min_time?.split("_")?.[1]).padStart(2, "0"),
    [three_min_time]
  );

  const show_this_three_min_time_min = React.useMemo(
    () => String(three_min_time?.split("_")?.[0]).padStart(2, "0"),
    [three_min_time]
  );

  const client = useQueryClient();
  const { isLoading, data: get_next_id } = useQuery(
    ["get_next_id_three_min"],
    () => get_next_id_one_min({ gameid: "3" }),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
  const get_next_id_one = get_next_id?.data?.data || [];

  React.useEffect(() => {
    const handleFiveMin = (fivemin) => {
      setThree_min_time(fivemin);
      if (
        fivemin?.split("_")?.[1] === "0" &&
        fivemin?.split("_")?.[0] === "0"
      ) {
        client.refetchQueries("get_next_id_three_min");
      }
    };

    socket.on("fivemin", handleFiveMin);

    return () => {
      socket.off("fivemin", handleFiveMin);
    };
  }, []);

  const initialValue = {
    result: "",
    gamesno: get_next_id_one?.[0]?.gamesnio,
    percentage: get_next_id_one?.[0]?.parsantage || "",
  };
  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    onSubmit: () => {
      if (!fk.values.result) return toast("Plese enter the number");
      manuallyWinningAPI(fk.values);
    },
  });

  async function manuallyWinningAPI(reqBody) {
    const newreqBody = {
      gamesno: reqBody.gamesno,
      gameid: "3",
      number: reqBody.result,
    };
    try {
      const res = await axiosInstance.post(
        API_URLS.manually_winning_api,
        newreqBody
      );
      toast(res?.data?.message);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  async function manuallyUpdatePercentage() {
    const newreqBody = {
      id: "3",
      parsantage: fk.values.percentage,
    };
    try {
      const res = await axiosInstance.post(
        API_URLS.manually_update_percentage_api,
        newreqBody
      );
      toast(res?.data?.message);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div className="!flex !justify-between !p-3">
        <p className="!text-2xl font-bold">{get_next_id_one?.[0]?.gamesnio}</p>
        {React.useMemo(() => {
          return (
            <Stack direction="row" className="!text-2xl">
              <Box className="timerBoxone">
                {show_this_three_min_time_min?.substring(0, 1)}
              </Box>
              <Box className="timerBox">
                {show_this_three_min_time_min?.substring(1, 2)}
              </Box>
              <Box className={" !font-bold"}>:</Box>
              <Box className="timerBox">
                {show_this_three_min_time_sec?.substring(0, 1)}
              </Box>
              <Box className="timerBoxfour">
                {show_this_three_min_time_sec?.substring(1, 2)}
              </Box>
            </Stack>
          );
        }, [show_this_three_min_time_sec])}
      </div>
      <div className="!grid lg:grid-cols-10 md:grid-cols-5 grid-cols-2 gap-2 px-2">
        {get_next_id_one?.map((i, index) => {
          return (
            <p
              key={index}
              className={
                "!p-10 !bg-[#f377e0] !bg-opacity-50 !rounded-lg !text-center cursor-pointer font-bold"
              }
            >
              {i?.number}
            </p>
          );
        })}
        {get_next_id_one?.map((i, index) => {
          return (
            <p
              key={index}
              className={
                "!p-10 !bg-[#f8bcef] !bg-opacity-50 !rounded-lg !text-center cursor-pointer"
              }
            >
              {i?.amount}
            </p>
          );
        })}
      </div>
      <div className="!w-full grid grid-cols-3 mt-4 gap-[3%]">
        <TextField
          fullWidth
          placeholder="Result"
          id="result"
          size="small"
          name="result"
          onChange={fk.handleChange}
          value={fk.values.result}
        />
        <TextField
          fullWidth
          id="gamesno"
          size="small"
          name="gamesno"
          // onChange={() => fk.handleChange()}
          value={fk.values.gamesno}
        />
        <Button variant="contained" onClick={() => fk.handleSubmit()}>
          Submit
        </Button>
      </div>
      <p className="!mt-3 font-bold">Update Percentage:</p>
      <div className="!w-full flex  mt-4  gap-5">
        <TextField
          placeholder="Update Percentage"
          id="percentage"
          size="small"
          name="percentage"
          onChange={fk.handleChange}
          value={fk.values.percentage}
        />
        <Button variant="contained" onClick={() => manuallyUpdatePercentage()}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ColorPrediction3Min;
