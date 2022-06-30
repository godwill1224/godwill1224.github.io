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
import MDTypography from "components/MDTypography";

function FileManagement() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={4}>
        <MDTypography>
          Finance
        </MDTypography>
        <MDBox mb={3} mt={3}>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6} xl={4}>
                  <Link to='/file-management/general-reports'>
                    <DefaultInfoCard
                      icon="table_view"
                      title="General Reports"
                      description="Summary of all distribution reports"
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <Link to='/file-management/crns'>
                    <DefaultInfoCard
                      icon="note_alt"
                      title="CRNs"
                      description="Cash release notes"
                    /> 
                  </Link>                  
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <Link to='/file-management/upload-reports'>
                    <DefaultInfoCard
                      icon="upload"
                      title="Upload Reports"
                      description="Beneficiaries bank reports"                    
                    />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MDBox>
        <MDTypography>
          Program - Crisis Response
        </MDTypography>
        <MDBox mb={3} mt={3}>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6} xl={4}>
                  <Link to='#'>
                    <DefaultInfoCard
                      icon="people"
                      title="GDT Distribution Reports"
                      description="GDt end of distributions monthly reports"                    
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <Link to='/file-management/distribution-reports'>
                    <DefaultInfoCard
                      icon="table_view"
                      title="Distribution Reports"
                      description="Collective distributions"                    
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <Link to='/file-management/equity-transaction-reports'>
                    <DefaultInfoCard
                      icon="notes"
                      title="Equity Transaction Reports"
                      description="find beneficiary by name, account number, beneficiary ID"
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

export default FileManagement;
