import "./Transaction.css";
import image from "../assets/backup.svg";
import MaterialTable, { MTableToolbar } from "material-table";

const Transaction = () => {
  return (
    <div className="transaction">
      <div className="left">
        <img src={image} alt="" />
      </div>
      <div className="right">
        <MaterialTable
          style={{ minWidth: "60vw", minHeight: "50vh" }}
          columns={[
            { title: "Adı", field: "name" },
            { title: "Soyadı", field: "surname" },
            { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
            {
              title: "Doğum Yeri",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
          ]}
          title="Transaction History"
        />
      </div>
    </div>
  );
};

export default Transaction;
