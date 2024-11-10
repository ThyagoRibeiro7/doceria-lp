export function ServiceCard({ image, altText ,title, description }) {
    return (
        <div className="service-card">
            <img src={image} alt={altText} />
            <div className="service">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
