const axios = require("axios");

const INPUT_USER = document.querySelector(".inputUser");
const BTN_LOAD_USERS = document.querySelector(".load_users");
const VALUE_INPUT = INPUT_USER.value;

let url = `https://api.github.com/users/`;

const getUser = () => {
  url += `${VALUE_INPUT}`;
  let result = axios.get(url).then((user) => console.log(user.data));
  console.log(result);
  return result;
};

const loadUser = (e) => {
  e.preventDefault();

  if (!VALUE_INPUT) return;
  getUser();
};

BTN_LOAD_USERS.addEventListener("click", loadUser());
