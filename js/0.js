let lbutton=document.querySelector('.b2');
let body=document.body;

lbutton.addEventListener('click',(e)=>{
    e.stopPropagation(); //important
    document.querySelector('.rldiv').style.opacity=1;
    document.querySelector('.English').disabled=false;
    document.querySelector('.arabic').disabled=false;
});

body.addEventListener('click',()=>{
    document.querySelector('.rldiv').style.opacity=0;
    document.querySelector('.English').disabled=true;
    document.querySelector('.arabic').disabled=true;
});


let butara =document.querySelector('.arabic');

butara.addEventListener('click',()=>{
    document.querySelector('.p1').innerHTML="العربية";
    document.querySelector('.p1111').innerHTML="جميع المنتجات";
    document.querySelector('.p111').innerHTML="المشروبات الساخنة";
    document.querySelector('.p2').innerHTML="قهوه باردا";
    document.querySelector('.p4').innerHTML="قهوة فرابي";
    document.querySelector('.p5').innerHTML="ميلكشيك";
    document.querySelector('.p6').innerHTML="سموثي";
    document.querySelector('.p7').innerHTML="موهيتو";
    document.querySelector('.p8').innerHTML="شاي بارد";
    document.querySelector('.p9').innerHTML="كوكتيل ريدبول";
    document.querySelector('.p17').innerHTML="عصير فريش";
    document.querySelector('.p18').innerHTML="مشروبات سبيشل";
    document.querySelector('.p19').innerHTML="شاي";
    document.querySelector('.p21').innerHTML="عن كافيرنا";
    document.querySelector('.p22').innerHTML="كريب";
    document.querySelector('.p23').innerHTML="ميني بانكيك";
    document.querySelector('.p24').innerHTML="وافل";
    document.querySelector('.p25').innerHTML="بانكيك";
   localStorage.setItem("lan","arb");
});

let buteng =document.querySelector('.English');

buteng.addEventListener('click',()=>{
    document.querySelector('.p1').innerHTML="English";
    localStorage.setItem("lan","eng");
    window.location.reload(true);
});


document.addEventListener('DOMContentLoaded', () => {
    // Loop through items ii1 to ii16
    for (let i = 1; i <= 16; i++) {
      const button = document.querySelector(`.ii${i}`);  // Select buttons like .ii1, .ii2, etc.
      if (button) {
        button.addEventListener('click', () => {
          console.log(`Clicked: ii${i}`);
          // Store the selected item in localStorage
          localStorage.setItem('selectedItem', i); // Store the item number
          // Redirect to 1.html
          window.location.href = '1.html';
        });
      } else {
        console.error(`Button not found: ii${i}`);
      }
    }
  });

document.querySelector('.iigen').addEventListener('click',()=>{
    window.location.href = '1.html';
});
  

function htlan(){
    if(localStorage.getItem('lan')=="arb")
    butara.click();
    else if(localStorage.getItem('lan')=="kur")
    butkur.click()
    }
    htlan();
    
