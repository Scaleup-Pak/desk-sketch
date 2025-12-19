import CryptoTestimonialSlider from "@/components/slider/CryptoTestimonialSlider";


export default function Saas_Section7() {
    return (
        <>
            <section className="section spdtb" style={{ backgroundColor: '#f8f9fc' }}>
                <div className="container">
                    <div className="heading align-center">
                        <h2 className="heading-title">Clients Love Us</h2>
                        <div className="heading-desc mb-22">Check out what real customers are saying about DeckSketch:</div>
                    </div>
                </div>
                
                {/* Testimonial slider outside container for full-width display */}
                <div className="block-testimonial item-grey layout-03" >
                    <div className="swiper uxp-swiper-slider testimonial-slider">
                        <CryptoTestimonialSlider />
                    </div>
                </div>
            </section>
        </>
    )
}