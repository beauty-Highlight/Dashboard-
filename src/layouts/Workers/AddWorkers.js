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

function AddWorker() {
    const { token } = useContext(AuthContext);
    const [worker, setWorker]= useState({
        name:'',
        email:'',
        password:'',
        passwordConfirmation:'',
        image:'',
 
    })
    const navigate = useNavigate()
    const addWorker = async (event) => {
        let WorkerDate = new FormData (event.target) ;
        event.preventDefault()
        console.log(worker)  

            const added = await fetch(`http://localhost:3002/workers`, {
            method: 'POST',
            body: WorkerDate ,
            headers: {
            //    'Content-Type': "multipart/form-data",
                'Authorization': `Bearer ${token}`,
            },
           
        })
        const json = await added.json()
        console.log(json)
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/workers')
        }
    }
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <form method="POST" onSubmit={addWorker}>
                            <MDBox p={3}>
                                <MDTypography variant='h5'>Add New worker</MDTypography>
                                <MDBox pt={4} pb={2}>
                                    <MDBox mb={3}><TextField name="name" fullWidth label="name" value={worker.name} onChange={(e) => setWorker({...worker,name: e.target.value})}/></MDBox>
                                    <MDBox mb={3}><TextField name="email" fullWidth label="Email" value={worker.email} onChange={(e) => setWorker({...worker, email: e.target.value})} /></MDBox>
                                    <MDBox mb={3}><TextField name="password" fullWidth label="Password" value={worker.password} onChange={(e) => setWorker({...worker, password: e.target.value})} /></MDBox>
                                    <MDBox mb={3}><TextField name="passwordConfirmation" fullWidth label="passwordConfirmation" value={worker.passwordConfirmation} onChange={(e) => setWorker({...worker, passwordConfirmation: e.target.value})} /></MDBox>
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
                                                Add A New Worker
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

export default AddWorker