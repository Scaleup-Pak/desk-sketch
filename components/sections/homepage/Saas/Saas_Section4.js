import Link from "next/link";

export default function Saas_Section3() {
    const customStyles = {
        section: {
            padding: '40px 0',
            backgroundColor: '#f8f9fc',
            position: 'relative',
            overflow: 'hidden'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 10px'
        },
        tagline: {
            fontSize: '14px',
            fontWeight: '600',
            color: '#0d6efd',
            marginBottom: '10px',
            display: 'block',
            textTransform: 'uppercase'
        },
        title: {
            fontSize: '32px',
            fontWeight: '700',
            color: '#111',
            marginBottom: '20px',
            lineHeight: '1.2'
        },
        description: {
            fontSize: '16px',
            color: '#555',
            lineHeight: '1.8',
            marginBottom: '30px',
            maxWidth: '500px'
        },
        featureButton: {
            display: 'inline-flex',
            alignItems: 'center',
            color: '#0d6efd',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '16px',
            position: 'relative'
        },
        arrow: {
            marginLeft: '8px',
            transition: 'transform 0.3s ease'
        },
        imageContainer: {
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent' // Transparent background
        },
        image: {
            width: '100%',
            maxWidth: '100%',
            borderRadius: '8px',
            margin: '0 auto',
            display: 'block'
        }
    };

    return (
        <section style={customStyles.section}>
            <div style={customStyles.container}>
                <div className="row flex-align-c">
                    
                    {/* Image on left */}
                    <div className="col-lg-7 order-1">
                        <div style={customStyles.imageContainer}>
                            <img 
                                className="wow animate__animated animate__fadeInUp"
                                src="/assets/images/saas-section4.png" 
                                alt="Features Dashboard"
                                style={customStyles.image}
                            />
                        </div>
                    </div>

                    {/* Text on right */}
                    <div className="col-lg-5 order-2">
                        <div style={{ padding: '20px 20px 20px 0' }}>
                            <span style={customStyles.tagline}>Look Professional</span>
                            <h2 style={customStyles.title}>Get beautiful custom branded <br></br> drawings & a company portal.</h2>
                            <p style={customStyles.description}>
                                Show your clients why you are the best builder in your area. Add to your professionalism by giving them same-day estimates, plans, and more all branded to your business.
                            </p>
                            <div className="button-wrap">
                                <Link href="/contact-01" style={customStyles.featureButton}>
                                    Get Your Custom Portal
                                    <i className="las la-long-arrow-alt-right" style={customStyles.arrow}></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
