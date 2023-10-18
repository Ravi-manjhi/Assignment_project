import Button from "@mui/material/Button";
import { Input, InputLabel } from "@mui/material";
import "./Add.scss";

export default function AddNewUser(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked");
  }
  return (
    <div className="add">
      <div className="modal">
        <div className="close" onClick={() => props.setIsOpen((val) => !val)}>
          X
        </div>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.column
            .filter((item) => item.field !== "id" && item.field !== "avatar")
            .map((column) => {
              return (
                <div className="item" key={column.headerName}>
                  <InputLabel>{column.headerName}</InputLabel>
                  <Input
                    autoComplete="false"
                    color="secondary"
                    type={column.type}
                    placeholder={column.field}
                  />
                </div>
              );
            })}

          <Button variant="contained">Submit</Button>
        </form>
      </div>
    </div>
  );
}
