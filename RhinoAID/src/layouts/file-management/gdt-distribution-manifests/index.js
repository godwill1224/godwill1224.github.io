// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function GdtDistributionManifests() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <MDTypography>GDT End Of Distribution Manifests</MDTypography>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default GdtDistributionManifests;
