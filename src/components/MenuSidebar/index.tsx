import React, { type FC } from "react";

import { Layout, Menu } from "antd";
import styled from "styled-components";

import CompaniesDropdown from "components/CompaniesDropdown";
import Logo from "components/Logo";
import { items } from "components/MenuSidebar/menu.config";
import UnderMenuSidebarContent from "components/UnderMenuSidebarContent";
import { observer } from "mobx-react";
import navigationStore from "state/NavigationStore";

interface IMenuSidebar {}

const StyledLayout = styled(Layout)`
  width: min-content;
  height: 100dvh;

  .ant-menu {
    width: 250px;
  }

  @media (max-width: 1000px) {
    .ant-menu {
      width: 115px;
    }

    .ant-menu-title-content {
      display: none;
    }

    .ant-menu-item {
      text-align: center;
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

/**
 *
 * TODO:  On mobile width should be burger
 */

type OnTabClickType = (info: { key: string; keyPath: string[] }) => void;

const MenuSidebar: FC<IMenuSidebar> = () => {
  const { currentTab, onTabChange } = navigationStore;

  const onTabClick: OnTabClickType = (e) => {
    onTabChange(e.key);
  };

  return (
    <StyledLayout>
      <Logo />
      <CompaniesDropdown />
      <Menu
        mode={"vertical"}
        items={items}
        onClick={onTabClick}
        selectedKeys={[currentTab]}
      />
      <UnderMenuSidebarContent />
    </StyledLayout>
  );
};

export default observer(MenuSidebar);
