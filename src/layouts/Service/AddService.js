

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
import { useRef, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

function AddService() {
    const{token}= useContext(AuthContext)
    const handleOnChange = (e) => {
        service[e.target.name] = service[e.target.value]
    }
    const [service, setService]= useState({
        title:'',
        price:'',
        time:'',
        description:'',
        image:'',
    })
    const navigate = useNavigate()
    const AddService = async (event) => {
        let ServiceDate = new FormData(event.target);
        event.preventDefault()
        console.log(service)        
        const added = await fetch(`http://localhost:3002/services`, {
            method: 'POST',
            body:ServiceDate,
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        const json = await added.json()
        console.log(json)
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/Services')
        }
    }
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <form method="post" onSubmit={AddService}>
                            <MDBox p={3}>
                                <MDTypography variant='h5'>Add New Service</MDTypography>
                                <MDBox pt={4} pb={2}>
                                    <MDBox mb={3}><TextField name="title" fullWidth label="title" value={service.title} onChange={(e) => setService({...service, title: e.target.value})}/></MDBox>
                                    <MDBox mb={3}><TextField name="price" fullWidth label="price" value={service.price} onChange={(e) => setService({...service, price: e.target.value})} /></MDBox>
                                    <MDBox mb={3}><TextField name="time" fullWidth label="time" value={service.time} onChange={(e) => setService({...service, time: e.target.value})} /></MDBox>
                                    <MDBox mb={3}><TextField name="description" fullWidth label="description" value={service.description} onChange={(e) => setService({...service, description: e.target.value})} /></MDBox>
                                    <MDBox mb={3}>
                                    <Button variant="contained" component="label" color='primary'>
                                            <MDTypography color='white' variant="p">
                                                <Grid container spacing={1}>
                                                    <Grid item><Icon>image</Icon></Grid>
                                                    <Grid item>Upload image</Grid>
                                                </Grid>
                                            </MDTypography>
                                            <input name='image' hidden accept="image/*" multiple type="file" />
                                        </Button>
                                    </MDBox>
                                    <MDBox>
                                        <Button variant="contained" type="submit">
                                            <MDTypography color='white' variant="p">
                                                Add A New Service
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

export default AddService