import image from "../assets/moneyTransfer.svg";
import "./Money.css";

const Money = () => {
  return (
    <div className="money">
      <div className="money__left">
        <div className="money__image">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="money__right"></div>
    </div>
  );
};

export default Money;
