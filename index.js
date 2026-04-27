const messages = [
    {text: "Bonjour 👋, je peux t'aider à choisir une filière.", type: "bot"},
    {text: "Je ne sais pas quoi faire après le bac", type: "user"},
    {text: "Pas de souci 👍 Quels sont tes intérêts ?", type: "bot"},
    {text: "J'aime la technologie et résoudre des problèmes", type: "user"},
    {text: "Tu pourrais envisager l'informatique 💻", type: "bot"},
];

const chat = document.getElementById("chat");

let index = 0;

function showMessage() {
    if(index >= messages.length){
        setTimeout(() => {
            chat.innerHTML = "";
            index = 0;
            showMessage();
        }, 2000);
        return;
    }


    const msg = document.createElement("div");
    msg.classList.add("message", messages[index].type);
    
    let text = messages[index].text;
    let i = 0;

    msg.textContent = "";
    chat.appendChild(msg);

    // effet typing
    let typing = setInterval(() => {
        msg.textContent += text[i];
        i++;
        if(i >= text.length){
            clearInterval(typing);
            index++;
            setTimeout(showMessage, 800);
        }
    }, 30);

}

showMessage()

// display


const acceuil = document.getElementById('acceuil')
const login = document.getElementById('login')
const message = document.getElementById('message')
 

function afficher(e){
     
    let n=e.target.id
    console.log(e.target.id);
    
    if (n=='link2'||n=='link5' || n=='btn-lancer-test' ) {
        login.style.display='block'
        acceuil.style.display='none'
        message.style.display='none'
    }
    else if (n=='link3') {
        login.style.display='none'
        acceuil.style.display='none'
        message.style.display='block'
    } 
    
    else  {
       login.style.display='none'
        acceuil.style.display='block'
        message.style.display='none' 
    }
    
}

