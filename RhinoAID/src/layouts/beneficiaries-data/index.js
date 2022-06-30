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

function BeneficiariesData() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6}>
        <MDBox mb={3}>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6} xl={6}>
                  <Link to='/beneficiaries-data/single-beneficiary-data'>
                    <DefaultInfoCard
                      icon="person"
                      title="Single Beneficiary Data"
                      description="View individual beneficiary details"
                    /> 
                  </Link>                  
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <Link to='/beneficiaries-data/beneficiaries-unhcr-data'>
                    <DefaultInfoCard
                      icon="people"
                      title="Beneficiaries UNHCR Data"
                      description="UNHCR batch beneficiaries data"                    
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <Link to='/beneficiaries-data/beneficiaries-financial-details'>
                    <DefaultInfoCard
                      icon="people"
                      title="Beneficiaries Financial Details"
                      description="Beneficiaries financial details and bank records"                    
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <Link to='/beneficiaries-data/beneficiaries-master-data'>
                    <DefaultInfoCard
                      icon="table_view"
                      title="Beneficiaries' Master data"
                      description="Collective beneficiaries data"                    
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <Link to='/beneficiaries-data/search-beneficiary-profile'>
                    <DefaultInfoCard
                      icon="person_search"
                      title="Search Beneficiary Profile"
                      description="find beneficiary by name, account number, beneficiary ID"
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <Link to='/beneficiaries-data/add-beneficiary'>
                    <DefaultInfoCard
                      icon="person_add"
                      title="Add Beneficiary"
                      description="Add a new RhinoAID beneficiary"
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

export default BeneficiariesData;
