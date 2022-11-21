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
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCustomers() {
    const handleOnChange = (e) => {
        Customer[e.target.name] = Customer[e.target.value]
    }
    const [Customer, setCustomer]= useState({
        name:'',
        email:'',
        image:'',
        password:'',
        passwordConfirmation:''
    })
    const navigate = useNavigate()
    const addCustomer = async (event) => {
        let CustomerData = new FormData(event.target)

        event.preventDefault()
        console.log(Customer)        
        const added = await fetch(`http://localhost:3002/Customers`, {
            method: 'POST',
            body:CustomerData,
            headers: {
                // 'Authorization': `Bearer ${token}`,
            },
        })
        const json = await added.json()
        console.log(json)
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/customers')
        }
    }
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <form method="post" onSubmit={addCustomer}>
                            <MDBox p={3}>
                                <MDTypography variant='h5'>Add New Customer</MDTypography>
                                <MDBox pt={4} pb={2}>
                                    <MDBox mb={3}><TextField name="name" fullWidth label="name" value={Customer.name} onChange={(e) => setCustomer({...Customer, name: e.target.value})}/></MDBox>
                                    <MDBox mb={3}><TextField name="email" fullWidth label="Email" value={Customer.email} onChange={(e) => setCustomer({...Customer, email: e.target.value})} /></MDBox>
                                    <MDBox mb={3}><TextField name="password" fullWidth label="Password" value={Customer.password} onChange={(e) => setCustomer({...Customer, password: e.target.value})} /></MDBox>
                                    <MDBox mb={3}><TextField name="passwordConfirmation" fullWidth value={Customer.passwordConfirmation} label="Password Confirmation" onChange={(e) => setCustomer({...Customer, passwordConfirmation: e.target.value})} /></MDBox>
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
                                                Add A New Customer
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

export default AddCustomers