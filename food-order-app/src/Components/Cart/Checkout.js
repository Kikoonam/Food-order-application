import classes from "./Checkout.module.css";
import { useRef ,useState} from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {

    const [formInputValidity,setFormInputValidity]= useState({
        name:true,
        street:true,
        city:true,
        postalCode:true
    })
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreetName = streetInputRef.current.value;
    const enteredPostalName = postalCodeInputRef.current.value;
    const enteredCityName = cityInputRef.current.value;

    const enteredNameIsvalid = !isEmpty(enteredName);
    const enteredStreetIsvalid = !isEmpty(enteredStreetName);
    const enteredCityIsvalid = !isEmpty(enteredPostalName);
    const enteredPostalIsvalid = !isFiveChars(enteredCityName);

    setFormInputValidity({
        name:enteredNameIsvalid,
        street:enteredNameIsvalid,
        postalCode:enteredPostalIsvalid,
        city:enteredCityIsvalid
    })
    const formIsValid =
      enteredCityIsvalid &&
      enteredNameIsvalid &&
      enteredStreetIsvalid &&
      enteredPostalIsvalid;
    
      if(!formIsValid){
        return;
      }
      props.onConfirm({
        name:enteredName,
        street:enteredStreetName,
        city:enteredCityName,
        postalCode:enteredPostalName,

      })
  };

  

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? '':classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ?'':classes.invalid
  }`

  const postalCodeControlClasses = `${classes.control} ${
    formInputValidity.postalCode ?'':classes.invalid
  }`

  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ?'':classes.invalid
  }`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name !</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid street name!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && <p>Please enter a valid postal code (5 characters long) !</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid city name!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
