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
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="Vision highlighter"
                description="The beauty of our external appearance comes from our people. But the beauty of our inner spirit comes from our life experience, it is the growth of consciousness, the main difference between these two concepts are completely different,)."
                info={{
                  fullName: "highlighter beauty",
                  mobile: "(09) 5512762470",
                  email: "highlighter@mail.com",
                  location: "istanbul",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/creativetim",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/creativetimofficial/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            {/* <Grid item xs={12} xl={4}>
              <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
            </Grid> */}
          </Grid>
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
          Sections
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
            {/* Sections */}
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                // label="Skin Care"
                title="Skin Care"
                description="The glow of healthy, youthful, and nourished skin is hard to miss. Such healthy skin looks dewy and fresh all day long, even without makeup. Even if you're blessed to be born with naturally glowing skin, stress, ."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Skin Care",
                }}
                // authors={[
                //   { image: team1, name: "Elena Morison" },
                //   { image: team2, name: "Ryan Milly" },
                //   { image: team3, name: "Nick Daniel" },
                //   { image: team4, name: "Peterson" },
                // ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                // label="project #1"
                title="Hare Care"
                description="Hair care can often be challenging, especially if you are limited on time, but keeping your hair healthy and stylish can help you feel more confident and attractive  Creating a hair care routine is easy.."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Hare Care",
                }}
                // authors={[
                //   { image: team3, name: "Nick Daniel" },
                //   { image: team4, name: "Peterson" },
                //   { image: team1, name: "Elena Morison" },
                //   { image: team2, name: "Ryan Milly" },
                // ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                // label="project #3"
                title="Massage"
                description="Did you know your bones also have a blood supply and receive the same advantages from massage as your muscles? Blood flow brings calcium and other minerals to your bones to support their ."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "Massage",
                }}
                // authors={[
                //   { image: team4, name: "Peterson" },
                //   { image: team3, name: "Nick Daniel" },
                //   { image: team2, name: "Ryan Milly" },
                //   { image: team1, name: "Elena Morison" },
                // ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                // label="project #4"
                title="makeup"
                description="ry the best beauty camera makeup filters from top brand beauty products. Dye your hair with our hair color changer for the most realistic virtual hair dye & hair salon experience The best makeup editor for you."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "makeup",
                }}
                // authors={[
                //   { image: team4, name: "Peterson" },
                //   { image: team3, name: "Nick Daniel" },
                //   { image: team2, name: "Ryan Milly" },
                //   { image: team1, name: "Elena Morison" },
                // ]}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
