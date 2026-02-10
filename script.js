
// ===== USUÁRIOS =====
function salvarUsuario() {
    const nome = document.getElementById("nomeUsuario").value;
    const email = document.getElementById("emailUsuario").value;


    if (!nome || !email) {
        alert("Preencha todos os campos!");
        return;
    }


    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push({ nome, email });


    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    listarUsuarios();


    document.getElementById("nomeUsuario").value = "";
    document.getElementById("emailUsuario").value = "";
}


function listarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";


    usuarios.forEach(usuario => {
        const li = document.createElement("li");
        li.textContent = `${usuario.nome} - ${usuario.email}`;
        lista.appendChild(li);
    });
}


// ===== LOCALIDADES =====
function salvarLocalidade() {
    const estado = document.getElementById("estado").value;
    const cidade = document.getElementById("cidade").value;


    if (!estado || !cidade) {
        alert("Preencha todos os campos!");
        return;
    }


    const localidades = JSON.parse(localStorage.getItem("localidades")) || [];
    localidades.push({ estado, cidade });


    localStorage.setItem("localidades", JSON.stringify(localidades));
    listarLocalidades();


    document.getElementById("estado").value = "";
    document.getElementById("cidade").value = "";
}


function listarLocalidades() {
    const localidades = JSON.parse(localStorage.getItem("localidades")) || [];
    const lista = document.getElementById("listaLocalidades");
    lista.innerHTML = "";


    localidades.forEach(localidade => {
        const li = document.createElement("li");
        li.textContent = `${localidade.estado} - ${localidade.cidade}`;
        lista.appendChild(li);
    });
}


// ===== CARREGAR DADOS AO ABRIR =====
listarUsuarios();
listarLocalidades();


