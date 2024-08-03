import { useEffect, useState } from "react"




export default function GithubProfileFinder() {

    const [userName, setUserName] = useState('MilenDonevv')



    function handleSubmit() {

    }


    function fetchGithubUserData() {


    }


    
    useEffect(() => {
        fetchGithubUserData()
    }, []);

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input 
                name="search-by-username"
                type="text" 
                placeholder="Search Github Username..."
                />

                <button onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    )
}