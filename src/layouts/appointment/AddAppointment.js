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
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/Auth";
import Review from ".";

function AddAppointments() {
    const handleOnChange = (e) => {
        Review[e.target.name] = Review[e.target.value]
    }
    const { token } = useContext(AuthContext);
    const [appointment, setAppointment]= useState({
        datetime: "" ,
        note: "" ,
        serviceId: "" ,
        workerId: "" ,
        customerId : "",
        addressId : ""     
    })
    const navigate = useNavigate()
    const AddAppointment = async (event) => {
        event.preventDefault()     
        const added = await fetch(`http://localhost:3002/appointments`, {
            method: 'POST',
            body: JSON.stringify(appointment),
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            }
        })
        const json = await added.json()
        console.log(json)
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/appointments')
        }
    }
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <form method="post" onSubmit={AddAppointment}>
                            <MDBox p={3}>
                                <MDTypography variant='h5'>Add New appointment</MDTypography>
                                <MDBox pt={4} pb={2}>
                                <MDBox mb={3}><TextField name="datetime" fullWidth label="datetime" value={appointment.datetime} onChange={(e) => setAppointment({...appointment, datetime: e.target.value})} /></MDBox>
                                    <MDBox mb={3}><TextField name="isHome" fullWidth label="isHome" value={appointment.isHome} onChange={(e) => setAppointment({...appointment, isHome: e.target.value})}/></MDBox>
                                    <MDBox mb={3}><TextField name="note" fullWidth label="note" value={appointment.note} onChange={(e) => setAppointment({...appointment, note: e.target.value})} /></MDBox>
                                    <MDBox mb={3}><TextField name="serviceId" fullWidth label="serviceId" value={appointment.serviceId} onChange={(e) => setAppointment({...appointment, serviceId: e.target.value})} /></MDBox>
                                    <MDBox mb={3}><TextField name="workerId" fullWidth label="workerId" value={appointment.workerId} onChange={(e) => setAppointment({...appointment, workerId: e.target.value})}/></MDBox>
                                    <MDBox mb={3}><TextField name="customerId" fullWidth label="customerId" value={appointment.customerId} onChange={(e) => setAppointment({...appointment, customerId: e.target.value})}/></MDBox>
                                    <MDBox mb={3}><TextField name="addressId" fullWidth label="addressId" value={appointment.addressId} onChange={(e) => setAppointment({...appointment, addressId: e.target.value})} /></MDBox>
                                    <MDBox>
                                        <Button variant="contained" type="submit">
                                            <MDTypography color='white' variant="p">
                                                Add A New Appointment
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

export default AddAppointments



