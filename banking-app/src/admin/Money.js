import image from "../assets/moneyTransfer.svg";
import "./Money.css";
import Form from "../admin/newForm/form";

const Money = () => {
  return (
    <div className="money">
      <div className="money__left">
        <div className="money__image">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="money__right">
        {/* <TransferForm /> */}
        <Form />
      </div>
    </div>
  );
};

export default Money;
