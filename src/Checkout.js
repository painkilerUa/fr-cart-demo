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

          <div className="checkout-method">
            <h2>1.Delivery method</h2>
            <p>Free shipping on oder over $30.00(tax excluded)</p>

            <div className="checkout-method-box">
              <div className="left">
                <input type="checkbox" name="shipToHome" id="shipToHome" className="ui-checkbox"/>
                <label for="shipToHome">Ship to home</label>
              </div>
              <div className="right">
                Shipping cost: <span className="product-price _purpure">$5.00</span>
              </div>
            </div>

            <div className="checkout-method-box">
              <div className="left">
                <input type="checkbox" name="inStorePickUp" id="inStorePickUp" className="ui-checkbox" />
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
                <div className="product-subtotal">
                  <span className="title">subtotal:</span> <span className="product-price _large">$2980.90</span>
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
                <div className="product-subtotal">
                  <span className="title">subtotal:</span> <span className="product-price large">$2980.90</span>
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
