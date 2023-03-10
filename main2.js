const openModal = document.querySelector('.doModal')
const modal = document.querySelector('.modal')
const showpass=document.querySelector('.showpassw');
const subm = document.querySelector(".sumb")
const form = document.querySelector(".formsend")
const inputmeil = document.querySelector(".inputmeil")
const inputpass = document.querySelector(".password")
const valid = document.querySelector(".valid")

openModal.addEventListener('click', () =>{
    modal.showModal()
})


modal.addEventListener('click', (event) =>{
    if(event.target === modal) {
        modal.close()
    }
})
showpass.addEventListener('pointerdown', () =>{document.querySelector('.password').type = "text"})
showpass.addEventListener('pointerup', () =>{document.querySelector('.password').type = "password"})
form.addEventListener("submit", (event) =>{
    email = inputmeil.value
    pass=inputpass.value
    console.table({email: email,password:pass});
    event.preventDefault()
})
inputmeil.addEventListener("blur", ()=>{
    if(inputmeil.validity.typeMismatch){
        valid.textContent = "Bad Email"
        inputmeil.setCustomValidity("Bad Email")
    }
    else if(inputmeil.value==""){
        valid.textContent="Valid check"
    }
    else{
        valid.textContent = ""
        inputmeil.setCustomValidity("")
    }
})



