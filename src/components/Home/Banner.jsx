export default function Banner({ className }) {
  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card xl:flex xl:space-x-[30px] xl:h-[600px]  mb-[30px]">
              <div data-aos="fade-right" className="xl:w-1/2 w-full h-full">
                <a to="/single-product">
                  <picture>
                    <source
                      media="(min-width:1025px)"
                      srcSet={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/src/assets/images/banner-1.1.png`}
                    />
                    <img
                      src={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/src/assets/images/banner-2.1.png`}
                      alt=""
                      className="w-full max-w-full h-auto object-cover"
                    />
                  </picture>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
