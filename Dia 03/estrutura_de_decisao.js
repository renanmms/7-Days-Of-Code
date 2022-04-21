var area = prompt("Olá! Deseja seguir qual área? (Front-End, Back-End)");
var framework = "";
var linguagem = "";

switch(area.toLowerCase()){
    case "front-end" || "front end" || "frontend":
        framework = prompt("Quer aprender qual framework? (React, Vue)");
        break;
    case "back-end" || "back end" || "backend":
        linguagem = prompt("Quer aprender qual linguagem de programação? (C#, Java");
        break;
    default:
        break;
}

var decisao = prompt(`Você quer: \n 1 - Seguir se especializando na área de ${area} com ${linguagem} \n 2 - Seguir se desenvolvendo para se tornar Fullstack?`);

switch(decisao){
    case 1:
        alert(`Acesse o site abaixo e siga a trilha de ${area}: \n roadmap.sh`);
        break;
    case 2:
        alert("Acesse o site abaixo e siga a trilha de Full-Stack: \n roadmap.sh");
        break;
    default:
        break;
}

var preferencia = prompt("Qual tecnologia que você gostaria de conhecer?");
alert("Ok!");

do{
    preferencia = prompt("Qual tecnologia que você gostaria de conhecer?");

    switch(preferencia.toLowerCase()){
        case ".net":
            alert("Acesse o site da Documentação oficial da Microsoft, e veja mais sobre essa tecnologia: \n docs.microsoft.com");
            break;
        case "php":
            alert("Acesse o site php.net para aprender mais sobre a linguagem");
            break;
        case "react native":
            alert("Acesse o site reactnative.dev");
            break;
        default:
            break;
    }
}while(preferencia != "ok");

