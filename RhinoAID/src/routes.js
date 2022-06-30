// SIDENAV ROUTE COMPONENTS
import Dashboard from "layouts/dashboard";
import BeneficiariesData from "layouts/beneficiaries-data";
import SearchBeneficiaries from "layouts/search-beneficiary";
import BeneficiariesManifests from "layouts/beneficiaries-manifests";
import FindAnomalies from "layouts/find-anomalies";
import CashReleaseNotes from "layouts/cash-release-notes";
import Memos from "layouts/memos";
import FileManagement from "layouts/file-management";
import Reconciliations from "layouts/reconciliations";
import SystemSettings from "layouts/system-settings";
import ResetPassword from "layouts/authentication/reset-password"
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";

//INTERNAL ROUTE COMPONENTS
//Authentication
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import LogOut from "layouts/authentication/log-out";
//Profile
import Profile from "layouts/profile";
//Beneficiary Data
import AddBeneficiary from "layouts/beneficiaries-data/add-beneficiary";
import BeneficiariesMasterData from "layouts/beneficiaries-data/beneficiaries-master-data";
import BeneficiariesFinancialDetails from "layouts/beneficiaries-data/beneficiary-financial-details";
import BeneficiariesUnhcrData from "layouts/beneficiaries-data/beneficiary-unhcr-data";
import SearchBeneficiaryProfile from "layouts/beneficiaries-data/search-beneficiary-profile";
import SingleBeneficiaryData from "layouts/beneficiaries-data/single-beneficiary-data";
//Find Anomalies
import PreCRNGenerationAnalysis from "layouts/find-anomalies/pre-crn-generation-analysis";
import DuplicateAccountAnalysis from "layouts/find-anomalies/duplicate-account-nos-analysis";
//File Management
import GeneralReports from "layouts/file-management/general-reports";
import Crns from "layouts/file-management/crns";
import UploadReports from "layouts/file-management/upload-reports";
import GdtDistributionManifests from "layouts/file-management/gdt-distribution-manifests";
import DistributionReports from "layouts/file-management/distribution-reports";
import EquityTransactionResports from "layouts/file-management/equity-transaction-reports";
//System Settings
import UserSettings from "layouts/system-settings/user-settings";
import FieldOffices from "layouts/system-settings/field-offices";
import Settlements from "layouts/system-settings/settlements";
import TransferValue from "layouts/system-settings/transfer-value";
import Signatures from "layouts/system-settings/signatures";
import Checks from "layouts/system-settings/checks";
import Cycles from "layouts/system-settings/cycles";
import SystemLogs from "layouts/system-settings/system-logs";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [

//SIDENAV ROUTE COMPONENTS

  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">donut_large</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Beneficiaries Data",
    key: "beneficiaries-data",
    icon: <Icon fontSize="small">groups</Icon>,
    route: "/beneficiaries-data",
    component: <BeneficiariesData/>,
  },
  {
    type: "collapse",
    name: "Search Beneficiaries",
    key: "search-beneficiaries",
    icon: <Icon fontSize="small">person_search</Icon>,
    route: "/search-beneficiaries",
    component: <SearchBeneficiaries/>,
  },
  {
    type: "collapse",
    name: "Beneficiaries Manifests",
    key: "beneficiaries-manifests",
    icon: <Icon fontSize="small">collections_bookmark
    </Icon>,
    route: "/beneficiaries-manifests",
    component: <BeneficiariesManifests />,
  },
  {
    type: "collapse",
    name: "Find Anomalies",
    key: "find-nomalies",
    icon: <Icon fontSize="small">find_in_page</Icon>,
    route: "/find-anomalies",
    component: <FindAnomalies />,
  },
  {
    type: "collapse",
    name: "Cash Release Notes",
    key: "cash-release-notes",
    icon: <Icon fontSize="small">summarize</Icon>,
    route: "/cash-release-notes",
    component: <CashReleaseNotes />,
  },
  {
    type: "collapse",
    name: "Memos",
    key: "memos",
    icon: <Icon fontSize="small">note_alt</Icon>,
    route: "/memos",
    component: <Memos />,
  },
  {
    type: "collapse",
    name: "File Management",
    key: "file-management",
    icon: <Icon fontSize="small">folder</Icon>,
    route: "/file-management",
    component: <FileManagement />,
  },
  {
    type: "collapse",
    name: "Reconciliations",
    key: "reconciliations",
    icon: <Icon fontSize="small">join_left</Icon>,
    route: "/reconciliations",
    component: <Reconciliations />,
  },
  {
    type: "collapse",
    name: "System Settings",
    key: "system-settings",
    icon: <Icon fontSize="small">settings</Icon>,
    route: "/system-settings",
    component: <SystemSettings />,
  },
  {
    type: "collapse",
    name: "Reset Password",
    key: "reset-password",
    icon: <Icon fontSize="small">lock_reset</Icon>,
    route: "/authentication/reset-password",
    component: <ResetPassword />,
  },
  
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  

  //INTERNAL ROUTE COMPONENTS

  //Authentication
  {
    type: "internal",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "internal",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "internal",
    name: "Log Out",
    key: "log-out",
    icon: <Icon fontSize="small">log_out</Icon>,
    route: "/authentication/log-out",
    component: <LogOut />,
  },
  //Profile
  {
    type: "internal",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  //Beneficiaries Data
  {
    type: "internal",
    name: "Beneficiaries' Master Data",
    key: "beneficiaries-master-data",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/beneficiaries-data/beneficiaries-master-data",
    component: <BeneficiariesMasterData />,
  },
  {
    type: "internal",
    name: "Beneficiaries Financial Details",
    key: "beneficiaries-financial-details",
    icon: <Icon fontSize="small">person </Icon>,
    route: "/beneficiaries-data/beneficiaries-financial-details",
    component: <BeneficiariesFinancialDetails />,
  },
  {
    type: "internal",
    name: "Beneficiaries UNHCR Data",
    key: "beneficiaries-unhcr-data",
    icon: <Icon fontSize="small">join_left</Icon>,
    route: "/beneficiaries-data/beneficiaries-unhcr-data",
    component: <BeneficiariesUnhcrData />,
  },
  {
    type: "internal",
    name: "Search Beneficiary Profile",
    key: "search-beneficiary-profile",
    icon: <Icon fontSize="small">join_left</Icon>,
    route: "/beneficiaries-data/search-beneficiary-profile",
    component: <SearchBeneficiaryProfile />,
  },
  {
    type: "internal",
    name: "Single Beneficiary Data",
    key: "single-beneficiary-data",
    icon: <Icon fontSize="small">join_left</Icon>,
    route: "/beneficiaries-data/single-beneficiary-data",
    component: <SingleBeneficiaryData />,
  },
  {
    type: "internal",
    name: "Add Beneficiary",
    key: "add-beneficiary",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/beneficiaries-data/add-beneficiary",
    component: <AddBeneficiary />,
  },
  //Find Anomalies
  {
    type: "internal",
    name: "Pre CRN Generation Analysis",
    key: "pre-crn-generation-analysis",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/find-anomalies/pre-crn-generation-analysis",
    component: <PreCRNGenerationAnalysis />,
  },
  {
    type: "internal",
    name: "Duplicate Account Nos Analysis",
    key: "duplicate-account-nos-analysis",
    icon: <Icon fontSize="small">groups</Icon>,
    route: "/find-anomalies/duplicate-account-nos-analysis",
    component: <DuplicateAccountAnalysis />,
  },
  //File Management
  {
    type: "internal",
    name: "General Reports",
    key: "general-reports",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/file-management/general-reports",
    component: <GeneralReports />,
  },
  {
    type: "internal",
    name: "CRNs",
    key: "crns",
    icon: <Icon fontSize="small">note_alt</Icon>,
    route: "/file-management/crns",
    component: <Crns />,
  },
  {
    type: "internal",
    name: "Upload Reports",
    key: "upload-reports",
    icon: <Icon fontSize="small">upload</Icon>,
    route: "/file-management/upload-reports",
    component: <UploadReports />,
  },
  {
    type: "internal",
    name: "GDT Distribution Reports",
    key: "gdt-distribution-manifests",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/file-management/gdt-distribution-manifests",
    component: <GdtDistributionManifests />,
  },
  {
    type: "internal",
    name: "Distribution Reports",
    key: "distribution-reports",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/file-management/distribution-reports",
    component: <DistributionReports />,
  },
  {
    type: "internal",
    name: "Equity Transaction Reports",
    key: "equity-transaction-reports",
    icon: <Icon fontSize="small">notes</Icon>,
    route: "/file-management/equity-transaction-reports",
    component: <EquityTransactionResports />,
  },
  //System Settings 
  {
    type: "internal",
    name: "User Settings",
    key: "user-settings",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/system-settings/user-settings",
    component: <UserSettings />,
  },
  {
    type: "internal",
    name: "Field Offices",
    key: "field-offices",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/system-settings/field-offices",
    component: <FieldOffices />,
  },
  {
    type: "internal",
    name: "Settlements / FDPs",
    key: "settlements",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/system-settings/settlements",
    component: <Settlements />,
  },
  {
    type: "internal",
    name: "Transfer Value",
    key: "transfer-value",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/system-settings/transfer-value",
    component: <TransferValue />,
  },
  {
    type: "internal",
    name: "Signatures",
    key: "signatures",
    icon: <Icon fontSize="small">list</Icon>,
    route: "/system-settings/signatures",
    component: <Signatures />,
  },
  {
    type: "internal",
    name: "Checks",
    key: "checks",
    icon: <Icon fontSize="small">notes</Icon>,
    route: "/system-settings/checks",
    component: <Checks />,
  },
  {
    type: "internal",
    name: "Cycles",
    key: "cycles",
    icon: <Icon fontSize="small">donut_large</Icon>,
    route: "/system-settings/cycles",
    component: <Cycles />,
  },
  {
    type: "internal",
    name: "System Logs",
    key: "system-logs",
    icon: <Icon fontSize="small">server</Icon>,
    route: "/system-settings/system-logs",
    component: <SystemLogs />,
  },
];

export default routes;
