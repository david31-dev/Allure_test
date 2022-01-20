import React, { useRef, useState } from 'react';

const AllureForm = () => {
  const [checkbox, setcheckbox] = useState(false);
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)
  const $emailInput = useRef()
  const $PhoneNumberInput = useRef()
  const submit = (event) => {
    event.preventDefault();
    const formData = new URLSearchParams() // submit the form lie search params using POST
    formData.append("g", "UDV8UQ")
    formData.append(
      "$fields",
      "$source,$email,$consent_method,$consent_form_id,$consent_form_version"
    )
    formData.append("$list_fields", "")
    formData.append("$source", "Website Coffee Allure Shop")
    formData.append("$email", $emailInput.current.value)
    formData.append("$phone_number", $PhoneNumberInput.current.value)
    formData.append("$consent_method", "Klaviyo Form")
    formData.append("$consent_form_id", "QQ2LFw")
    formData.append("$consent_form_version", "2272967")


    fetch(`https://a.klaviyo.com/ajax/subscriptions/subscribe`, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setSubscribed(true)
      })
      .catch(error => {
        console.log(error)
        setSubscribed(false)
      })
      .finally(() => {
        setLoading(false)
      })

  }

  return (
    <form className="klavito_form flex items-center justify-center flex-col" onSubmit={submit}>
      <h4 className="klavito_form__title">Free Beverage</h4>
      <input
        className="klavito_form_input klaviyo_form__email"
        type="email"
        placeholder="Email"
        ref={$emailInput}
        required
      />
      <input
        className="klavito_form_input klaviyo_form__number"
        type="text"
        placeholder="Phone Number"
        ref={$PhoneNumberInput}
        required
      />
      <label className='flex items-center klavito_form__label'>
        <input type="checkbox" id="allure_checkbox" value={checkbox} /> Send me special offers through text and email
      </label>
      <p className='klavito_form__conditions ml-2 mb-3'>I agree to receive recurring automated marketing text messages (e.g. cart reminders) and emails at the phone number and email address provided. Consent is not a condition to purchase. Promotion is limited to 1 per customer. Msg & data rates may apply. Msg frequency varies. Reply HELP for help and STOP to cancel. View our Terms of Service and Privacy Policy.
</p>
      <button
      type="submit"
      className="klavito_form__button"
      aria-label="Subscribe"
      disabled={loading}
      >GET FREE BEVERAGE</button>
    </form>
  );
}

export default AllureForm;
