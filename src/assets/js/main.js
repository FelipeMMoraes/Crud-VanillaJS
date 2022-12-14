// modal
const openModal = () => document.getElementById('modal')
.classList.add("active");

const closeModal = () => {
  clearFields()
  document.getElementById("modal") .classList.remove("active");
}

// CRUD - create read update delete

const tempClient = {
  nome: "Felipe",
  email: "Felipe.moraes8@hotmail.com",
  celular: "11123459876",
  cidade: "Mogi das Cruzes"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

const deleteClient = (index) => {
  const dbClient = readClient()
  dbClient.splice(index, 1)
  setLocalStorage(dbClient)
}

const updateClient = (index, client) => {
  const dbClient = readClient()
  dbClient[index] = client
  setLocalStorage(dbClient)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
  const dbClient = getLocalStorage()
  dbClient.push (client)
  setLocalStorage(dbClient)
}

const isValidFields = () => {
  return document.getElementById('form').reportValidity()
}

// Interação com o layout

const clearFields = () => {
  const fields = document.querySelectorAll('.modal-field')
  fields.forEach(field => field.value = "")
}

const saveClient = () => {
  if(isValidFields()) {
    const client = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      celular: document.getElementById('celular').value,
      cidade: document.getElementById('cidade').value
    }
    createClient(client)
    closeModal()
  }
}

// Events
document.getElementById("cadastrarCliente")
.addEventListener("click", openModal);

document.getElementById("modalClose")
.addEventListener("click", closeModal);

document.getElementById('save')
.addEventListener('click', saveClient)