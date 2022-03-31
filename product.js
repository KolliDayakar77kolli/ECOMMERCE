var videoId = window.location.search;
videoId = videoId.split('=')[1]

console.log(videoId);

var apiEndpoint3 = 'https://62319c9a05f5f4d40d7e9f79.mockapi.io/api/cardsArray/Description/' + videoId;
// var apiEndpoint4 = 'https://62319c9a05f5f4d40d7e9f79.mockapi.io/api/cardsArray/Accessories' + videoId;
console.log(apiEndpoint3);

// var LoaderDiv = document.getElementById('loader-container');
// var contentDiv = document.getElementById('product-preview-wrapper');

var xhhhp = new XMLHttpRequest();
xhhhp.open('GET',apiEndpoint3,true);
xhhhp.onreadystatechange = function(){
    // if(this.readyState === 3){
    //     LoaderDiv.style.display = 'block';
    //     contentDiv.style.display = 'none';
    // }
    if(this.readyState === 4){
        // LoaderDiv.style.display = 'none';
        // contentDiv.style.display = 'block';
        console.log(this.status);
        if(this.status >= 200 && this.status < 300){
            var videoData = JSON.parse(this.responseText);
            document.getElementById('product-title').innerHTML = videoData.title;
            document.getElementById('product-brand').innerHTML = videoData.brand;
            document.getElementById('product-price').innerHTML = videoData.price;
            document.getElementById('Description').innerHTML = videoData.description;
        }
        else if(this.status === 404){
            console.log('Not found');
            // window.Location.assign('./not-found.html');
        }
        else{
            //Redirect to something went wrong page
        }
    }
}
xhhhp.send();




//Starts Login & Logout......................................
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
//end Login & Logout..........................................



//space......................................

var productData = {
id: "1",
preview:
"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
previewPhotos: [
"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
]
};

var imgDiv = document.getElementById('expandedImg');
var container = document.getElementsByClassName('container');
imgDiv.src = productData.preview;
// container.appendChild(imgDiv);
console.log(container);

//space end..................................

























// here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var apiEndpoint4 = 'https://62319c9a05f5f4d40d7e9f79.mockapi.io/api/cardsArray/ProductCardList/' + videoId;
// console.log(apiEndpoint4);


// // ...................SEE this.............................


// // // var PrevData = document.getElementsByClassName('pics');
// // function getPrevData(){
// // var xhp = new XMLHttpRequest();
// // xhp.open('GET',apiEndpoint4,true);
// // xhp.onreadystatechange = function(){
// //     if(this.readyState === 4){
// //         var PrevData = JSON.parse(this.responseText);
// //         prevImg.src = videoData.preVPhotos;
// //         for(var j=0;j<PrevData.length;j++){
// //             ('.pics').appendChild(TocreatePrevImgs(preVPhotos[j],j));

// //         }
// // }
// // xhp.send();
// // }
// // }

// function TocreatePrevImgs(objj){
//     var appendProductImages = document.getElementById('product-images');
//     var rowDiv = document.createElement('div');
//     rowDiv.className = 'row';
//     var colDiv = document.createElement('div');
//     colDiv.className = 'col';
//     for(var i=0;i<=4;i++){

//     var prevImg = document.createElement('img');
//     prevImg.className = 'pics'

//     prevImg.src="/my html files/ECOMMERCE/photos/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.webp"; 
//     colDiv.appendChild(prevImg);
//     }
//     rowDiv.appendChild(colDiv);
//     appendProductImages.appendChild(rowDiv);
//     console.log(appendProductImages);
//     return appendProductImages;
// }
// TocreatePrevImgs();






// // TAB IMAGES PREVIEW........................................

// function myFunction(obj){
//     var expandImg = document.getElementById('expandedImg');
//     // var imgtext = document.getElementById('imgtext');
//     expandImg.src = obj.prevImg.src;
//     // imgtext.innerHTML = imgs.alt;
//     expandImg.parentElement.style.display = "block";
// }




