import React from "react";

import { TableOutlined, SlidersOutlined } from "@ant-design/icons";
import { type ItemType, type MenuItemType } from "antd/es/menu/hooks/useItems";

export const items: Array<ItemType<MenuItemType>> = [
  {
    icon: <TableOutlined />,
    key: "Nav-1",
    label: "Table",
  },
  {
    icon: <SlidersOutlined />,
    key: "Nav-2",
    label: "Graphs",
  },
];
