import Routes from "./routes/index.routes";
import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes />
      </div>
    </QueryClientProvider>
  );
}

export default App;
