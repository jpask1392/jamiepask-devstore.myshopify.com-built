import './styles/main.scss'

import $ from 'jquery';
import app from './scripts/app';
import bootstrap from 'bootstrap';

import 'lazysizes';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';

Shopify.API = Shopify.API || {};
Shopify.API.updateCartQuantity = (itemId, successCallback) => {
  $.ajax({
    type: "POST",
    url: "/cart/change.js",
    data: {
      id: itemId,
      quantity: parseInt($("#updates_" + itemId).val(), 10) || 0
    },
    dataType: "json",
    success: successCallback
  })
}

$(() => {
  // render pico components
  app.mount();
})
