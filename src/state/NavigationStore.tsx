import { makeAutoObservable } from "mobx";

class NavigationStore {
  constructor() {
    makeAutoObservable(this);
  }

  currentTab: string = "Nav-1";

  onTabChange = (tabNumber: string): void => {
    this.currentTab = tabNumber;
  };
}

const navigationStore = new NavigationStore();

export default navigationStore;
