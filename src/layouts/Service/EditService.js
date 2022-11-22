

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
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { AuthContext } from "context/Auth";

function EditService() {
    
    const { token } = useContext(AuthContext);
    console.log("token",token)
       const { id } = useParams()
    const [service, setService] = useState({
         title: '',
         price: '',
         time: '',
         description: '',
         image: '',
         id: id
    })
 

    const navigate = useNavigate()
    const editService = async (event) => {
        event.preventDefault()
        let ServiceData = new FormData(event.target)
        const edit = await fetch(`http://localhost:3002/services/` + id , {
            method: 'PUT',
            body:ServiceData,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        const json = await edit.json()
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/services')
        }
    }
        console.log("id",id)

    useEffect(() => {
        async function getService() {
            const ServiceData = await fetch(`http://localhost:3002/services `)
            const json = await ServiceData.json()
            setService(json.data)
        }
        getService();
    }, [])
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <form method="post" onSubmit={editService}>
                            <MDBox p={3}>
                                <MDTypography variant='h5'>Edit Service</MDTypography>
                                <MDBox pt={4} pb={2}>
                                <MDBox mb={3}>
                                        <TextField value={service?.title} onChange={(e) => { setService({ ...service, title: e.target.value }) }} name="title" fullWidth label="service title" />
                                   </MDBox>
                                    <MDBox mb={3}>
                                        <TextField value={service?.price} onChange={(e) => { setService({ ...service, price: e.target.value }) }} name="price" fullWidth label="service price" />
                                    </MDBox>
                                     <MDBox mb={3}>
                                         <TextField value={service?.time} onChange={(e) => { setService({ ...service, time: e.target.value }) }} name="time" fullWidth label="service time" />
                                     </MDBox>
                                       <MDBox mb={3}>
                                         <TextField value={service?.description} onChange={(e) => { setService({ ...service, description: e.target.value }) }} name="description" fullWidth label="service descripition" />
                                     </MDBox>  
                                    <MDBox mb={3}>
                                        <Button variant="contained" component="label" color='primary'>
                                            <MDTypography color='white' variant="p">
                                                <Grid container spacing={1}>
                                                    <Grid item></Grid>
                                                    <Grid item>Upload image</Grid>
                                                </Grid>
                                            </MDTypography>
                                            <input name='image' hidden accept="image/*" multiple type="file" />
                                        </Button>
                                    </MDBox>

                                    <MDBox>
                                        <Button variant="contained" type="submit">
                                            <MDTypography color='white' variant="p">
                                                Edit Services
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

export default EditService