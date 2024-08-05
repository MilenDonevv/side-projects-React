import FeatureFlags from "./index.jsx"
import FeatureFlagGlobalState from "../context"


function App() {

  return (
    <FeatureFlagGlobalState> 
      <FeatureFlags />
    </FeatureFlagGlobalState>
  )
}

export default App
