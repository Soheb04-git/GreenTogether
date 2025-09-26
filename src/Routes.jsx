// //src/Routes.jsx

// import React from "react";
// import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
// import ScrollToTop from "components/ScrollToTop";
// import ErrorBoundary from "components/ErrorBoundary";
// import NotFound from "pages/NotFound";
// import DynamicDashboardHomepage from './pages/dynamic-dashboard-homepage';
// import SmartMonitoringHub from './pages/admin-portal/monitoring-hub';
// //import RewardsMarketplace from './pages/rewards-marketplace';
// import CommunityActionCenter from './pages/community-action-center';
// import ImpactVisualizationDashboard from './pages/impact-visualization-dashboard';
// import GamifiedLearningPortal from './pages/gamified-learning-portal';
// import LandingPage from "./pages/landing-page";
// import WorkerPortal from "./pages/worker-portal";

// import WorkerPerformance from "./pages/worker-performance";
// import WorkerTraining from "./pages/worker-training";
// import RewardsMarketplace from "./pages/rewards-marketplace";
// import WorkerBenefits from "./pages/worker-benefits";

// import WorkerReportIssue from "./pages/worker-report-issue";
// import WorkerEarnings from "./pages/worker-earnings";
// import WorkerSupport from "./pages/worker-support";
// import WorkerSafety from "./pages/worker-safety";

// import LoginPage from "./pages/login";  
// import RegisterPage from "./pages/register";  
// import ForgotPasswordPage from "./pages/forgot-password";  
// import ResetPasswordPage from "./pages/reset-password";  
// import EmailVerificationPage from "./pages/email-verification";
// import RequireAuth from "./components/RequireAuth.jsx";
// import MainLayout from "./components/MainLayout";

// const Routes = () => {
//   return (
//     <BrowserRouter>
//       <ErrorBoundary>
//         <ScrollToTop />
//         <RouterRoutes>
//           <Route path="/" element={<LandingPage />} />

//           {/* Auth pages */}
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/forgot-password" element={<ForgotPasswordPage />} />
//           <Route path="/reset-password" element={<ResetPasswordPage />} />
//           <Route path="/email-verification" element={<EmailVerificationPage />} />

//           {/* Protected role-based portals */}
          
//           <Route
//             path="/gamified-learning-portal"
//             element={
//               <RequireAuth allowedRoles={["citizen"]}>
                
//                   <GamifiedLearningPortal />
                
//               </RequireAuth>
//             }
//           />
//           <Route
//             path="/rewards-marketplace"
//             element={
//               <RequireAuth allowedRoles={["citizen"]}>
                
//                   <RewardsMarketplace />
                
//               </RequireAuth>
//             }
//           />


//           <Route
//             path="/admin-portal/monitoring-hub"
//             element={
//               <RequireAuth allowedRoles={["admin"]}>
//                 <SmartMonitoringHub />
//               </RequireAuth>
//             }
//           />



//           {/* Worker portal route */}
          
//           {/* Worker Portal pages wrapped in MainLayout */}
// <Route
//   path="/worker-portal"
//   element={
//     <RequireAuth allowedRoles={["worker"]}>
      
//         <WorkerPortal />
      
//     </RequireAuth>
//   }
// />

// <Route
//   path="/worker-report-issue"
//   element={
//     <RequireAuth allowedRoles={["worker"]}>
      
//         <WorkerReportIssue />
      
//     </RequireAuth>
//   }
// />

// <Route
//   path="/worker-earnings"
//   element={
//     <RequireAuth allowedRoles={["worker"]}>
      
//         <WorkerEarnings />
      
//     </RequireAuth>
//   }
// />

// <Route
//   path="/worker-support"
//   element={
//     <RequireAuth allowedRoles={["worker"]}>
      
//         <WorkerSupport />
      
//     </RequireAuth>
//   }
// />

// <Route
//   path="/worker-safety"
//   element={
//     <RequireAuth allowedRoles={["worker"]}>
      
//         <WorkerSafety />
      
//     </RequireAuth>
//   }
// />

// <Route
//   path="/worker-benefits"
//   element={
//     <RequireAuth allowedRoles={["worker"]}>
      
//         <WorkerBenefits />
      
//     </RequireAuth>
//   }
// />

// <Route
//   path="/worker-performance"
//   element={
//     <RequireAuth allowedRoles={["worker"]}>
      
//         <WorkerPerformance />
      
//     </RequireAuth>
//   }
// />

// <Route
//   path="/worker-training"
//   element={
//     <RequireAuth allowedRoles={["worker"]}>
      
//         <WorkerTraining />
      
//     </RequireAuth>
//   }
// />



//           <Route
//             path="/community-action-center"
//             element={
//               <RequireAuth allowedRoles={["champion"]}>
//                 <CommunityActionCenter />
//               </RequireAuth>
//             }
//           />


            


//           <Route
//             path="/impact-visualization-dashboard"
//             element={
//               <RequireAuth allowedRoles={["admin"]}>
//                 <ImpactVisualizationDashboard />
//               </RequireAuth>
//             }
//           />

//           {/* other pages */}
//           <Route path="/dynamic-dashboard-homepage" element={<DynamicDashboardHomepage />} />
//           <Route path="/rewards-marketplace" element={<RewardsMarketplace />} />

//           <Route path="*" element={<NotFound />} />
//         </RouterRoutes>
//       </ErrorBoundary>
//     </BrowserRouter>
//   );
// };

// export default Routes;

import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";

import LandingPage from "./pages/landing-page";
import LoginPage from "./pages/login";  
import RegisterPage from "./pages/register";  
import ForgotPasswordPage from "./pages/forgot-password";  
import ResetPasswordPage from "./pages/reset-password";  
import EmailVerificationPage from "./pages/email-verification";

import GamifiedLearningPortal from './pages/gamified-learning-portal';
import RewardsMarketplace from './pages/rewards-marketplace';
import CommunityActionCenter from './pages/community-action-center';
import ImpactVisualizationDashboard from './pages/impact-visualization-dashboard';
import SmartMonitoringHub from './pages/admin-portal/monitoring-hub';

import WorkerPortal from "./pages/worker-portal";
import WorkerPerformance from "./pages/worker-performance";
import WorkerTraining from "./pages/worker-training";
import WorkerBenefits from "./pages/worker-benefits";
import WorkerReportIssue from "./pages/worker-report-issue";
import WorkerEarnings from "./pages/worker-earnings";
import WorkerSupport from "./pages/worker-support";
import WorkerSafety from "./pages/worker-safety";

import RequireAuth from "./components/RequireAuth.jsx";

const Routes = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>

        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/email-verification" element={<EmailVerificationPage />} />

        {/* Citizen */}
        <Route path="/gamified-learning-portal" element={
          <RequireAuth allowedRoles={["citizen"]}>
            <GamifiedLearningPortal />
          </RequireAuth>
        } />
        <Route path="/rewards-marketplace" element={
          <RequireAuth allowedRoles={["citizen"]}>
            <RewardsMarketplace />
          </RequireAuth>
        } />
        <Route path="/community-action-center" element={
          <RequireAuth allowedRoles={["citizen","champion"]}>
            <CommunityActionCenter />
          </RequireAuth>
        } />

        {/* Worker */}
        <Route path="/worker-portal" element={
          <RequireAuth allowedRoles={["worker"]}>
            <WorkerPortal />
          </RequireAuth>
        } />
        <Route path="/worker-report-issue" element={<RequireAuth allowedRoles={["worker"]}><WorkerReportIssue /></RequireAuth>} />
        <Route path="/worker-earnings" element={<RequireAuth allowedRoles={["worker"]}><WorkerEarnings /></RequireAuth>} />
        <Route path="/worker-support" element={<RequireAuth allowedRoles={["worker"]}><WorkerSupport /></RequireAuth>} />
        <Route path="/worker-safety" element={<RequireAuth allowedRoles={["worker"]}><WorkerSafety /></RequireAuth>} />
        <Route path="/worker-benefits" element={<RequireAuth allowedRoles={["worker"]}><WorkerBenefits /></RequireAuth>} />
        <Route path="/worker-performance" element={<RequireAuth allowedRoles={["worker"]}><WorkerPerformance /></RequireAuth>} />
        <Route path="/worker-training" element={<RequireAuth allowedRoles={["worker"]}><WorkerTraining /></RequireAuth>} />

        {/* Admin */}
        <Route path="/impact-visualization-dashboard" element={<RequireAuth allowedRoles={["admin"]}><ImpactVisualizationDashboard /></RequireAuth>} />
        <Route path="/admin-portal/monitoring-hub" element={<RequireAuth allowedRoles={["admin"]}><SmartMonitoringHub /></RequireAuth>} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </ErrorBoundary>
  </BrowserRouter>
);

export default Routes;
