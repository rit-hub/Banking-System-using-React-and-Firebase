import "./Customers.css";
import image from "../assets/connected.svg";
import MaterialTable from "material-table";
import { useState, useEffect } from "react";
import db from "../firebase";
import Profile from "./Profile";
import { Redirect } from "react-router";
import ProfileCard from "./ProfileCard";
const Customers = () => {
  const [data, setData] = useState([]);
  const [user, setuser] = useState(data[0]);
  const [form, setForm] = useState(true);
  useEffect(() => {
    db.collection("customers").onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc) => doc.data()));
    });
    // db.collection("customers").add({
    //   accNo: 725068564589,
    //   addhar: "5898 2589 6585",
    //   address: "X-colony, Howrah-711365",
    //   balence: 859600,
    //   branchName: "Howrah",
    //   debitCard: "XXXX-XXXX-X598",
    //   email: "xyz@mail.com",
    //   fname: "Suman",
    //   gender: "Male",
    //   ifsc: "UBI00036589758",
    //   lname: "Ghosh",
    //   mobile: 7896589632,
    //   nominee: "NA",
    //   pan: "KITHKI3692K",
    //   status: "Single",
    //   upi: "589685ajhd@apl",
    // });
  }, []);
  const goToProfile = (data) => {
    console.log(data);
    setuser(data.name);
    setForm(false);
  };
  if (form) {
    return (
      <div className="customers">
        <div className="customers__left">
          <MaterialTable
            style={{ minWidth: "50vw", minHeight: "50vh", cursor: "pointer" }}
            columns={[
              { title: "Full Name", field: "fname" },
              // { title: "Gender", field: "gender" },
              { title: "E-mail", field: "email" },
              { title: "Mobile Number", field: "mobile", type: "numeric" },
              { title: "Account No.", field: "accNo", type: "numeric" },
              { title: "Available Balence", field: "balence", type: "numeric" },
            ]}
            data={data}
            // actions={[
            //   {
            //     icon: "visibility",
            //     onClick: (event, rowData) => {
            //       setuser(rowData);
            //       console.log(rowData.gender);
            //       setForm(false);
            //     },
            //   },
            // ]}
            options={{
              actionsColumnIndex: -1,
              exportButton: true,
              pageSize: 4,
              pageSizeOptions: [],
            }}
            title="Customers"
            onRowClick={(event, rowData) => {
              setuser(rowData);
              console.log(rowData.gender);
              setForm(false);
            }}
          />
        </div>
        <div className="customers__right">
          <img src={image} alt="" />
        </div>
      </div>
    );
  } else {
    console.log(user);
    return (
      <ProfileCard
        fname={user.fname}
        lname={user.lname}
        gender={user.gender}
        accNo={user.accNo}
        addhar={user.addhar}
        address={user.address}
        balence={user.balence}
        branchName={user.branchName}
        debitCard={user.debitCard}
        dob={user.dob}
        email={user.email}
        ifsc={user.ifsc}
        mobile={user.mobile}
        nominee={user.nominee}
        pan={user.pan}
        status={user.status}
        upi={user.upi}
      />
    );
  }
};

export default Customers;
