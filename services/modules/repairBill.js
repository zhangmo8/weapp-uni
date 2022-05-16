import HttpUtil from "../request";

/// 维修单申请
export const applyRepairJob = (data) => HttpUtil.post("/repair-job/applicant", data);

/// 获取维修单list  
export const getRepairJobs = (data) => HttpUtil.get("/repair-job/myself/list", data);
export const getProgressRepairJobs = (data) => HttpUtil.get("/repair-job/type-list", data);

/// 获取维修单info
export const getRepairJobInfo = (repairJobId) => HttpUtil.get(`/repair-job/${repairJobId}/info`);

/// 维修单审批
export const approveRepairJob = ({ repairJobId, ...data }) => HttpUtil.post(`/repair-job/${repairJobId}/approver`, data);

/// 维修单报价
export const prospectRepairJob = ({ repairJobId, ...data }) => HttpUtil.post(`/repair-job/${repairJobId}/prospector`, data);

/// 开始维修
export const startRepairJob = (repairJobId) => HttpUtil.put(`/repair-job/${repairJobId}/starter`);

/// 完成维修
export const completeRepairJob = (repairJobId) => HttpUtil.put(`/repair-job/${repairJobId}/completer`);

/// 处理维修、更新维修信息
export const repairRepairJob = ({ repairJobId, ...data }) => HttpUtil.put(`/repair-job/${repairJobId}/repairer`, data);

/// 撤销维修单
export const revokeRepairJob = ({ repairJobId, ...data }) => HttpUtil.put(`/repair-job/${repairJobId}/revoker`, data, { 'content-type': 'application/x-www-form-urlencoded' });

/// 派工维修单
export const dispatchRepairJob = ({ repairJobId, repairerId }) => HttpUtil.put(`/repair-job/${repairJobId}/dispatcher?repairerId=${repairerId}`);

/// 验收评价维修单
export const evaluateRepairJob = ({ repairJobId, ...data }) => HttpUtil.put(`/repair-job/${repairJobId}/evaluator`, data);