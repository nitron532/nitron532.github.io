const randomVow = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomCons = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const vowList = ["a", "e", "i", "o", "u", "y"]
  const consList = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]
  
  console.log(`${consList[randomCons(0,19)]}${vowList[randomVow(0,5)]}${consList[randomCons(0,19)]}${vowList[randomVow(0,5)]}`)
  
  
  const change = () => {
  let newWord = `${consList[randomCons(0,19)]}${vowList[randomVow(0,5)]}${consList[randomCons(0,19)]}${vowList[randomVow(0,5)]}`
    document.getElementById("te").textContent = newWord;
  
  }
  setInterval(change, 1000);
  
  document.getElementById("randomWordHome").onclick = () =>{
    location.href = "../index.html";
  }