import HttpUtil from "../request";

/// 部门
export const getSimpleBoxDepartments = (data) => HttpUtil.get("/department/sp-list", data);
