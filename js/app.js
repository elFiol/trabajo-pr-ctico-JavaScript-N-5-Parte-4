let fecha = new Date();
const article = document.querySelector("article");
function datos() {
  article.innerHTML = "";
  const elementoP = document.createElement("p");
  const hora = document.createElement("h2");
  const dia = fecha.getDay();
  const mes = fecha.getMonth();
  const mesAño = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const diasSemanas = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "jueves",
    "Viernes",
    "Sabado",
  ];
  elementoP.textContent = `${diasSemanas[dia]} ${fecha.getDate()} de ${
    mesAño[mes]
  } del ${fecha.getFullYear()}`;
  hora.textContent = `${fecha.getHours()}:${fecha.getMinutes()}: ${fecha.getSeconds()} : ${
    fecha.getHours() >= 12 ? "PM" : "AM"
  }`;
  article.appendChild(elementoP);
  article.appendChild(hora);
  elementoP.classList.add("lead", "mt-4", "text-center");
  hora.classList.add("text-center");
}
setInterval(function () {
  fecha = new Date();
  datos();
}, 100);