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
import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "context/Auth";

function Appointment() {
  const columns = [
    { Header: "Date And Time", accessor: "datetime", align: "left" },
    { Header: "At Home", accessor: "isHome", align: "center" },
    { Header: "Notes", accessor: "note", align: "center" },
    { Header: "Service", accessor: "serviceId", align: "left" },
    { Header: "Customer Name", accessor: "customerName", align: "center" },
    { Header: "Customer Email", accessor: "customerId", align: "center" },
    { Header: "Address", accessor: "addressId", align: "center" },
    //{ Header: "Options", accessor: "options", align: "center" },
  ];
  const [rows, setRows] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const { token } = useContext(AuthContext);

  const deleteAppointment = async (id) => {
    if (window.confirm("Are you sure you want to delete this Appointments?")) {
      const deleted = await fetch(`http://localhost:3002/appointments/` + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await deleted.json();
      const remainedRows = rows.filter((appointment) => {
        return appointment.id != id;
      });
      setRows(remainedRows);
      alert(result.messages.join(" "));
    }
  };

  useEffect(() => {
    async function getAppointments() {
      const data = await fetch(`http://localhost:3002/appointments/all`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const Appointments = await data.json();
      setRows(Appointments.data);
      console.log(Appointments.data);
    }
    getAppointments();
  }, []);



  useEffect(() => {
    const jsxRows = rows?.map((appointment) => {

        var day = appointment?.datetime

        var yyyy = day.split('').slice(0,4).join('');
        var mm = day.split('').slice(5,7).join('');
        var dd = day.split('').slice(8,10).join('');

        var hh = day.split('').slice(11,13).join('');
        var mn = day.split('').slice(14,16).join('');

        var theDay= yyyy+ "-"+mm+"-"+dd
        var theTime= hh+ ":"+mn
        

      return {
        //id: <>{appointment?.id}</>,
        datetime: <>
        <>{theDay}</><br/>
        <>{theTime}</>
        </>,
        isHome: <>{appointment?.isHome == true ? <p>Yes</p> : <p>No</p>}</>,
        note: <>{appointment?.note}</>,
        serviceId: <>{appointment?.Service?.title}</>,
        customerName: <>{appointment?.Customer?.name}</>,
        customerId: <>{appointment?.Customer?.email}</>,
        addressId: (
          <>
            {appointment?.addressId == null ? (
              <>
                <h6>--</h6>
              </>
            ) : (
              <>
                <>street: {appointment?.Address?.street}</><br/>
                <>building: {appointment?.Address?.building}</><br/>
                <>apartment: {appointment?.Address?.apartment}</>
              </>
            )}
          </>
        ),
        // options: (
        //   <>
        //     <MDButton
        //       variant="text"
        //       color="error"
        //       onClick={() => {
        //         deleteAppointment(appointment?.id);
        //       }}
        //     >
        //       <Icon>delete</Icon>&nbsp;delete
        //     </MDButton>
        //     <Link to={`/appointments/${appointment?.id}`}>
        //       {/* <MDButton variant="text" color="dark">
        //                     <Icon>edit</Icon>&nbsp;edit
        //                 </MDButton> */}
        //     </Link>
        //   </>
        // ),
      };
    });
    setTableRows(jsxRows);
  }, [rows]);

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
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <MDTypography variant="h6" color="white">
                      Appointment List
                    </MDTypography>
                  </Grid>
                  {/* <Grid item>
                    <Link to="/appointments/add">
                      <MDButton variant="text" color="white">
                        <Icon>add_circle</Icon>&nbsp;Add
                      </MDButton>
                    </Link>
                  </Grid> */}
                </Grid>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{
                    columns,
                    rows: tableRows,
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

export default Appointment;
