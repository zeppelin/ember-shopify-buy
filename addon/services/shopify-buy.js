import Ember from 'ember';
import ShopifyBuy from 'shopify-buy/shopify';

const { computed, get } = Ember;

export default Ember.Service.extend({
  shopClient: computed({
    get() {
      return ShopifyBuy.buildClient({
        apiKey: get(this, 'apiKey'),
        myShopifyDomain: get(this, 'myShopifyDomain'),
        appId: get(this, 'appId')
      });
    }
  })
});
