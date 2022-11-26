
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
import { Avatar } from "@mui/material";

function Service() {
    const columns = [
        { Header: "tiltle", accessor: "title", align: "left" },
        { Header: "price", accessor: "price", align: "center" },
        // { Header: "time", accessor: "time", align: "center" },
        { Header: "description", accessor: "description", align: "center" },
        { Header: "image", accessor: "image", align: "center" },
        { Header: "options", accessor: "options", align: "center" },
    ];
    const [rows, setRows] = useState([]);
    const [tableRows, setTableRows] = useState([])
    const{token}= useContext(AuthContext)
    console.log("Token is ",token)
    const deleteService = async (id) => {
        if (window.confirm('Are you sure you want to delete this Service?')) {
            const deleted = await fetch(`http://localhost:3002/services/` +id , {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            })
            const result = await deleted.json()
            const remainedRows = rows.filter((service) => {
                return service.id != id
            })
            setRows(remainedRows)
            alert(result.messages.join(' '))
        }

    }
    useEffect(() => {
        const jsxRows = rows?.map((service) => {
            return {
                id: <>{service?.id} </>,
                title: <>{service?.title}</>,
                price: <>{service?.price }</>,
                // image: <>{service?.image} </>,
                time: <>{service?.time}</>,
                // description: <>{service?.description}</>,
                image: (
                    <>
                      <Avatar alt="" variant="square" src={service?.image} sx={{ width: 100, height: 100 }} />
                    </>
                  ),
                options: <>
                    <MDButton variant="text" color="error" onClick={() => { deleteService(service.id) }}>
                        <Icon>delete</Icon>&nbsp;delete
                    </MDButton>
                    <Link to={`/services/${service.id}`}>
                        <MDButton variant="text" color="dark">
                            <Icon>edit</Icon>&nbsp;edit
                        </MDButton>
                    </Link>
                </>
                
            };
        });
        setTableRows(jsxRows);
    }, [rows])
    useEffect(() => {
        async function getServices() {
            const data = await fetch(`http://localhost:3002/services`);
            const Services = await data.json()
            setRows(Services.data)
        }
        getServices();
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
                                        Services List
                                        </MDTypography>
                                    </Grid>
                                    <Grid item>
                                        <Link to='/Services/add'>
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

export default Service;