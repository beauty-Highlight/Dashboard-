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

function EditGallery() {
    
    const { token } = useContext(AuthContext);
    console.log("token",token)
    
    const [gallery, setGallery] = useState({
        title: '',
        file: '',
    })
    const { id } = useParams()
    const navigate = useNavigate()
    const editGallery = async (event) => {
        event.preventDefault()
        // let CategoryData = new FormData(event.target)
        const edit = await fetch(`http://localhost:3002/galleries/:id`, {
            method: 'PUT',
            body: JSON.stringify(gallery),
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
        })
        const json = await edit.json()
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/galleries')
        }
    }

    useEffect(() => {
        async function getGallery() {
            const GalleryData = await fetch(`http://localhost:3002/galleries/`)
            const json = await GalleryData.json()
            setGallery(json.data)
        }
        getGallery();
    }, [])
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <form method="post" onSubmit={editGallery}>
                            <MDBox p={3}>
                                <MDTypography variant='h5'>Edit Gallery</MDTypography>
                                <MDBox pt={4} pb={2}>
                                    <MDBox mb={3}>
                                        <TextField value={gallery?.title} onChange={(e) => { setGallery({ ...gallery, title: e.target.value }) }} name="tilte" fullWidth label="gallery title" />
                                    </MDBox>
                                    <MDBox mb={3}>
                                        <TextField value={gallery?.file} onChange={(e) => { setGallery({ ...gallery, file: e.target.value }) }} name="file" fullWidth label="gallery file" />
                                    </MDBox>

                                    <MDBox>
                                        <Button variant="contained" type="submit">
                                            <MDTypography color='white' variant="p">
                                                Edit Galleries
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

export default EditGallery