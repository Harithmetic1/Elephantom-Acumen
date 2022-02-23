import "./scss/index.scss"
import Homepage from './Homepage';

import { ElephantProvider } from "./context/Elephant"

function App() {
  return (
    <div className="App">
    <ElephantProvider>
        <Homepage />
    </ElephantProvider>
    </div>
  );
}

export default App;
