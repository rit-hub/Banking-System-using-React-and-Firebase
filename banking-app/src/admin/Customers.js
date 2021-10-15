import "./Customers.css";
import image from "../assets/connected.svg";
import MaterialTable from "material-table";
import { useState , useEffect} from "react";
import db from "../firebase"
import Profile from "./Profile";
import { Redirect } from "react-router";
import ProfileCard from "./ProfileCard";



// const details = () => [
//   {
//     name: "Ritam Charan",
//     accNo: 125865789658,
//     mobile: 8596748596,
//     Age: 23,
//     gender: "Male",
//   },
//   {
//     name: "Ritam Charan",
//     accNo: 125865789658,
//     mobile: 8596748596,
//     Age: 21,
//     gender: "Female",
//   }
// ];
const Customers = () => {
 
  const [data, setData] = useState([]);
  const [user, setuser] = useState(data[0]);
  const [form, setForm] = useState(true);
    useEffect(()=>{
      db.collection('customers').onSnapshot(snapshot => {
        setData(snapshot.docs.map(doc => doc.data()));
      })
    },[]);
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
            style={{ minHeight: "50vh", cursor: "pointer" }}
            columns={[
              { title: "Full Name", field: "fname" },
              // { title: "Gender", field: "gender" },
              { title: "Age", field: "Age", type: "numeric" },
              { title: "Account No.", field: "accNo", type: "numeric" },
              { title: "Mobile Number", field: "mobile", type: "numeric" },
            ]}
            data={data}
            actions={[
              {
                icon: "visibility",
                onClick: (event, rowData) => {
                  setuser(rowData);
                  console.log(rowData.gender);
                  setForm(false);
                },
              },
            ]}
            options={{
              actionsColumnIndex: -1,
              exportButton: true,
              pageSize: 4,
              pageSizeOptions: [],
            }}
            title="Customers"
            // onRowClick={(evt, selectedRow) => goToProfile(selectedRow)}
          />
        </div>
        <div className="customers__right">
          <img src={image} alt="" />
        </div>
      </div>
    );
  } else {
    return <ProfileCard name={user.lname} gender={user.gender} />;
  }
};

export default Customers;
