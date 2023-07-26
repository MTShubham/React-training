import './App.css';
import { lazy, Suspense } from 'react'
import { cardData } from './mock';
const CardComponent = lazy(() => import('./components/CardComponent'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>Loading ...</h2>}>
        <CardComponent cardData={cardData} />
      </Suspense>
    </div>
  );
}

export default App;
