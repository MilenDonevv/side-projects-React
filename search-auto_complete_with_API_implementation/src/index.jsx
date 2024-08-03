import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutocomplete() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            console.log(data);
            if (data && data.users && data.users.length) {
                setUsers(data.users.map(singleUser => `${singleUser.firstName} ${singleUser.lastName}`));
                setLoading(false);
                setError(null);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }
    }

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);

        if (query.length > 1) {
            const filteredData = users && users.length  
                ? users.filter(item => item.toLowerCase().includes(query))
                : [];
            setFilteredUsers(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }

    useEffect(() => {
        fetchListOfUsers();
    }, []);

    function handleClick(event) {
        setSearchParam(event.target.innerText);
        setShowDropdown(false);
        setFilteredUsers([]);
    }

    console.log(users, filteredUsers);

    return (
        <div className="search-autocomplete-container">
            {
                loading 
                ? <h1>Loading data! Please wait!</h1>
                : 
            <input 
                name='search-users'
                type="text"
                placeholder="Search users..."
                value={searchParam} // Reflect the selected value in the input
                onChange={handleChange}
            />
            }
            {
                showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />
            }
        </div>
    )
}
