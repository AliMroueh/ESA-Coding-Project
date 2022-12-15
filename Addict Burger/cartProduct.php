<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="CodeHim">
    <title>JavaScript/Vue JS Shopping Cart Example</title>
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

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
    <!-- Style CSS -->
    <link rel="stylesheet" href="css/style.css">
	<!-- Demo CSS (No need to include it into your project) -->
	<link rel="stylesheet" href="css/demo.css">
  <link rel="stylesheet" href="cartitem.css">
  
  </head>
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
  <!-- End Header -->
  
      
 <main>
     <!-- Start DEMO HTML (Use the following code into your project)-->
<div class="shopping-cart-wrapper mt-5">
  <table class="table is-fullwidth shopping-cart">
    <thead style="background-color: orange;">
      <tr>
        <th><abbr title="Position"></abbr></th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Extra</th>
        <th>Without</th>
        <th>Remove</th>
      </tr>
    </thead>
  </table>
  <div class="totals">
    <div class="totals-item">
      <label>Subtotal</label>
      <div class="totals-value" id="cart-subtotal">￥0</div>
    </div>
     <!--<div class="totals-item">
      <label>Tax (5%)</label>
      <div class="totals-value" id="cart-tax">￥0</div>
    </div>
   <div class="totals-item">
      <label>Shipping</label>
      <div class="totals-value" id="cart-shipping">￥0</div>
    </div>
    <div class="totals-item totals-item-total">
      <label>Grand Total</label>
      <div class="totals-value" id="cart-total">￥0</div>
    </div>-->
  </div>
  <!---->
 
  <!---->
  <button class="checkout" id="checkoutId" >Checkout</button>
</div>


    
 </main>
   <!-- Start footer -->
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
  </footer>
  <!-- End Footer -->
 
      
 
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
    <script  src="./js/scriptProductItem.js"></script>
    <script  src="./js/scrip1cartItem.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  
  </body>
</html>