var apiEndpoint = 'https://62319c9a05f5f4d40d7e9f79.mockapi.io/api/cardsArray/hi';
var apiEndpoint2 = 'https://62319c9a05f5f4d40d7e9f79.mockapi.io/api/cardsArray/Accessories';


function createVideoCard(obj){
    var mainCard = document.createElement('div');
    mainCard.className = 'menu-item';
    var cardLink = document.createElement('a');
    // cardLink.href= './Product.html?videoId=' + obj.id;
    // cardLink.href= './P.html?videoId=' + obj.id;
    cardLink.href= './product.html?videoId=' + obj.id;
    mainCard.appendChild(cardLink);

    var image = document.createElement('img');
    image.className = 'image';
    image.src = obj.thumbnail;
    cardLink.appendChild(image);

    var title = document.createElement('h4');
    title.className = 'pro-title';
    title.innerHTML = obj.title;
    mainCard.appendChild(title);

    var proBrand = document.createElement('h5');
    proBrand.className = 'brand';
    proBrand.innerHTML = obj.Brand;
    mainCard.appendChild(proBrand);

    var proPrice = document.createElement('p');
    proPrice.className = 'price';
    proPrice.innerHTML = obj.Price;
    mainCard.appendChild(proPrice);

    console.log(mainCard);
    return mainCard;    //its important
}



// To Get cardList-1 (Clothing for Men and Women)...................................

var Maa = document.getElementById('maa');
function getMaa(){
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET',apiEndpoint,true);
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4){
            var LISt = JSON.parse(this.responseText);
            for(var i=0; i<LISt.length; i++){
                Maa.appendChild(createVideoCard(LISt[i]));
            }
        }
    }
    xhttp.send();
}
// getMaa();
setTimeout(getMaa,100);




// To Get cardList-2 (Accessories for Men and Women)...................................

var Maa2 = document.getElementById('maa2');
function getMaa2(){
    var xhhtp = new XMLHttpRequest();
    xhhtp.open('GET',apiEndpoint2,true);
    xhhtp.onreadystatechange = function(){
        if(this.readyState === 4){
            var LISt2 = JSON.parse(this.responseText);
            for(var i=0; i<LISt2.length; i++){
                Maa2.appendChild(createVideoCard(LISt2[i]));
            }
        }
    }
    xhhtp.send();
}
// getMaa();
setTimeout(getMaa2,100);



var btnLogin = document.getElementById('btn-login');
var btnLogout = document.getElementById('btn-logout');
var avatar = document.getElementById('profile-pic2');
var isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
console.log(isUserLoggedIn);
if(isUserLoggedIn === "true"){
    btnLogin.style.display = 'none';
    btnLogout.style.display = 'inline';
    avatar.style.display = 'inline';

}
else{
    btnLogin.style.display = 'inline';
    btnLogout.style.display = 'none';
    avatar.style.display = 'none';
}

btnLogout.addEventListener('click', e=>{
    localStorage.clear();
    alert('Logged Out Successfully...!')
})


