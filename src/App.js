import '../src/sass/main.scss';
  

function App() {
  return (
    <div className="App">
      <body>
        <div className="navigation">
          <div className="navigation_inner">
            {/* <div className="__logo">
              A
            </div> */}

            <div className="__menu">
              <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
              <label for="navi-toggle" className="navigation__button">A</label>

              <div class="navigation__background">&nbsp;</div>

              <nav className="navigation__nav">
                <ul className="navigation__list">
                  <li className="navigation__item"><a href="#" className="navigation__link">Products</a></li>
                  <li className="navigation__item"><a href="#" className="navigation__link">Services</a></li>
                  <li className="navigation__item"><a href="#" className="navigation__link">Artisanss</a></li>
                  <li className="navigation__item"><a href="#" className="navigation__link">Projects</a></li>
                  <li className="navigation__item"><a href="#" className="navigation__link">Showroom</a></li>
                  <li className="navigation__item"><a href="#" className="navigation__link">About</a></li>
                  <li className="navigation__item"><a href="#" className="navigation__link">Contact</a></li>
                  <li className="navigation__item"><a href="#" className="navigation__link">Brochure</a></li>
                </ul>
                <p className="navigation__big_A">A</p>
              </nav>  
                
            </div>

          </div>


        </div>
        <header>
          <div className="header_wrapper">
            <div className="header_left">
              <div className="banner_content">
                <p className="header_title">International artisan & construction material sourcing <br /> company</p>
                <p className="title_description">Discovering special people producing extraordinary products</p>
                <div className="anchor_links">
                  <div className="link_wrapper">
                    <a className="link">Our products</a>
                  </div>
                  <div className="link_wrapper">
                    <a className="link">Our Services</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="header_right">
              {/* <img class="responsive" src="https://djzfsf1yiw-flywheel.netdna-ssl.com/wp-content/uploads/2020/01/banner.jpg"/> */}
            </div>
          </div>
        </header>
        <hr id="vertical_line"></hr> 
        <section className="white">
          <div className="container">
            <div className="first">
              <div className="image_big">
                <img src="http://localhost:3000/big.jpg" />
              </div>
              <div className="image_small">
                <img src="http://localhost:3000/small.jpg" />
              </div>  
            </div>
            <div className="second">
              <h2 className="header_title">About Us</h2>
              <p>Adige Design is a Boston-based international artisan and construction material sourcing company
                with a passion for quality products. Our mission is to uncover special artisans, unique materials
                and products, and incorporate them in any development, home, or office.
              </p>
            </div>
          </div>

          
        </section >
        
        <hr id="vertical_line"></hr>  
        
        <section className="black">
          <div className="black_wrapper">
            <div className="padding"></div>
              <div className="section_title">
                <h3 className="title">Exclusive Store</h3>
                <p className="sub_title">
                Brought to Boston by Adige Design 
                </p>
                
              </div>
              <div className="card_wrapper">

                <div className="card">
                  <div className="figure_wrapper">
                    <figure>
                      <div className="image_wrapper">
                        <img srcset="black_one.jpg 600w,
                                      black_one_big.jpg 900w"
                             sizes="(max-width: 600px) 600px,(max-width: 945px) 900px, 600px"         
                             src="http://localhost:3000/black_one.jpg" />
                      </div>
                      <figcaption>Kitchen</figcaption>
                    </figure> 
                  </div>
                </div>

                <div className="card">
                  <div className="figure_wrapper">
                    <figure>
                      <div className="image_wrapper">
                        <img src="https://adigedesign.com/wp-content/uploads/2019/12/KateKelly_Ellis-2647-Edit-552x700.jpg" />
                      </div>
                      <figcaption>Custom</figcaption>
                    </figure> 
                  </div>
                </div>

                <div className="card">
                <div className="figure_wrapper">
                  <figure>
                    <div className="image_wrapper">
                      <img src="https://adigedesign.com/wp-content/uploads/2020/03/Adige_Artisan_Olivieri_Mobili-05-1-552x700.jpg" />
                    </div>
                    <figcaption>Closet</figcaption>
                  </figure> 
                </div>
              </div>
              </div>
            <div className="padding"></div>
          </div>
        </section>
        
        <hr id="vertical_line"></hr> 
        
        <section className="developer_section">
        <div className="container">
            <div className="first">
              <div className="image_big">
                <img src="http://localhost:3000/serving_developer1.jpg" />
              </div>
              <div className="image_small">
                <img src="http://localhost:3000/serving_developer2.jpg" />
              </div>  
            </div>
            <div className="second">
              <h2 className="header_title">Servicing developers, architects, designers and homeowners alike</h2>
              <p>As a full service architectural material sourcing company, we offer an array of design and tailored 
                consulting services for luxury materials and artisan products from the initial stages of a project 
                through the construction stage, in addition to interior design and furniture specifications.
              </p>
            </div>
          </div>
        </section>
        
        <hr id="vertical_line"></hr> 
        
        <section className="grey">
          <div className="section_title">
              <h1>Exclusive Store</h1>
              <p className="sub_title">
              True master of their craft
              </p>
              
            </div>
            <div className="card_wrapper">
                <div className="card">
                  <div className="figure_wrapper">
                    <figure>
                      <div className="image_wrapper">
                        <img src="http://localhost:3000/project1.jpg" />
                      </div>
                      <figcaption>Closet System</figcaption>
                    </figure> 
                  </div>
                </div>

                <div className="card">
                  <div className="figure_wrapper">
                    <figure>
                      <div className="image_wrapper">
                        <img src="http://localhost:3000/project_two.jpg" />
                      </div>
                      <figcaption>Closet System</figcaption>
                    </figure> 
                  </div>
                </div>

                <div className="card"> 
                  <div className="figure_wrapper">
                    
                      <figure>
                        <div className="image_wrapper">
                          <img src="http://localhost:3000/project_three.jpg" />
                        </div>  
                          <figcaption>Closet System</figcaption>
                      </figure> 
                  </div>
                </div>
          </div>    
        </section>
        
        <hr id="vertical_line"></hr> 
        
        <section className="black">
        <div className="section_title">
            <h1>Exclusive Store</h1>
            <p className="sub_title">
            Brought to Boston by Adige Design 
            </p>
            
          </div>
          <div className="card_wrapper">
            <div className="card">
              <div className="figure_wrapper">
                <figure>
                  <div className="image_wrapper">
                    <img src="http://localhost:3000/black_one.jpg" />
                  </div>
                  <figcaption>Closet System</figcaption>
                </figure> 
              </div>
            </div>

            <div className="card">
              <div className="figure_wrapper">
                <figure>
                  <div className="image_wrapper">
                    <img src="http://localhost:3000/black_two.jpg" />
                  </div>
                  <figcaption>Closet System</figcaption>
                </figure> 
              </div>
            </div>

            <div className="card">
            <div className="figure_wrapper">
              <figure>
                <div className="image_wrapper">
                  <img src="http://localhost:3000/black_three.jpg" />
                </div>
                <figcaption>Closet System</figcaption>
              </figure> 
            </div>
          </div>
          </div>
        </section>
        
        <hr id="vertical_line"></hr> 
        
        <section className="social_media_wrapper">
          <div className="Social_media">
            <h1>Instagram</h1>
          </div>
          <div className="card_wrapper">
              <div className="card">
                <div className="figure_wrapper">
                  <figure>
                    <img src="http://localhost:3000/grey_one.jpg" />
                    
                  </figure> 
                </div>
              </div>

              <div className="card">
                <div className="figure_wrapper">
                  <figure>
                    <img src="http://localhost:3000/grey_two.jpg" />
                    
                  </figure> 
                </div>
              </div>

              <div className="card">
                <div className="figure_wrapper">
                  <figure>
                    <img src="http://localhost:3000/grey_three.jpg" />
                    
                  </figure> 
                </div>
              </div>

              <div className="card">
              <div className="figure_wrapper">
                <figure>
                  <img src="http://localhost:3000/watch1.jpg" />
                  
                </figure> 
              </div>
            </div>
          </div>
        </section>
        
        <footer>
          <div className="footer_heading">

            Get In Touch
          </div>
          <div className="link_wrapper">
            <p className="link subheading">Contact us</p>
          </div>
          <div className="middle">
            <div className="margin child1">
              <p>100 Summer Street, Suite 1600</p>
              <p>Boston, MA 02110</p>
            </div>
            <div className="margin child2">
              <div className="link_wrapper">
              <a href="tel:(617) 370 8810" className="link thin" target="_blank">(617) 370 8810</a>
              </div>
              <div className="link_wrapper">
              <a className="link thin">email@email.com</a>
              </div>
            </div>  
            <div className="margin child3">
              <div className="link_wrapper">
                <p className="link thin">Privacy Policy</p>
              </div> 
              <div className="link_wrapper">
                <p className="link thin">Customer Feedback</p>
              </div>  
              <div className="link_wrapper">  
                <p className="link thin">Copy Right</p>
              </div>
            </div>
            <div className="margin child4">
              <p>copyrightlink</p>
            </div>
          </div>
          <div className="logo">
            <div className="adige_logo">
              <p className="first_line">Adige</p>
              <p className="second_line">Modern Design</p>
            </div>
            <div className="facebook_logo">
              <img src="http://localhost:3000/facebook.png" />
            </div>
            <div className="instagram_logo">
              <img src="http://localhost:3000/instagram.png" />
            </div>
            <div className="linkedin_logo">
              <img src="http://localhost:3000/linkedin.png" />
            </div>
          </div>  
          {/* <div className="social_media_icons">
              <a href="#" className="Facebook_icon">
                <img src="http://localhost:3000/facebook.png" />
                </a>
              <a href="#" className="Instagram_icon"></a>
              <a href="#" className="LinkedIn_icon"></a>
            </div> */}
        </footer>
    </body>
    </div>
  );
}

export default App;
