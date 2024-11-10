export default function FooterSection({ header, options }) {
    return (
        <div className="footer-section">
            <h3>{header}</h3>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    );
}
