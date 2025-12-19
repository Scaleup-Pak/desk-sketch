import Link from "next/link";
export default function Saas_Section3() {
    const customStyles = {
        section: {
            padding: '170px 0',
            backgroundColor: '#f8f9fc',
            position: 'relative',
            overflow: 'hidden',
            // marginBottom: 120
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 15px'
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
            fontSize: '42px',
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
            backgroundColor: 'transparent', // Make background transparent
            height: '100%'
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
        <>
            <section style={customStyles.section}>
                <div style={customStyles.container}>
                    <div className="row flex-align-c">
                        <div className="col-lg-5 order-1">
                            <div style={{padding: '20px 20px 20px 0'}}>
                                <span style={customStyles.tagline}>Fully Personalized</span>
                                <h2 style={customStyles.title}>Tailored to your building methodologies and materials.</h2>
                                <p style={customStyles.description}>
                                        Tired of using software that forces you to use their materials and limits the way you build decks? DeckSketch only outputs drawings and takeoffs based on your customizations!                                </p>
                                <div className="button-wrap">
                                    <Link href="/contact-01" style={customStyles.featureButton}>
                                        Start Customizing
                                        <i className="las la-long-arrow-alt-right" style={customStyles.arrow}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 order-2">
                            <div style={customStyles.imageContainer}>
                                <img 
                                    className="wow animate__animated animate__fadeInUp"
                                    src="/assets/images/saas-section5.png" 
                                    alt="Features Dashboard"
                                    style={customStyles.image}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}