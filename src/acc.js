$(document).ready(function(){
  $('#accordion-content-1').hide();
    $('#accordion-content-2').hide();
    $('#accordion-content-3').hide();
    $('#accordion-content-4').hide();
  $('#accordion-button-1').on('click', () => {
    $('#accordion-content-1').show();
    
    $('#accordion-content-2').hide();
    $('#accordion-content-3').hide();
    $('#accordion-content-4').hide();
  });
  $('#accordion-button-2').on('click', () => {
    $('#accordion-content-2').show();
    $('#accordion-content-1').hide();
    $('#accordion-content-3').hide();
    $('#accordion-content-4').hide();
  });
  $('#accordion-button-3').on('click', () => {
    $('#accordion-content-3').show();
    $('#accordion-content-2').hide();
    $('#accordion-content-1').hide();
    $('#accordion-content-4').hide();
  });
  $('#accordion-button-4').on('click', () => {
    $('#accordion-content-4').show();
    $('#accordion-content-2').hide();
    $('#accordion-content-3').hide();
    $('#accordion-content-1').hide();
    
  });
})


/*const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion))
*/