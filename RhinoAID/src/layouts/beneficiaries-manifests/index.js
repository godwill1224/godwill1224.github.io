// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import MasterCard from "examples/Cards/MasterCard";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import BillingInformation from "./components/BillingInformation";
// import PaymentMethod from "./components/PaymentMethod";
// import Invoices from "./components/Invoices";
// import Transactions from "./components/Transactions";

function BeneficiariesManifests() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6}>
        <MDBox mb={3} mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} xl={12}>
              <BillingInformation />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default BeneficiariesManifests;
