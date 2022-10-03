import "./just-validate.production.min.js";
import "./inputmask.min.js";
const inputMaskTel = new Inputmask("+7 (999) 999-99-99");
let telInputSelector = document.querySelector('input[type="tel"]');
inputMaskTel.mask(telInputSelector);
new JustValidate("#mainForm", {
  errorFieldCssClass: "invalid",
  errorLabelCssClass: "invalid",
  errorLabelStyle: {
    fontSize: "14px",
    color: "red"
  },
  errorsContainer: "#errorsContainer"
}).addField('[name="zip"]', [
  {
    rule: "required",
    errorMessage: 'The "Zip" field is required!'
  },
  {
    rule: "function",
    validator: (str) => {
      return /^[0-9]{5}/.test(str);
    },
    errorMessage: "The zip is not correct!"
  }
]).addField('[name="tel"]', [
  {
    rule: "required",
    errorMessage: 'The "Telephone" field is required!'
  },
  {
    rule: "function",
    validator: () => {
      let phoneUnmaskedValue = telInputSelector.inputmask.unmaskedvalue();
      return Number(phoneUnmaskedValue) && phoneUnmaskedValue.length > 9;
    },
    errorMessage: "Phone is incorrect!"
  }
]).addField('[name="email"]', [
  {
    rule: "email",
    errorMessage: "Incorrect email!"
  }
]).addField('[name="address"]', [
  {
    rule: "function",
    validator: (str) => {
      return /^[a-zA-Z1-9() ]+$/.test(str);
    },
    errorMessage: "Address is incorrect!"
  }
]).addField('[name="businessType"]', [
  {
    rule: "required",
    errorMessage: "Select error!"
  }
]).addField('[name="businessAddress"]', [
  {
    rule: "required",
    errorMessage: "Select 2 error!"
  }
]).onSuccess((e) => {
});
