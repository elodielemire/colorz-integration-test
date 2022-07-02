function SwiperCard(text, price) {
    return (
        <div className="swiper-card">
            <img/>
            <p className="fs-22-lh-34">{text}</p>
            <p className="fw-4 fs-16-lh-24">{price}</p>
        </div>
    );
}

export default SwiperCard;