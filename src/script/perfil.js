function loadCurrentUser() {
  console.log("Carregando dados do usuário...");
  let currentUserData = JSON.parse(localStorage.getItem("currentUser"));
  console.log("Dados do usuário no localStorage:", currentUserData);
  if (currentUserData) {
    let profileNameElement = document.getElementById("profileName");
    let profileEmailElement = document.getElementById("profileEmail");
    if (profileNameElement && profileEmailElement) {
      console.log("Elementos de perfil encontrados. Atualizando dados...");
      profileNameElement.innerText = currentUserData.name;
      profileEmailElement.innerText = currentUserData.email;
    } else {
      console.error("Elementos de perfil não encontrados.");
    }
    // verifica se tem uma imagem de perfil no currentUser e a exibe
    if (currentUserData.profileImage) {
      let profileCircle = document.getElementById("profileCircle");
      profileCircle.style.backgroundImage =
        "url(" + currentUserData.profileImage + ")";
      profileCircle.style.backgroundSize = "cover";
    }
  } else {
    console.error("Dados do usuário atual não encontrados no localStorage.");
  }
}

function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("profileCircle");
    output.style.backgroundImage = "url(" + reader.result + ")";
    output.style.backgroundSize = "cover";

    document.getElementById("user_icon").style.display = "none";

    let currentUserData = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUserData) {
      currentUserData.profileImageLoaded = true;
      localStorage.setItem("currentUser", JSON.stringify(currentUserData));
    }
  };
  reader.readAsDataURL(event.target.files[0]);
}
function loadCurrentUser() {
  console.log("Carregando dados do usuário...");
  let currentUserData = JSON.parse(localStorage.getItem("currentUser"));
  console.log("Dados do usuário no localStorage:", currentUserData);
  if (currentUserData) {
    let profileNameElement = document.getElementById("profileName");
    let profileEmailElement = document.getElementById("profileEmail");
    if (profileNameElement && profileEmailElement) {
      console.log("Elementos de perfil encontrados. Atualizando dados...");
      profileNameElement.innerText = currentUserData.name;
      profileEmailElement.innerText = currentUserData.email;
    } else {
      console.error("Elementos de perfil não encontrados.");
    }
    if (currentUserData.profileImageLoaded) {
      document.getElementById("user_icon").style.display = "none";
    }
    // verifica se tem uma imagem de perfil no currentUser e a exibe para o icone nao sobrepor
    if (currentUserData.profileImage) {
      let profileCircle = document.getElementById("profileCircle");
      profileCircle.style.backgroundImage =
        "url(" + currentUserData.profileImage + ")";
      profileCircle.style.backgroundSize = "cover";
    }
  } else {
    console.error("Dados do usuário atual não encontrados no localStorage.");
  }
}

function openFileSelector() {
  document.getElementById("uploadProfilePic").click();
}

// carrega as informações do usuário atualmente logado quando a página carrega
window.onload = function () {
  loadCurrentUser();

  // event listener para o clique no ícone de perfil

  document
    .getElementById("editProfileButton")
    .addEventListener("click", openFileSelector);
};
