export default function Suggestions({ handleClick, data }) {
    return (
        <ul className="suggestions-list">
            {data.map((item, index) => (
                <li key={index} onClick={handleClick}>
                    {item}
                </li>
            ))}
        </ul>
    );
}
