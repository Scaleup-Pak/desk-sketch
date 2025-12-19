import Link from "next/link";
export default function Saas_Section1() {
    return (
        <>
            <section className="section background-grey opt160 spdb overflow-hidden" style={{ backgroundImage: 'url(/assets/images/wave-03.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center 50%', backgroundSize: 'contain' }}>
                <div className="container">
                    <div className="heading align-center mb32" style={{ maxWidth: '100%' }}>
                        <h2 className="heading-title size-xl" style={{ whiteSpace: 'nowrap' }}>Less Time Drawing, More Time Building</h2>
                        <div className="heading-desc size-l">Create code compliant plans, material takeoffs, and more in seconds. </div>
                    </div>
                    <div className="button-wrap align-center">
                        <Link href="/contact-01" className="button fullfield" title="Start 14 days Free">Start Free Today</Link>
                    </div>
                    <p className="note align-center">No credit card requiment</p>
                    <div className="images layout-05 mt60">
                        <div className="inner">
                            <img className="img01 wow animate__animated animate__fadeInUp" src="/assets/images/GIF%20-%20DECKSKETCH%20(1).gif" alt="DeckSketch demo" />
                            <img className="img02 wow animate__animated animate__zoomIn" data-wow animate__animated-delay="0.5s" src="/assets/images/saas-02.png" alt="Image" />
                            <img className="img03 wow animate__animated animate__zoomIn" data-wow animate__animated-delay="0.3s" src="/assets/images/saas-03.png" alt="Image" />
                            <img className="img04 wow animate__animated animate__zoomIn" data-wow animate__animated-delay="0.1s" src="/assets/images/saas-04.png" alt="Image" />
                            <img className="img05 wow animate__animated animate__zoomIn" data-wow animate__animated-delay="0.5s" src="/assets/images/saas-05.png" alt="Image" />
                            <img className="img06 wow animate__animated animate__zoomIn" data-wow animate__animated-delay="0.9s" src="/assets/images/saas-06.png" alt="Image" />
                            <img className="img07 wow animate__animated animate__zoomIn" data-wow animate__animated-delay="0.7s" src="/assets/images/saas-07.png" alt="Image" />
                        </div>
                    </div>
                    <div className="clients align-center mt60 hero-clients">
                        <div className="heading align-center mb32">
                            <div className="heading-desc size-l">Trusted by Builders & Suppliers worldwide</div>
                        </div>
                        <ul className="content">
                            <li><img src="/assets/images/saas-f(1).png" alt="Client" /></li>
                            <li><img src="/assets/images/saas-f(2).png" alt="Client" /></li>
                            <li><img src="/assets/images/saas-f(3).png" alt="Client" /></li>
                            <li><img src="/assets/images/saas-f(4).png" alt="Client" /></li>
                            <li><img src="/assets/images/saas-f(5).png" alt="Client" /></li>
                            <li><img src="/assets/images/saas-f(6).png" alt="Client" /></li>
     
                        </ul>
                    </div>
                
                    <div className="heading align-center mb80 mt60">
                        <h2 className="heading-title size-xl mt80" style={{fontSize: 56, fontWeight: 700}}>The Only Tool Customized For You!</h2>
                        <div className="heading-desc size-l">DeckSketch is tailored to your exact materials, local code, and process — no more generic, one-size-fits-all tools.</div>
                    </div>
                    <span>
                        
                    </span>
                </div>
            </section>


        </>
    )
}