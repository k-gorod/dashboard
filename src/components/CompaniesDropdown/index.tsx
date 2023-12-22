import React, { useState, type FC } from "react";

import { Layout, Select } from "antd";

import { companies } from "./companies.config";
import styled from "styled-components";

interface ICompaniesSelect {}

type SelectOnChangeT = (
  value: string,
  option:
    | {
        label: string;
        key: string;
      }
    | Array<{
        label: string;
        key: string;
      }>
) => void;

const StyledLayout = styled(Layout)`
  padding: 10px 0 20px;
  border: 1px solid rgba(5, 5, 5, 0.06);
  border-left: none;
`;

const CompaniesSelect: FC<ICompaniesSelect> = () => {
  const [currentValue, setCurrentValue] = useState<string>();

  const onSelectClick: SelectOnChangeT = (value) => {
    setCurrentValue(value);
  };

  return (
    <StyledLayout>
      <Select
        bordered={false}
        defaultValue="company-1"
        onChange={onSelectClick}
        options={companies}
        value={currentValue}
      />
    </StyledLayout>
  );
};

export default CompaniesSelect;
