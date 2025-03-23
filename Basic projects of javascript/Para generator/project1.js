const input = document.getElementById("numOfwords");
const container = document.querySelector(".container")

const generateWord = (n) =>{

    let text = "";
    const letters  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     
    for (let i = 0; i < n; ++i) {

        const random = (Math.random() * 25).toFixed(0);

        text += letters[random];
        // console.log(random);
        }
      return text;
}
// console.log(generateWord(15));



const GeneratePara = () => {  
    
   const numOfWords = Number(input.value);
    // console.log(numOfwords);
    const para = document.createElement("p")
    
     
    let data = "";
    for (let i = 0; i < numOfWords; ++i) {
        const randomNumber = (Math.random() * 15).toFixed(0);
        data += generateWord(randomNumber);
        data += "  ";

    }
    
    para.innerText = data;

    para.setAttribute("class", "paras");

    container.append(para);
    


};








