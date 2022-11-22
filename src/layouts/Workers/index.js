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
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";



function Worker() {
    const{token}= useContext(AuthContext)
    const columns = [
        { Header: "name", accessor: "name", align: "left" },
        { Header: "email", accessor: "email", align: "center" },
        { Header: "image", accessor: "image", align: "center" },
        { Header: "options", accessor: "options", align: "center" },



    ];

    const [rows, setRows] = useState([]);
    const [tableRows, setTableRows] = useState([])

    const deleteWorker = async (id) => {
        if (window.confirm("Are you sure you want to delete this worker?")) {
          const deleted = await fetch(`http://localhost:3002/workers/` + id, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          const result = await deleted.json();
          const remainedRows = rows.filter((worker) => {
            return worker.id != id;
          });
          setRows(remainedRows);
          alert(result.messages.join(" "));
        }
      };
    useEffect(() => {
        const jsxRows = rows?.map((worker) => {
            return {
                id: <>{worker?.id}</>,
                name: <>{worker?.name}</>,
                email: <>{worker?.email}</>,
                password: <>{worker?.password}</>,
                passwordConfirmation: <>{worker?.passwordConfirmation}</>,
                // image: <>{worker?.image}</>,
                image: (
                    <>
                      <Avatar alt="" variant="square" src={worker.image} sx={{ width: 100, height: 100 }} />
                    </>
                  ),



                options: <>
                    <MDButton variant="text" color="error" onClick={() => { deleteWorker(worker.id) }}>
                        <Icon>delete</Icon>&nbsp;delete
                    </MDButton>
                    <Link to={`/workers/${worker.id}`}>
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
        async function getWorker() {
            const data = await fetch(`http://localhost:3002/workers/`,
            {
                method: 'GET',
                headers: new Headers({
                    'Authorization': `Bearer ${token}`, 
                  }),
                redirect: 'follow'
            }
            );
            const workers = await data.json()
            if(workers?.success){
                setRows(workers.data)
            }
        }
        getWorker();
    }, []);
    console.log(rows)
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
                                            Workers List
                                        </MDTypography>
                                    </Grid>
                                    <Grid item>
                                        <Link to='/workers/add'>
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

export default Worker;