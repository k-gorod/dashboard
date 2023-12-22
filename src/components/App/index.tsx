import React, { ReactNode, type FC } from "react";

import { Layout, Row } from "antd";
import styled from "styled-components";

import Header from "components/Header";
import MenuSidebar from "components/MenuSidebar";
import ProductTable from "components/ProductTable";
import navigationStore from "state/NavigationStore";
import { observer } from "mobx-react";

interface IApp {}

const StyledLayout = styled(Layout)`
  display: grid;
  grid-auto-flow: column;
  padding: 0 24px;
  grid-template-columns: 250px calc(100% - 250px);

  .headerRow {
    justify-content: flex-end;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 115px calc(100% - 115px);

    .headerRow {
      justify-content: flex-start;

      .ant-flex {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 100%;
  }
`;

const App: FC<IApp> = () => {
  const { currentTab } = navigationStore;

  const renderContent = (): ReactNode => {
    return currentTab === "Nav-1" ? <ProductTable /> : null;
  };

  return (
    <StyledLayout>
      <MenuSidebar />
      <Layout style={{ padding: "0 30px" }}>
        <Row className="headerRow">
          <Header />
        </Row>
        <Row>{renderContent()}</Row>
      </Layout>
    </StyledLayout>
  );
};

export default observer(App);
