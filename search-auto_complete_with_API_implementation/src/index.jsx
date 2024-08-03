import { useEffect, useState } from "react"



export default function SearchAutocomplete() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');


    async function fetchListOfUsers() {
        try {

            setLoading(true);

            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            console.log(data);
            if (data && data.users && data.users.length) {
                setUsers(data.users.map(singleUser => singleUser.firstName));
                setLoading(false);
                setError(null);
            }
            
        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);

        }
    }

    useEffect(() => {
        fetchListOfUsers();
    },[])

    console.log(users);

    return (
        <div className="search-autocomplete-container">
            <input 
            name='search-users'
            type="text"
            placeholder="Search users..."
            />
        </div>
    )
}