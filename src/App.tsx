import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { PressLine } from './pages/business/PressLine';
import { PolishingLine } from './pages/business/PolishingLine';
import { Semiconductor } from './pages/business/Semiconductor';
import { FiberOptics } from './pages/business/FiberOptics';
import { Support } from './pages/Support';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminLayout } from './layouts/AdminLayout';
import { PublicLayout } from './layouts/PublicLayout';
import { Dashboard } from './pages/admin/Dashboard';
import { NewsManage } from './pages/admin/NewsManage';
import { CareersManage } from './pages/admin/CareersManage';
import { InquiriesManage } from './pages/admin/InquiriesManage';

// Create a ScrollToTop component to handle scroll reset on navigation
// Create a ScrollToTop component to handle scroll reset on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/*" element={<Company />} />
          <Route path="/business/press-line" element={<PressLine />} />
          <Route path="/business/polishing-line" element={<PolishingLine />} />
          <Route path="/business/semiconductor" element={<Semiconductor />} />
          <Route path="/business/fiber-optics" element={<FiberOptics />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/*" element={<Support />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="news" element={<NewsManage />} />
          <Route path="careers" element={<CareersManage />} />
          <Route path="inquiries" element={<InquiriesManage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
