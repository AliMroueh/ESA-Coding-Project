


<!DOCTYPE html>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="styleMobile.css">
    <title>Document</title>
    <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

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
  <link href="assets/css/stylecss.css" rel="stylesheet">

  <!-- <link href="assets/css/stylewalaa.css" rel="stylesheet"> -->
  <link href="delivery.css" rel="stylesheet">


</head>
<style>
  ::placeholder{color:red;}
 .remarq{display:none;color: red;}
</style>

<body>
     <!-- ======= Header ======= -->
     <header id="header" class="fixed-top d-flex align-items-center header-transparent">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
  
        <div class="logo me-auto">
          <h1><a href="index.html"><h2>Addict Burger</h2></a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>
  
        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto active" href="#video">Home</a></li>
            <li><a class="nav-link scrollto" href="#menu">Menu</a></li>
            <li><a class="nav-link scrollto" href="#aboutus">About us</a></li>
            
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a class="nav-link scrollto" href="bookAtable.php">Book A Table</a></li>
            <li  style="margin-right: 125px;"><a class="nav-link scrollto" href="#orders">Orders</a></li>
            <li><a class="nav-link scrollto" href="likedItems.php"><i class="bi bi-heart"></i></a></li>
            <li><a class="nav-link scrollto" href="cartProduct.php"><i class="bi bi-cart3"></i></a></li>
  
          </ul>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->
  
        <a href="#book-a-table" class="book-a-table-btn scrollto">Log In</a>
  
      </div>
    </header>
    <main>
    <!-- End Header -->

   
  

<!-- ======= delivery section Section ======= -->
<section id="delivery" class="delivery">
<div class="container">
    <div class="row">
      <div class="col-lg-12 form-group">
        <img  class="img1" src="media/dlv3.jpg" value="" height="50%">
    </div>
  </div>
  <br>
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Delivery Address</h2>
      </div>

      <form  role="form" name="myform"  data-aos-delay="100" data-aos="fade-up">
        <div class="row margin-top">
          <div class="col-lg-6 col-md-6 form-group">
            <input type="text" name="fname" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4">
            <p class="remarq">Please this is a required field</p>
          </div>
          <div class="col-lg-6 col-md-6 form-group mt-3 mt-md-0">
            <input type="time" class="form-control" name="ftime" id="time" placeholder="Time" data-rule="minlen:4" >
            <p class="remarq">Please this is a required field</p>
            
          </div>
          <div class="col-lg-6 col-md-6 form-group mt-3 ">
            <input type="text" class="form-control" name="fphone" id="phone" placeholder="Your Phone" data-rule="minlen:4" >
            <p class="remarq">Please this is a required field</p>
          </div>
          <div class="col-lg-6 col-md-6 form-group mt-3 ">
            <input type="date" name="fdate" class="form-control" id="date" placeholder="Date" data-rule="minlen:4" >
            <p class="remarq">Please this is a required field</p>
          </div>
          <div class="col-lg-6 col-md-6 form-group mt-3 ">
                <select id="fcity" class="fcity" style="padding:6px 12px;" id="book-a-table-btn:hover" name="fcity" >
                  <option value="select a city">Select A City</option>
                  <option value="item">Nabtieh</option>
                  <option value="item">Toul</option>
                  <option value="item">Deir a Zahrani</option>
                  <option value="item">Habboush</option>
                  <option value="item">Nsar</option>
                </select>
                <p class="remarq">Please this is a required field</p>
          </div>
          <div class="col-lg-6 col-md-6 form-group mt-3 ">
            <input type="text" class="form-control" name="faddress" id="note" placeholder="Address" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
            <p class="remarq">Please this is a required field</p>
          </div>

        </div>
        <div class="bordertotal" style="background-color:#ff6600;">
        <div class="form-group mt-5">
                  <hr>
                 <!--<p>Total <span class="price" style="background-color: black; color:gray"><b>63$</b></span></p>-->
           
                 
            
        </div>
       </div>

        <div class="text-center" ><button type="button" style=" background:#ff6600;border-radius:20px; border-color: rgb(223, 116, 17);outline:none;" id="btn">Process</button></div>
      
        <p class="remarq">Please this is a required field</p>
      </form>

    </div>
  </div>
  </section><!-- End Delivery Section -->



  <!-- <table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Qty</th>
            <th>total</th>
            <th>extra</th>
            <th>without</th>
            <th>totalfinal</th>
        </tr>
    </thead>
    <tbody id="tbody">

    </tbody>
</table> -->


    <!-- Start footer -->
  <footer id="footer">
    <div class="container1 mt-5">
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
  </footer>
  <!-- End Footer -->
</main>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
 


 <!-- Vendor JS Files -->
 <script src="assets/vendor/aos/aos.js"></script>
 <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
 <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
 <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
 <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
 <script src="assets/vendor/php-email-form/validate.js"></script>

 <!-- Template Main JS File -
 <script src="assets/js/main.js"></script>-->
  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  
  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
  <script  src="./js/scriptProductItem.js"></script>
  <script  src="./js/scrip1cartItem.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
 <script src="deliverjs.js"></script>


  </body>
  </html>