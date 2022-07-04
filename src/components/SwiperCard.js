function SwiperCard({ img, alt, text, price }) {
  return (
    <div className="swiper-card center">
      <img src={img} alt={alt} className="swiper-card__img" />
      <p className="fs-22-lh-34 mbo-5">{text}</p>
      <p className="fw-4 fs-16-lh-24">{price}</p>
    </div>
  );
}

export default SwiperCard;
