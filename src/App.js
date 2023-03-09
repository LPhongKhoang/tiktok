import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '@/routes';
import { DefaultLayout } from '@/components/Layout'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((el, idx) => {
            const Layout = el.layout || (el.layout === null ? Fragment : DefaultLayout);

            return <Route key={idx} path={el.path} element={<Layout><el.component /></Layout>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
