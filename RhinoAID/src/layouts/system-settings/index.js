// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import {Link} from "react-router-dom";

function SystemSettings() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6}>
        <MDBox mb={3}>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6} xl={3}>
                  <Link to='/system-settings/user-settings'>
                    <DefaultInfoCard
                      icon="person"
                      title="User Settings"
                      description="Manage user accounts"
                    /> 
                  </Link>                  
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <Link to='/system-settings/field-offices'>
                    <DefaultInfoCard
                      icon="home"
                      title="Field Offices"
                      description="Manage field offices data"                    
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <Link to='/system-settings/settlements'>
                    <DefaultInfoCard
                      icon="home"
                      title="Settlements / FDPs"
                      description="Manage settlements data"                    
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <Link to='/system-settings/transfer-value'>
                    <DefaultInfoCard
                      icon="table_view"
                      title="Transfer Value"
                      description="Manage the transfer values"                    
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <Link to='/system-settings/signatures'>
                    <DefaultInfoCard
                      icon="list"
                      title="Signatures"
                      description="Manage signatories"
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <Link to='/system-settings/checks'>
                    <DefaultInfoCard
                      icon="notes"
                      title="Checks"
                      description="Manage checks list"
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <Link to='/system-settings/cycles'>
                    <DefaultInfoCard
                      icon="donut_large"
                      title="Cycles"
                      description="Manage cycles list"
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <Link to='/system-settings/system-logs'>
                    <DefaultInfoCard
                      icon="server"
                      title="System Logs"
                      description="View system logs"
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

export default SystemSettings;
