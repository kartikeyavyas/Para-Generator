const input = document.getElementById("numberOfwords");
const container = document.querySelector(".container");

const generateword = (n) => {
    
    let text = "";
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0 ; i<n ; ++i) {
        const random = (Math.random() * (letter.length-1)).toFixed(0);
        text += letter[random];
    }

    return text;
};


let numOfwords;
const generatepara = () => {
    numOfwords = Number((input.value));

    const para = document.createElement("p");

    let data = "";

    for(let i=0 ; i<numOfwords ; ++i){

        const randomNumber = ((Math.random()*11).toFixed(0));
        data += generateword(randomNumber);
        data += " ";
    }


    para.innerText = data;
    
    para.setAttribute("class","paras");

    container.append(para);
};