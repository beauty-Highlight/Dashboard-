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
        { Header: "datetime", accessor: "datetime", align: "left" },
        { Header: "isHome", accessor: "isHome", align: "center" },
        { Header: "note", accessor: "note", align: "center" },
        { Header: "serviceId", accessor: "serviceId", align: "left" },
        { Header: "workerId", accessor: "workerId", align: "center" },
        { Header: "customerId", accessor: "customerId", align: "center" },
        { Header: "addressId", accessor: "addressId", align: "center" },
        { Header: "options", accessor: "options", align: "center" },
    ];
    const [rows, setRows] = useState([]);
    const [tableRows, setTableRows] = useState([])
    const{token}= useContext(AuthContext)
    const deleteAppointment = async (id) => {
        if (window.confirm('Are you sure you want to delete this Appointments?')) {
            const deleted = await fetch(`http://localhost:3002/appointments/` + id , {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                }
            })
            const result = await deleted.json()
            const remainedRows = rows.filter((appointment) => {
                return appointment.id != id
            })
            setRows(remainedRows)
            alert(result.messages.join(' '))
        }

    }

    useEffect(() => {
        const jsxRows = rows?.map((appointment) => {
            return {
                id: <>{appointment.id}</>,
                datetime: <>{appointment.datetime}</>,
                isHome: <>{appointment.isHome}</>,
                note: <>{appointment.note}</>,
                serviceId: <>{appointment.serviceId}</>,
                workerId: <>{appointment.workerId}</>,
                customerId: <>{appointment.customerId}</>,
                addressId: <>{appointment.addressId}</>,
                options: <>
                    <MDButton variant="text" color="error" onClick={() => { deleteAppointment(appointment.id) }}>
                        <Icon>delete</Icon>&nbsp;delete
                    </MDButton>
                    <Link to={`/appointments/${appointment.id}`}>
                        {/* <MDButton variant="text" color="dark">
                            <Icon>edit</Icon>&nbsp;edit
                        </MDButton> */}
                    </Link>
                </>
            };
        });
        setTableRows(jsxRows);
    }, [rows])
    useEffect(() => {
        async function getAppointments() {
            const data = await fetch(`http://localhost:3002/appointments`);
            const Appointments = await data.json()
            setRows(Appointments.data)
        }
        getAppointments();
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
                                        Appointment List
                                        </MDTypography>
                                    </Grid>
                                    <Grid item>
                                        <Link to='/appointments/add'>
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

export default Appointment;