import { makeAutoObservable, toJS } from "mobx";

export interface DataType {
  key: React.Key;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

class TableStore {
  constructor() {
    makeAutoObservable(this);
  }

  tableData: DataType[] | never[] = [];

  sortBy: keyof DataType = "title";

  setSortBy = (sortBy: keyof DataType): void => {
    this.sortBy = sortBy;

    this.tableData = toJS(
      this.tableData.sort((a: DataType, b: DataType) => {
        if (a[sortBy] === b[sortBy]) return 0;
        return a[sortBy] > b[sortBy] ? 1 : -1;
      })
    );
  };

  setData = (data: DataType[]): void => {
    this.tableData = data;
  };

  getTableData = (): void => {
    fetch("https://fakestoreapi.com/products")
      .then(async (res) => await res.json())
      .then((data) => {
        this.setData(
          data.map((el: DataType) => {
            const { image, ...data } = el;

            return {
              ...data,
              key: el.id,
              rating: el.rating.count,
            };
          })
        );
      })
      .catch((e) => {
        console.error(e);
      });
  };
}

const tableStore = new TableStore();

export default tableStore;
