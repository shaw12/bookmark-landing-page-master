$(document).ready(function(){

  $('#accordion-content-1').hide();
  $('#accordion-content-2').hide();
  $('#accordion-content-3').hide();
  $('#accordion-content-4').hide();
  $('#down').hide();
  $('#down2').hide();
  $('#down3').hide();
  $('#down4').hide();

  $('#accordion-button-1').on('click', (event) => {
    $('#accordion-content-1').toggle();
    $('#accordion-content-2').hide();
    $('#accordion-content-3').hide();
    $('#accordion-content-4').hide();
    $('#down').toggle();
    $('#up').toggle();
    $('#down').addClass('fa');
    $('#down2').hide();
    $('#up2').show();
    $('#down3').hide();
    $('#up3').show();
    $('#down4').hide();
    $('#up4').show();
  });
  $('#accordion-button-2').on('click', () => {
    $('#accordion-content-2').toggle();
    $('#accordion-content-1').hide();
    $('#accordion-content-3').hide();
    $('#accordion-content-4').hide();
    $('#down2').toggle();
    $('#up2').toggle();
    $('#down2').addClass('fa');
    $('#down').hide();
    $('#up').show();
    $('#down3').hide();
    $('#up3').show();
    $('#down4').hide();
    $('#up4').show();
  });
  $('#accordion-button-3').on('click', () => {
    $('#accordion-content-3').toggle();
    $('#accordion-content-2').hide();
    $('#accordion-content-1').hide();
    $('#accordion-content-4').hide();
    $('#down3').toggle();
    $('#up3').toggle();
    $('#down3').addClass('fa');
    $('#down2').hide();
    $('#up2').show();
    $('#down').hide();
    $('#up').show();
    $('#down4').hide();
    $('#up4').show();
  });
  $('#accordion-button-4').on('click', () => {
    $('#accordion-content-4').toggle();
    $('#accordion-content-2').hide();
    $('#accordion-content-3').hide();
    $('#accordion-content-1').hide();
    $('#down4').toggle();
    $('#up4').toggle();
    $('#down4').addClass('fa');
    $('#down2').hide();
    $('#up2').show();
    $('#down3').hide();
    $('#up3').show();
    $('#down').hide();
    $('#up').show();
  });
  $('.ride1').addClass('activex');
  $('.ride1').on('click', () => {
    $('.ride1').addClass('activex');
    $('.ride2').removeClass('activex');
    $('.ride3').removeClass('activex');
  })
  $('.ride2').on('click', () => {
    $('.ride2').addClass('activex');
    $('.ride1').removeClass('activex');
    $('.ride3').removeClass('activex');
  })
  $('.ride3').on('click', () => {
    $('.ride3').addClass('activex');
    $('.ride2').removeClass('activex');
    $('.ride1').removeClass('activex');
  })
  
  $('.clos').hide();
  $('.hum').on('click', () => {
    $('.hum').toggle();
    $('.clos').toggle();
  })
  $('.clos').on('click', () => {
    $('.clos').toggle();
    $('.hum').toggle();
  })
});

