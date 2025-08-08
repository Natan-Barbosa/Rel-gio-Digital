const hour = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

//hora, minuto e segundos por padrão quando menor que 10 retorna somente 1 digito (1 ao invés de 01)
//Essa função ajusta isso para 2 digitos quando menor que 10
const formatTimeToTwoDigits = (time) => {
  return time < 10 ? "0" + time : time;
};

setInterval(() => {
  const dateTime = new Date();
  hour.innerHTML = formatTimeToTwoDigits(dateTime.getHours());
  minutes.innerHTML = formatTimeToTwoDigits(dateTime.getMinutes());
  seconds.innerHTML = formatTimeToTwoDigits(dateTime.getSeconds());
}, 1000);
