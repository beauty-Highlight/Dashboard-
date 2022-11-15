/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================
* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
 =========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.
  Once you add a new route on this file it will be visible automatically on
  the Sidenav.
  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
// import Tables from "layouts/tables";
// import Billing from "layouts/billing";
import Authors from "layouts/authors"

// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import Customer from "layouts/Customers";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Users from "layouts/users";
import Books from "layouts/Books";
import AddBook from "layouts/Books/AddBook";
import Admins from "layouts/Admins";
import AddUser from "layouts/users/AddUser";
import Review from "layouts/Reviews";
import Comment from "layouts/Comments";
import Category from "layouts/Categories";
import AddCategory from "layouts/Categories/AddCategory";
// import Reviews from "layouts/review";
//react icons
import { RiQuillPenLine } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { SiBookstack } from "react-icons/si";
import { BiCommentDetail } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";




// @mui icons
import Icon from "@mui/material/Icon";
// import AddTrip from "layouts/trips/AddTrip";
import EditUser from "layouts/users/EditUser";
import EditBook from "layouts/Books/EditBook";
import EditCategory from "layouts/Categories/EditCategory";
import EditAdmin from "layouts/Admins/EditAdmin";
import EditCustomers from "layouts/Customers/EditCustomers";
import AddAdmin from "layouts/Admins/AddAdmin";
import AddReview from "layouts/Reviews/AddReview";
import EditReview from "layouts/Reviews/EditReview";
import AddCustomers from "layouts/Customers/AddCustomers";
import Gallery from "layouts/Gallery";
import AddGallery from "layouts/Gallery/AddGallery";
import EditGallery from "layouts/Gallery/EditGallery";
import Service from "layouts/Service";
import EditService from "layouts/Service/EditService";
import AddService from "layouts/Service/AddService";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
    sidenav: true,
  },
  {
    type: "collapse",
    name: "Admins",
    key: "admins",
    icon: <RiAdminLine />,
    route: "/admins",
    component: <Admins />,
    sidenav: true,
  },
  {
    type: "collapse",
    name: "Admins",
    key: "admins",
    icon: <RiAdminLine />,
    route: "/admins/:id",
    component: <EditAdmin />,
    sidenav: false,
  },
  {
    type: "collapse",
    name: "Add Admin",
    key: "add-admin",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/admins/add",
    component: <AddAdmin />,
    sidenav: false,
  },
  {
    type: "collapse",
    name: "Customers",
    key: "customers",
    icon: <MdPeopleAlt />,
    route: "/customers",
    component: <Customer />,
    sidenav: true,
  },
  {
    type: "collapse",
    name: "Add Customers",
    key: "add-customer",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/customers/add",
    component: <AddCustomers />,
    sidenav: false,
  },

  {
    type: "collapse",
    name: "edit-customer",
    key: "EditCustomers",
    icon: <RiAdminLine />,
    route: "/Customers/:id",
    component: <EditCustomers />,
    sidenav: false,
  },

  {
    type: "collapse",
    name: "Gallery",
    key: "gallery",
    icon: <RiAdminLine />,
    route: "/gallery",
    component: <Gallery />,
    sidenav: true,
  },
  {
    type: "collapse",
    name: "Add gallery",
    key: "add-gallery",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/galleries/add",
    component: <AddGallery />,
    sidenav: false,
  },
  {
    type: "collapse",
    name: "Galleries",
    key: "galleries",
    icon: <RiAdminLine />,
    route: "/galleries/:id",
    component: <EditGallery />,
    sidenav: false,
  },
  {
    type: "collapse",
    name: "Services",
    key: "service",
    icon: <RiAdminLine />,
    route: "/services",
    component: <Service />,
    sidenav: true,
  },
    {
    type: "collapse",
    name: "Add Services",
    key: "add-Service",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/services/add",
    component: <AddService />,
    sidenav: false,
  },
  {
    type: "collapse",
    name: "Add Services",
    key: "add-Service",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/Servicess/add",
    component: <AddService />,
    sidenav: false,
  },
  {
    type: "collapse",
    name: "EditServices",
    key: "EditServices",
    icon: <RiAdminLine />,
    route: "/services/:id",
    component: <EditService />,
    sidenav: false,
  },

  {
    type: "collapse",
    name: "Author",
    key: "author",
    icon: <RiQuillPenLine />,
    route: "/author",
    component: <Authors />,
    sidenav: false,
  },
  {
    type: "collapse",
    name: "Authors",
    key: "author",
    icon: <RiQuillPenLine />,
    route: "/authors",
    component: <Authors />,
    sidenav: false,
  },
 
  {
    type: "collapse",
    name: "Categories",
    key: "categories",
    icon: <BiCategoryAlt />,
    route: "/categories",
    component: <Category />,
    sidenav: true,
  },
  {
    type: "collapse",
    name: "Add Category",
    key: "add-Category",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/categories/add",
    component: <AddCategory />,
    sidenav: false,
  },
  {
    type: "collapse",
    name: "Edit Category",
    key: "edit-Category",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/categories/:id",
    component: <EditCategory />,
    sidenav: false,
  },
  {
    type: "collapse",
    name: "Books",
    key: "books",
    icon: <SiBookstack />,
    route: "/books",
    component: <Books />,
    sidenav: true,
  },
  {
    type: "collapse",
    name: "Add Book",
    key: "add-Book",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/books/add",
    component: <AddBook />,
    sidenav: false,
  },
 
  {
    type: "collapse",
    name: "Edit book",
    key: "Edit-book",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/books/edit/:id",
    component: <EditBook />,
    sidenav: false,
  },
  {
    type: "collapse",
    name: "Reviews",
    key: "Reviews",
    icon: <MdRateReview />,
    route: "/reviews",
    component: <Review />,
    sidenav: true,
  },
  {
    type: "collapse",
    name: "Add Reviews",
    key: "add-Review",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/reviews/add",
    component: <AddReview />,
    sidenav: false,
  },
  {
    type: "collapse",
    name: "Edit reviews",
    key: "Edit Reviews",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/reviews/:id",
    component: <EditReview />,
    sidenav: false,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: <Tables />,
  //   sidenav: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  //   sidenav: true,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  //   sidenav: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  //   sidenav: true,
  // },
  {
    type: "collapse",
    name: "Comments",
    key: "Comments",
    icon: <BiCommentDetail />,
    route: "/comment",
    component: <Comment />,
    sidenav: true,
  },

  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
    sidenav: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
    sidenav: true,
  },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  //   sidenav: true,
  // },
];

export default routes;