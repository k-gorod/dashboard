import React, { type FC } from "react";

import { BellOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import styled from "styled-components";

interface INotificationButton {}

const StyledButton = styled(Button)`
  border: none;
`;

const NotificationButton: FC<INotificationButton> = () => {
  console.log("NotificationButton");

  return (
    <Badge count={1} size="small">
      <StyledButton
        shape="circle"
        icon={<BellOutlined style={{ fontSize: "25px" }} />}
      />
    </Badge>
  );
};

export default NotificationButton;
