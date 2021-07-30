import useInput from "./use-input";
const BasicForm = (props) => {
  const isNotEmptyString = (value) => value.trim() !== "";
  const isEmailFormat = (value) => value.includes("@");
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameField,
  } = useInput(isNotEmptyString);
  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameField,
  } = useInput(isNotEmptyString);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailField,
  } = useInput(isNotEmptyString && isEmailFormat);

  let validateForm = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    validateForm = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }
    console.log(enteredFirstName, enteredLastName, enteredEmail);

    resetFirstNameField();
    resetLastNameField();
    resetEmailField();
  };

  const applyClasses = (validation) => {
    return validation ? "form-control invalid" : "form-control";
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={applyClasses(firstNameInputHasError)}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">Name field must not be empty</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!validateForm}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
