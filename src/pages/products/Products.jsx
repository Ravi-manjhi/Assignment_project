import { useState } from "react";
import { products } from "../../data";
import DataTable from "../../features/dataTable/DataTable";
import Add from "../../features/add/Add";
import "./products.scss";

const columns = [
  { field: "id", headerName: "ID", width: 90, type: "number" },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 80,
    type: "string",
    renderCell: (params) => {
      return (
        <img src={params.row.img || "/noavatar.png"} alt="param.row.img" />
      );
    },
  },

  {
    field: "title",
    headerName: "Product",
    type: "string",
    width: 150,
    editable: true,
  },
  {
    field: "price",
    headerName: "Amount",
    type: "string",
    width: 100,
    editable: true,
  },
  {
    field: "producer",
    headerName: "Company",
    type: "email",
    width: 130,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "Date",
  },
  {
    field: "inStock",
    headerName: "Availability",
    width: 100,
    type: "boolean",
  },
];

export default function Users() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setIsOpen((val) => !val)}>
          Add New Product
        </button>
      </div>
      <DataTable columns={columns} rows={products} slug={"product"} />
      {isOpen && <Add slug="Product" column={columns} setIsOpen={setIsOpen} />}
    </div>
  );
}
