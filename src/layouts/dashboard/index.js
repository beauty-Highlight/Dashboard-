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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "context/AuthContext";
// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  // const ctx = useContext(AuthContext)

  const [customers, setCustomers] = useState([]);
  const [Services, setServices] = useState([]);
  const [Reviews, setReviews] = useState([]);
  const [Workers, setWorkers] = useState([]);

  // const [users, setCustomer] = useState([])

 useEffect(()=>{
  fetch(`http://localhost:3002/Customers`)
  .then(response => {
    response.json().then(customer => {
      console.log(customer.data.length, "hhhhhhhhhh")
      setCustomers(customer?.data)
  })
  })
 },[] ) 
 console.log("highlighter", customers.length)
 const customerN = customers.length


 useEffect(()=>{
  fetch(`http://localhost:3002/services`)
  .then(response => {
    response.json().then(service => {
      console.log(service.data.length, "hhhhhhhhhh")
      setServices(service?.data)
  })
  })
 },[] ) 
 console.log("highlighter", Services.length)
 const serviceN = Services.length


 useEffect(()=>{
  fetch(`http://localhost:3002/reviews`)
  .then(response => {
    response.json().then(review => {
      console.log(review.data.length, "hhhhhhhhhh")
      setReviews(review?.data)
  })
  })
 },[] ) 
 console.log("highlighter", Reviews.length)
 const reviewN = Reviews.length


 useEffect(()=>{
  fetch(`http://localhost:3002/workers`)
  .then(response => {
    response.json().then(worker => {
      console.log(worker.data.length, "hhhhhhhhhh")
      setWorkers(worker?.data)
  })
  })
 },[] ) 
 console.log("highlighter", Workers.length)
 const workerN = Workers.length

 

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="person_add"
                title="Customers"
                count={customerN}
                percentage={{
                  color: "success",
                  // amount: "+55%",
                  // label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Services"
                count={serviceN}
                percentage={{
                  color: "success",
                  // amount: "+3%",
                  // label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Reviews"
                count={reviewN}
                percentage={{
                  color: "success",
                  // amount: "+1%",
                  // label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Workers"
                count={workerN}
                percentage={{
                  color: "success",
                  // amount: "",
                  // label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid> */}
            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid> */}
            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid> */}
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
