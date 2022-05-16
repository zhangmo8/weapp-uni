import HttpUtil from "../request";

/// 手机号登录
export const loginByMobile = (data) => HttpUtil.post("/account/login-mobile", data);

/// 用户名登录
export const loginByUserName = (data) => HttpUtil.post("/account/login-username", data);

/// 退出登录
export const logout = () => HttpUtil.get("/account/logout");

/// 当前登录账号信息
export const queryUser = () => HttpUtil.get("/account/info");

/// 修改工作状态
export const editAccountStatus = (data) => HttpUtil.put("/account/status", data);

/// 修理工
export const getRepairs = (data) => HttpUtil.get("/account/repair/list", data);

// 修改密码
export const changePwd = ({
  ...data
}) => HttpUtil.put(`/account/editSelf`, data);