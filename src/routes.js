
// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
// import Tables from "layouts/tables";
// import Billing from "layouts/billing";
import Authors from "layouts/authors"

// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import Customer from "layouts/Customers";
import Worker from "layouts/Workers";
import SignIn from "layouts/authentication/sign-in";
import SignOut from "layouts/signOut/signOut";
// import SignUp from "layouts/authentication/sign-up";
import Admins from "layouts/Admins";
import Review from "layouts/Reviews";
// import Reviews from "layouts/review";
//react icons
import { RiQuillPenLine } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
// import { BiCategoryAlt } from "react-icons/bi";
// import { SiBookstack } from "react-icons/si";
import { BiCommentDetail } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";
// import {MdRateAppointme} from "react-icons/md"




// @mui icons
import Icon from "@mui/material/Icon";
// import AddTrip from "layouts/trips/AddTrip";
// import EditUser from "layouts/users/EditUser";
// import EditBook from "layouts/Books/EditBook";
// import EditCategory from "layouts/Categories/EditCategory";
import EditAdmin from "layouts/Admins/EditAdmin";
import EditCustomers from "layouts/Customers/EditCustomers";
import AddAdmin from "layouts/Admins/AddAdmin";
import AddWorker from "layouts/Workers/AddWorkers";
import AddReview from "layouts/Reviews/AddReview";
import EditReview from "layouts/Reviews/EditReview";
import AddCustomers from "layouts/Customers/AddCustomers";
import Gallery from "layouts/Gallery";
import AddGallery from "layouts/Gallery/AddGallery";
import EditGallery from "layouts/Gallery/EditGallery";
import EditWorker from "layouts/Workers/EditWorkers";
import Service from "layouts/Service";
import EditService from "layouts/Service/EditService";
import AddService from "layouts/Service/AddService";
import Appointment from "layouts/appointment";
import EditAppointment from "layouts/appointment/EditAppointment";
import AddAppointment from "layouts/appointment/AddAppointment";

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
    name: "Workers",
    key: "workers",
    icon: <RiAdminLine />,
    route: "/workers",
    component: <Worker />,
    sidenav: true,
  },
  {
    type: "collapse",
    name: "Workers",
    key: "workers",
    icon: <RiAdminLine />,
    route: "/workers/:id",
    component: <EditWorker />,
    sidenav: false,
  },
  {
    type: "collapse",
    name: "Add Worker",
    key: "add-worker",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/workers/add",
    component: <AddWorker />,
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
    route: "/Galleries/add",
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
    name: "Appointments",
    key: "Appointmentss",
    icon: <BiCommentDetail />,
    route: "/appointments",
    component: <Appointment />,
    sidenav: true,
  },
  {
    type: "collapse",
    name: "Add Appointments",
    key: "add-Appointment",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/Appointments/add",
    component: <AddAppointment />,
    sidenav: false,
  },
  {
    type: "collapse",
    name: "Edit appointments",
    key: "Edit Appointments",
    icon: <Icon fontSize="small">forest</Icon>,
    route: "/appointments/:id",
    component: <EditAppointment />,
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
    sidenav: false,
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
  {
    type: "collapse",
    name: "SignOut",
    key: "SignOut",
    icon: <Icon fontSize="small">SignOut</Icon>,
    route: "/authentication/sign-in",
    component: <SignOut/>,
    sidenav: true,
    
  },
];

export default routes;