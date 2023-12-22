import React, { type FC } from "react";

import { Layout } from "antd";
import styled from "styled-components";

interface IUnderMenuSidebarContent {}

const StyledLayout = styled(Layout)`
  height: 100%;
  border-right: 1px solid rgba(5, 5, 5, 0.06);
`;

const UnderMenuSidebarContent: FC<IUnderMenuSidebarContent> = () => {
  console.log("UnderMenuSidebarContent");

  return <StyledLayout />;
};

export default UnderMenuSidebarContent;
