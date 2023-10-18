import { userRows } from "../../data";
import DataTable from "../../features/dataTable/DataTable";
import "./user.scss";
import { useState } from "react";
import Add from "../../features/add/Add";

const columns = [
  { field: "id", headerName: "ID", width: 90, type: "number" },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 60,
    type: "string",
    renderCell: (params) => {
      return (
        <img src={params.row.img || "/noavatar.png"} alt="param.row.img" />
      );
    },
  },

  {
    field: "firstName",
    headerName: "FistName",
    type: "string",
    width: 100,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    type: "string",
    width: 100,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 130,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 80,
    type: "Date",
  },
  {
    field: "verified",
    headerName: "Status",
    width: 80,
    type: "boolean",
  },
];

export default function Users() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setIsOpen((val) => !val)}>Add New User</button>
      </div>
      <DataTable columns={columns} rows={userRows} slug={"customer"} />
      {isOpen && <Add slug="user" column={columns} setIsOpen={setIsOpen} />}
    </div>
  );
}
