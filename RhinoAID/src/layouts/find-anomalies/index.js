// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import SearchBox from "./searchBox";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import {Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function FindAnomalies() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <MDBox mt={6} mb={3} display="flex" justifyContent="center">
          <SearchBox fullWidth label="Find Anomalies..." />
          <MDBox>
            <Link to="#">
                <IconButton color="text" size="large">
                  <Icon>search</Icon>
                </IconButton>
            </Link>
          </MDBox>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6} xl={6}>
                  <Link to='/find-anomalies/pre-crn-generation-analysis'>
                    <DefaultInfoCard
                      icon="table_view"
                      title="Pre CRN Generation Analysis"
                      description="Click To Analyze"
                    /> 
                  </Link>    
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <Link to='/find-anomalies/duplicate-account-nos-analysis'>
                    <DefaultInfoCard
                      icon="groups"
                      title="Duplicate Account Nos Analysis"
                      description="Click To Analyze"
                    /> 
                  </Link>    
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default FindAnomalies;
