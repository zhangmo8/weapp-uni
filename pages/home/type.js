
const ADMINTabList = [
  {
    name: "全部",
    type: "REPAIR_ALL",
  },
  {
    name: "等待中",
    type: "REPAIR_WAITING",
  },
  {
    name: "待验收",
    type: "REPAIR_ACCEPTANCE",
  },
  {
    name: "已完成",
    type: "REPAIR_DONE",
  },
  {
    name: "已取消",
    type: "REPAIR_REVOKED",
  },
  {
    name: "待审核",
    type: "TO_AUDIT",
  },
  {
    name: "已审核",
    type: "AUDITED",
  },
  {
    name: "所有审核",
    type: "AUDITED_ALL",
  },
  {
    name: "待处理",
    type: "MAINTAIN_PENDING",
  },
  {
    name: "处理中",
    type: "MAINTAIN_PROCESSING",
  },
  {
    name: "已完成",
    type: "MAINTAIN_DONE",
  },
];

const CUSTOMTabList = [
  {
    name: "全部",
    type: "REPAIR_ALL",
  },
  {
    name: "等待中",
    type: "REPAIR_WAITING",
  },
  {
    name: "待验收",
    type: "REPAIR_ACCEPTANCE",
  },
  {
    name: "已完成",
    type: "REPAIR_DONE",
  },
  {
    name: "已取消",
    type: "REPAIR_REVOKED",
  },
];

const WORKERTabList = [
  {
    name: "待处理",
    type: "MAINTAIN_PENDING",
  },
  {
    name: "处理中",
    type: "MAINTAIN_PROCESSING",
  },
  {
    name: "已完成",
    type: "MAINTAIN_DONE",
  },
]

const TabList = [
  {
    name: "待审核",
    type: "TO_AUDIT",
  },
  {
    name: "已审核",
    type: "AUDITED",
  },
  {
    name: "所有审核",
    type: "AUDITED_ALL",
  },
]

module.exports = {
  ADMINTabList,
  CUSTOMTabList,
  WORKERTabList,
  TabList
}