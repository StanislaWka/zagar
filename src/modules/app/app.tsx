import { MainLayout } from 'layouts';
import { Router } from 'routes';

export function App() {

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
        <MainLayout>
          <Router />
        </MainLayout>
    </>
  );
}
