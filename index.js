function showTime(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY hh:mm A");
    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

let citySelected = document.querySelector("#city");
citySelected.addEventListener("change", showTime);
