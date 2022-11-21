import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import DashboardNavbar from "examples/Navbars/DashboardNavbar"

// @mui material components
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { TextField } from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from "context/Auth";

function EditCustomers() {
    const handleOnChange = (e) => {
        customer[e.target.name] = customer[e.target.value]
    }
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        image:'',
        currentPassword:'',
        newPassword: '',
        newPasswordConfirmation:'',
        
    })
    const { token } = useContext(AuthContext);
    // console.log("token",token)
    const { id } = useParams()
    const navigate = useNavigate()
    const editCustomer = async (event) => {
        event.preventDefault()
        let CustomerData = new FormData(event.target)
        // console.log("userData",userData)
        const edit = await fetch(`http://localhost:3002/Customers/` + id, {
            method: 'PUT',
            body: CustomerData,  
            headers: {
                // "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
        })
        const json = await edit.json()
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/customers')
        }
    }
    // const deletePhoto = async (id) => {
    //     if (window.confirm('Are you sure you want to delete this photo?')) {
    //       const deleted = await fetch(`${process.env.REACT_APP_API_URL}/photos/${id}`, {
    //         method: 'DELETE'
    //       })
    //       const result = await deleted.json()
    //       const remainedPhotos = trip.Photos.filter((photo) => {
    //         return photo.id !== id
    //       })
    //       setTrip({...trip, Photos: remainedPhotos})
    //       alert(result.messages.join(' '))
    //     }
    //   }
    useEffect(() => {
        async function getCustomer() {
            const CustomerData = await fetch(`http://localhost:3002/customers/all`)
            const json = await CustomerData.json()
            setCustomer(json.data)
        }
        getCustomer();
    }, [])
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <form method="post" onSubmit={editCustomer}>        

                            <MDBox p={3}>
                                <MDTypography variant='h5'>Edit Customer</MDTypography>
                                <MDBox pt={4} pb={2}>
                                    <MDBox mb={3}><TextField name="name" fullWidth label="name" value={customer.username} onChange={(e) => setCustomer({...customer, name: e.target.value})}/></MDBox>
                                    <MDBox mb={3}><TextField name="email" fullWidth label="Email" value={customer.email} onChange={(e) => setCustomer({...customer, email: e.target.value})} /></MDBox>
                                    <MDBox mb={3}><TextField name="currentPassword" fullWidth label="currentPassword" value={customer.image} onChange={(e) => setCustomer({...customer, currentPassword: e.target.value})} /></MDBox>
                                    <MDBox mb={3}><TextField name="newPassword" fullWidth label="Password" value={customer.password} onChange={(e) => setCustomer({...customer, password: e.target.value})} /></MDBox>
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
                                    {/* <MDBox mb={3}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateTimePicker
                                                value={trip.date}
                                                renderInput={(props) => <TextField name="date" fullWidth {...props} />}
                                                label="Trip Date"
                                                inputFormat="YYYY-MM-DD HH:mm:ss"
                                                mask="____-__-__ __:__:__"
                                                onChange={(newValue) => {
                                                    setTrip({ ...trip, date: dayjs(newValue).format("YYYY-MM-DD HH:mm:ss") })
                                                }}
                                            />
                                        </LocalizationProvider>
                                    </MDBox> */}
                                    {/* <MDBox mb={3}>
                                        <Grid container spacing={2}>
                                            {
                                                trip.Photos.map((photo, i) => {
                                                    return (
                                                        <Grid item key={i}>
                                                            <Avatar
                                                                alt=""
                                                                variant="square"
                                                                src={photo.file}
                                                                sx={{ width: 150, height: 150 }}
                                                            />
                                                            <IconButton aria-label="delete" onClick={() => {deletePhoto(photo.id)}}>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </Grid>
                                        <Button variant="contained" component="label" color='primary'>
                                            <MDTypography color='white' variant="p">
                                                <Grid container spacing={1}>
                                                    <Grid item><Icon>photo_library</Icon></Grid>
                                                    <Grid item>Upload Photos</Grid>
                                                </Grid>
                                            </MDTypography>
                                            <input hidden name="photo" accept="image/*" multiple type="file" />
                                        </Button>
                                    </MDBox> */}
                                    <MDBox>
                                        <Button variant="contained" type="submit">
                                            <MDTypography color='white' variant="p">
                                                Edit Customer
                                            </MDTypography>
                                        </Button>
                                    </MDBox>
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

export default EditCustomers