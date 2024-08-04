import { createContext } from "react";



export const FeatureFlagsContext = createContext(null);



export default FeatureFlagGlobalState({children}) {
    return <FeatureFlagsContext.Provider value={{}}>{children}</FeatureFlagsContext.Provider>
}