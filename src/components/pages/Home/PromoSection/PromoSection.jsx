import styles from './PromoSection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import plantImage1 from '../../../../assets/images/plants/plant1.png';
import plantImage2 from '../../../../assets/images/plants/plant2.png';
import plantImage3 from '../../../../assets/images/plants/plant3.png';
import { NavLink } from 'react-router-dom';

const PromoSection = () => {
  const renderPaginationBullet = (index, className) => {
    return `<span class="${className} ${styles.promoPaginationBullet}"></span>`;
  };
  return (
    <section className={styles.promoSection}>
      <div className={styles.promoSectionContent}>
        <div className={styles.promoSectionInfo}>
          <div className={styles.promoSectionGreetings}>
            Welcome To Greenshop
          </div>
          <div className={styles.promoSectionTitle}>
            Let’s Make a Better
            <span className={styles.promoSectionTitleGreen}> Planet</span>
          </div>
          <div className={styles.promoSectionDescription}>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </div>
          <NavLink to='/shop' className={styles.promoSectionButton}>
            Shop Now
          </NavLink>
        </div>
        <div className={styles.promoSectionSwiper}>
          <Swiper
            className={styles.swiper}
            slidesPerView={1}
            allowTouchMove={false}
            pagination={{
              el: '.promo-pagination',
              renderBullet: renderPaginationBullet,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <img src={plantImage1} alt='Plant Image' />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src={plantImage2} alt='Plant Image' />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <img src={plantImage3} alt='Plant Image' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div
        className={`promo-pagination ${styles.promoSectionSwiperPagination}`}
      ></div>
    </section>
  );
};

export default PromoSection;
