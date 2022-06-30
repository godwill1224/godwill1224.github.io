// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import SearchBox from "./searchBox";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import {Link } from "react-router-dom";
// import MDTypography from "components/MDTypography";
// import sbLogo from "layouts/search-beneficiary/sbLogo.png"

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function SearchBeneficiaries() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        {/* <MDBox display="flex" justifyContent="center">
          <MDBox component="img" src={sbLogo} alt="sb logo" width="30%"/>
        </MDBox>
        <MDBox display="flex" justifyContent="center">
          <MDTypography variant="h3" fontWeight="medium" color="info">
            RhinoAID Progrmme
          </MDTypography>
        </MDBox> */}
        <MDBox mt={6} mb={3} display="flex" justifyContent="center">
          <SearchBox fullWidth label="Search Beneficiary by; Beneficiary Name, Account Number, Registration Group Number..." />
          <MDBox>
            <Link to="#">
                <IconButton color="info" size="large">
                  <Icon>search</Icon>
                </IconButton>
            </Link>
          </MDBox>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default SearchBeneficiaries;
