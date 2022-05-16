import HttpUtil from "../request";

/// 获取用户列表
export const getUsers = (data) => HttpUtil.get("/account/list", data);