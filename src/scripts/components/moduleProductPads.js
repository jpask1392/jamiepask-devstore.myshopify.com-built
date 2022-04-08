/* global Theme */

import { component } from 'picoapp';
import $ from 'jquery';

export default component((node, ctx) => {
  handleTrialCheckbox(node);
  handleSubscriptionTypeChange(node);
  handleDeliveryFrequency(node);

  const productJSON = JSON.parse($('#product-json-data').text());
  new Shopify.OptionSelectors(`productselect${productJSON.id}`, { 
    product: productJSON, 
    onVariantSelected: (variant, selector) => variantChangeCallback(variant, selector, node), 
  });
})


/**
 * Handle delivery frequency changes
 */
 const handleDeliveryFrequency = (node) => {
  let $trialDisclaimer = $(node).find('.trial-disclaimer');

  $('select[id^="rc_shipping_interval_frequency"]').on('change', (e) => {
    const deliveryDate = $(e.currentTarget).find('option:selected').data('delivery-date');
    let $trialDisclaimerDeliveryDate = $trialDisclaimer.find('.delivery-date');
    $trialDisclaimerDeliveryDate.text(deliveryDate);
  })
}

/**
 * Handle variant changes
 * 
 * @param {*} variant 
 * @param {*} selector 
 * @param {*} node 
 */
const variantChangeCallback = (variant, selector, node) => {
  console.log(variant)
  let $trialDisclaimer = $(node).find('.trial-disclaimer');
  
  if ($trialDisclaimer.length) {

    let $trialDisclaimerPadCount = $trialDisclaimer.find('.pad-count'),
        $trialDisclaimerPadPrice = $trialDisclaimer.find('.pad-price');

    $trialDisclaimerPadCount.text(variant.title);
    $trialDisclaimerPadPrice.text(Shopify.formatMoney((variant.price * 0.95), Theme.moneyFormat));
  }
}

/**
 * Subscription type change updates
 * 
 * @param {*} node 
 */
const handleSubscriptionTypeChange = (node) => {
  let isCompare = $('#originalPrice').data('is-compare')
  $('.product-form').on('change', function() {
    let $trialDisclaimer = $(node).find('.trial-disclaimer'),
        $shipmentSize = $(node).find('.product-options-title.Count .shipment-pre-text');

    if ($('.rc_radio__onetime').is(":checked")) {
      $('#rc_autodeliver_options').removeClass('d-block').addClass('d-none');
      $('#subscriptionProductDisclaimer').removeClass('d-block').addClass('d-none');
      $('.subscribe-save-list').removeClass('d-block').addClass('d-none');
      $('.order-once-list').removeClass('d-none').addClass('d-block');
      if (!isCompare) $('#originalPrice').removeClass('d-inline').addClass('d-none');

      // hide disclaimer
      $trialDisclaimer.hide();
      $shipmentSize.hide();
    } else {
      $('#rc_autodeliver_options').removeClass('d-none').addClass('d-block');
      $('#subscriptionProductDisclaimer').removeClass('d-none').addClass('d-block');
      $('.subscribe-save-list').removeClass('d-none').addClass('d-block');
      $('.order-once-list').removeClass('d-block').addClass('d-none');	
      if (!isCompare) $('#originalPrice').removeClass('d-none').addClass('d-inline');

      // show disclaimer
      $trialDisclaimer.show();
      $shipmentSize.show();
    }
  });
}

/**
 * Handle the trial disclaimer on 
 * trial product pages.
 * 
 * @param {*} node primary product module
 */
const handleTrialCheckbox = (node) => {
  const isTrialProduct = $(node).data('isTrialProduct');
  if (!isTrialProduct) return;

  const $checkbox = $(node).find('#padsTrialAgreement');
  $(node).find('.product-form').on('submit', (e) => {
    if(!$checkbox.is(':checked') && !$('.rc_radio__onetime').is(":checked")) {
      e.preventDefault();
      $('#padsTrialAgreeError').show();
    }
  })
}
