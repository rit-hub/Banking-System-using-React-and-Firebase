import "./Transaction.css";
import { useState, useEffect } from "react";
import image from "../assets/backup.svg";
import MaterialTable, { MTableToolbar } from "material-table";
import db from "../firebase";

const Transaction = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    db.collection("transactions").onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="transaction">
      <div className="left">
        <img src={image} alt="" />
      </div>
      <div className="right">
        <MaterialTable
          style={{ minWidth: "60vw", minHeight: "50vh" }}
          columns={[
            // { title: "Date", field: "date" },
            { title: "Transaction Id", field: "tid" },
            { title: "Full Name", field: "name" },
            { title: "Account No.", field: "accNo" },
            { title: "Amount", field: "amount" },
            { title: "Purpose", field: "purpose" },
            { title: "Status", field: "status" },
          ]}
          data={data}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
            pageSize: 3,
            pageSizeOptions: [],
          }}
          title="Transaction History"
        />
      </div>
    </div>
  );
};

export default Transaction;
