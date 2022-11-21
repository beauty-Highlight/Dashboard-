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

function Gallery() {
    const columns = [
        { Header: "tiltle", accessor: "title", align: "left" },
        { Header: "file", accessor: "file", align: "center" },
        { Header: "options", accessor: "options", align: "center" },
    ];
    const [rows, setRows] = useState([]);
    const [tableRows, setTableRows] = useState([])
    const{token}= useContext(AuthContext)
    console.log("Token is ",token)
    const deleteGallery = async (id) => {
        if (window.confirm('Are you sure you want to delete this Gallery?')) {
            const deleted = await fetch(`http://localhost:3002/Galleries/` +id , {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            })
            const result = await deleted.json()
            const remainedRows = rows.filter((gallery) => {
                return gallery.id != id
            })
            setRows(remainedRows)
            alert(result.messages.join(' '))
        }

    }
    useEffect(() => {
        const jsxRows = rows?.map((gallery) => {
            return {
                id: <>{gallery.id}</>,
                title: <>{gallery.title}</>,
                // file: <>{gallery.file}</>,
                file: (
                    <>
                      <Avatar alt="" variant="square" src={gallery.file} sx={{ width: 100, height: 100 }} />
                    </>
                  ),
                options: <>
                    <MDButton variant="text" color="error" onClick={() => { deleteGallery(gallery.id) }}>
                        <Icon>delete</Icon>&nbsp;delete
                    </MDButton>
                    <Link to={`/galleries/${gallery.id}`}>
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
        async function getGalleries() {
            const data = await fetch(`http://localhost:3002/Galleries`);
            const Galleries = await data.json()
            setRows(Galleries.data)
        }
        getGalleries();
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
                                        Galleries List
                                        </MDTypography>
                                    </Grid>
                                    <Grid item>
                                        <Link to='/Galleries/add'>
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

export default Gallery;