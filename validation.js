const inputs = document.querySelectorAll("input");
const patterns = {
  username: /^[a-z\s\d]{5,12}$/i,
  //   email: /^.+@[a-z]+\.com$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\.\w@-]{8,20}$/i,
  telephone: /^[0-9]{11}$/,
  slug: /^[a-z0-9-]{8,20}$/,
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    console.log(e);
    let inputValue = e.target.attributes.name.value;
    validate(e.target, patterns[inputValue]);
  });
});
