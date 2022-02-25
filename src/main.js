import { baseUrl } from "./utils/getApi";

const BTN_LOAD_USERS = document.querySelector(".btnLoadUsers");

function getUser() {
  let valueInput = document.querySelector(".inputUser").value;
  let listUsers = document.querySelector(".listUsers");

  if (valueInput === "") {
    return baseUrl.get(`/users`).then((user) => {
      for (const user of user.data) {
        listUsers.innerHTML += `
        <div class="git_users col-md-4 mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" class="rounded mx-auto img-fluid" alt=""
              alt="${user.avatar_url}">
          </div>
          <div class="col-md-9">
            <ul class="list-group">
              <li class="list-group-item active" aria-current="true">${user.login}</li>
              <li class="list-group-item"><span class="badge bg-primary"><a href="${user.url}" style="color: white; text-decoration: none;">Veja Informações</a></span></li>
            </ul>
          </div>
        </div>
      </div>
      `;
      }
    });
  }

  return baseUrl.get(`/users/${valueInput}`).then((user) => {
    let listUsers = document.querySelector(".listUsers");
    let userCurrent = user.data;

    listUsers.innerHTML = `
      <div class="git_users col-md-4 mb-3">
      <div class="row">
        <div class="col-md-3">
          <img src="${userCurrent.avatar_url}" class="rounded mx-auto img-fluid" alt=""
            alt="${userCurrent.avatar_url}">
        </div>
        <div class="col-md-9">
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">${userCurrent.name}</li>
            <li class="list-group-item"><span class="fw-bolder">Login:</span> ${userCurrent.login}</li>
            <li class="list-group-item"><span class="fw-bolder">Repositórios Públicos:</span> ${userCurrent.public_repos}</li>
            <li class="list-group-item"><span class="fw-bolder">Seguidores:</span> ${userCurrent.followers}</li>
            <li class="list-group-item"><span class="fw-bolder">Seguindo:</span> ${userCurrent.following}</li>
            <li class="list-group-item"><span class="fw-bolder">Biografia:</span> ${userCurrent.bio}</li>
            <li class="list-group-item"><span class="fw-bolder">Localização:</span> ${userCurrent.location}</li>
            <li class="list-group-item"><span class="fw-bolder">Empresa:</span> ${userCurrent.company}</li>
          </ul>
        </div>
      </div>
    </div>
    `;
  });
}

BTN_LOAD_USERS.addEventListener("click", getUser, true);
