import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CountryPage from './pages/CountryPage';
import HomePage from './pages/HomePage';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:cca3" element={<CountryPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
