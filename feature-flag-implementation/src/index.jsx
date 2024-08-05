// the app needs reconfiguration due to structure



import { useContext } from "react"
import { FeatureFlagsContext } from "../context"
import Accordion from '../../../side-projects-React/Accordion/src/components/accordion'



export default function FeatureFlags() {

    const {loading, enabledFlags} = useContext(FeatureFlagsContext)


    const componentsToRender = [
        {
            key: 'showLighAndDarkMode',
            component: <LighAndDarkMode />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColorGenerator />
        },
        {
            key: 'showAccordion',
            component: <Accordion />
        },
        {
            key: 'showTreeView',
            component: <TreeView />
        },
        {
            key: 'ShowQRCodeGenerator',
            component: <QRCodeGenerator />
        }
    ]

    if (loading) {
        return <h1>Loading data! Please wait!</h1>
    }

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey]
    }

    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
        </div>
    )
}