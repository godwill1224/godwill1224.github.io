// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import SearchBox from "./searchBox";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import {Link } from "react-router-dom";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function SearchBeneficiaryProfile() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <MDBox mt={6} mb={3} display="flex" justifyContent="center">
          <SearchBox fullWidth label="Search Beneficiary Profile..." />
          <MDBox>
            <Link to="#">
                <IconButton color="text" size="large">
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

export default SearchBeneficiaryProfile;
