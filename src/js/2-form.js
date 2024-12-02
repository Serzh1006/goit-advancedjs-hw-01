const formData = {};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', getDataForm);
formEl.addEventListener('submit', submitForm);

function loadFromLS() {
  try {
    const dataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (dataFromLS === null) {
      return;
    }
    const formsElemKeys = Object.keys(dataFromLS);
    formsElemKeys.forEach(key => {
      formEl.elements[key].value = dataFromLS[key];
      formData[key] = dataFromLS[key];
    });
  } catch (error) {
    console.log(error);
  }
}
loadFromLS();

function getDataForm(e) {
  const fieldName = e.target.name;
  const filedValue = e.target.value;

  formData[fieldName] = filedValue.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitForm(e) {
  e.preventDefault();
  if (
    e.currentTarget.elements.email.value === '' ||
    e.currentTarget.elements.message.value === ''
  ) {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem('feedback-form-state');
  formEl.reset();
  console.log(formData);
  formData.email = '';
  formData.message = '';
}
