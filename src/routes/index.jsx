import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/Main/NotFound";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import VerifyOtp from "../pages/Auth/VerifyOtp";
import UpdatePassword from "../pages/Auth/UpdatePassword";
import Auth from "../layouts/Auth/Auth";
import Main from "../layouts/Main/Main";
import CreateForm from "../pages/Main/CreateForm";
import MakeAdmin from "../pages/Main/MakeAdmin";
import PrivacyPolicy from "../pages/Main/PrivacyPolicy";
import TermsAndConditions from "../pages/Main/TermsAndConditions";
import Profile from "../pages/Main/Profile";
import ChangePassword from "../pages/Main/ChangePassword";
import List from "../pages/Main/List";
import UserManagementPage from "../pages/Main/UserManagementPage";
import AdminManagementPage from "../pages/Main/AdminManagementPage";
import UserAccountCreate from "../pages/Main/UserAccountCreate";
import AboutUs from "../pages/Main/AboutUs";
import StatutesCovaredPage from "../pages/Main/StatutesCovaredPage";
import FaqPage from "../pages/Main/FaqPage";
import ParsonalInfo from "../pages/Main/ParsonalInformationsPage";
import BuisnessInfo from "../pages/Main/BuisnessInformationsPage";
import Appoinment from "../pages/Main/AppoinmentDate";
import ClientDocumentViewPage from "../pages/Main/ClientDocumentViewPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <CreateForm/>
            },
            {
                path: "client-document",
                element: <MakeAdmin/>
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy/>
            },
            {
                path: "terms-condition",
                element: <TermsAndConditions/>
            },
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: "change-password",
                element: <ChangePassword/>
            },
            {
                path: "total-list",
                element: <List/>
            },
            {
                path: "user-management",
                element: <UserManagementPage />
            },
            {
                path: "admin-management",
                element: <AdminManagementPage />
            },
            {
                path: "user-account-create",
                element: <UserAccountCreate />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/faq",
                element: <FaqPage />
            },
            {
                path: "states-covered",
                element: <StatutesCovaredPage />
            },
            {
                path: "/parsonal",
                element: <ParsonalInfo />
            },
            {
                path: "/buisness",
                element: <BuisnessInfo />,
            },
            {
                path: "/appoinment",
                element: <Appoinment />,
            },
            {
                path: "client-document-view",
                element: <ClientDocumentViewPage />
            }


        ]
    },
    {
        path: "*",
        element: <NotFound/>,
    },
    {
        path: "/auth",
        element: <Auth/>,
        children: [
            {
                path: "/auth",
                element: <Login/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "forgot-password",
                element: <ForgotPassword/>
            },
            {
                path: "verify-otp",
                element: <VerifyOtp/>
            },
            {
                path: "update-password",
                element: <UpdatePassword/>
            },

        ]
    }
]);

export default router;