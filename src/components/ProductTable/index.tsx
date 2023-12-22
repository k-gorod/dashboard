import React, { type FC, useEffect } from "react";

import {
  FilterOutlined,
  PlusOutlined,
  SearchOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import { Button, Col, Drawer, Layout, Row, Table } from "antd";
import Input from "antd/es/input/Input";
import { type ColumnsType } from "antd/es/table";
import Title from "antd/es/typography/Title";
import { observer } from "mobx-react";
import styled from "styled-components";

import SortDrawerContent from "components/SortDrawerContent";
import drawerStore from "state/DrawerStore";
import tableStore, { type DataType } from "state/TableStore";

interface IProductTable {}

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;

  @media (max-width: 900px) {
    grid-auto-flow: row;
  }
`;

const columns: ColumnsType<DataType> = [
  {
    title: "Title",
    dataIndex: "title",
    ellipsis: true,
    width: 150,
  },
  { title: "Price", dataIndex: "price", width: 150 },
  {
    title: "Description",
    dataIndex: "description",
    width: "300px",
    ellipsis: true,
  },
  { title: "Category", dataIndex: "category", width: 150 },
  { title: "Rating", dataIndex: "rating", width: 150 },
];

const ProductTable: FC<IProductTable> = () => {
  const { open, drawerContent, setDrawerContent, toggleDrawer } = drawerStore;

  const { getTableData, tableData } = tableStore;

  const onFilterClick = (): void => {
    toggleDrawer();
    setDrawerContent(<div>FilterContent</div>);
  };

  const onSortClick = (): void => {
    toggleDrawer();
    setDrawerContent(<SortDrawerContent />);
  };

  const onDrawerClose = (): void => {
    toggleDrawer();
  };

  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <Layout style={{ maxWidth: "100%" }}>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onDrawerClose}
        open={open}
      >
        {drawerContent}
      </Drawer>
      <Row justify={"space-between"} style={{ gap: "20px" }}>
        <StyledCol>
          <Title level={2} style={{ margin: 0 }}>
            Products
          </Title>
          <Input
            bordered={false}
            placeholder="Search..."
            onChange={() => {}}
            style={{ width: 200, background: "rgba(0,0,0,0.05)" }}
            prefix={<SearchOutlined />}
          />
        </StyledCol>
        <StyledCol>
          <Button
            shape="round"
            icon={<SortAscendingOutlined />}
            onClick={onSortClick}
          >
            Sort
          </Button>
          <Button
            shape="round"
            icon={<FilterOutlined />}
            onClick={onFilterClick}
          >
            Filter
          </Button>
          <Button type="primary" shape="round" icon={<PlusOutlined />}>
            Add
          </Button>
        </StyledCol>
      </Row>
      <Row style={{ marginTop: "40px" }}>
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={{ pageSize: 10 }}
          scroll={{ x: 2000 }}
          style={{ maxWidth: "100%" }}
        />
      </Row>
    </Layout>
  );
};

export default observer(ProductTable);
