export function HighLightImage({ image, height, width, altText }) {
    return(
        <div className="highlight-image">
            <img src={image} alt={altText} height={height} width={width} />
        </div>
    );
}
