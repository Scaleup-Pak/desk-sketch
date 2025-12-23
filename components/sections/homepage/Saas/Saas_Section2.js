export default function Saas_Section2() {

    return (
        <>
            <section className="section spdt">
                <div className="container mt60 mb20" style={{paddingBottom: '60px'}}>
                    <div className="heading align-center">
                        <h2 className="heading-title size-xl" style={{ fontSize: 56, fontWeight: 700 }}>How Does It work?</h2>
                        <div className="heading-desc">Check out our 2 minute demo</div>
                    </div>
                    <div className="row flex-align-c">
                        <div className="col-lg-7">
                            <div className="block-video">
                                <div className="popup-wrapper ratio br20" style={{ aspectRatio: 3 / 2 }}>
                                    <iframe
                                        src="https://drive.google.com/file/d/1wXmNo_7xeOdctONPApy2nzS2DkZcaG2r/preview"
                                        title="DeckSketch demo"
                                        style={{ width: '100%', height: '100%', border: 0 }}
                                        allow="autoplay; fullscreen"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="pdl60 lg-mt32">
                                <div className="block-list layout-03">
                                    <ul>
                                        <li>
                                            <span className="number background-navy">1</span>
                                            <h4 className="title size-l" style={{paddingLeft: 64}}>Sketch</h4>
                                            <p className="desc"style={{paddingLeft: 64}}>Enter the outward dimensions.</p>
                                        </li>
                                        <li>
                                            <span className="number background-navy">2</span>
                                            <h4 className="title size-l"style={{paddingLeft: 64}}>Detail</h4>
                                            <p className="desc"style={{paddingLeft: 64}}>Add staircases and select materials.</p>
                                        </li>
                                        <li>
                                            <span className="number background-navy">3</span>
                                            <h4 className="title size-l"style={{paddingLeft: 64}}>Done</h4>
                                            <p className="desc"style={{paddingLeft: 64}}>Structural plan and Material takeoff is created and customized for your business in seconds.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}