import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import DashboardNavbar from "examples/Navbars/DashboardNavbar"

// @mui material components
// import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { TextField } from "@mui/material";

import Button from "@mui/material/Button";
// import Icon from "@mui/material/Icon";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AuthContext } from "context/Auth";


function EditWorkers() {
    const { token } = useContext(AuthContext);
    const [worker, setWorker] = useState({
        name: '',
        email: '',
        newPassword: '',
        newPasswordConfirmation: '',
        image:'',

    })
    const { id } = useParams()
    const navigate = useNavigate()
    const editWorker = async (event) => {
        event.preventDefault()
        // let adminData = new FormData(event.target)
        const added = await fetch(`http://localhost:3002/workers/` +id , {
            method: 'PUT',
            body: JSON.stringify(worker),
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
        })
        const json = await added.json()
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/workers')
        }
    }
    useEffect(() => {
        async function getWorker() {
            const WorkerData = await fetch(`http://localhost:3002/workers/`)
            const json = await WorkerData.json()
            setWorker(json.data)
        }
        getWorker();
    }, [])
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <form method="put" onSubmit={editWorker}>
                            <MDBox p={3}>
                                <MDTypography variant='h5'>Edit Worker</MDTypography>
                                <MDBox pt={4} pb={2}>
                                    <MDBox mb={3}>
                                        <TextField value={worker?.name} onChange={(e) => { setWorker({ ...worker,name: e.target.value }) }} name="name" fullWidth label="worker Name" /></MDBox>
                                  
                                    <MDBox mb={3}>
                                        <TextField value={worker?.email} onChange={(e) => { setWorker({ ...worker, email: e.target.value }) }} name="email" fullWidth label="worker Email" /></MDBox>

                                        <MDBox mb={3}>
                                        <TextField value={worker?.currentPassword} onChange={(e) => { setWorker({ ...worker, currentPassword: e.target.value }) }} name="currentPassword" fullWidth label="worker currentPassword" /></MDBox>

                                        <MDBox mb={3}>
                                        <TextField value={worker?.newPassword} onChange={(e) => { setWorker({ ...worker, newPassword: e.target.value }) }} name="newPassword" fullWidth label="worker newPassword" /></MDBox>

                                    <MDBox mb={3}>
                                        <TextField value={worker?.newPasswordConfirmation} onChange={(e) => { setWorker({ ...worker, newPasswordConfirmation: e.target.value }) }} name="newPasswordConfirmation" fullWidth label="worker newPasswordConfirmation" /></MDBox>
                                       
                                        <MDBox mb={3}>
                                        <Button variant="contained" component="label" color='primary'>
                                            <MDTypography color='white' variant="p">
                                                <Grid container spacing={1}>
                                                    <Grid item>image</Grid>
                                                    <Grid item>Upload image</Grid>
                                                </Grid>
                                            </MDTypography>
                                            <input name='image' hidden accept="image/*" multiple type="file" />
                                        </Button>
                                    </MDBox>
                                    <MDBox>
                                        <Button variant="contained" type="submit">
                                            <MDTypography color='white' variant="p">
                                                Edit Worker
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

export default EditWorkers