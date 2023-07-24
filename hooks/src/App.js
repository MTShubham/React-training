import './App.css';
import UseCallback from './component/Callback/UseCallback';
import ComponentA from './component/Context/ComponentA';
import Counter from './component/Counter';
import LogCoordinates from './component/LogCoordinates';
import UseMemo from './component/Memo/UseMemo';
import UseRef from './component/Ref/UseRef';
import CounterReducer from './component/Reducer/CounterReducer';
import CustomHook from './component/customHooks/CustomHook';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <LogCoordinates /> */}
      <ComponentA />
      {/* <CounterReducer /> */}
      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      {/* <CustomHook /> */}
    </div>
  );
}

export default App;
