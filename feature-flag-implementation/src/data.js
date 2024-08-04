


const dummyApiResponse = {
    showLighAndDarkMode: false,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordion: false,
    showTreeView: true,
    ShowQRCodeGenerator: true
}

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject('Some error occurred! Please try again!')
    })
}

export default featureFlagsDataServiceCall;