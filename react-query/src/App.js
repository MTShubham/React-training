import './App.css';
import Persons from './components/Persons';
import PersonById from './components/PersonById';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ParallelQueries from './components/ParallelQueries';
import DynamicQueries from './components/DynamicQueries';
import DependentQueries from './components/DependentQueries';
import Pagination from './components/Pagination';
import InfiniteQueries from './components/InfiniteQueries';
import AddPerson from './components/AddPerson';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Persons />}/>
            <Route path="/person/:id" element={<PersonById />}/>
            <Route path="/parallelqueries" element={<ParallelQueries />}/>
            <Route path="/dynamicqueries" element={<DynamicQueries personIds={[1,3]} />}/>
            <Route path="/dependentqueries" element={<DependentQueries email={"shubham@gmail.com"} />}/>
            <Route path="/pagination" element={<Pagination />}/>
            <Route path="/infinite" element={<InfiniteQueries />}/>
            <Route path="/add-person" element={<AddPerson />}/>
          </Routes>
        </BrowserRouter>

        {/* Devtools for react-query */}
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
