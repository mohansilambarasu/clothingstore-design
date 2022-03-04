// AOS Library
AOS.init();

//Loader function
$(window).on("load",function() {
  $(".loader-wrapper").fadeOut("slow");
})

// While Ready
$(document).ready(function(){
  $(this).scrollTop(0);
});

$('.mainfeature h3').hide();
$('.mainfeature h3').fadeIn("5000");


// Shopping Cart

var myModal = new bootstrap.Modal(document.getElementById('exampleModalToggle'));
const productCards = document.querySelectorAll('.prodCard');
var count_item = 1;
var finalSize = '';
var counter = 0;
var counter_cart = 0;

// wishlist
var myModalwish = new bootstrap.Modal(document.getElementById('exampleModalToggle3'));
$('.wishlist i').click(function () {
  counter = counter + 1;
  // console.log('wishlist ' + counter);
  $(this).toggleClass('crimson');
})


productCards.forEach((item, i) => {
  item.addEventListener('click',(e) => {
    clicked_item = e.target;
    wishclass = clicked_item.getAttribute('class');
    // count_item = 1;
    if (wishclass === 'fa-solid fa-heart crimson') {
      myModalwish.show()
      // console.log(clicked_item,wishclass);
    }
    else if (wishclass === 'fa-solid fa-heart') {
      // console.log(clicked_item,wishclass);
    }
    else {
      count_item = 1;
      document.querySelectorAll('.counterNum')[0].innerHTML = count_item;
      myModal.show()
      finalSize = '';
      document.querySelectorAll('.cartBtn')[0].disabled = true;
    }
    // console.log('clicked',i);
    currentcard = productCards[i];
    currentcard_childNodes = currentcard.childNodes;
    currentPic = currentcard_childNodes[1].childNodes;
    currentContent = currentcard_childNodes[3].childNodes;
    currentPrice = currentcard_childNodes[5].childNodes;
    // console.log(currentPic,currentContent,currentPrice);
    cp = currentPic[1].getAttribute('src');
    ch3 = currentContent[1].innerText;
    cpel = currentContent[3].innerText;
    cpf = currentPrice[1].innerText;
    cpo = currentPrice[3].innerText;
    cpd = currentPrice[5].innerText;
    // console.log(cp,ch3,cpel,cpf,cpo,cpd);
    document.querySelectorAll('.modalOne .previewPic')[0].setAttribute('src',cp);
    document.querySelectorAll('.modalOne .previewName')[0].innerHTML = ch3;
    document.querySelectorAll('.modalOne .previewCat')[0].innerHTML = cpel;
    document.querySelectorAll('.modalOne .previewFinalp')[0].innerHTML = cpf;
    document.querySelectorAll('.modalOne .previewOldp')[0].innerHTML = cpo;
    document.querySelectorAll('.modalOne .previewDis')[0].innerHTML = cpd;
  })
});

// Modal Items Counter
document.querySelectorAll('.counterdiv button')[0].disabled = true;
$('.counterPlus').click(function () {
  count_item = count_item + 1;
  document.querySelectorAll('.counterNum')[0].innerHTML = count_item;
  document.querySelectorAll('.counterdiv button')[0].disabled = false;
  if (count_item > 24) {
    document.querySelectorAll('.counterdiv button')[1].disabled = true;
  }
});
$('.counterMinus').click(function () {
  count_item = count_item - 1;
  document.querySelectorAll('.counterNum')[0].innerHTML = count_item;
  document.querySelectorAll('.counterdiv button')[1].disabled = false;
  if (count_item < 2) {
    document.querySelectorAll('.counterdiv button')[0].disabled = true;
  }
});
// Size
$('.prevSize .sizes').click(function () {
  $('.prevSize .sizes').css('background-color','inherit');
  $('.prevSize .sizes').css('color','#000');
  $(this).css('background-color','#000');
  $(this).css('color','#fff');
  finalSize = this;
  document.querySelectorAll('.cartBtn')[0].disabled = false;
})


var counterAddCart = 0;
var counterRemoveCart = 0;

$('.cartBtn').click(function () {
  // console.log(cp,ch3,cpel,cpf,cpo,cpd,count_item,finalSize.innerHTML);
  name = ch3 + ' (' + finalSize.innerHTML + ')';
  quants = 'Quantity ' + count_item;
  counter_cart = counter_cart + 1;
  // console.log('clicked cart ' + counter_cart);
  numberofItems = parseInt(count_item);
  cpfNum = cpf.split(' ');
  perCost = parseInt(cpfNum[1]);
  fPrice = numberofItems * perCost ;
  finalPrice = cpfNum[0] + fPrice;
  console.log(numberofItems, perCost,finalPrice);
  // var img = document.createElement('img');
  // img.src = 'my_image.jpg';
  // document.getElementById('container').appendChild(img);



  // Reset Cart
  $('.prevSize .sizes').css('background-color','inherit');
  $('.prevSize .sizes').css('color','#000');

  // Create an "li" node:
  const nameNode = document.createElement("li");
  const quantNode = document.createElement("li");
  const priceNode = document.createElement("li");
  const totalPriceNode = document.createElement("li");
  const removeNode = document.createElement("li");


  // // Create a text node:
  const productName = document.createTextNode(name);
  const productQuant = document.createTextNode(count_item);
  const productPrice = document.createTextNode(cpf);
  const totalproductPrice = document.createTextNode(finalPrice);
  removeNode.setAttribute('class', 'fa-solid fa-circle-minus');

  // Append the text node to the "li" node:
  nameNode.appendChild(productName);
  quantNode.appendChild(productQuant);
  priceNode.appendChild(productPrice);
  totalPriceNode.appendChild(totalproductPrice);
  // removeNode.appendChild(removeRow);
  document.getElementById("myList1").appendChild(nameNode);
  document.getElementById("myList2").appendChild(quantNode);
  document.getElementById("myList3").appendChild(priceNode);
  document.getElementById("myList4").appendChild(totalPriceNode);
  document.getElementById("myList5").appendChild(removeNode);

  counterAddCart = counterAddCart + 1;
})


// View cart
var myModalCart = new bootstrap.Modal(document.getElementById('exampleModalToggle4'));


$('.viewCart').click(function () {
  // All modals are closed
  myModal.hide();
  // myModal2.hide();
  myModalCart.hide();
  myModalwish.hide();

  myModalCart.show();
  // document.querySelectorAll('.orderNowBtn')[0].disabled = true;
  const cartItems = document.querySelectorAll('.removalList5 li');
  // console.log(cartItems);
  cartItems.forEach((item, i) => {
    // console.log(item,i);
    // Removed Alert
    $('.removedCart').hide();
    $('.viewCart').hide();
    $(item).click(function () {
      $('.removedCart').removeClass('notifyOut');
      $('.removedCart').show();
      $('.removedCart').addClass('showACNot');
      $('.viewCart').fadeIn();
      setTimeout(function () {
          $('.removedCart').addClass('notifyOut');
      }, 2000);
      document.querySelectorAll('.removalList1 li')[i].style.display = 'none';
      document.querySelectorAll('.removalList2 li')[i].style.display = 'none';
      document.querySelectorAll('.removalList3 li')[i].style.display = 'none';
      document.querySelectorAll('.removalList4 li')[i].style.display = 'none';
      document.querySelectorAll('.removalList5 li')[i].style.display = 'none';
      // counterRemoveCart = counterRemoveCart + 1;
      // console.log(counterAddCart,counterRemoveCart);
    });
  });
});



// Alert Box
$('.addedCartNot').hide();
$('.viewCart').hide();
$('.cartBtn').click(function () {
  $('.addedCartNot').removeClass('notifyOut');
  $('.addedCartNot').show();
  $('.addedCartNot').addClass('showACNot');
  $('.viewCart').fadeIn();
  setTimeout(function () {
      $('.addedCartNot').addClass('notifyOut');
  }, 2000);
})
$('.addedCartNot').click(function () {
  $('.addedCartNot').hide();
})
$('.removedCart').click(function () {
  $('.removedCart').hide();
});


// mob version collapse navbar on click
$('.navbar-collapse a').click(function(){
  $(".navbar-collapse").collapse('hide');
});


// Category Modal -Under CONSTRUCTION
var myModalCategory = new bootstrap.Modal(document.getElementById('exampleModalToggle5'));

$('.categoryCols p').click(function () {
  myModalCategory.show();
})
$('.contactSoon').click(function () {
  myModalCategory.show();
})

var myModalCategoryNull = new bootstrap.Modal(document.getElementById('exampleModalToggl6'));

$('.navCart').click(function () {
  if (counterAddCart === 0) {
    myModalCategoryNull.show()
  }
  else {
    myModalCart.show()
  }
});

$('.happyface').hide();
$('.sadface').show();
$('.navStart').mouseover(function () {
  $('.happyface').show();
  $('.sadface').hide();
}).mouseout(function () {
  $('.happyface').hide();
  $('.sadface').show();
});
$('.navStart').click(function () {
  myModalCategoryNull.hide();
})


// navbar hover
$('.nav-link').hover(function () {
  console.log('nav');
  $('.nav-link').css('border-bottom','none');
  $(this).css('border-bottom','2px solid #fff');
});
// .mouseout(function () {
//   $(this).css('border-bottom','none');
// });
$('.nav-link').click(function () {
  console.log('nav');
  // $('.nav-link').css('border-bottom','none');
  $(this).css('border-bottom','2px solid #fff');
});


$('.newsBtn').click(function () {
  var x = document.forms["myForm"]["fname"].value;
  console.log(x);
    if (x === "") {
      $('.newsSub').hide();
      document.querySelectorAll('.newsSubContent')[0].innerHTML = 'Please Enter Mail id';
      $('.newsSub i').hide();
      $('.newsSub').fadeIn();
    }
    else {
      document.querySelectorAll('.newsSubContent')[0].innerHTML = "Thanks for Choosing us!";
      $('.newsSub i').fadeIn();
      $('.newsSub').fadeIn();
    }
    setTimeout(function () {
      $('.newsSub').fadeOut();
    }, 2000);
});


// navbar

$('.navbar-toggler').click(function () {
  console.log('yes');
});
