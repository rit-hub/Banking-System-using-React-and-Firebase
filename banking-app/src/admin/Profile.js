import "./Profile.css";
import image1 from "../assets/profile_male.svg";
import ProfileCard from "./ProfileCard";

const Profile = ({ name }) => {
  return (
    <div className="profile">
      <div className="profile__left">
        <div className="profile__image">
          <img src={image1} alt="" />
        </div>
      </div>
      <div className="profile__right">
        <ProfileCard name={name} />
      </div>
    </div>
  );
};

export default Profile;
