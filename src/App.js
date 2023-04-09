/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
//import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
//import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { getError } from './utils';
import Footer from './components/Footer'
import SearchBox from './components/SearchBox';
//import Header from './components/Header'
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import DashboardScreen from './screens/DashboardScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SupportScreen from './screens/SupportScreen';
import MapScreen from './screens/MapScreen';
import SellerScreen from './screens/SellerScreen';
import SellerRoute from './components/SellerRoute';
//import ChatBox from './components/ChatBox';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import BannerEditScreen from './screens/BannerEditScreen';
import BannerListScreen from './screens/BannerListScreen';

function App() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;

    //const [setSidebarIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    const signoutHandler = () => {
        ctxDispatch({ type: 'USER_SIGNOUT' });
        localStorage.removeItem('userInfo');
        localStorage.removeItem('cartItems');
        localStorage.removeItem('shippingAddress');
        localStorage.removeItem('paymentMethod');
        window.location.href = '/signin';
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get(`/api/products/categories`);
                setCategories(data);
            } catch (err) {
                toast.error(getError(err));
            }
        };
        fetchCategories();
    }, []);

    return (
        <BrowserRouter>
            
                <ToastContainer position="bottom-center" limit={1} />
                
                <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">GET-ORDER</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        
        <div class="dropdown">
  
  <NavDropdown title={'Category'} id="basic-nav-dropdown">
  <Nav className="flex-column text-white w-100 p-2">
                    
                        {categories.map((category) => (
                             <Nav.Item key={category}>
                             <Link class="text-bold text-decoration-none text-muted"
                               to={`/search?category=${category}`}
                               
                             >
                               {category}
                             </Link>
                           </Nav.Item>
                        ))}
                    </Nav>
                                        </NavDropdown>
</div>
       
      </ul>

    <nav class="navbar navbar-light bg-light mx-auto">
       <SearchBox/>
     </nav>
    <ul class="navbar-nav  mb-2 mb-lg-0">
      <li class="nav-item align-items-center">
          <a class="nav-link" href="/cart">
          
                     Cart{cart.cartItems.length > 0 && (
                                            <Badge pill bg="danger">
                                                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                                            </Badge>
                                        )}</a>
       </li>
                   <li class="nav-item d-flex">
                      
                           {userInfo ? (
                                        <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                                            <LinkContainer to="/profile">
                                                <NavDropdown.Item>User Profile</NavDropdown.Item>
                                            </LinkContainer>
                                            <LinkContainer to="/orderhistory">
                                                <NavDropdown.Item>Order History</NavDropdown.Item>
                                            </LinkContainer>
                                            <NavDropdown.Divider />
                                            <Link
                                                className="dropdown-item"
                                                to="#signout"
                                                onClick={signoutHandler}
                                            >
                                                Sign Out
                                            </Link>
                                        </NavDropdown>
                                    ) : (
                                        <Link className="nav-link" to="/ ">
                                            Sign In
                                        </Link>
                                    )}
                                    {userInfo && userInfo.isAdmin && (
                                        <NavDropdown title="Admin" id="admin-nav-dropdown">
                                            <LinkContainer to="/admin/dashboard">
                                                <NavDropdown.Item>Dashboard</NavDropdown.Item>
                                            </LinkContainer>
                                            <LinkContainer to="/admin/products">
                                                <NavDropdown.Item>Products</NavDropdown.Item>
                                            </LinkContainer>
                                            <LinkContainer to="/admin/orders">
                                                <NavDropdown.Item>Orders</NavDropdown.Item>
                                            </LinkContainer>
                                            <LinkContainer to="/admin/users">
                                                <NavDropdown.Item>Users</NavDropdown.Item>
                                            </LinkContainer>
                                            <LinkContainer to="admin/banner">
                                                <NavDropdown.Item>Banner</NavDropdown.Item>
                                            </LinkContainer>
                                        </NavDropdown>
                                    )}

                                  </li>
                                </ul>
                              </div>
                            </div>
                          </nav>
                </header>
            
                <main>
                    <Container>
                        <Routes>
                            <Route path="/seller/:id" element={<SellerScreen />}></Route>
                            <Route path="/product/:slug" element={<ProductScreen />} />
                            <Route path="/cart" element={<CartScreen />} />
                            <Route path="/search" element={<SearchScreen />} exact/>
                           
                            <Route path="/signin" element={<SigninScreen />} />
                            <Route path="/signup" element={<SignupScreen />} />
                            <Route path="/profile" element={<ProtectedRoute> <ProfileScreen /> </ProtectedRoute>} />
                            <Route path="/shipping" element={<ShippingAddressScreen />} />
                            <Route path="/payment" element={<PaymentMethodScreen />} />
                            <Route path="/placeorder" element={<PlaceOrderScreen />} />
                            <Route path="/map" element={<ProtectedRoute> <MapScreen /> </ProtectedRoute>} />
                            <Route path="/order/:id" element={<ProtectedRoute> <OrderScreen /> </ProtectedRoute>} />
                            <Route path="/orderhistory" element={<ProtectedRoute> <OrderHistoryScreen /> </ProtectedRoute>} />
                            <Route path="/admin/dashboard" element={<AdminRoute> <DashboardScreen /></AdminRoute>} />
                            <Route path="/admin/orders" element={<AdminRoute> <OrderListScreen /></AdminRoute>} />
                            <Route path="/admin/products" element={<AdminRoute> <ProductListScreen /></AdminRoute>} />
                            <Route path="/support" element={<AdminRoute> <SupportScreen /></AdminRoute>} />
                            <Route path="/admin/product/:id" element={<AdminRoute> <ProductEditScreen /></AdminRoute>} />
                            <Route path="/admin/users" element={<AdminRoute> <UserListScreen /></AdminRoute>} />
                            <Route path="/admin/user/:id" element={<AdminRoute> <UserEditScreen /></AdminRoute>} />
                            <Route path="/admin/banner/:id" element={<AdminRoute> <BannerEditScreen /></AdminRoute>} />
                            <Route path="/admin/banner" element={<AdminRoute> <BannerListScreen /></AdminRoute>} />
                            <Route
                               path="/forget-password"
                               element={<ForgetPasswordScreen />}
                            />
                            <Route
                              path="/reset-password/:token"
                              element={<ResetPasswordScreen />}
                            />
                            <Route
                                path="/seller/products"
                                element={
                                  <SellerRoute>
                                    <ProductListScreen />
                                  </SellerRoute>
                                }
                              />
                                <Route
                                  path="/seller/orders"
                                  element={
                                    <SellerRoute>
                                      <OrderListScreen />
                                    </SellerRoute>
                                  }
                                />

                        <Route path="/" element={<HomeScreen />}></Route>
                        </Routes>
                    </Container>
                </main>

            <div class='mt-5'>
              <Footer/>
            </div>  
        </BrowserRouter>
    );
}

export default App;
