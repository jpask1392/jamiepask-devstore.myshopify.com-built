import { component } from 'picoapp';
import $ from 'jquery';

export default component((node, ctx) => {
  $('.cart-item-quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.cart-item-increase'),
      btnDown = spinner.find('.cart-item-decrease'),
      min = input.attr('min'),
      max = 100000000;
  
    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      var newVal = 0;
      if (oldValue >= max) {
        newVal = oldValue;
      } else {
        newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  
    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      var newVal = 0;
      if (oldValue <= min) {
        newVal = oldValue;
      } else {
        newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  function updateOnQuantityChange(id) {
    $.ajax({
    type: "POST",
    url: "/cart/change.js",
    data: {
      id: id,
      quantity: parseInt($("#updates_" + id).val(), 10) || 0
    },
    dataType: "json",
    success: function () {
      location.reload();
    }
  })
  }
})
