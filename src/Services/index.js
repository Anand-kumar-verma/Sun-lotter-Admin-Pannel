import { API_URLS } from "../config/APIUrls";
import axiosInstance from "../config/axios";

export const dashboard_counter_function = async () => {
  try {
    const res = axiosInstance.get(API_URLS?.dashboard_counter);
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const get_username_by_referralidFunctoin = async (reqBody) => {
  try {
    const res = await axiosInstance.get(API_URLS.get_username_by_referralid, {
      params: reqBody,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const get_all_player_data = async () => {
  try {
    const res = axiosInstance.get(API_URLS?.get_all_player);
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const get_all_attendance_data_fun = async () => {
  try {
    const res = axiosInstance.get(API_URLS?.attendance_get);
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const get_next_id_one_min = async (reqBody) => {
  try {
    const res = axiosInstance.get(API_URLS?.get_next_gameid_one_min,{
      params:reqBody
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getSubadminList = async () => {
  try {
    const res = await axiosInstance.get(API_URLS?.get_sub_admin_list);
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const getDirectReferralByUserId = async (reqBody) => {
  try {
    const res = await axiosInstance.get(
      API_URLS?.get_direct_referral_by_user_id,
      {
        params: reqBody,
      }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const getdownlinebyid = async (reqBody) => {
  try {
    const res = await axiosInstance.get(
      API_URLS?.get_downline_data_by_id,
      {
        params: reqBody,
      }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const getViewAssignedMenuList = async () => {
  try {
    const res = await axiosInstance.get(API_URLS?.get_new_assigned_menu_list);
    return res;
  } catch (e) {
    console.log(e);
  }
};
