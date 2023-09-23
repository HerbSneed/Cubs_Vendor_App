var canvas = document.getElementById("signature-pad");
var signatureInput = document.querySelector("#authorized_signature");
var clearSignatureButton = document.querySelector("#clearSignature");

function resizeCanvas() {
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);
}

window.onresize = resizeCanvas;
resizeCanvas();

var signaturePad = new SignaturePad(canvas, {
  backgroundColor: 'rgb(250, 250, 250)'
});

clearSignatureButton.addEventListener('click', function () {
  signaturePad.clear();
  signatureInput.value = ""; 
});

document.querySelector('#vendorForm').addEventListener('submit', function (event) {
  event.preventDefault();
  signatureInput.value = signaturePad.toDataURL();
});

async function newVendorHandler(event) {
  event.preventDefault();
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
  const bank_name = document.querySelector('#bank_name').value.trim();
  const account_number = document.querySelector('#account_number').value.trim();
  const routing_number = document.querySelector('#routing_number').value.trim();

  const vendorinfo = await fetch('api/vendor', {
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
      authorized_signature: signatureInput.value,
      bank_name,
      account_number,
      routing_number
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (vendorinfo.ok) {
    document.location.replace('/submitted');
  } else {
    alert('Failed to sign up. Please check your input and try again.')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#vendorForm').addEventListener('submit', newVendorHandler);
  document.querySelector('#clearSignature').addEventListener('click', clearSignature);
});


