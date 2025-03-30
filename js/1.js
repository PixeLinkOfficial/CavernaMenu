import {cart,savetolocals} from "./cart.js";


//
let lbutton=document.querySelector('.b2');
let body=document.body;

lbutton.addEventListener('click',(e)=>{
    e.stopPropagation(); //important
    document.querySelector('.rldiv').style.opacity=1;
    document.querySelector('.rldiv').style.display="block";
    document.querySelector('.English').disabled=false;
    document.querySelector('.arabic').disabled=false;
    document.querySelector('.kurdish').disabled=false;
});

body.addEventListener('click',()=>{
    document.querySelector('.rldiv').style.opacity=0;
    document.querySelector('.rldiv').style.display="none";
    document.querySelector('.English').disabled=true;
    document.querySelector('.arabic').disabled=true;
    document.querySelector('.kurdish').disabled=true;
});

let butkur =document.querySelector('.kurdish');

butkur.addEventListener('click',()=>{
  const elements = document.querySelectorAll('.bmm2');
  elements.forEach(element => {
    element.style.textAlign = 'right';  // Align text to the right
    element.style.alignItems = 'end';   // Align items to the end (works if flex container)
    
    // Check if there is a button inside the .bmm2 element
    const button = element.querySelector('button');
    if (button) {
      button.style.marginRight = '7%';  // Set margin for the button inside the .bmm2 element
    }
  });
  const element2 = document.querySelectorAll('.pburg');
  element2.forEach(element => {
    element.style.marginRight='15px';   // Align items to the end (works if flex container)
  });
  const element3 = document.querySelectorAll('.ppriceb');
  element3.forEach(element => {
    element.style.marginRight='15px';   // Align items to the end (works if flex container)
  });
  
  document.querySelector('body').style.fontFamily= "'Noto Sans Arabic', serif";
  document.querySelector('body').style.fontWeight= 600;
  document.querySelector('.div1p').style.fontWeight=700;
  document.querySelector('.itemtitle').style.fontWeight=500;
  document.querySelector('.itemtitle').style.fontFamily="'Roboto', serif";

  localStorage.setItem("lan","kur");
  document.querySelector('.p1').innerHTML="كوردى";
  document.querySelector('.div1p').style.textAlign='right';
  document.querySelector('.div1p2').style.textAlign='right';
  document.querySelector('.div1p4').style.textAlign='right';
  document.querySelector('.div1p5').style.textAlign='right';
  document.querySelector('.div1p6').style.textAlign='right';
  document.querySelector('.div1p7').style.textAlign='right';
  document.querySelector('.div1p8').style.textAlign='right';
  document.querySelector('.div1p10').style.textAlign='right';
  document.querySelector('.div1p11').style.textAlign='right';
  document.querySelector('.div1p18').style.textAlign='right';
  document.querySelector('.div1p19').style.textAlign='right';


  document.querySelector('.itemtitle1').innerHTML="خۆڕاوی گەرم";
  document.querySelector('.div1p1').innerHTML="خۆڕاوی گەرم";
  document.querySelector('.pburg5').innerHTML="کاپوچینو";
  document.querySelector('.pburg7').innerHTML="هۆت چۆکڵێت";
  document.querySelector('.pburg8').innerHTML="قەهوەی تورکیا";
  document.querySelector('.pburg2').innerHTML="ئێسپریسۆ";
  document.querySelector('.pburg3').innerHTML="ئێسپریسۆ دابل";
  document.querySelector('.pburg16').innerHTML="لینکۆ";
  document.querySelector('.pburg1').innerHTML="ئاڤۆکات";
  document.querySelector('.pburg10').innerHTML="ماکیاتو";
  document.querySelector('.pburg4').innerHTML="ئەمریکیانو";
  document.querySelector('.pburg6').innerHTML="کۆن پانە";
  document.querySelector('.pburg9').innerHTML="سەحلەب";
  document.querySelector('.pburg11').innerHTML="رۆماین";
  document.querySelector('.pburg12').innerHTML="فلات وایت";
  document.querySelector('.pburg13').innerHTML="کارامێل ماکیاتو";
  document.querySelector('.pburg14').innerHTML="شیر";
  document.querySelector('.pburg15').innerHTML="ماکا";
  document.querySelector('.pburg17').innerHTML="ماکیای سپی";
  document.querySelector('.pburgg1').innerHTML="سینامۆن دولس";
  document.querySelector('.pburgg2').innerHTML="لاتی";
  document.querySelector('.pburg18').innerHTML="تامێ لاتی";
  document.querySelector('.k136').innerHTML="كافيرنا كوفي";
  document.querySelector('.k137').innerHTML="ماكا";
  

  document.querySelector('.itemtitle2').innerHTML="قەهوەی سارد";
  document.querySelector('.itemtitle2').style.fontWeight=500;
  document.querySelector('.itemtitle2').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p2').innerHTML="قەهوەی سارد";
  document.querySelector('.pburg22').innerHTML="لاتی سارد";
  document.querySelector('.pburg23').innerHTML="ئایس مۆکا";
  document.querySelector('.pburg24').innerHTML="لاتی سارد بە تام";
  document.querySelector('.k1').innerHTML="ئایسکریم";
  document.querySelector('.k2').innerHTML="ئیسپانی";
  document.querySelector('.k3').innerHTML="فستەق";
  document.querySelector('.k4').innerHTML="كافيرنا موكا";
  document.querySelector('.k5').innerHTML="ايس كاباجينو";


 
  

  document.querySelector('.itemtitle3').innerHTML="قەهوە فرابێ";
  document.querySelector('.item3').style.width='120px';
  document.querySelector('.itemtitle3').style.fontWeight=500;
  document.querySelector('.itemtitle3').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p4').innerHTML="قەهوە فرابێ";
  document.querySelector('.k13').innerHTML="فانیلا فرابی";
document.querySelector('.k14').innerHTML="کارامێل فرابی";
document.querySelector('.k15').innerHTML="دارک فرابی";
document.querySelector('.k16').innerHTML="نۆتیلا فرابی";
document.querySelector('.k17').innerHTML="فرابی فڕەوڵە";
document.querySelector('.k18').innerHTML="ئێسپریسۆ فرابی";

  


  document.querySelector('.itemtitle4').innerHTML="مێلكشیک";
  document.querySelector('.item4').style.width='100px';
  document.querySelector('.itemtitle4').style.fontWeight=500;
  document.querySelector('.itemtitle4').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p5').innerHTML="مێلكشیک";
  document.querySelector('.k24').innerHTML="فراوەلە";
  document.querySelector('.k25').innerHTML="مۆز";
  document.querySelector('.k26').innerHTML="کرامل";
  document.querySelector('.k27').innerHTML="كافيلرنا ميلكشيك";
  document.querySelector('.k28').innerHTML="نوتیلا";
  document.querySelector('.k29').innerHTML="لۆتس";
  document.querySelector('.k30').innerHTML="ئەریو";
 
  

  document.querySelector('.itemtitle5').innerHTML="سموثى";
  document.querySelector('.item5').style.width='90px';
  document.querySelector('.itemtitle5').style.fontWeight=500;
  document.querySelector('.itemtitle5').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p6').innerHTML="سموثى";
  document.querySelector('.k32').innerHTML="فراوەلە";
  document.querySelector('.k33').innerHTML="مانجو";
  document.querySelector('.k34').innerHTML="ئاناناس";
  document.querySelector('.k35').innerHTML="بلوبيرى";


  document.querySelector('.itemtitle6').innerHTML="موهیتۆ";
  document.querySelector('.item6').style.width='90px';
  document.querySelector('.itemtitle6').style.fontWeight=500;
  document.querySelector('.itemtitle6').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p7').innerHTML="موهیتۆ";
  document.querySelector('.k42').innerHTML="فڕەوڵە";
  document.querySelector('.k43').innerHTML="بلووبێری";
  document.querySelector('.k44').innerHTML="مانگۆ";
  document.querySelector('.k45').innerHTML="باشن مۆهیتۆ";
  document.querySelector('.k46').innerHTML="کەرز";
  document.querySelector('.k47').innerHTML="کریناداین";
  document.querySelector('.k48').innerHTML="بلووکوراساو";
  document.querySelector('.k49').innerHTML="هنار";
  document.querySelector('.k50').innerHTML="سپی‌شاڵ مۆهیتۆ";
  



  document.querySelector('.itemtitle7').innerHTML="جا طازى";
  document.querySelector('.item7').style.width='100px';
  document.querySelector('.itemtitle7').style.fontWeight=500;
  document.querySelector('.itemtitle7').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p8').innerHTML="جا طازى";
  document.querySelector('.k52').innerHTML="لیمۆن";
  document.querySelector('.k53').innerHTML="خوخ";


  document.querySelector('.itemtitle8').innerHTML="کۆکتێل ریدبول";
  document.querySelector('.item8').style.width='130px';
  document.querySelector('.itemtitle8').style.fontWeight=500;
  document.querySelector('.itemtitle8').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p10').innerHTML="کۆکتێل ریدبول";
  document.querySelector('.k68').innerHTML="ريدبول ميكس"; 
  document.querySelector('.k69').innerHTML="كوكتيل ريدبول"; 
  document.querySelector('.k70').innerHTML="ريدبول";
  
  
  
  document.querySelector('.itemtitle9').innerHTML="فخوارن سبيشل";
  document.querySelector('.item9').style.width='150px';
  document.querySelector('.itemtitle9').style.fontWeight=500;
  document.querySelector('.itemtitle9').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p11').innerHTML="فخوارن سبيشل";
  document.querySelector('.k71').innerHTML="بلوكيل";
  document.querySelector('.k72').innerHTML="L.T.D";
  document.querySelector('.k73').innerHTML="فولديمور وايت";
  document.querySelector('.k74').innerHTML="ميك";
  document.querySelector('.k75').innerHTML="جيرسيك";



  document.querySelector('.itemtitle10').innerHTML="فه خوارن  طبيعي";
  document.querySelector('.item10').style.width='135px';
  document.querySelector('.itemtitle10').style.fontWeight=500;
  document.querySelector('.itemtitle10').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p18').innerHTML="فه خوارن  طبيعي";
  document.querySelector('.k122').innerHTML="پرتەقاڵ";
  document.querySelector('.k123').innerHTML="لیمۆن پرتەقاڵ";
  document.querySelector('.k124').innerHTML="ئێسپریسۆ پرتەقاڵ";
  document.querySelector('.k125').innerHTML="هنار";
  document.querySelector('.k126').innerHTML="فڕەوڵە";  

  document.querySelector('.itemtitle11').innerHTML="جاي";
  document.querySelector('.item11').style.width='110px';
  document.querySelector('.itemtitle11').style.fontWeight=500;
  document.querySelector('.itemtitle11').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p19').innerHTML="جاي";
  document.querySelector('.k128').innerHTML="جاي";
  document.querySelector('.k129').innerHTML="حاي اخضر";
  document.querySelector('.k135').innerHTML="كاراك جاي";

  document.querySelector('.itemtitle12').innerHTML="لسەر کاڤيرنا";
  document.querySelector('.item12').style.width='120px';
  document.querySelector('.itemtitle12').style.fontWeight=500;
  document.querySelector('.itemtitle12').style.fontFamily="'Roboto', serif";
});

let butara = document.querySelector('.arabic');

butara.addEventListener('click', () => {
  const elements = document.querySelectorAll('.bmm2');
  elements.forEach(element => {
    element.style.textAlign = 'right';  // Align text to the right
    element.style.alignItems = 'end';   // Align items to the end (works if flex container)
    
    // Check if there is a button inside the .bmm2 element
    const button = element.querySelector('button');
    if (button) {
      button.style.marginRight = '7%';  // Set margin for the button inside the .bmm2 element
    }
  });

  const element2 = document.querySelectorAll('.pburg');
  element2.forEach(element => {
    element.style.marginRight='15px';   // Align items to the end (works if flex container)
  });
  const element3 = document.querySelectorAll('.ppriceb');
  element3.forEach(element => {
    element.style.marginRight='15px';   // Align items to the end (works if flex container)
  });

  document.querySelector('body').style.fontFamily= "'Noto Sans Arabic', serif";
  document.querySelector('body').style.fontWeight= 600;
  document.querySelector('.div1p').style.fontWeight=700;
  document.querySelector('.itemtitle').style.fontWeight=500;
  document.querySelector('.itemtitle').style.fontFamily="'Roboto', serif";


  localStorage.setItem("lan","arb");
  document.querySelector('.p1').innerHTML="العربية";
  document.querySelector('.div1p').style.textAlign='right';
  document.querySelector('.div1p2').style.textAlign='right';
  document.querySelector('.div1p4').style.textAlign='right';
  document.querySelector('.div1p5').style.textAlign='right';
  document.querySelector('.div1p6').style.textAlign='right';
  document.querySelector('.div1p7').style.textAlign='right';
  document.querySelector('.div1p8').style.textAlign='right';
  document.querySelector('.div1p10').style.textAlign='right';
  document.querySelector('.div1p11').style.textAlign='right';
  document.querySelector('.div1p18').style.textAlign='right';
  document.querySelector('.div1p19').style.textAlign='right';


  document.querySelector('.itemtitle1').innerHTML="المشروبات الساخنة";
  document.querySelector('.div1p1').innerHTML="المشروبات الساخنة";
  document.querySelector('.pburg5').innerHTML="كباشينو";
  document.querySelector('.pburg7').innerHTML="هوت شكولا";
  document.querySelector('.pburg8').innerHTML="قهوه تركية";
  document.querySelector('.pburg2').innerHTML="اسبريسو";
  document.querySelector('.pburg3').innerHTML="اسبريسو دبل";
  document.querySelector('.pburg16').innerHTML="لنكو";
  document.querySelector('.pburg1').innerHTML="افوكيت";
  document.querySelector('.pburg10').innerHTML="ماجياتو";
  document.querySelector('.pburg4').innerHTML="امريكانو";
  document.querySelector('.pburg6').innerHTML=" كون بانا";
  document.querySelector('.pburg9').innerHTML="سحلب";
  document.querySelector('.pburg11').innerHTML="روماين";
  document.querySelector('.pburg12').innerHTML="فلات وايت";
  document.querySelector('.pburg13').innerHTML="كراميل موجياتو";
  document.querySelector('.pburg14').innerHTML="حليب";
  document.querySelector('.pburg15').innerHTML=" ماجا";
  document.querySelector('.pburg17').innerHTML="ماجا بيضاء";
  document.querySelector('.pburgg1').innerHTML="سينامون دولس";
  document.querySelector('.pburgg2').innerHTML=" لاتي";
  document.querySelector('.pburg18').innerHTML="طعم لاتي";
  document.querySelector('.k136').innerHTML="كافيرنا كوفي";
  document.querySelector('.k137').innerHTML="ماكا";

  document.querySelector('.itemtitle2').innerHTML="قهوه باردا";
  document.querySelector('.itemtitle2').style.fontWeight=500;
  document.querySelector('.itemtitle2').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p2').innerHTML="قهوه باردا";
  document.querySelector('.pburg22').innerHTML="لاتي بارد";
  document.querySelector('.pburg23').innerHTML="ايس موكا";
  document.querySelector('.pburg24').innerHTML="لاتي بارد طعم";
  document.querySelector('.k1').innerHTML="ايسكريم";
  document.querySelector('.k2').innerHTML="اسباني ";
  document.querySelector('.k3').innerHTML="فستق";
  document.querySelector('.k4').innerHTML="كافيرنا موكا";
  document.querySelector('.k5').innerHTML="ايس كاباجينو";


  document.querySelector('.itemtitle3').innerHTML="قهوة فرابي";
  document.querySelector('.item3').style.width='120px';
  document.querySelector('.itemtitle3').style.fontWeight=500;
  document.querySelector('.itemtitle3').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p4').innerHTML="قهوة فرابي";
  document.querySelector('.k13').innerHTML="فانيلا فرابي";
  document.querySelector('.k14').innerHTML="كراميل فرابي";
  document.querySelector('.k15').innerHTML="دارك فرابي";
  document.querySelector('.k16').innerHTML="نوتيلا فرابي";
  document.querySelector('.k17').innerHTML="فرابي فراوله";
  document.querySelector('.k18').innerHTML="يسبيسو فرابي";

  document.querySelector('.itemtitle4').innerHTML="ميلكشيك";
  document.querySelector('.item4').style.width='100px';
  document.querySelector('.itemtitle4').style.fontWeight=500;
  document.querySelector('.itemtitle4').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p5').innerHTML="ميلكشيك";
  document.querySelector('.k24').innerHTML="فراولة";
  document.querySelector('.k25').innerHTML="موز";
  document.querySelector('.k26').innerHTML="كراميل";
  document.querySelector('.k27').innerHTML="كافيلرنا ميلكشيك";
  document.querySelector('.k28').innerHTML="نوتيلا";
  document.querySelector('.k29').innerHTML="لوتس";
  document.querySelector('.k30').innerHTML="اوريو";
  

  document.querySelector('.itemtitle5').innerHTML="سموثي";
  document.querySelector('.item5').style.width='90px';
  document.querySelector('.itemtitle5').style.fontWeight=500;
  document.querySelector('.itemtitle5').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p6').innerHTML="سموثي";
  document.querySelector('.k32').innerHTML="فرولة";
  document.querySelector('.k33').innerHTML="مانجو";
  document.querySelector('.k34').innerHTML="اناناس";
  document.querySelector('.k35').innerHTML=" بلوبيري ";
 

  document.querySelector('.itemtitle6').innerHTML="موهيتو";
  document.querySelector('.item6').style.width='90px';
  document.querySelector('.itemtitle6').style.fontWeight=500;
  document.querySelector('.itemtitle6').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p7').innerHTML="موهيتو";
  document.querySelector('.k42').innerHTML="فراولة";
  document.querySelector('.k43').innerHTML=" بلوبيري";
  document.querySelector('.k44').innerHTML="مانجو";
  document.querySelector('.k45').innerHTML="باشون موهيتو";
  document.querySelector('.k46').innerHTML="كرز";
  document.querySelector('.k47').innerHTML="كريناداين";
  document.querySelector('.k48').innerHTML="بلوكوروساو";
  document.querySelector('.k49').innerHTML="رمان";
  document.querySelector('.k50').innerHTML="سبيشال موهيتو";

  document.querySelector('.itemtitle7').innerHTML="شاي بارد";
  document.querySelector('.item7').style.width='100px';
  document.querySelector('.itemtitle7').style.fontWeight=500;
  document.querySelector('.itemtitle7').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p8').innerHTML="شاي بارد";
  document.querySelector('.k52').innerHTML="ليمون";
  document.querySelector('.k53').innerHTML="خوخ";

  document.querySelector('.itemtitle8').innerHTML="كوكتيل ريدبول";
  document.querySelector('.item8').style.width='140px';
  document.querySelector('.itemtitle8').style.fontWeight=500;
  document.querySelector('.itemtitle8').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p10').innerHTML="كوكتيل ريدبول";
  document.querySelector('.k68').innerHTML="ريدبول ميكس"; 
  document.querySelector('.k69').innerHTML="كوكتيل ريدبول"; 
  document.querySelector('.k70').innerHTML="ريدبول";
  
  document.querySelector('.itemtitle9').innerHTML="مشروبات سبيشل";
  document.querySelector('.item9').style.width='150px';
  document.querySelector('.itemtitle9').style.fontWeight=500;
  document.querySelector('.itemtitle9').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p11').innerHTML="مشروبات سبيشل";
  document.querySelector('.k71').innerHTML="بلوكيل";
  document.querySelector('.k72').innerHTML="L.T.D";
  document.querySelector('.k73').innerHTML="فولديمور وايت";
  document.querySelector('.k74').innerHTML="ميك";
  document.querySelector('.k75').innerHTML="جيرسيك";


  document.querySelector('.itemtitle10').innerHTML="عصير طبيعي";
  document.querySelector('.item10').style.width='120px';
  document.querySelector('.itemtitle10').style.fontWeight=500;
  document.querySelector('.itemtitle10').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p18').innerHTML="عصير طبيعي";
  document.querySelector('.k122').innerHTML="برتقال";
  document.querySelector('.k123').innerHTML="ليمون برتقال";
  document.querySelector('.k124').innerHTML="يسبريسو برتقال";
  document.querySelector('.k125').innerHTML="رمان";
  document.querySelector('.k126').innerHTML="فراوله";


  document.querySelector('.itemtitle11').innerHTML="جاي";
  document.querySelector('.item11').style.width='110px';
  document.querySelector('.itemtitle11').style.fontWeight=500;
  document.querySelector('.itemtitle11').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p19').innerHTML="جاي";
  document.querySelector('.k128').innerHTML="جاي";
  document.querySelector('.k129').innerHTML="حاي اخضر";
  document.querySelector('.k135').innerHTML="كاراك جاي";

  document.querySelector('.itemtitle12').innerHTML="عن كافيرنا";
  document.querySelector('.item12').style.width='115px';
  document.querySelector('.itemtitle12').style.fontWeight=500;
  document.querySelector('.itemtitle12').style.fontFamily="'Roboto', serif";
});

let buteng =document.querySelector('.English');

buteng.addEventListener('click',()=>{
  document.querySelector('body').style.fontFamily= "'Roboto', serif";
  document.querySelector('header').style.direction='ltr';
  const elements = document.querySelectorAll('.bmm2');
  elements.forEach(element => {
    element.style.textAlign = 'left';  // Align text to the right
    element.style.alignItems = 'start';   // Align items to the end (works if flex container)
    
    // Check if there is a button inside the .bmm2 element
    const button = element.querySelector('button');
    if (button) {
      button.style.marginRight = '0';  // Set margin for the button inside the .bmm2 element
      button.style.marginLeft= '7%';
    }
  });
  localStorage.setItem("lan","eng");
  window.location.reload(true);
});



//
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
})

//s


//let ischangedL = false;

function scrollToElement(targetId) {
  var targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Calculate the offset position of the target element
    var targetPosition = targetElement.offsetTop;

    // Height of the fixed header (240px)
    var offset = 100;

    // Scroll to the adjusted position
    window.scrollTo({
      top: targetPosition - offset, // Adjust by subtracting the fixed header height
      behavior: 'smooth', // Smooth scrolling
    });
  } else {
    console.error(`Element with id "${targetId}" not found.`);
  }
}

// Scroll buttons for sc1 to sc8
document.addEventListener('DOMContentLoaded', () => {
  const scrollButtons = [
    { button: '.item1', target: 'sc1' },
    { button: '.item2', target: 'sc2' },
    { button: '.item3', target: 'sc3' },
    { button: '.item4', target: 'sc4' },
    { button: '.item5', target: 'sc5' },
    { button: '.item6', target: 'sc6' },
    { button: '.item7', target: 'sc7' },
    { button: '.item8', target: 'sc8' },
    { button: '.item9', target: 'sc9' },
    { button: '.item10', target: 'sc10' },
    { button: '.item11', target: 'sc11' },
    { button: '.item12', target: 'sc12' }
  ];

  scrollButtons.forEach(item => {
    const button = document.querySelector(item.button);
    console.log('Button:', item.button, button);
    if (button) {
      button.addEventListener('click', function () {
        console.log('Clicked:', item.button);
        scrollToElement(item.target);
      });
    } else {
      console.error(`Button not found: ${item.button}`);
    }
  });

  function scrollToElement(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY; // Get target position
      window.scrollTo({ top: offset - 100, behavior: 'auto' }); // Scroll instantly with 10px offset
    } else {
      console.error(`Target not found: ${targetId}`);
    }
  }
});

window.addEventListener('load', () => {
  // Get the stored item number from localStorage
  const selectedItem = localStorage.getItem('selectedItem');

  if (selectedItem) {
    console.log(`Stored selected item: ${selectedItem}`);

    // Find the corresponding target element (scX) based on the stored item number
    const target = document.getElementById(`sc${selectedItem}`);

    if (target) {
      console.log(`Scrolling to: ${target.id}`);
      scrollToElement(target); // Scroll to the target element
    } else {
      console.error(`Target element with ID sc${selectedItem} not found`);
    }

    // Clear the localStorage item after the action to prevent unwanted behavior on future page loads
    localStorage.removeItem('selectedItem');
  } else {
    console.log("No selected item in localStorage");
  }

  function scrollToElement(target) {
    const offset = target.getBoundingClientRect().top + window.scrollY; // Get the position of the target element
    window.scrollTo({ top: offset - 130, behavior: 'auto' }); // Scroll to target with 130px offset, no animation
  }
});




// Example of toggling the layout (to simulate your layout change button)
//

//
let count= parseInt(localStorage.getItem("countcart")) || 0;
count=0;
cart.forEach((item)=>{
  count+=item.quantity;
});
console.log(count);
document.querySelector('.cart-num').innerHTML=count;
function f12(){
  if(parseInt(localStorage.getItem("countcart"))===0)
  {
    document.querySelector('.cart-bar').style.opacity=0;
    document.querySelector('.cart-bar').style.pointerEvents="none";
    
  }else
  {
    document.querySelector('.cart-bar').style.opacity=1;  
    document.querySelector('.cart-bar').style.pointerEvents="all";  
  }
}
f12();
//1

document.querySelectorAll('.js-add').forEach((button)=>{
  button.addEventListener('click',()=>{
    let it=button.dataset.productId;
    let matching;

    cart.forEach((item)=>{
      if(item.productid==it)
      {
        matching=item;
      }
    });

    if(matching)
      matching.quantity+=1;
    else{
      cart.push(
      {
          productid:it,
          quantity:1
      }
      );
      
    }
    console.log(cart);
    savetolocals();
    
    count=0;
    cart.forEach((item)=>{
      count+=item.quantity;
    });
    localStorage.setItem("countcart",count.toString());
    document.querySelector('.cart-num').innerHTML=count;
     f12();

  });
 
});

//
function htlan(){
if(localStorage.getItem('lan')=="arb")
  butara.click();
else if(localStorage.getItem('lan')=="kur")
  butkur.click()
}
htlan();


//end of 1
// Get references to the elements
// Loop through all pairs of vertical and horizontal elements
for (let i = 1; i <= 21; i++) {
  const verticalElement = document.querySelector(`.ver${i}`);  // Select the vertical element (ver1, ver2, ..., ver9)
  const horizontalContainer = document.querySelector('.items');  // The container for horizontal scrolling
  const horizontalTarget = document.querySelector(`.hor${i}`);  // Select the horizontal target (hor1, hor2, ..., hor9)

  // Function to check if the vertical element is in the viewport
  function checkScrollPosition() {
    const rect = verticalElement.getBoundingClientRect();

    // Check if the .verN element is within the viewport (vertical scroll)
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      // Get the current document direction (LTR or RTL)
      const isRTL = document.documentElement.dir === 'rtl';

      // Calculate the scroll position considering RTL or LTR
      let scrollPosition;
      if (isRTL) {
        // In RTL, the scroll position is calculated based on the container's total scroll width
        scrollPosition = horizontalContainer.scrollWidth - horizontalTarget.offsetLeft - horizontalTarget.offsetWidth - 30;
      } else {
        // In LTR, we use the normal left offset
        scrollPosition = horizontalTarget.offsetLeft - 30;
      }

      // Scroll the horizontal container to the .horN element
      horizontalContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'  // Smooth scrolling
      });
    }
  }

  // Listen for scroll events on the window for each pair
  window.addEventListener('scroll', checkScrollPosition);

  // Initial check in case the page is already scrolled down
  checkScrollPosition();
}



//
