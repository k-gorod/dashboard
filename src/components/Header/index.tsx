import React, { type FC } from "react";

import { Avatar, Flex } from "antd";
import styled from "styled-components";

import NotificationButton from "components/NotificationButton";
import TreeButtons from "components/TreeButtons";

interface IHeader {}

const StyledFlex = styled(Flex)`
  padding: 20px 0;
  gap: 60px;
`;

const Header: FC<IHeader> = () => {
  console.log("Header");

  return (
    <StyledFlex justify="end" align="center">
      <TreeButtons />
      <NotificationButton />
      <Avatar
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
        style={{ width: "45px", height: "45px" }}
      />
    </StyledFlex>
  );
};

export default Header;
