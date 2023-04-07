import { useState } from "react";
import { Table } from "antd";
import clsx from "clsx";
import styles from "./TableScroll.module.css";
function TableScroll() {
  const dataSource = [
    { key: "1", name: "John", age: 32, address: "New York" },
    { key: "2", name: "Jane", age: 28, address: "Los Angeles" },
    { key: "3", name: "Bob", age: 45, address: "Chicago" },
    { key: "4", name: "John", age: 32, address: "New York" },
    { key: "5", name: "Jane", age: 28, address: "Los Angeles" },
    { key: "6", name: "Bob", age: 45, address: "Chicago" },
  ];
  const [data, setData] = useState(dataSource);
  const dataSource1 = [
    { key: "7", name: "John", age: 32, address: "New York" },
    { key: "8", name: "Jane", age: 28, address: "Los Angeles" },
    { key: "9", name: "Bob", age: 45, address: "Chicago" },
    { key: "10", name: "John", age: 32, address: "New York" },
    { key: "11", name: "Jane", age: 28, address: "Los Angeles" },
    { key: "12", name: "Bob", age: 45, address: "Chicago" },
    { key: "13", name: "John", age: 32, address: "New York" },
    { key: "14", name: "Jane", age: 28, address: "Los Angeles" },
    { key: "15", name: "Bob", age: 45, address: "Chicago" },
  ];
  const columns = [
    { title: "Name", dataIndex: "name", key: "name", width: 150 },
    { title: "Age", dataIndex: "age", key: "age", width: 80 },
    { title: "Address", dataIndex: "address", key: "address" },
  ];
  const scroll = {
    x: true,
    y: 400,
  };
  const handleScroll = () => {
    console.log("went");
    const newData = [...data, ...dataSource1];
    setData(newData);
  };
  return (
    <div
      style={{ height: 400, overflowY: "scroll" }}
      className={clsx(styles.wrap_table)}
    >
      <Table
        dataSource={data}
        columns={columns}
        scroll={scroll}
        onScroll={handleScroll}
      />
    </div>
  );
}

export default TableScroll;
