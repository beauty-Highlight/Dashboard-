import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import DashboardNavbar from "examples/Navbars/DashboardNavbar"

// @mui material components
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { TextField } from "@mui/material";


import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { useContext, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "context/Auth";

function EditReview() {
    const handleOnChange = (e) => {
        review[e.target.name] = review[e.target.value]
    }
    const [review, setReview]= useState({
        content: "" ,
        customerId : "",
        stars : ""
    })
    const navigate = useNavigate()
    const { token } = useContext(AuthContext);
    const { id } = useParams()
    const EditReview = async (event) => {
        event.preventDefault()     
        const edited = await fetch(`http://localhost:3002/reviews/` + id, {
            method: 'PUT',
            body:  JSON.stringify(review),
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            }
        })
        const json = await edited.json()
        console.log(json)
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/reviews')
        }
    }
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <form method="post" onSubmit={EditReview}>
                            <MDBox p={3}>
                                <MDTypography variant='h5'></MDTypography>
                                <MDBox pt={4} pb={2}>
                                    <MDBox mb={3}><TextField name="content" fullWidth label="content" value={review.content} onChange={(e) => setReview({...review, content: e.target.value})} /></MDBox>
                                    <MDBox mb={3}><TextField name="customerId" fullWidth label="customerId" value={review.customerId} onChange={(e) => setReview({...review, customerId: e.target.value})}/></MDBox>
                                    <MDBox mb={3}><TextField name="stars" fullWidth label="stars" value={review.stars} onChange={(e) => setReview({...review, stars: e.target.value})} /></MDBox>
                                    <MDBox>
                                        <Button variant="contained" type="submit">
                                            <MDTypography color='white' variant="p">
                                               {/* Edit Review */}
                                            </MDTypography>
                                        </Button>
                                    </MDBox>
                                </MDBox>
                            </MDBox>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </DashboardLayout>
    )
}

export default EditReview