let h;
let text1 = document.getElementById("text1");
let horario = document.getElementById("horario")

function startTime() {
    let today = new Date();
    h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    horario.innerHTML = h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
    imagemdefundo();
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function imagemdefundo(){
    if(h >= 6 && h < 12){
        document.body.style.backgroundImage = "url('https://img.freepik.com/fotos-gratis/bela-vista-da-luz-da-manha_23-2148851770.jpg?w=740&t=st=1707164257~exp=1707164857~hmac=c97107d5cdd5d34b1cf04a486fae1d4e02c8985dc93299c6d642902a927691b7')";
    }else{
        if(h >= 12 && h <= 18){
            document.body.style.backgroundImage = "url('https://img.freepik.com/fotos-premium/por-do-sol-na-montanha_40187-8.jpg?w=826')";
        }else{
            text1.style.color = 'white'
            horario.style.color = 'white'
            document.body.style.backgroundImage = "url('https://img.freepik.com/fotos-gratis/arranha-ceus-iluminados-brilham-na-vida-noturna-da-cidade-futurista-gerada-por-ia_188544-34863.jpg?w=826&t=st=1707164324~exp=1707164924~hmac=a68f15a79c07210c6536d7ee6cf7cd57a8a67ee5635270d00a63a9f6fd7ba2ac')"; 
        }
    }
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
}


