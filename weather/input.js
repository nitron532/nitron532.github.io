if(localStorage.getItem("savedTempInput") !== null){
    document.getElementById("dropdownSelect").textContent = localStorage.getItem("savedTempInput");
    console.log("test2")
  }
  else{
    console.log("test")
  }
  $(function() {
  let givenInput;
  const saveInput = (event) =>{
    sessionStorage.setItem("locationInput",document.getElementById("locationInputForm").value)
    localStorage.setItem("temperatureInput", document.getElementById("dropdownSelect").textContent)
    location.href = "weather.html"
    event.preventDefault()
  }
    userInput.addEventListener('submit', saveInput);
  
    document.getElementById("fahrenheitSelect").onclick = () =>{
      givenInput = "Fahrenheit"
      document.getElementById("dropdownSelect").textContent = givenInput
      $("#locationInputForm").show();
    }
    document.getElementById("celsiusSelect").onclick = () =>{
      givenInput = "Celsius"
      document.getElementById("dropdownSelect").textContent = givenInput
      $("#locationInputForm").show();
    }
  
      if(document.getElementById("dropdownSelect").textContent = "Select Temperature Unit"){
        $("#locationInputForm").hide();
      }
      else{
        document.getElementById("dropdownSelect").textContent = localStorage.getItem("temperatureInput");
      }
    });