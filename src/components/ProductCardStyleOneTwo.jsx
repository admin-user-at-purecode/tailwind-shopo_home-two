export default function ProductCardStyleOneTwo({ datas }) {
  return (
    <div
      className="product-card-style-one-two w-full h-full bg-white relative group overflow-hidden"
      style={{ boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)" }}
    >
      <div
        className="product-card-img w-full h-[322px] mt-4"
        style={{
          background: `url(${
            import.meta.env.VITE_PUBLIC_URL
          }/src/assets/images/${datas.image}) no-repeat center`,
        }}
      ></div>
      <div className="product-card-details flex justify-center h-[102px] items-center  relative">
        <div>
          <a to="/single-product">
            <p className="title mb-2.5 text-[20px] font-600 text-center text-qblack leading-[24px] line-clamp-2 hover:text-blue-600">
              {datas.title}
            </p>
          </a>
          <div className="flex justify-center ">
            <div className="price">
              <span className="offer-price text-center text-qred font-600 text-[18px] mr-1 inline-block">
                {datas.offer_price}
              </span>
              <span className="main-price text-qgray line-through font-600 text-center text-[18px]">
                {datas.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
