export default function SocialMediaIcon({ image, altText }) {
    return (
        <div className="social-media-icon">
            <img src={image} alt="{altText}" />
        </div>
    );
}
