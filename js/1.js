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
  document.querySelector('.div1p20').style.textAlign='right';
  document.querySelector('.div1p21').style.textAlign='right';
  document.querySelector('.div1p22').style.textAlign='right';
  document.querySelector('.div1p23').style.textAlign='right';


  document.querySelector('.itemtitle1').innerHTML="المشروبات الساخنة";
  document.querySelector('.div1p1').innerHTML="المشروبات الساخنة";
  document.querySelector('.pburg5').innerHTML="كباشينو";
  document.querySelector('.pburg7').innerHTML="هوت شوكليت";
  document.querySelector('.pburg8').innerHTML="قهوه تركية";
  document.querySelector('.pburg2').innerHTML="اسبريسو";
  document.querySelector('.pburg3').innerHTML="اسبريسو دبل";
  document.querySelector('.pburg16').innerHTML="لونكو";
  document.querySelector('.pburg1').innerHTML="اسبريسو افاكادو";
  document.querySelector('.pburg10').innerHTML="اسبريسو ماجياتو ";
  document.querySelector('.pburg4').innerHTML="امريكانو";
  document.querySelector('.pburg6').innerHTML="اسبريسو كون بانا";
  document.querySelector('.pburg9').innerHTML="سحلب";
  document.querySelector('.pburg11').innerHTML="يسبريسو روامانو";
  document.querySelector('.pburg12').innerHTML="فلات وايت";
  document.querySelector('.pburg13').innerHTML="كراميل موجياتو";
  document.querySelector('.pburg14').innerHTML="حليب";
  document.querySelector('.pburg15').innerHTML=" لوكا";
  document.querySelector('.pburg17').innerHTML="وايت موكا ";
  document.querySelector('.pburgg1').innerHTML="سينامون دولجي";
  document.querySelector('.pburgg2').innerHTML=" لاتي";
  document.querySelector('.pburg18').innerHTML="طعم لاتي";
  document.querySelector('.k136').innerHTML="كافيرنا كوفي";
  document.querySelector('.k137').innerHTML="ماجا";

  document.querySelector('.itemtitle2').innerHTML="قهوه باردا";
  document.querySelector('.itemtitle2').style.fontWeight=500;
  document.querySelector('.itemtitle2').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p2').innerHTML="قهوه باردا";
  document.querySelector('.pburg22').innerHTML="لاتي بارد";
  document.querySelector('.pburg23').innerHTML="ايس موكا";
  document.querySelector('.pburg24').innerHTML="لاتي بارد طعم";
  document.querySelector('.k1').innerHTML="ايس اميريكانو";
  document.querySelector('.k2').innerHTML="اسباني ";
  document.querySelector('.k3').innerHTML="ايس لاتي بستاشو";
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
  document.querySelector('.k18').innerHTML="يسبريسو فرابي";

  document.querySelector('.itemtitle4').innerHTML="ميلكشيك";
  document.querySelector('.item4').style.width='100px';
  document.querySelector('.itemtitle4').style.fontWeight=500;
  document.querySelector('.itemtitle4').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p5').innerHTML="ميلكشيك";
  document.querySelector('.k24').innerHTML="ميلكشيك فراولة";
  document.querySelector('.k25').innerHTML="ميلكشيك موز";
  document.querySelector('.k26').innerHTML="ميلكشيك كراميل";
  document.querySelector('.k27').innerHTML="كافيلرنا ميلكشيك";
  document.querySelector('.k28').innerHTML="ميلكشيك نوتيلا";
  document.querySelector('.k29').innerHTML="ميلكشيك لوتس";
  document.querySelector('.k30').innerHTML="ميلكشيك اوريو";
  

  document.querySelector('.itemtitle5').innerHTML="سموثي";
  document.querySelector('.item5').style.width='90px';
  document.querySelector('.itemtitle5').style.fontWeight=500;
  document.querySelector('.itemtitle5').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p6').innerHTML="سموثي";
  document.querySelector('.k32').innerHTML="سموثي فرولة";
  document.querySelector('.k33').innerHTML="سموثي مانجو";
  document.querySelector('.k34').innerHTML="سموثي اناناس";
  document.querySelector('.k35').innerHTML="سموثي بلوبيري ";
 

  document.querySelector('.itemtitle6').innerHTML="موهيتو";
  document.querySelector('.item6').style.width='90px';
  document.querySelector('.itemtitle6').style.fontWeight=500;
  document.querySelector('.itemtitle6').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p7').innerHTML="موهيتو";
  document.querySelector('.k42').innerHTML="موهيتو فراولة";
  document.querySelector('.k43').innerHTML="موهيتو بلوبيري";
  document.querySelector('.k44').innerHTML="موهيتو مانجو";
  document.querySelector('.k45').innerHTML="باشون موهيتو";
  document.querySelector('.k46').innerHTML="موهيتو كرز";
  document.querySelector('.k47').innerHTML="موهيتو كريناداين";
  document.querySelector('.k48').innerHTML="موهيتو كوكتيل ازرق موهيتو";
  document.querySelector('.k49').innerHTML="موهيتو رمان";
  document.querySelector('.k50').innerHTML="سبيشال موهيتو";

  document.querySelector('.itemtitle7').innerHTML="ايس تي";
  document.querySelector('.item7').style.width='100px';
  document.querySelector('.itemtitle7').style.fontWeight=500;
  document.querySelector('.itemtitle7').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p8').innerHTML="ايس تي";
  document.querySelector('.k52').innerHTML="ايس تي ليمون";
  document.querySelector('.k53').innerHTML="ايس تي خوخ";

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
  document.querySelector('.k71').innerHTML="كوكتيل ازرق ";
  document.querySelector('.k72').innerHTML="L.T.D";
  document.querySelector('.k73').innerHTML="فولدمور ";
  document.querySelector('.k74').innerHTML="ميك";
  document.querySelector('.k75').innerHTML="جيراسيك";


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
  document.querySelector('.k999').innerHTML="افاكادو";
  document.querySelector('.k998').innerHTML="مانجو";
  document.querySelector('.k997').innerHTML="كوكتيل";
  document.querySelector('.k996').innerHTML="حليب و موز";


  document.querySelector('.itemtitle11').innerHTML="شاي";
  document.querySelector('.item11').style.width='110px';
  document.querySelector('.itemtitle11').style.fontWeight=500;
  document.querySelector('.itemtitle11').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p19').innerHTML="شاي";
  document.querySelector('.k128').innerHTML="شاي";
  document.querySelector('.k129').innerHTML="شاي اخضر";
  document.querySelector('.k135').innerHTML="كاراك شاي";

  document.querySelector('.itemtitle12').innerHTML="كريب";
  document.querySelector('.item12').style.width='110px';
  document.querySelector('.itemtitle12').style.fontWeight=500;
  document.querySelector('.itemtitle12').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p20').innerHTML="كريب";
  document.querySelector('.m100').innerHTML="كريب نوتيلا";
  document.querySelector('.m101').innerHTML="كريب كندر";
  document.querySelector('.m102').innerHTML="كريب فستق";
  document.querySelector('.m103').innerHTML="كريب لوتس";

  document.querySelector('.itemtitle13').innerHTML="ميني بانكيك";
  document.querySelector('.item13').style.width='150px';
  document.querySelector('.itemtitle13').style.fontWeight=500;
  document.querySelector('.itemtitle13').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p21').innerHTML="ميني بانكيك";
  document.querySelector('.m200').innerHTML="ميني بانكيك نوتيلا";
  document.querySelector('.m201').innerHTML="ميني بانكيك كندر";
  document.querySelector('.m202').innerHTML="ميني بانكيك فستق";
  document.querySelector('.m203').innerHTML="ميني بانكيك لوتس";

  document.querySelector('.itemtitle14').innerHTML="وافل";
  document.querySelector('.item14').style.width='110px';
  document.querySelector('.itemtitle14').style.fontWeight=500;
  document.querySelector('.itemtitle14').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p22').innerHTML="وافل";
  document.querySelector('.m300').innerHTML=" وافل نوتيلا";
  document.querySelector('.m301').innerHTML=" وافل كندر";
  document.querySelector('.m302').innerHTML=" وافل فستق";
  document.querySelector('.m303').innerHTML=" وافل لوتس";

  document.querySelector('.itemtitle15').innerHTML="بانكيك";
  document.querySelector('.item15').style.width='120px';
  document.querySelector('.itemtitle15').style.fontWeight=500;
  document.querySelector('.itemtitle15').style.fontFamily="'Roboto', serif";
  document.querySelector('.div1p23').innerHTML="بانكيك";
  document.querySelector('.m400').innerHTML=" بانكيك نوتيلا";
  document.querySelector('.m401').innerHTML=" بانكيك كندر";
  document.querySelector('.m402').innerHTML=" بانكيك فستق";
  document.querySelector('.m403').innerHTML=" بانكيك لوتس";

  document.querySelector('.itemtitle16').innerHTML="عن كافيرنا";
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
    { button: '.item12', target: 'sc12' },
    { button: '.item13', target: 'sc13' },
    { button: '.item14', target: 'sc14' },
    { button: '.item15', target: 'sc15' },
    { button: '.item16', target: 'sc16' }
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
for (let i = 1; i <= 16; i++) {
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
