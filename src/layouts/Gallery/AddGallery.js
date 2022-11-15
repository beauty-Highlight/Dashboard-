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

function AddGallery() {
    const{token}= useContext(AuthContext)
    const handleOnChange = (e) => {
        gallery[e.target.name] = gallery[e.target.value]
    }
    const [gallery, setGallery]= useState({
        title:'',
        file:'',
        
    })
    const navigate = useNavigate()
    const addGallery = async (event) => {
        event.preventDefault()
        console.log(gallery)        
        const added = await fetch(`http://localhost:3000/galleries/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`, 
                "Content-Type": "application/json"
            },
            body:  JSON.stringify(gallery)
        })
        const json = await added.json()
        console.log(json)
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/galleries')
        }
    }
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <form method="post" onSubmit={addGallery}>
                            <MDBox p={3}>
                                <MDTypography variant='h5'>Add New Gallery</MDTypography>
                                <MDBox pt={4} pb={2}>
                                    <MDBox mb={3}><TextField name="title" fullWidth label="title" value={gallery.title} onChange={(e) => setGallery({...gallery, title: e.target.value})}/></MDBox>
                                    <MDBox mb={3}><TextField name="file" fullWidth label="file" value={gallery.file} onChange={(e) => setGallery({...gallery, file: e.target.value})} /></MDBox>
                                    <MDBox>
                                        <Button variant="contained" type="submit">
                                            <MDTypography color='white' variant="p">
                                                Add A New Gallery
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

export default AddGallery