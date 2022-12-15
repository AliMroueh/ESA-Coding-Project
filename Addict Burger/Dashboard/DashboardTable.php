<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Dashboard.css"/>
    <link rel="stylesheet" href="tableDasbord.css"/>
</head>
<body>
    <div class="container">
        <div class="navigator">
            <ul>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="fast-food-sharp"></ion-icon></span>
                        <h1 class="title">Addict Burger</h1>
                    </a>
                </li>
                <li>
                    <a href="DashboardUsers.html">
                        <span class="icon"><ion-icon name="people-sharp"></ion-icon></span>
                        <span class="title">Users</span>
                    </a>
                </li>
                <li>
                    <a href="DashboardProducts.html">
                        <span class="icon"><ion-icon name="pricetags"></ion-icon></span>
                        <span class="title">Products</span>
                    </a>
                </li>
                <li>
                    <a href="DashboardOrders.html">
                        <span class="icon"><ion-icon name="receipt"></ion-icon></span>
                        <span class="title">Orders</span>
                    </a>
                </li>
                <li>
                    <a href="DashboardCategory.html">
                        <span class="icon"><ion-icon name="apps"></ion-icon></span>
                        <span class="title">Category</span>
                    </a>
                </li>

                <li>
                    <a href="DashboardDelivery.html">
                        <span class="icon"><ion-icon name="bicycle"></ion-icon></span>
                        <span class="title">Delivery</span>
                    </a>
                </li>
                <li class="hovered">
                    <a href="DashboardTable.html">
                        <span class="icon"><ion-icon name="tablet-landscape"></ion-icon></span>
                        <span class="title">Table</span>
                    </a>
                </li>
                <li>
                    <a href="DashboardStatistics.html">
                        <span class="icon"><ion-icon name="stats-chart"></ion-icon></span>
                        <span class="title">Statistics</span>
                    </a>
                </li>
                <li>
                    <a href="DashboardProfile.html">
                        <span class="icon"><ion-icon name="person-circle"></ion-icon></span>
                        <span class="title">Profile</span>
                    </a>
                </li>
            </ul>
        </div>

        <!-- main -->

        <div class="main">
            <!-- Start topbar -->
            <div class="topbar">
                <div class="toggle">
                    <ion-icon name="menu"></ion-icon>
                </div>
                <div class="search">
                    <!-- <label>
                        <input type="text" placeholder="Search here">
                        <ion-icon name="search-outline"></ion-icon>
                    </label> -->
                </div>
            </div>
            <!-- End topbar -->
            <!-- Start body -->
<!--             
                    <div class="tableAdmin">
                        <h2>Table</h2>
                        <table>
                    <tr>
                        <th>Time Slot</th>
                        <th>Date</th>
                        <th>Person</th>
                        <th>Table Number</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Assign Table</th>
                    </tr>
                    <tr>
                        <td> 10:30 PM</td>
                        <td>12/11/2022</td>
                        <td>3</td>
                        <td>2</td>
                        <td><button class="button2"style="background-color:green ;">Aproved</button></td>
                        <td>
                            <select class="action" >
                                <option id="walaa"value="1">Action</option>
                                <option id="walaa2" value="2">Approved</option>
                                <option id="walaa3"value="3">Rejected</option>
                              </select>
                        </td>
                        <td>
                            <select class="action" >
                                <option>Assigne Table</option>
                                <option value="item">1</option>
                                <option value="item">2</option>
                                <option value="item">3</option>
                                <option value="item">4</option>
                                <option value="item">5</option>
                                <option value="item">6</option>
                                <option value="item">7</option>
                                <option value="item">8</option>
                                <option value="item">9</option>
                                <option value="item">10</option>
                            
                              </select>
                        </td>
                       
                    </tr>
                    <tr>
                        <td>10:30 PM</td>
                        <td>12/11/2022</td>
                        <td>3</td>
                        <td>2</td>
                        <td><button class="button2"style="background-color:green ;">Aproved</button></td>
                        <td>
                            <select class="action" >
                                <option value="item">Action</option>
                                <option value="item">Approved</option>
                                <option value="item">Rejected</option>
                              </select>
                        </td>
                        <td>
                        <select class="action" >
                            <option>Assigne Table</option>
                            <option value="item">1</option>
                            <option value="item">2</option>
                            <option value="item">3</option>
                            <option value="item">4</option>
                            <option value="item">5</option>
                            <option value="item">6</option>
                            <option value="item">7</option>
                            <option value="item">8</option>
                            <option value="item">9</option>
                            <option value="item">10</option>
                        
                          </select>
                    </td>
                       
                    </tr>
                    <tr>
                        <td> 04.00PM</td>
                        <td>12/11/2022</td>
                        <td>3</td>
                        <td>2</td>
                        <td><button class="button2"style="background-color: green;">Aproved</button></td>
                        <td>
                            <select class="action" >
                                <option value="item">Action</option>
                                <option value="item">Approved</option>
                                <option value="item">Rejected</option>
                              </select>
                        </td>
                        <td>
                        <select class="action">
                            <option>Assigne Table</option>
                            <option value="item">1</option>
                            <option value="item">2</option>
                            <option value="item">3</option>
                            <option value="item">4</option>
                            <option value="item">5</option>
                            <option value="item">6</option>
                            <option value="item">7</option>
                            <option value="item">8</option>
                            <option value="item">9</option>
                            <option value="item">10</option>
                        
                          </select>
                    </td>
                       
                    </tr>
                    <tr>
                        <td>10:30 PM</td>
                        <td>12/11/2022</td>
                        <td>2</td>
                        <td>9</td>
                        <td><button class="button2"style="background-color:red ;">Rejected</button></td>
                        <td>
                            <select class="action" >
                                <option value="item">Action</option>
                                <option value="item">Approved</option>
                                <option value="item">Rejected</option>
                              </select>
                        </td>
                        <td>
                            <select class="action" >
                                <option>Assigne Table</option>
                                <option value="item">1</option>
                                <option value="item">2</option>
                                <option value="item">3</option>
                                <option value="item">4</option>
                                <option value="item">5</option>
                                <option value="item">6</option>
                                <option value="item">7</option>
                                <option value="item">8</option>
                                <option value="item">9</option>
                                <option value="item">10</option>
                            
                              </select>
                        </td>
                       
                    </tr>
                    <tr>
                        <td> 11:30 PM</td>
                        <td>12/11/2022</td>
                        <td>6</td>
                        <td>1</td>
                        <td><button class="button2" style="background-color:green ;">Aproved</button></td>
                        <td>
                            <select class="action" >
                                <option value="item">Action</option>
                                <option value="item">Approved</option>
                                <option value="item">Rejected</option>
                              </select>
                        </td>
                        <td>
                            <select class="action" >
                                <option>Assigne Table</option>
                                <option value="item">1</option>
                                <option value="item">2</option>
                                <option value="item">3</option>
                                <option value="item">4</option>
                                <option value="item">5</option>
                                <option value="item">6</option>
                                <option value="item">7</option>
                                <option value="item">8</option>
                                <option value="item">9</option>
                                <option value="item">10</option>
                            
                              </select>
                        </td>
                       
                    </tr>
                    <tr>
                        <td> 10:30 PM</td>
                        <td>15/11/2022</td>
                        <td>2</td>
                        <td>9</td>
                        <td><button class="button2" style="background-color:red ;">Rejected</button></td>
                        <td>
                            <select class="action" >
                                <option value="item">Action</option>
                                <option value="item">Approved</option>
                                <option value="item">Rejected</option>
                              </select>
                        </td>
                        <td>
                            <select class="action" >
                                <option>Assigne Table</option>
                                <option value="item">1</option>
                                <option value="item">2</option>
                                <option value="item">3</option>
                                <option value="item">4</option>
                                <option value="item">5</option>
                                <option value="item">6</option>
                                <option value="item">7</option>
                                <option value="item">8</option>
                                <option value="item">9</option>
                                <option value="item">10</option>
                            
                              </select>
                        </td>
                       
                    </tr>
                    <tr>
                        <td>03:30 PM</td>
                        <td>12/11/2022</td>
                        <td>4</td>
                        <td>5</td>
                        <td><button class="button2"style="background-color: red;">Rejected</button></td>
                        <td>
                            <select class="action" >
                                <option value="item">Action</option>
                                <option value="item">Approved</option>
                                <option value="item">Rejected</option>
                              </select>
                        </td>
                        <td>
                            <select class="action" >
                                <option>Assigne Table</option>
                                <option value="item">1</option>
                                <option value="item">2</option>
                                <option value="item">3</option>
                                <option value="item">4</option>
                                <option value="item">5</option>
                                <option value="item">6</option>
                                <option value="item">7</option>
                                <option value="item">8</option>
                                <option value="item">9</option>
                                <option value="item">10</option>
                            
                              </select>
                        </td>
                       
                    </tr>
                   
                    
                    </table>
                    </div>
                </div> -->
                <div class="container1" id="table-dark">
                    <table class="table table-striped" id="data-table">
                        <!-- <tr>
                            <th>Time Slot</th>
                            <th>Date</th>
                            <th>Person</th>
                            <th>Table Number</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Assign Table</th>
                        </tr> -->
                    </table>
                    
                </div>

            <!-- End body -->
        </div>
    </div>
    <script src="DashboardTable.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>