import React, { useState, type FC } from "react";

import { Row, Col, Button } from "antd";
import styled from "styled-components";

interface ITreeButtons {}

const StyledButton = styled(Button)`
  border-radius: 50px;
  border: none;
  background: transparent;
  font-weight: bold;
  color: rgb(200, 200, 200);
`;

const StyledRow = styled(Row)`
  border-radius: 50px;
  background: rgba(5, 5, 5, 0.03);
  min-width: 265px;
`;
/**
 * @description Can be something like tabs, or state switcher
 *
 */
const TreeButtons: FC<ITreeButtons> = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <StyledRow>
      {Array(3)
        .fill(null)
        .map((el, i) => (
          <Col span={8} key={`${i} - threeButtonsItem`}>
            <StyledButton
              onClick={() => {
                setSelected(i);
              }}
              style={
                selected === i
                  ? {
                      background: "white",
                      boxShadow: "0 5px 10px 0px rgba(0, 0, 0, 0.06)",
                      color: "black",
                    }
                  : {}
              }
            >
              {`Button ${i + 1}`}
            </StyledButton>
          </Col>
        ))}
    </StyledRow>
  );
};

export default TreeButtons;
