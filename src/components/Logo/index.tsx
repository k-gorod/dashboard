import React, { type FC } from "react";

import { AntDesignOutlined } from "@ant-design/icons";
import { Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import styled from "styled-components";

import { colorPrimary } from "../../style/constants";
interface ILogo {}

const Logo: FC<ILogo> = () => {
  const StyledSpace = styled(Space)`
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    grid-gap: 20px;
    padding: 20px 0;
    border-right: 1px solid rgba(5, 5, 5, 0.06);

    @media (max-width: 1000px) {
      justify-content: center;

      .ant-space-item {
        align-self: center;
      }

      .ant-space-item:nth-child(2n) {
        position: absolute;
        display: none;
      }
    }
  `;

  return (
    <StyledSpace>
      <AntDesignOutlined style={{ color: colorPrimary, fontSize: "32px" }} />
      <Paragraph style={{ margin: 0, justifySelf: "start" }}>
        Dashboard
      </Paragraph>
    </StyledSpace>
  );
};

export default Logo;
