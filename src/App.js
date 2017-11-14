import '../assets/styles/App.scss'

import React, {Component} from 'react'

class App extends Component {
  render() {
    return <div className="page-holder">

        <div className="header">

            {/*header-top*/}
            <div className="header-top">
              <div className="page-container">
                <nav className="nav">
                  <ul className="navigation-list">
                    <li><a href=""><span className="sprite-location"></span>Stores</a></li>
                    <li><a href=""><span className="sprite-question"></span>Help</a></li>
                    <li><a href=""><span className="sprite-company"></span>Company</a></li>
                    <li><a href=""><span className="sprite-user"></span>Log in</a></li>
                    <li className="dropdown">
                      <div className="dropdown-title">
                        <div className="icon-arrow _down _dark"></div>
                        <span className="sprite-map"></span>
                        English - Spanish
                      </div>
                      <div className="dropdown-content">
                        <ul className="dropdown-list">
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                          <li><a href="">Germany</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/*header-middle*/}
            <div className="header-middle">
              <div className="page-container">

                {/*left*/}
                <div className="header-middle-left">
                  <a href="https://www.uniqlo.com/uk/en/home" target="_blank" className="sprite-logo-en"></a>
                  <a href="https://www.uniqlo.com/uk/en/home" target="_blank" className="sprite-logo-jp"></a>
                  <nav className="navigation-main">
                    <ul className="navigation-main-list">
                      <li><a href="">new</a></li>
                      <li><a href="">sale</a></li>
                      <li><a href="">woman</a></li>
                      <li><a href="">men</a></li>
                      <li><a href="">kids</a></li>
                      <li><a href="">baby</a></li>
                    </ul>
                  </nav>
                </div>
                {/*left end*/}

                {/*left*/}
                <div className="header-middle-right">

                  <div className="form-search">
                    <input type="search" className="form-control" placeholder="Item name"/>
                    <button type="submit" className="btn-transparent"><span className="sprite-search"></span></button>
                  </div>

                  <a href="" className="sprite-heart"></a>
                  <a href="" className="sprite-cart"></a>
                </div>
                {/*left end*/}

              </div>
            </div>
            {/*header-bottom*/}
            <div className="header-bottom">
              <div className="page-container">
              {/*<h1 className="header-title">Shopping cart</h1>*/}
              <h1 className="header-title">Checkout</h1>
              {/*dropdown*/}
              <div className="dropdown _large">
                <div className="dropdown-title">
                  <div className="icon-arrow _down"></div>
                  <div className="product-order-summary">
                    <strong>order summary</strong>
                    <span className="amount">99 items</span>
                  </div>
                  <div className="product-price _large-m _items-right">$1249.00</div>
                </div>

                <div className="dropdown-total">
                  <dl className="dl-between">
                    <dt>Product total</dt>
                    <dd>$39.90</dd>
                    <dt>Gift free</dt>
                    <dd>$1.50</dd>
                    <dt>Postage</dt>
                    <dd>$4.50</dd>
                  </dl>
                  <dl className="dl-between">
                    <dt>tax</dt>
                    <dd>$3.19</dd>
                    <dt>Service charge</dt>
                    <dd>-$0.09</dd>
                  </dl>
                  <div className="product-subtotal _between _dark">
                    <span className="title">total(tax in):</span> <span className="product-price large">$1249.00</span>
                  </div>
                </div>
              </div>
              {/*dropdown end*/}
              </div>
            </div>
          </div>

        <div className="page-container">
          <main className="page-content">
              {/*page-content-inner*/}
              <div className="page-content-inner">

                <ul className="products-list">
                  <li className="product img-left">
                    <a href="" className="btn-transparent product-delete"><span className="sprite-cross"></span></a>
                    <div className="top">
                      <div  className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                        <a href="" className="btn-dark">add to cart</a>
                      </div>
                      <a href="" className="btn-transparent product-add-fav"><span className="sprite-heart-plus"></span></a>
                    </div>
                    <div className="description">
                      <h3><a href="">Product description</a></h3>
                      <div className="id">Product ID: 564354</div>
                      <div className="color">Color: 09 BLACK</div>
                      <div className="size">Size: WOMEN M</div>
                      <p>Pre-sales, New color, New pattern, Online limited products</p>
                      <div className="status">Limited price</div>
                      <div className="status">Bulk-buying target</div>
                      <div className="product-price">$7.90</div>

                      <div className="select-holder small">
                        <select name="productAmount" className="form-control select">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>
                      </div>

                      <div className="product-subtotal">
                        <span className="title">subtotal:</span> <span className="product-price large">$2980.90</span>
                      </div>
                    </div>
                  </li>
                  <li className="product img-left">
                    <div className="top">
                      <div  className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                        <a href="" className="btn-dark">add to cart</a>
                      </div>
                    </div>
                    <div className="description">
                      <h3><a href="">Product description</a></h3>
                      <div className="id">Product ID: 564354</div>
                      <div className="color">Color: 09 BLACK</div>
                      <div className="size">Size: WOMEN M</div>
                      <p>Pre-sales, New color, New pattern, Online limited products</p>
                      <div className="status">Limited price</div>
                      <div className="status">Bulk-buying target</div>
                      <div className="product-price">$7.90</div>

                      <div className="select-holder small">
                        <select name="productAmount" className="form-control select">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>
                      </div>

                      <div className="product-subtotal">
                        <span className="title">subtotal:</span> <span className="product-price large">$2980.90</span>
                      </div>
                    </div>
                  </li>
                  <li className="product img-left">
                    <div className="top">
                      <div  className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                        <a href="" className="btn-dark">add to cart</a>
                      </div>
                    </div>
                    <div className="description">
                      <h3><a href="">Product description</a></h3>
                      <div className="id">Product ID: 564354</div>
                      <div className="color">Color: 09 BLACK</div>
                      <div className="size">Size: WOMEN M</div>
                      <p>Pre-sales, New color, New pattern, Online limited products</p>
                      <div className="status">Limited price</div>
                      <div className="status">Bulk-buying target</div>
                      <div className="product-price">$7.90</div>

                      <div className="select-holder small">
                        <select name="productAmount" className="form-control select">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>
                      </div>

                      <div className="product-subtotal">
                        <span className="title">subtotal:</span> <span className="product-price _large">$2980.90</span>
                      </div>
                    </div>
                  </li>
                </ul>

                <h2>Wish list</h2>
                <ul className="products-list columns">
                  <li className="product column _flex3">
                    <div className="top">
                      <div  className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                        <a href="" className="btn-dark">add to cart</a>
                      </div>
                    </div>
                    <h3><a href="">Product description</a></h3>
                    <div className="description">
                      <div className="id">Product ID: 564354</div>
                      <div className="color">Color: 09 BLACK</div>
                      <div className="size">Size: WOMEN M</div>
                      <div className="product-price _red _large">$7.90</div>
                      <div className="status">Limited price</div>
                    </div>
                  </li>
                  <li className="product column _flex3">
                    <div className="top">
                      <div  className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                        <a href="" className="btn-dark">add to cart</a>
                      </div>
                    </div>
                    <h3><a href="">Product description</a></h3>
                    <div className="description">
                      <div className="id">Product ID: 564354</div>
                      <div className="color">Color: 09 BLACK</div>
                      <div className="size">Size: WOMEN M</div>
                      <div className="product-price _red _large">$7.90</div>
                      <div className="status">Limited price</div>
                    </div>
                  </li>
                </ul>
                <h2>You may also like</h2>
                <ul className="products-list columns">
                  <li className="product column _flex3">
                    <div className="top">
                      <div  className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                        <a href="" className="btn-dark">add to cart</a>
                      </div>
                    </div>
                    <h3><a href="">Product description</a></h3>
                    <div className="description">
                      <p>Pre-sales, New color, New pattern, Online limited products</p>
                      <div className="product-price _red _large">$7.90</div>
                      <div className="status">Limited price</div>
                      <div className="status">Bulk-buying target</div>
                    </div>
                  </li>
                  <li className="product column _flex3">
                    <div className="top">
                      <div  className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                        <a href="" className="btn-dark">add to cart</a>
                      </div>
                    </div>
                    <h3><a href="">Product description</a></h3>
                    <div className="description">
                      <p>Pre-sales, New color, New pattern, Online limited products</p>
                      <div className="product-price _red _large">$7.90</div>
                      <div className="status">Limited price</div>
                      <div className="status">Bulk-buying target</div>
                    </div>
                  </li>
                  <li className="product column _flex3">
                    <div className="top">
                      <div  className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                        <a href="" className="btn-dark">add to cart</a>
                      </div>
                    </div>
                    <h3><a href="">Product description</a></h3>
                    <div className="description">
                      <p>Pre-sales, New color, New pattern, Online limited products</p>
                      <div className="product-price _red _large">$7.90</div>
                      <div className="status">Limited price</div>
                      <div className="status">Bulk-buying target</div>
                    </div>
                  </li>
                </ul>
              </div>
              {/*page-content-inner end*/}
              {/*page-sidebar*/}
              <aside className="page-sidebar">
                {/*page-sidebar-section*/}
                <div className="page-sidebar-section">
                  <div className="sidebar-accordion _open">
                    <div className="title">
                      <div className="icon-arrow _left"></div>
                      <div className="product-order-summary">
                        <strong>order summary</strong>
                        <span className="amount">3 item</span>
                      </div>
                    </div>
                    <div className="description">
                      <div class="product-subtotal">
                        <span class="title">total(tax in):</span> <span class="product-price _large">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*page-sidebar-section end*/}

                {/*page-sidebar-section*/}
                <div className="page-sidebar-section">

                  <div className="sidebar-accordion">
                    <div className="title">
                      <div className="icon-arrow _left"></div>
                      <p className="paragraph-with-icon">
                        <span className="sprite-coupon"></span>
                        <strong>Apply coupon</strong>
                      </p>
                    </div>
                    <div className="description">
                      <div class="product-subtotal">
                        <span class="title">subtotal:</span> <span class="product-price _large">$2980.90</span>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-accordion">
                    <div className="title">
                      <div className="icon-arrow _left"></div>
                      <p className="paragraph-with-icon">
                        <span className="sprite-price"></span>
                        <strong>Use gift option</strong>
                      </p>
                    </div>
                    <div className="description">
                      <div class="product-subtotal">
                        <span class="title">subtotal:</span> <span class="product-price large">$2980.90</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*page-sidebar-section end*/}

                <div className="page-sidebar-section _with-padding">
                  <div className="sidebar-checkout">
                    <p>Inventory will be secured for 60 minutes after tapping "to Purches Items".</p>
                    <a href="" className="btn-red _large _full">Checkout</a>
                  </div>
                  <h3>Checkout with</h3>
                  <a href="" className="btn-with-dark-border _large _full _center">
                    <img src="../assets/images/brands/05-img.jpg" alt=""/>
                  </a>
                  <a href="" className="btn-transparent _large _full">Continue shopping</a>
                </div>
                {/*page-sidebar-section end*/}
              </aside>
              {/*page-sidebar end*/}


          </main>


          <div className="checkout-method">
            <h2>1.Delivery method</h2>
            <p>Free shipping on oder over $30.00(tax excluded)</p>

            <div className="checkout-method-box">
              <div className="left">
                <input type="checkbox" name="shipToHome" id="shipToHome" class="ui-checkbox"/>
                <label for="shipToHome">Ship to home</label>
              </div>
              <div className="right">
                Shipping cost: <span className="product-price _purpure">$5.00</span>
              </div>
            </div>

            <div className="checkout-method-box">
              <div className="left">
                <input type="checkbox" name="inStorePickUp" id="inStorePickUp" class="ui-checkbox" />
                <label for="inStorePickUp">In store pick up</label>
              </div>
              <div className="right">
                Shipping cost: <span className="product-price _purpure">Free</span>
              </div>
            </div>
          </div>

          <div className="checkout-method">
            <div className="sidebar-accordion _large _open">
              <div className="title">
                <div className="icon-arrow _left"></div>
                <p className="paragraph-with-icon">
                  <span className="sprite-coupon"></span>
                  <strong>Apply coupon</strong>
                </p>
              </div>
              <div className="description">
                <div class="product-subtotal">
                  <span class="title">subtotal:</span> <span class="product-price _large">$2980.90</span>
                </div>
              </div>
            </div>

            <div className="sidebar-accordion _large">
              <div className="title">
                <div className="icon-arrow _left"></div>
                <p className="paragraph-with-icon">
                  <span className="sprite-price"></span>
                  <strong>Use gift option</strong>
                </p>
              </div>
              <div className="description">
                <div class="product-subtotal">
                  <span class="title">subtotal:</span> <span class="product-price large">$2980.90</span>
                </div>
              </div>
            </div>
          </div>

          <div className="checkout-method">
            <h2>1.Payment method</h2>
          </div>

          <p className="checkout-info paragraph-with-icon">
            <span className="sprite-lock"></span>
            Information entered on this page is pretected by TLS and sent <a href="" className="link-custom">ABOUT TLS</a>
          </p>

        </div>

        <div className="footer">
          <div className="footer-top">
            <div className="page-container">
              <div className="columns _no-margin-bottom">
                {/*about*/}
                <div className="column _flex4">
                  <h3 className="_with-border _text">About Uniqlo</h3>
                  <ul className="footer-menu-list">
                    <li><a href="">Who We Are</a></li>
                    <li><a href="">Our Story</a></li>
                    <li><a href="">SUSTAINABILITY</a></li>
                    <li><a href="">UNIQLO News</a></li>
                    <li><a href="">Sponsored Athletes</a></li>
                    <li><a href="">Corporate information</a></li>
                    <li><a href="">Group Companies</a></li>
                  </ul>
                </div>
                {/*about end*/}
                {/*help*/}
                <div className="column _flex4">
                  <h3 className="_with-border _text">Help</h3>
                  <ul className="footer-menu-list">
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Shipping</a></li>
                    <li><a href="">In Store Pick Up</a></li>
                    <li><a href="">Returns</a></li>
                    <li><a href="">Order Status</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Our Stores</a></li>
                    <li><a href="">Store Feadback</a></li>
                    <li><a href="">Unsubscribe</a></li>
                    <li><a href="">Accessibility</a></li>
                  </ul>
                </div>
                {/*help end*/}
                <div className="column _flex2">
                  <div className="columns">
                    {/*social*/}
                    <div className="column _flex2">
                      <h3 className="_with-border">Official sns accounts</h3>
                      <ul className="social-list">
                        <li><a href="" className="icon-facebook">facebook</a></li>
                        <li><a href="" className="icon-twitter">twitter</a></li>
                        <li><a href="" className="icon-instagram">instagram</a></li>
                        <li><a href="" className="icon-youtube">youtube</a></li>
                        <li><a href="" className="icon-pinterest">pinterest</a></li>
                      </ul>
                    </div>
                    {/*social end*/}
                    {/*Sign up*/}
                    <div className="column _flex2">
                      <h3 className="_with-border _text">Uniqlo e-member</h3>
                      <div className="form-sign-up">
                        <p>Sign up for Uniqlo News and get a special WELCOME OFFER within 24 hours.</p>
                        <form action="">
                          <input type="text" placeholder="Enter E-mail" className="form-control"/>
                          <button className="btn-dark _full">Sign up</button>
                        </form>
                      </div>
                    </div>
                    {/*Sign up end*/}
                  </div>
                  {/*brands*/}
                  <div className="columns">
                    <div className="column _flex1">
                      <h3 className="_with-border">Fast retailing group brand</h3>
                      <div className="footer-brands">
                        <img src="../assets/images/brands/01-img.jpg" alt=""/>
                        <img src="../assets/images/brands/02-img.jpg" alt=""/>
                        <img src="../assets/images/brands/03-img.jpg" alt=""/>
                        <img src="../assets/images/brands/04-img.jpg" alt=""/>
                      </div>
                    </div>
                  </div>
                  {/*brands end*/}
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="page-container">© UNIQLO CO. LTD. All rights reserved.</div>
          </div>
        </div>
    </div>
  }
}

export default App;
