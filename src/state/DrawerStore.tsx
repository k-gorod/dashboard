import React, { type ReactNode } from "react";

import { makeAutoObservable } from "mobx";

class DrawerStore {
  constructor() {
    makeAutoObservable(this);
  }

  open: boolean = false;

  drawerContent: ReactNode = (<></>);

  toggleDrawer = (): void => {
    this.open = !this.open;
  };

  setDrawerContent = (drawerContent: ReactNode): void => {
    this.drawerContent = drawerContent;
  };
}

const drawerStore = new DrawerStore();

export default drawerStore;
