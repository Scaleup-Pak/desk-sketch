// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function CryptoTestimonialSlider() {
    // Define the card style with white background
    const cardStyle = {
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
        padding: "15px",
        height: "350",
        width: 450,
        margin: "10 10 10 10",
    };

    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={48}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.testimonial-pagination'
                }}
                navigation={{
                    prevEl: ".navigation-prev",
                    nextEl: ".navigation-next",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide className="swiper-slide">
                    <div className="item" style={cardStyle}>
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-01.jpg" alt="Avatar" />
                                </div>
                                <div className="info">
                                    <div className="name">Iruka Akuchi</div>
                                    <div className="position">@iruka-Akuchi</div>
                                </div>
                            </div>
                         
                         </div>
                        <div style={{
                            padding: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "50px" // adjust as needed
                            }}> 
                              <h3 style={{alignItems: "center"}}>It was a very good experience</h3>
                        </div>

                        <p style={{ textAlign: "center", margin: 0 }}>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
 
                     </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item" style={cardStyle}>
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-02.jpg" alt="Avatar" />
                                </div>
                                <div className="info">
                                    <div className="name">Clarke Gillebert</div>
                                    <div className="position">@carla-wildner</div>
                                </div>
                            </div>
                         </div>
                        <div style={{
                            padding: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "50px" // adjust as needed
                            }}> 
                              <h3 style={{alignItems: "center"}}>It was a very good experience</h3>
                        </div>

                        <p style={{ textAlign: "center", margin: 0 }}>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
                     </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item" style={cardStyle}>
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-03.jpg" alt="Avatar" />
                                </div>
                                <div className="info">
                                    <div className="name">Carole Chimako</div>
                                    <div className="position">@Jioke</div>
                                </div>
                            </div>
                         </div>
                        <div style={{
                            padding: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "50px" // adjust as needed
                            }}> 
                              <h3 style={{alignItems: "center"}}>It was a very good experience</h3>
                        </div>

                                <p style={{ textAlign: "center", margin: 0 }}>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>

                            </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item" style={cardStyle}>
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-01.jpg" alt="Avatar" />
                                </div>
                                <div className="info">
                                    <div className="name">Iruka Akuchi</div>
                                    <div className="position">@iruka-Akuchi</div>
                                </div>
                            </div>
                         </div>
                        <div style={{
                            padding: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "50px" // adjust as needed
                            }}> 
                              <h3 style={{alignItems: "center"}}>It was a very good experience</h3>
                        </div>

                        <p style={{ textAlign: "center", margin: 0 }}>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
 
                     </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item" style={cardStyle}>
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-02.jpg" alt="Avatar" />
                                </div>
                                <div className="info">
                                    <div className="name">Clarke Gillebert</div>
                                    <div className="position">@clarke-gillebert</div>
                                </div>
                            </div>
                         </div>
                        <div style={{
                            padding: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "50px" // adjust as needed
                            }}> 
                              <h3 style={{alignItems: "center"}}>It was a very good experience</h3>
                        </div>

                        <p style={{ textAlign: "center", margin: 0 }}>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
 
                     </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="item" style={cardStyle}>
                        <div className="meta">
                            <div className="author">
                                <div className="avatar">
                                    <img src="/assets/images/post-author-03.jpg" alt="Avatar" />
                                </div>
                                <div className="info">
                                    <div className="name">Carole Chimako</div>
                                    <div className="position">@carole-chimako</div>
                                </div>
                            </div>
                         </div>
                        <div style={{
                            padding: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "50px" // adjust as needed
                            }}> 
                              <h3 style={{alignItems: "center"}}>It was a very good experience</h3>
                        </div>

                        <p style={{ textAlign: "center", margin: 0 }}>"Easy to follow but incredibly insightful tutorials. Makes learning new software and techniques and real pleasure everyday! Keep up the good work"</p>
 
                     </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination testimonial-pagination" />
        </>
    )
}
