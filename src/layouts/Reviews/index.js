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

function Review() {
    const columns = [
        { Header: "id", accessor: "id", align: "left" },
        { Header: "content", accessor: "content", align: "left" },
        { Header: "userId", accessor: "userId", align: "center" },
        { Header: "bookId", accessor: "bookId", align: "center" },
        { Header: "options", accessor: "options", align: "center" },
    ];
    const [rows, setRows] = useState([]);
    const [tableRows, setTableRows] = useState([])
    const{token}= useContext(AuthContext)
    const deleteReview = async (id) => {
        if (window.confirm('Are you sure you want to delete this review?')) {
            const deleted = await fetch(`${process.env.REACT_APP_API_URL}/reviews/` + id, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            })
            const result = await deleted.json()
            const remainedRows = rows.filter((review) => {
                return review.id != id
            })
            setRows(remainedRows)
            alert(result.messages.join(' '))
        }

    }
    useEffect(() => {
        const jsxRows = rows?.map((review) => {
            return {
                id: <>{review.id}</>,
                content: <>{review.content}</>,
                userId: <>{review.userId}</>,
                bookId: <>{review.bookId}</>,
                options: <>
                    <MDButton variant="text" color="error" onClick={() => { deleteReview(review.id) }}>
                        <Icon>delete</Icon>&nbsp;delete
                    </MDButton>
                    <Link to={`/reviews/${review.id}`}>
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
        async function getReviews() {
            const data = await fetch(`${process.env.REACT_APP_API_URL}/reviews/all`);
            const reviews = await data.json()
            setRows(reviews.data)
        }
        getReviews();
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
                                        Review List
                                        </MDTypography>
                                    </Grid>
                                    <Grid item>
                                        <Link to='/reviews/add'>
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

export default Review;