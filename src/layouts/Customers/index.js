import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";

import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

import { Link } from "react-router-dom";

function Customer() {
  const columns = [
    { Header: "id", accessor: "id", align: "left" },
    { Header: "name", accessor: "name", align: "left" },
    { Header: "email", accessor: "email", align: "center" },
    { Header: "image", accessor: "image", align: "left" },
    // { Header: "password", accessor: "password", align: "center" },
    { Header: "options", accessor: "options", align: "center" },
  ];
  const [rows, setRows] = useState([]);
  const [tableRows, setTableRows] = useState([])
  const { token } = useContext(AuthContext);

  const deleteCustomer = async (id) => {
    if (window.confirm('Are you sure you want to delete this Customer?')) {
      const deleted = await fetch(`http://localhost:3000/customers/` + id, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
      })
      const result = await deleted.json()
      const remainedRows = rows.filter((Customer) => {
        return Customer.id !== id
      })
      setRows(remainedRows)
      alert(result.messages.join(' '))
    }

  }
  useEffect(() => {
    const jsxRows = rows?.map((Customer) => {
      return {
        id: <>{Customer.id}</>,
        name: <>{Customer.name}</>,
        email: <>{Customer.email}</>,
        image: <>{Customer.image}</>,
        password: <>{Customer.password}</>,
        passwordConfirmation: <>{Customer.passwordConfirmation}</>,

        options: <>
         <MDButton variant="text" color="error" onClick={() => { deleteCustomer(Customer.id) }}>
            <Icon>delete</Icon>&nbsp;delete
          </MDButton>
          <Link to={`/customers/${Customer.id}`}>
            <MDButton variant="text" color="dark">
              <Icon>edit</Icon>&nbsp;edit
            </MDButton>
          </Link>
        </>
      };
    },[]);
    setTableRows(jsxRows);
  }, [rows])
  useEffect(() => {
    async function getcustomers() {
      const data = await fetch(`http://localhost:3000/customers`);
      const customers = await data.json()
      setRows(customers.data)
    }
    getcustomers();
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <MDTypography variant="h6" color="white">
                    Customers List
                    </MDTypography>
                  </Grid>
                  <Grid item>
                    <Link to='/customers/add'>
                      <MDButton variant="text" color="white">
                        <Icon>add_circle</Icon>&nbsp;Add
                      </MDButton>
                    </Link>
                  </Grid>
                </Grid>

              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{
                    columns,
                    rows: tableRows
                  }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Customer;