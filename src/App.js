import '../assets/styles/App.scss'

import React, {Component} from 'react'

class App extends Component {
  render() {
    return <div className="wrapper">

        <div className="header">
          <div className="page-container">
            {/*header-top*/}
            <div className="header-top">
              <nav className="nav">
                <ul className="navigation-list">
                  <li><a href="">Stores</a></li>
                  <li><a href="">Help</a></li>
                  <li><a href="">Company</a></li>
                  <li><a href="">Log in</a></li>
                  <li><a href="">English - Spanish</a></li>
                </ul>
              </nav>
            </div>
            {/*header-middle*/}
            <div className="header-middle">
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
            {/*header-bottom*/}
            <div className="header-bottom">
              <h1 className="header-title">Shopping cart</h1>
            </div>
          </div>
        </div>

        <main className="page-content">

          <div className="page-container">
            <h2>Wish list</h2>

            <ul className="products-list columns">
              <li className="product column _flex3">
                <div className="top">
                  <a href="" className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                    <div className="add-to-cart">add to cart</div>
                  </a>
                </div>
                <h3><a href="">Product description</a></h3>
                <div className="description">
                  <div className="id">Product ID: 564354</div>
                  <div className="color">Color: 09 BLACK</div>
                  <div className="size">Size: WOMEN M</div>
                  <div className="price">$7.90</div>
                  <div className="status">Limited price</div>
                </div>
              </li>
              <li className="product column _flex3">
                <div className="top">
                  <a href="" className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                    <div className="add-to-cart">add to cart</div>
                  </a>
                </div>
                <h3><a href="">Product description</a></h3>
                <div className="description">
                  <div className="id">Product ID: 564354</div>
                  <div className="color">Color: 09 BLACK</div>
                  <div className="size">Size: WOMEN M</div>
                  <div className="price">$7.90</div>
                  <div className="status">Limited price</div>
                </div>
              </li>
              <li className="product column _flex3">
                <div className="top">
                  <a href="" className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                    <div className="add-to-cart">add to cart</div>
                  </a>
                </div>
                <h3><a href="">Product description</a></h3>
                <div className="description">
                  <div className="id">Product ID: 564354</div>
                  <div className="color">Color: 09 BLACK</div>
                  <div className="size">Size: WOMEN M</div>
                  <div className="price">$7.90</div>
                  <div className="status">Limited price</div>
                </div>
              </li>
              <li className="product column _flex3">
                <div className="top">
                  <a href="" className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                    <div className="add-to-cart">add to cart</div>
                  </a>
                </div>
                <h3><a href="">Product description</a></h3>
                <div className="description">
                  <div className="id">Product ID: 564354</div>
                  <div className="color">Color: 09 BLACK</div>
                  <div className="size">Size: WOMEN M</div>
                  <div className="price">$7.90</div>
                  <div className="status">Limited price</div>
                </div>
              </li>
              <li className="product column _flex3">
                <div className="top">
                  <a href="" className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                    <div className="add-to-cart">add to cart</div>
                  </a>
                </div>
                <h3><a href="">Product description</a></h3>
                <div className="description">
                  <div className="id">Product ID: 564354</div>
                  <div className="color">Color: 09 BLACK</div>
                  <div className="size">Size: WOMEN M</div>
                  <div className="price">$7.90</div>
                  <div className="status">Limited price</div>
                </div>
              </li>
              <li className="product column _flex3">
                <div className="top">
                  <a href="" className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                    <div className="add-to-cart">add to cart</div>
                  </a>
                </div>
                <h3><a href="">Product description</a></h3>
                <div className="description">
                  <div className="id">Product ID: 564354</div>
                  <div className="color">Color: 09 BLACK</div>
                  <div className="size">Size: WOMEN M</div>
                  <div className="price">$7.90</div>
                  <div className="status">Limited price</div>
                </div>
              </li>
              <li className="product column _flex3">
                <div className="top">
                  <a href="" className="img" style={{backgroundImage: "url(https://www.uniqlo.com/uk/en/pages/reviews/images/cashmere-crew-women.jpg)"}}>
                    <div className="add-to-cart">add to cart</div>
                  </a>
                </div>
                <h3><a href="">Product description</a></h3>
                <div className="description">
                  <div className="id">Product ID: 564354</div>
                  <div className="color">Color: 09 BLACK</div>
                  <div className="size">Size: WOMEN M</div>
                  <div className="price">$7.90</div>
                  <div className="status">Limited price</div>
                </div>
              </li>
            </ul>
          </div>

        </main>

        <div className="footer">
          <div className="footer-top">
            <div className="page-container">
              <div className="columns">
                {/*about*/}
                <div className="column _flex4">
                  <h3 className="_with-border">About Uniqlo</h3>
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
                  <h3 className="_with-border">Help</h3>
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
                      <h3 className="_with-border">Uniqlo e-member</h3>
                      <p>Sign up for Uniqlo News and get a special WELCOME OFFER within 24 hours.</p>
                      <div className="form-sign-up">
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
                      <div className="sponsors">
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
