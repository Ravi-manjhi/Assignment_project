import ProductDataTable from "../productDataTable/ProductDataTable";
import "./sellingProduct.scss";
import { sellProduct } from "../../data";

const columns = [
  { field: "id", headerName: "ID", width: 50, type: "number" },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
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
    width: 350,
  },
  {
    field: "inStock",
    headerName: "Stock",
    type: "email",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    type: "string",
    width: 100,
  },
  {
    field: "totalSell",
    headerName: "Total Sell",
    width: 100,
    type: "Date",
  },
];

export default function SellingProduct() {
  return (
    <>
      <div className="info">
        <h2>Product Sell</h2>
      </div>

      <ProductDataTable columns={columns} rows={sellProduct} />
    </>
  );
}
