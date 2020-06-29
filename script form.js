

let receptorNumber="573166245103";

document.querySelector('#submit').addEventListener('click',function(){
    
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;
    let message = document.querySelector('#message').value;

    let url = "https://api.whatsapp.com/send?phone="+receptorNumber+"&text=*_Whatsapp Webform_*%0A%0A*Name:*%0A" + name + "%0A*Phone*%0A" + phone + "%0A*Message:*%0A" + message;
    window.open(url);

});
