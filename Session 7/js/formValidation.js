function zipCode() {
  "use strict";
  var div = document.createElement('div'),
    label = document.createElement('label'),
    i = document.createElement('i'),
    input = document.createElement('input');
  div.setAttribute("class", "input-container");
  label.setAttribute("for", "zipCode");
  label.appendChild(document.createTextNode("Zip-Code"));
  i.setAttribute("class", "fa fa-home icon");
  input.setAttribute("type", "text");
  input.setAttribute("id", "zipCode");
  input.setAttribute("placeholder", "Zip Code");
  div.appendChild(label);
  div.appendChild(i);
  div.appendChild(input);
  document.getElementById('myForm').append(div);
}

function website() {
  "use strict";
  var div = document.createElement('div'),
    label = document.createElement('label'),
    i = document.createElement('i'),
    input = document.createElement('input');
  div.setAttribute("class", "input-container");
  label.setAttribute("for", "website");
  label.appendChild(document.createTextNode("Website or Domain Name"));
  i.setAttribute("class", "fa fa-globe-americas icon");
  input.setAttribute("type", "text");
  input.setAttribute("id", "website");
  input.setAttribute("placeholder", "Website or Domain Name");
  div.appendChild(label);
  div.appendChild(i);
  div.appendChild(input);
  document.getElementById('myForm').append(div);
}

function hosting() {
  "use strict";
  var div = document.createElement('div'),
    label = document.createElement('label'),
    radioDiv = document.createElement('div'),
    inputYes = document.createElement('input'),
    inputNo = document.createElement('input'),
    span = document.createElement('span');
  div.setAttribute("class", "input-container");
  label.appendChild(document.createTextNode("Do you have hosting?"));
  radioDiv.setAttribute("id", "radioDiv");
  inputYes.setAttribute("type", "radio");
  inputYes.setAttribute("name", "hosting");
  inputYes.setAttribute("value", "Yes");
  inputYes.style.display = 'block';
  inputNo.setAttribute("type", "radio");
  inputNo.setAttribute("name", "hosting");
  inputNo.setAttribute("value", "No");
  radioDiv.appendChild(inputYes);
  radioDiv.appendChild(document.createTextNode("Yes"));
  radioDiv.appendChild(inputNo).appendChild(document.createTextNode("No"));
  div.appendChild(label);
  div.appendChild(radioDiv);
  document.getElementById('myForm').append(div);
}

function description() {
  "use strict";
  var div = document.createElement('div'),
    label = document.createElement('label'),
    i = document.createElement('i'),
    textArea = document.createElement('textarea');
  div.setAttribute("class", "input-container");
  label.setAttribute("for", "description");
  label.appendChild(document.createTextNode("Project Description"));
  i.setAttribute("class", "fa fa-pencil-alt icon");
  textArea.setAttribute("rows", "4");
  textArea.setAttribute("cols", "24");
  textArea.setAttribute("id", "description");
  textArea.setAttribute("placeholder", "Project Description");
  div.appendChild(label);
  div.appendChild(i);
  div.appendChild(textArea);
  document.getElementById('myForm').append(div);
}


function validateText(text) {
  "use strict";
  var pattern = /^([a-zA-Z ]{2,})+$/;
  if (pattern.test(text.value)) {
    console.log(text[name]);
    return true;
  }
  return false;
}

function validateEmail(email) {
  "use strict";
  var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (pattern.test(email.value)) {
    return true;
  }
  return false;
}

function validatePhone(phone) {
  "use strict";
  var pattern = /^[\d]{9,}/;
  if (pattern.test(phone.value)) {
    return true;
  }
  return false;
}

function formValidate() {
  "use strict";
  var firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    email = document.getElementById('email'),
    phone = document.getElementById('phone'),
    address = document.getElementById('address'),
    city = document.getElementById('city'),
    state = document.getElementById('state');
  if (validateText(firstName) && validateText(lastName) && validateEmail(email) && validatePhone(phone) && validateText(address) && validateText(city) && validateText(state)) {
    return false;
  }
  return false;
}

function showDiv(elem) {
  "use strict";
  if (elem.value === 'Rajasthan') {
    if (document.getElementById('zipCode') === null && document.getElementById('website') === null) {
      website();
      description();
    } else {
      return false;
    }
  } else if (elem.value === 'Haryana') {
    if (document.getElementById('zipCode') === null && document.getElementById('website') === null) {
      zipCode();
      hosting();
    } else {
      return false;
    }
  } else if (elem.value === 'Maharashtra') {
    if (document.getElementById('zipCode') === null && document.getElementById('website') === null) {
      zipCode();
      description();
    } else {
      return false;
    }
  } else {
    return false;
  }
}
