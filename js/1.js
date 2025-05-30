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

});

body.addEventListener('click',()=>{
    document.querySelector('.rldiv').style.opacity=0;
    document.querySelector('.rldiv').style.display="none";
    document.querySelector('.English').disabled=true;
    document.querySelector('.arabic').disabled=true;

});

let butara = document.querySelector('.arabic');

butara.addEventListener('click', () => {
  const elements = document.querySelectorAll('.bmm2');
  elements.forEach(element => {
    element.style.textAlign = 'right';
    element.style.alignItems = 'end';

    const button = element.querySelector('button');
    if (button) {
      button.style.marginRight = '7%';
    }
  });

  const element2 = document.querySelectorAll('.pburg');
  element2.forEach(element => {
    element.style.marginRight='15px';
  });
  const element3 = document.querySelectorAll('.ppriceb');
  element3.forEach(element => {
    element.style.marginRight='15px';
  });

  document.querySelector('body').style.fontFamily= "'Noto Sans Arabic', serif";
  document.querySelector('body').style.fontWeight= 600;
  document.querySelector('.div1p').style.fontWeight=700;
  document.querySelector('.itemtitle').style.fontWeight=500;
  document.querySelector('.itemtitle').style.fontFamily="'Roboto', serif";

  localStorage.setItem("lan","arb");
  document.querySelector('.p1').innerText="العربية";
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
  document.querySelector('.div1p20').style.textAlign='right';
  document.querySelector('.div1p21').style.textAlign='right';
  document.querySelector('.div1p22').style.textAlign='right';
  document.querySelector('.div1p23').style.textAlign='right';

  document.querySelector('.itemtitle1').innerText="المشروبات الساخنة";
  document.querySelector('.div1p1').innerText="المشروبات الساخنة";
  document.querySelector('.pburg5').innerText="كباشينو";
  document.querySelector('.pburg7').innerText="هوت شوكليت";
  document.querySelector('.pburg8').innerText="قهوه تركية";
  document.querySelector('.pburg2').innerText="اسبريسو";
  document.querySelector('.pburg3').innerText="اسبريسو دبل";
  document.querySelector('.pburg16').innerText="لونكو";
  document.querySelector('.pburg1').innerText="اسبريسو افاكادو";
  document.querySelector('.pburg10').innerText="اسبريسو ماجياتو ";
  document.querySelector('.pburg4').innerText="امريكانو";
  document.querySelector('.pburg6').innerText="اسبريسو كون بانا";
  document.querySelector('.pburg9').innerText="سحلب";
  document.querySelector('.pburg12').innerText="فلات وايت";
  document.querySelector('.pburg13').innerText="كراميل موجياتو";
  document.querySelector('.pburg14').innerText="حليب";
  document.querySelector('.pburg15').innerText=" موكا";
  document.querySelector('.pburg17').innerText="وايت موكا ";
  document.querySelector('.pburgg2').innerText=" لاتي";
  document.querySelector('.k137').innerText="ماجا";

  document.querySelector('.itemtitle2').innerText="قهوه باردا";
  document.querySelector('.itemtitle2').style.fontWeight=500;
  document.querySelector('.itemtitle2').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p2').innerText="قهوه باردا";
  document.querySelector('.pburg22').innerText="لاتي بارد";
  document.querySelector('.pburg23').innerText="ايس موكا";
  document.querySelector('.k1').innerText="ايس اميريكانو";
  document.querySelector('.k2').innerText="اسباني ";
  document.querySelector('.k3').innerText="ايس لاتي بستاشو";
  document.querySelector('.k4').innerText="كافيرنا موكا";
  document.querySelector('.k5').innerText="ايس كاباجينو";

  document.querySelector('.itemtitle4').innerText="قهوة فرابي";
  document.querySelector('.item2').style.width='120px';
  document.querySelector('.item19').style.width='140px';
  document.querySelector('.item4').style.width='120px';
  document.querySelector('.item3').style.width='120px';
  document.querySelector('.itemtitle4').style.fontWeight=500;
  document.querySelector('.itemtitle4').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p4').innerText="قهوة فرابي";
  document.querySelector('.k13').innerText="فانيلا فرابي";
  document.querySelector('.k14').innerText="كراميل فرابي";

  document.querySelector('.k16').innerText="نوتيلا فرابي";
  document.querySelector('.k17').innerText="فرابي فراوله";
  document.querySelector('.k18').innerText="اسبريسو فرابي";

  document.querySelector('.itemtitle5').innerText="ميلكشيك";
  document.querySelector('.item5').style.width='100px';
  document.querySelector('.itemtitle5').style.fontWeight=500;
  document.querySelector('.itemtitle5').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p5').innerText="ميلكشيك";
  document.querySelector('.k24').innerText="ميلكشيك فراولة";
  document.querySelector('.k25').innerText="ميلكشيك موز";
  document.querySelector('.k26').innerText="ميلكشيك كراميل";
  document.querySelector('.k27').innerText="كافيلرنا ميلكشيك";
  document.querySelector('.k28').innerText="ميلكشيك نوتيلا";
  document.querySelector('.k29').innerText="ميلكشيك لوتس";
  document.querySelector('.k30').innerText="ميلكشيك اوريو";

  document.querySelector('.itemtitle6').innerText="سموثي";
  document.querySelector('.item6').style.width='90px';
  document.querySelector('.itemtitle6').style.fontWeight=500;
  document.querySelector('.itemtitle6').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p6').innerText="سموثي";
  document.querySelector('.k32').innerText="سموثي فرولة";
  document.querySelector('.k33').innerText="سموثي مانجو";
  document.querySelector('.k34').innerText="سموثي اناناس";
  document.querySelector('.k35').innerText="سموثي بلوبيري ";
  document.querySelector('.new2').innerText="سموثي كيوي و تفاح احضر ";

  document.querySelector('.itemtitle7').innerText="موهيتو";
  document.querySelector('.item7').style.width='90px';
  document.querySelector('.itemtitle7').style.fontWeight=500;
  document.querySelector('.itemtitle7').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p7').innerText="موهيتو";
  document.querySelector('.k42').innerText="موهيتو فراولة";
  document.querySelector('.k43').innerText="موهيتو بلوبيري";
  document.querySelector('.k44').innerText="موهيتو مانجو";
  document.querySelector('.k45').innerText="باشون موهيتو";
  document.querySelector('.k46').innerText="موهيتو كرز";
  document.querySelector('.k47').innerText="موهيتو كريناداين";
  document.querySelector('.k48').innerText="بلو موهيتو";
  document.querySelector('.k49').innerText="موهيتو رمان";
  document.querySelector('.k50').innerText="سبيشال موهيتو";
  document.querySelector('.new1').innerText="اناناس موهيتو";

  document.querySelector('.itemtitle8').innerText="ايس تي";
  document.querySelector('.item8').style.width='100px';
  document.querySelector('.itemtitle8').style.fontWeight=500;
  document.querySelector('.itemtitle8').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p8').innerText="ايس تي";
  document.querySelector('.k52').innerText="ايس تي ليمون";
  document.querySelector('.k53').innerText="ايس تي خوخ";

  document.querySelector('.itemtitle9').innerText="كوكتيل ريدبول";
  document.querySelector('.item9').style.width='140px';
  document.querySelector('.itemtitle9').style.fontWeight=500;
  document.querySelector('.itemtitle9').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p10').innerText="كوكتيل ريدبول";
  document.querySelector('.k68').innerText="ريدبول ميكس"; 
  document.querySelector('.k69').innerText="مكسيك ريدبول"; 
  document.querySelector('.k70').innerText="ريدبول";

  document.querySelector('.itemtitle10').innerText="سبيشل درنك";
  document.querySelector('.item10').style.width='150px';
  document.querySelector('.itemtitle10').style.fontWeight=500;
  document.querySelector('.itemtitle10').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p11').innerText="سبيشل درنك";
  document.querySelector('.k71').innerText="بلو موكتيل";


  document.querySelector('.itemtitle11').innerText="عصير طبيعي";
  document.querySelector('.item11').style.width='120px';
  document.querySelector('.itemtitle11').style.fontWeight=500;
  document.querySelector('.itemtitle11').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p18').innerText="عصير طبيعي";
  document.querySelector('.k122').innerText="برتقال";
  document.querySelector('.k123').innerText="ليمون برتقال";
  document.querySelector('.k125').innerText="رمان";
  document.querySelector('.k126').innerText="فراوله";
  document.querySelector('.k999').innerText="افاكادو";
  document.querySelector('.k998').innerText="مانجو";
  document.querySelector('.k997').innerText="كوكتيل";
  document.querySelector('.k996').innerText="حليب و موز";

  document.querySelector('.itemtitle12').innerText="شاي";
  document.querySelector('.item12').style.width='110px';
  document.querySelector('.itemtitle12').style.fontWeight=500;
  document.querySelector('.itemtitle12').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p19').innerText="شاي";
  document.querySelector('.k128').innerText="شاي";
  document.querySelector('.k129').innerText="شاي اخضر";
  document.querySelector('.k135').innerText="كاراك شاي";

  document.querySelector('.itemtitle13').innerText="كريب";
  document.querySelector('.item13').style.width='115px';
  document.querySelector('.item11').style.width='145px';
  document.querySelector('.itemtitle13').style.fontWeight=500;
  document.querySelector('.itemtitle13').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p20').innerText="كريب";
  document.querySelector('.m100').innerText="كريب نوتيلا";
  document.querySelector('.m101').innerText="كريب كندر";
  document.querySelector('.m102').innerText="كريب فستق";
  document.querySelector('.m103').innerText="كريب لوتس";

  document.querySelector('.itemtitle14').innerText="ميني بانكيك";
  document.querySelector('.item14').style.width='150px';
  document.querySelector('.itemtitle14').style.fontWeight=500;
  document.querySelector('.itemtitle14').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p21').innerText="ميني بانكيك";
  document.querySelector('.m200').innerText="ميني بانكيك نوتيلا";
  document.querySelector('.m201').innerText="ميني بانكيك كندر";
  document.querySelector('.m202').innerText="ميني بانكيك فستق";
  document.querySelector('.m203').innerText="ميني بانكيك لوتس";

  document.querySelector('.itemtitle15').innerText="وافل";
  document.querySelector('.item15').style.width='110px';
  document.querySelector('.itemtitle15').style.fontWeight=500;
  document.querySelector('.itemtitle15').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p22').innerText="وافل";
  document.querySelector('.m300').innerText=" وافل نوتيلا";
  document.querySelector('.m301').innerText=" وافل كندر";
  document.querySelector('.m302').innerText=" وافل فستق";
  document.querySelector('.m303').innerText=" وافل لوتس";

  document.querySelector('.itemtitle16').innerText="بانكيك";
  document.querySelector('.item16').style.width='120px';
  document.querySelector('.itemtitle16').style.fontWeight=500;
  document.querySelector('.itemtitle16').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p23').innerText="بانكيك";
  document.querySelector('.m400').innerText=" بانكيك نوتيلا";
  document.querySelector('.m401').innerText=" بانكيك كندر";
  document.querySelector('.m402').innerText=" بانكيك فستق";
  document.querySelector('.m403').innerText=" بانكيك لوتس";

  document.querySelector('.new3').innerText="  عصير ليمون ونعناع";
  document.querySelector('.new4').innerText="ليمون شاي  ";
  document.querySelector('.new5').innerText=" اناناس ازرق  ";
  document.querySelector('.new6').innerText="فروله و موز";
  document.querySelector('.new7').innerText="بينا كولادا";
  document.querySelector('.new8').innerText="وافل نوتيلا و فستق";
  document.querySelector('.new9').innerText="كزوان";
  document.querySelector('.new21').innerText="ايس لاتي فانيلا";
  document.querySelector('.new22').innerText="ايس لاتي كراميل";
  document.querySelector('.new23').innerText="كيوي موهيتو";
  document.querySelector('.new25').innerText="ريدبيري";

  document.querySelector('.far2').innerText="ريستريتو ";
  document.querySelector('.far1').innerText="دي كاف ";
  document.querySelector('.far123').innerText="كورتادو ";
  document.querySelector('.far12').innerText="كافيرنا لاتيه ";
  document.querySelector('.far3').innerText="سبانيش لاتيه ";
  document.querySelector('.far4').innerText="فانيلا لاتيه ";
  document.querySelector('.far1234').innerText="كارامل لاتيه ";
  document.querySelector('.far5').innerText=" جوز هند لاتيه ";
  document.querySelector('.far6').innerText=" لاتيه فستق";
  document.querySelector('.far7').innerText=" لاتيه شوفان";
  document.querySelector('.far8').innerText=" لاتيه جوز";
  document.querySelector('.far9').innerText="  بندق جوكوليت";
  document.querySelector('.far10').innerText="  كووكيز جوكوليت";
  document.querySelector('.far11').innerText="  كوكونت جوكوليت";
  document.querySelector('.far13').innerText="   كافيرنا جوكوليت";
  document.querySelector('.far14').innerText="أريكانو آيس كوفي";
  document.querySelector('.far15').innerText="اسبريسو برتقال";
  document.querySelector('.far16').innerText="ايس لاتي فراوله";
  document.querySelector('.far17').innerText="بلو ايس لاتيه";
  document.querySelector('.far18').innerText="دالكونا ايس لاتيه";
  document.querySelector('.far19').innerText="لوتس ايس لاتيه";
  document.querySelector('.far20').innerText="كافيرنا ايس لاتيه";
  document.querySelector('.div1p1234').innerText="ايس ماتشا";
  document.querySelector('.itemtitle3').innerText="ايس ماتشا";
  document.querySelector('.itemtitle3').style.fontWeight=500;
  document.querySelector('.itemtitle3').style.fontFamily="'Roboto', serif";
  document.querySelector('.far21').innerText="ايس ماتشا";
  document.querySelector('.far22').innerText="ايس ماتشا فروله ";
  document.querySelector('.far23').innerText="ايس ماتشا مانجو  ";
  document.querySelector('.far24').innerText="ايس ماتشا بلوبيري  ";
  document.querySelector('.far25').innerText="كافيرنا ايس ماتشا   ";
  document.querySelector('.far26').innerText="وايت جوكوليت فرابي";
  document.querySelector('.far27').innerText="كوكيز فرابي";
  document.querySelector('.far28').innerText="فستق فرابي";
  document.querySelector('.far29').innerText="فانيلا ميلكشيك";
  document.querySelector('.far33').innerText="شوكوليت ميلكشيك";
  document.querySelector('.far30').innerText="فستق ميلكشيك";
  document.querySelector('.far31').innerText=" كيندر ميلكشيك";
  document.querySelector('.far32').innerText="بلوبيري ميلكشيك";
  document.querySelector('.far34').innerText="سموثي توت";
  document.querySelector('.far35').innerText="سموثي باشون فروت";
  document.querySelector('.far36').innerText="سموثي موز";
  document.querySelector('.far37').innerText="سموثي كافيرنا";
  document.querySelector('.far38').innerText="موهيتو كلاسيك";
  document.querySelector('.far39').innerText="موهيتو كافيرنا";
  document.querySelector('.far40').innerText="ايس تي رازبيري";
  document.querySelector('.far41').innerText="ايس تي فراوله";
  document.querySelector('.far42').innerText="ايس تي بلوبيري";
  document.querySelector('.far43').innerText="ايس تي باشون مانكا";
  document.querySelector('.far44').innerText="ايس تي كافيرنا";
  document.querySelector('.far45').innerText=" ريدبول فراوله";
  document.querySelector('.far46').innerText=" ريدبول بلوبيري";
  document.querySelector('.far47').innerText=" ريدبول بلو";
  document.querySelector('.far48').innerText="ليدي روز";
  document.querySelector('.far49').innerText="  بلو هاواي";
  document.querySelector('.far50').innerText=" سنسيت ";
  document.querySelector('.far51').innerText=" كافيرنا موكتيل ";
  document.querySelector('.far52').innerText=" كافيرنا فريش جوس ";
  document.querySelector('.far53').innerText=" سوشي كريب ";
  document.querySelector('.far54').innerText=" رول كريب ";
  document.querySelector('.far55').innerText=" باستا كريب ";
  document.querySelector('.far56').innerText=" سبيشل كريب ";
  document.querySelector('.far57').innerText=" سبيشل بانكيك ";
  document.querySelector('.far58').innerText=" سبيشل وافل ";
  document.querySelector('.far59').innerText=" سبيشل بانكيك ";
  document.querySelector('.itemtitle17').innerText="حلويات";
  document.querySelector('.div1p224').innerText="حلويات";
  document.querySelector('.far60').innerText="تشيز كيك نوتيلا";
  document.querySelector('.far60').innerText="تشيز كيك نوتيلا";
  document.querySelector('.far61').innerText="تشيز كيك فستق";
  document.querySelector('.far62').innerText="تشيز كيك كيندر";
  document.querySelector('.far63').innerText="حلويات عائليه";
  document.querySelector('.far64').innerText="سلطة فواكه";
  document.querySelector('.far65').innerText="في اي بي فواكه";
  document.querySelector('.div1p225').innerText="نركيلا";
  document.querySelector('.itemtitle18').innerText="نركيلا";
  document.querySelector('.far66').innerText="كافيرنا";
  document.querySelector('.far67').innerText="ليمون";
  document.querySelector('.far68').innerText="علك";
  document.querySelector('.far69').innerText="انكليزي";
  document.querySelector('.far70').innerText="تفاح";
  document.querySelector('.far71').innerText="في اي بي كافيرنا";
  document.querySelector('.far72').innerText="فريش فروت";



  

  document.querySelector('.itemtitle19').innerText="عن كافيرنا";
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
    { button: '.item12', target: 'sc12' },
    { button: '.item13', target: 'sc13' },
    { button: '.item14', target: 'sc14' },
    { button: '.item15', target: 'sc15' },
    { button: '.item16', target: 'sc16' },
    { button: '.item17', target: 'sc17' },
    { button: '.item18', target: 'sc18' },
    { button: '.item19', target: 'sc19' }
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
for (let i = 1; i <= 19; i++) {
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
