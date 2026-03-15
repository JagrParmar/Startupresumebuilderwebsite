import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Templates from "./pages/Templates";
import ATSCheck from "./pages/ATSCheck";
import CoverLetter from "./pages/CoverLetter";
import Builder from "./pages/Builder";
import TemplateSelector from "./pages/TemplateSelector";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { 
        index: true, 
        Component: Home 
      },
    ],
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/dashboard/ats-check",
    Component: ATSCheck,
  },
  {
    path: "/dashboard/cover-letter",
    Component: CoverLetter,
  },
  {
    path: "/templates",
    Component: Templates,
  },
  {
    path: "/template-selector",
    Component: TemplateSelector,
  },
  {
    path: "/builder",
    Component: Builder,
  },
]);