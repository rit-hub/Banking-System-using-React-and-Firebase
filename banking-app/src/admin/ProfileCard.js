import { Typography } from "@mui/material";
import image1 from "../assets/profile_male.svg";
import image2 from "../assets/profile_female.svg";
import "./ProfileCard.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@material-ui/core";
import { useEffect, useState } from "react";
import Customers from "./Customers";

const ProfileCard = ({ name, gender }) => {
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
                {name}'s Profile
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
                    Full Name: <span>Akshay Kumar</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Gender: <span>Male</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    DOB: <span>01/05/22</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Email: <span>error@gmail.com</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Mobile Number: <span>8272990659</span>
                  </Typography>
                </div>
                <div className="personal__right">
                  <Typography variant="h6" component="h5">
                    Nominee Name: <span>NA</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Material Status: <span>Single</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    PAN Number: <span>AEXIV9624L</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Addhar Number: <span>1234 5678 2569</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Address: <span>X-Colony, Howrah-711356</span>
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
                    Branch Name: <span>Howrah</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    IFSC Code: <span>UBI00025986</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Active UPI: <span>85695842@okgoogle</span>
                  </Typography>
                </div>
                <div className="account__right">
                  <Typography variant="h6" component="h5">
                    Account Number: <span>011265742258</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Available Balence: <span>36,000</span>
                  </Typography>
                  <Typography variant="h6" component="h5">
                    Active Debit Card: <span>XXXX-XXXX-X598</span>
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
