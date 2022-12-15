<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
  <!-- <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"> -->

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,600,600i,700,700i|Satisfy|Comic+Neue:300,300i,400,400i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="styleMobile.css">
</head>
<body>

    <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center header-transparent">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <div class="logo me-auto">
<<<<<<< HEAD:Addict Burger/index.php
        <h1><a href="index.html"><h2>Addict Burger</h2></a></h1>
=======
        <h1><a href="index.html">Addict Burger</a></h1>
>>>>>>> 33629790bf85bbafe0dc44333594efe674bd8fca:Addict Burger/index.html
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active" href="#video">Home</a></li>
          <li><a class="nav-link scrollto" href="#menu">Menu</a></li>
          <li><a class="nav-link scrollto" href="#aboutus">About us</a></li>
          
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a class="nav-link scrollto" href="bookAtable.html">Book A Table</a></li>
          <li  style="margin-right: 125px;"><a class="nav-link scrollto" href="#orders">Orders</a></li>
          <li><a class="nav-link scrollto" href="likedItems.html"><i class="bi bi-heart"></i></a></li>
          <li><a class="nav-link scrollto" href="cartProduct.html"><i class="bi bi-cart3"></i></a></li>
        </ul>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

      <a href="LogIn1.html" class="book-a-table-btn scrollto">Log In</a>

    </div>
  </header>
  <!-- End Header -->

    <!-- start video -->
    <div id="video">
        <video autoplay muted loop>
          <source src="./media/addictBurger1.mp4" type="video/mp4">
            <!-- <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rTl3vg0veiylgd0ih/videoblocks-close-up-of-food-garnishing-in-white-plate-waiter-serves-dish-at-table-famous-chef-preparing-style-dish-for-restaurant_rpwg8cfvb__af5ec35cf2e092b4649312aa3f818e2a__P360.mp4" type="video/mp4">
            <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rTl3vg0veiylgd0ih/videoblocks-close-up-of-food-garnishing-in-white-plate-waiter-serves-dish-at-table-famous-chef-preparing-style-dish-for-restaurant_rpwg8cfvb__af5ec35cf2e092b4649312aa3f818e2a__P360.mp4" type="video/ogg"> -->
            Your browser does not support the video tag.
          </video>
    </div>
    <!-- End video -->


    <!-- Start open section-->
    <section class="open" id="open">
        <div class="container">
            <div class="open-div">
                <h2 class="primary open-title">Open</h2>
            </div>
            <div class="open-date">
              <div>
                <h4>Monday - saterday</h4>
                <h5>9:00 - 18:00</h5>
              </div>
              <div>
                <h4>Sunday</h4>
                <h5>Closed</h5>
              </div>
            </div>
        </div>
    </section>
    <!-- End open section-->


    <!-- ======= Menu Section ======= -->
    <section id="menu" class="menu section-bg">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title">
            <h2>Menu</h2>
            <p>Check Our Tasty Menu</p>
          </div>

          <div class="dropdown" id="dropdown" style="display: flex;
          justify-content: center;
          margin-bottom: 20px;">

           <form class="d-flex me-1">
            <input class="me-2" id="search" type="search" placeholder="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>

            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="
            color: #ffb03b;
            background-color: #FFF;
            border: 2px solid #ffb03b;
        ">
              Menu
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#menu">Foods</a></li>
              <li><a class="dropdown-item" href="#menu">Drinks</a></li>
              <li><a class="dropdown-item" href="#menu">Special Offers</a></li>
            </ul>
          </div>
  
          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-starters">Starters</li>
                <li data-filter=".filter-salads">Salads</li>
                <li data-filter=".filter-specialty">Specialty</li>
              </ul>
            </div>
          </div>
  
          <div class="row row-cards" id="card" data-aos="fade-up" data-aos-delay="200">

            <!-- <div class="card filter-starters" style="width: 18rem; margin: 10px 0">
              <img src="./assets/img/chefs-bg.jpg" class="card-img-top h-50 d-inline-block" alt="..." style="margin-top: 10px;">
              <i class="bi bi-heart-fill love"></i>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6>15 $</h6>
                <div class="text-end">
                  <button href="#" class="btn addto">+</button>
                </div>
              </div>
            </div> -->

          </div>
  
        </div>
      </section>
      <!-- End Menu Section -->

      <!-- Start product image and detail  -->
      <!-- <div class="item">
        <div class="container">
          <i class="bi bi-x-lg"></i>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="Burger1.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="Burger2.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="addict1.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="info">
            <h1>Cheese Burger</h1>
            <h3>15 $</h3>
            <h2>Ingredients: </h2>
            <form action="" class="checkbox">
              <div>
              <input type="checkbox" value="cheese" id="1" checked/>
              <label for="1">cheese</label>
            </div>
            <div>
              <input type="checkbox" value="cheese" id="2" checked/>
              <label for="2">cheese</label>
            </div>
            <div>
              <input type="checkbox" value="cheese" id="3" checked/>
              <label for="3">cheese</label>
            </div>
            <div>
              <input type="checkbox" value="cheese" id="4" checked/>
              <label for="4">cheese</label>
            </div>
            <div>
              <input type="checkbox" value="cheese" id="5" checked/>
              <label for="5">cheese</label>
            </div>
            <div>
              <input type="checkbox" value="cheese" id="6" checked/>
              <label for="6">cheese</label>
            </div>
              <input type="submit" value="Add item"/>
            </form>
          </div>
        </div>
      </div> -->
      <!-- End product image and detail -->

      <!-- Start About Us -->
      <!-- End About Us -->

      <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
      </div>

      <div data-aos="fade-up">
        <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
      </div>

      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row mt-5">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div class="open-hours">
                <i class="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>
                  Monday-Saturday:<br>
                  11:00 AM - 2300 PM
                </p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="8" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    <!-- End Contact Section -->

        <!--ABout us-->
        <div id="aboutus" class="container">
          <div class="about-us">
            <div class="row">
              <div class="col-md-5">
                <div class="mt-1 p-5 bg-white text-dark rounded">
                  <!----->
                  <!-- Carousel -->
                  <div id="demo" class="carousel slide" data-bs-ride="carousel">
      
                    <!-- Indicators/dots -->
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>
      
                    <!-- The slideshow/carousel -->
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="media/addict4.jpg" alt="" class="d-block" width="50%" heigt="80">
                      </div>
                      <div class="carousel-item">
                        <img src="media/addict6.jpg" alt="" class="d-block" width="50%" heigt="80">
                      </div>
                      <div class="carousel-item">
                        <img src="media/addict7.jpg" alt="" class="d-block" width="50%" heigt="80">
                      </div>
                    </div>
      
                    <!-- Left and right controls/icons -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                      <span class="carousel-control-next-icon"></span>
                    </button>
                    <!---->
                  </div>
                </div>
              </div>
      
            <div class="col-md-7 ">
                  <div class="mt-1 p-5 bg-white text-dark rounded">
                     <h1  style="font-weight:bold; margin-top:2px">About Us</h1>
                      <h4>Our services</h4>
                
                  
                      <ul>
                        <li><i class="bi bi-check-circle"></i> Dine-in</li>
                        <li><i class="bi bi-check-circle"></i> Delivery</li>
                        <li><i class="bi bi-check-circle"></i> Take away</li>
                      </ul>
                  
                  
                      <p>Addict burger launched first branch in Nabatieh in 2017,and second branch in Beirut in 2018.
                        Serving the tastiest burgers chicken and meat,wings,chicken tenders,fries and variety of sandwishes.
                        Offering dine-in,take away and delivery services.Addict burger is a perfect spot to grab a bite to eat
                        with friends and family.Now we open our branch of italian pasta .
                        Serve best quality in the town
                      </p>
                    </div>
                  </div>
              
      
              </div>
            </div>
          </div>
        <!---->
        
      <!-- ======= Footer ======= -->
      <footer id="footer">
        <div class="container">
          <h3>Addict burger</h3>
          <p>Addict burger is fast food restaurant.First branch Nabtieh mahmoud fakih street,Second branch beirut near Shark sweat</p>
          <div class="social-links">
            <a href="#" class="twitter"><i class="bx bxl-tiktok"></i></a>
            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
            
           
          </div>
          <div class="copyright">
            &copy; Copyright <strong><span>Addict Burger</span></strong>. All Rights Reserved
          </div>
          <div class="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/delicious-free-restaurant-bootstrap-theme/ -->
            Designed by <a href="https://bootstrapmade.com/">ESA Coding Lab groupe Cycle 3</a>
          </div>
        </div>
      </footer><!-- End Footer -->
    
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
        
    
    
      <!-- Vendor JS Files -->
    <!-- <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script> -->

    <!-- Template Main JS File -->
    <script src="script.js"></script>
    <!-- <script>
      // Start Add Products
let products = JSON.parse(localStorage.getItem('products'));
let cardContainer = document.querySelector('.row.row-cards');
console.log(products)

products.map(element => {
  cardContainer.insertAdjacentHTML('beforeend',
  `<div class="card filter-starters" style="width: 18rem; margin: 10px 0">
  <img src="${element.images[0]}" class="card-img-top h-50 d-inline-block" alt="..." style="margin-top: 10px;">
  <i class="bi bi-heart-fill love"></i>
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <h6>${element.price} L.L</h6>
    <div class="text-end">
      <button href="#" class="btn addto">+</button>
    </div>
  </div>
</div>`
  )
}) -->


<!-- // End Add Products -->
    <!-- </script> -->
    <script src="assets/js/main.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
</html>