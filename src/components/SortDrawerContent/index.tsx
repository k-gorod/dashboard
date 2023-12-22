import React, { type FC } from "react";

import { Layout, Select } from "antd";
import { observer } from "mobx-react";
import styled from "styled-components";

import tableStore, { type DataType } from "state/TableStore";

interface ISortDrawerContent {}

const StyledLayout = styled(Layout)``;

const SortDrawerContent: FC<ISortDrawerContent> = () => {
  const { setSortBy, sortBy } = tableStore;
  const handleChange: (
    value: string,
    option:
      | {
          value: string;
          label: string;
        }
      | Array<{
          value: string;
          label: string;
        }>
  ) => void = (a) => {
    setSortBy(a as keyof DataType);
  };

  return (
    <StyledLayout>
      <Select
        defaultValue="title"
        onChange={handleChange}
        value={sortBy}
        options={[
          { value: "title", label: "title" },
          { value: "price", label: "price" },
          { value: "description", label: "description" },
          { value: "category", label: "category" },
          { value: "image", label: "image" },
          { value: "rating", label: "rating" },
        ]}
      />
    </StyledLayout>
  );
};

export default observer(SortDrawerContent);
