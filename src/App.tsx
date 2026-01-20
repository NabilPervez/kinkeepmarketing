import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CreatedBy } from './pages/CreatedBy';
import { Donate } from './pages/Donate';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="created-by" element={<CreatedBy />} />
          <Route path="donate" element={<Donate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
