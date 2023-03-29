const data = document.querySelector(".completeDate");

const date = new Date();

const dia = date.getDate();
const mes = date.getMonth() + 1;
const ano = date.getFullYear();

data.innerText = `${dia}/0${mes}/${ano}`;
