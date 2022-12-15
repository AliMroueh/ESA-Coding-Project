


<!DOCTYPE html>
<html lang="en">
<head>
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
            <li><a class="nav-link scrollto" href="bookAtable.html">Book A Table</a></li>
            <li  style="margin-right: 125px;"><a class="nav-link scrollto" href="#orders">Orders</a></li>
            <li><a class="nav-link scrollto" href="likedItems.html"><i class="bi bi-heart"></i></a></li>
            <li><a class="nav-link scrollto" href="cartItems.html"><i class="bi bi-cart3"></i></a></li>
  
          </ul>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->
  
        <a href="#book-a-table" class="book-a-table-btn scrollto">Log In</a>
  
      </div>
    </header>
    <main>
  

<!-- ======= take away Section ======= -->


<section id="takeaway" class="takeaway">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 form-group">
        <img  class="img1" src="media/takeaway1.jpg" value="" height="50%" >
    </div>
  </div>
  <br>
    <div class="container" data-aos="fade-up">
      
      <div class="section-title">
        <h2>Take away</h2>
       
      </div>

      <form name="myform" role="form"  data-aos="fade-up" data-aos-delay="100">
        <div class="row">
          <div class="col-lg-3 col-md-6 form-group">
            <input type="text" name="fname" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
            <p class="remarq">Please this is a required field</p>
          </div>
          <div class="col-lg-3 col-md-6 form-group mt-3 mt-md-0">
            <input type="time" class="form-control" name="ftime" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
            <p class="remarq">Please this is a required field</p>
            
          </div>
          <div class="col-lg-3 col-md-6 form-group mt-3 mt-md-0">
            <input type="text" class="form-control" name="fphone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
            <p class="remarq">Please this is a required field</p>
          </div>
          <div class="col-lg-3 col-md-6 form-group mt-3 mt-md-0">
            <input type="date" name="fdate" class="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
            <p class="remarq">Please this is a required field</p>    <div class="validate"></div>
          </div>
          
        </div>
        <div class="form-group mt-3">
          <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
          
        </div>
       <br>

       <div class="text-center" ><button type="button" style="background: #ff6600; border-radius:20px; border-color: rgb(223, 116, 17);outline:none;" id="btn">Process</button></div>
      </form>

    </div>
  </div>
  </section><!-- End take away Section -->


   <!-- Start footer -->
   <footer id="footer">
    <div class="container1 ">
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
 <!-- Vendor JS Files -->

 <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


 <!-- Template Main JS File -->
 <script src="takeaway.js"></script>


  </body>
  </html>