const openModal = () => document.getElementById("modal")
.classList.add("active");

const closeModal = () => document.getElementById("modal")
.classList.remove("active");


// CRUD - create read update delete

const tempClient = {
  nome: "Felipe",
  email: "Felipe.moraes8@hotmail.com",
  celular: "11123459876",
  cidade: "Mogi das Cruzes"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

// CRUD - CREATE
const createClient = (client) => {
  const dbClient = getLocalStorage()
  dbClient.push(client)
  setLocalStorage(dbClient)
}

// Events
document.getElementById("cadastrarCliente")
.addEventListener("click", openModal);

document.getElementById("modalClose")
.addEventListener("click", closeModal);
