import { Navigate, Route, Routes } from 'react-router-dom';

import { APP_ROUTES } from 'constants/appRoutes';
import {
  MainLayout,
  ContactUsLayout,
} from 'modules';

export function Router() {
  return (
    <Routes>
      <Route path={APP_ROUTES.HOME_PAGE} element={<MainLayout />}  />
      <Route path={APP_ROUTES.CONTACT} element={<ContactUsLayout />} />
      <Route path="*" element={<Navigate to={APP_ROUTES.HOME_PAGE} />} />
    </Routes>
  );
}
