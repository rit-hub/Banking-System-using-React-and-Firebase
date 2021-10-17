import { Typography } from "@mui/material";
import image1 from "../assets/profile_male.svg";
import image2 from "../assets/profile_female.svg";
import "./ProfileCard.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@material-ui/core";
import { useEffect, useState } from "react";
import Customers from "./Customers";
import { Panorama } from "@mui/icons-material";

const ProfileCard = ({
  fname,
  lname,
  gender,
  accNo,
  addhar,
  address,
  balence,
  branchName,
  debitCard,
  dob,
  email,
  ifsc,
  mobile,
  nominee,
  pan,
  status,
  upi,
}) => {
  console.log(gender);
  const [close, setclose] = useState(false);
  const [image, setImage] = useState(image1);
  useEffect(() => {
    if (gender == "Female") {
      setImage(image2);
    }
  }, []);
  if (!close) {
    return (
      <div className="profile">
        <div className="profile__left">
          <div className="profile__image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="profile__right">
          <div className="card">
            <div className="heading">
              <Typography
                variant="h4"
                component="h4"
                className="heading__title"
              >
                {fname}'s Profile
              </Typography>
              <div className="close">
                <IconButton
                  onClick={() => {
                    setclose(true);
                  }}
                  className={"MyCustomButton"}
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
            <div className="personal">
              <div className="personal__heading">
                <Typography variant="h5" component="h5">
                  Personal Details
                </Typography>
              </div>
              <div className="personal__info">
                <div className="personal__left">
                  <Typography variant="h6" component="h5">
                    Full Name:{" "}
                    <span>
                      {fname} {lname}
                    </span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Gender: <span>{gender}</span>
                  </Typography>

                  <Typography variant="h6" component="h5">
                    Email: <span>{email}</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Mobile Number: <span>{mobile}</span>
                  </Typography>
                </div>
                <div className="personal__right">
                  <Typography variant="h6" component="h5">
                    Nominee Name: <span>{nominee}</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Material Status: <span>{status}</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    PAN Number: <span>{pan}</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Addhar Number: <span>{addhar}</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Address: <span>{address}</span>
                  </Typography>
                </div>
              </div>
            </div>
            <div className="account">
              <div className="account__heading">
                <Typography variant="h5" component="h5">
                  Account Details
                </Typography>
              </div>
              <div className="account__info">
                <div className="account__left">
                  <Typography variant="h6" component="h5">
                    Branch Name: <span>{branchName}</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    IFSC Code: <span>{ifsc}</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Active UPI: <span>{upi}</span>
                  </Typography>
                </div>
                <div className="account__right">
                  <Typography variant="h6" component="h5">
                    Account Number: <span>{accNo}</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Available Balence: <span>{balence}</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Active Debit Card: <span>{debitCard}</span>
                  </Typography>
                  {/* // balenca */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Customers />;
  }
};

export default ProfileCard;
