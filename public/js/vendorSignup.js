const vendor_name = document.querySelector('#vendor').value.trim();
const contact_firstName = document.querySelector('#contact_f_name').value.trim();
const contact_lastName = document.querySelector('#contact_l_name').value.trim();
const contact_MiddleInt = document.querySelector('#contact_m_init').value.trim();
const contact_phone_number = document.querySelector('#contact_phone_number').value.trim();
const tax_id = document.querySelector('#tax_id').value.trim();
const remittance_address = document.querySelector('#remittance_address').value.trim();
const city = document.querySelector('#city').value.trim();
const state = document.querySelector('#state').value.trim();
const zip_code = document.querySelector('#zipcode').value.trim();
const country = document.querySelector('#country').value.trim();
const remittance_email = document.querySelector('#remittance_email').value.trim();
const service_provided = document.querySelector('#service_provided').value.trim();
const minority_ownership = document.querySelector('#minority_ownership').value.trim();
const authorized_name = document.querySelector('#authorized_name').value.trim();
const authorized_phone_number = document.querySelector('#authorized_phone_number').value.trim();
const canvas = document.getElementById("signatureCanvas");
const signatureInput = document.getElementById("authorized_signature");


let isSigning = false;
let context = canvas.getContext("2d");

canvas.addEventListener("mousedown", startSignature);
canvas.addEventListener("mousemove", drawSignature);
canvas.addEventListener("mouseup", endSignature);
canvas.addEventListener("mouseout", endSignature);

function startSignature(event) {
  isSigning = true;
  const canvasRect = canvas.getBoundingClientRect();
  context.beginPath();
  context.moveTo(event.clientX - canvasRect.left, event.clientY - canvasRect.top);
}

function drawSignature(event) {
  if (isSigning) {
    const canvasRect = canvas.getBoundingClientRect();
    context.lineTo(event.clientX - canvasRect.left, event.clientY - canvasRect.top);
    context.stroke();
  }
}
function endSignature() {
  isSigning = false;
  // Set the signature value in the hidden input field as a base64-encoded image data URL
  signatureInput.value = canvas.toDataURL();
}

function clearSignature() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  signatureInput.value = "";
}

async function newVendorHandler(event) {
  event.preventDefault();

  // if (vendor_name && contact_firstName && contact_lastName && contact_MiddleInt && contact_phone_number && tax_id && remittance_address && city && state && zip_code && country && remittance_email && service_provided && 
  //   minority_ownership &&
  //    authorized_name && authorized_phone_number && authorized_signature) 
  
  try {
    const response = await fetch('/api/vendor', {
      method: 'POST',
      body: JSON.stringify({
        vendor_name,
        contact_firstName, 
        contact_lastName,
        contact_MiddleInt,
        contact_phone_number,
        tax_id, 
        remittance_address, 
        city,
        state,
        zip_code,
        country,
        remittance_email,
        service_provided,
        minority_ownership,
        authorized_name,
        authorized_phone_number,
        authorized_signature: signatureInput.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log("DATA" + data);
    if (response.ok) {
      document.location.replace('/eft');
    } else {
      alert('Failed to sign up');
    }
    } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while processing your request.');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired'); 
  document.querySelector('#newVendorSubmit').addEventListener('click', newVendorHandler);
});

document.querySelector('#clearSignature').addEventListener('click', clearSignature);
