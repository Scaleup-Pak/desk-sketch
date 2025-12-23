import { AiOutlineDollar } from 'react-icons/ai';
import { FaStopwatch } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

export default function Saas_Section51() {
const iconStyle = {
    backgroundColor: '#fff',
    color: '#0d6efd',
    borderRadius: '50%',
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginRight: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    lineHeight: '0',            // KEY FIX: Prevent vertical stretch
    overflow: 'hidden',         // Trims any oversized content
    flexShrink: 0,              // Prevent shrinking in flex layouts
};

    return (
        <section
            className="section background-navy background-half-right spdtb overflow-hidden"
            style={{ backgroundImage: 'url(/assets/images/wave-02.png)', padding: '140px 0' }}
        >
            <div className="container">
                <div className="row row-full flex-align-c">
                    
                    {/* Left Column */}
                    <div className="col-lg-4">
                        <div style={{ paddingRight: 24, paddingLeft: 0 }}>
                            <div className="heading heading-alway-white align-left mb32">
                                <div className="heading-sub" style={{ letterSpacing: 2 }}>Level Up</div>
                                <h2
                                    className="heading-title size-xl"
                                    style={{
                                        fontWeight: 700,
                                        fontSize: 'clamp(32px, 3.4vw, 44px)',
                                        lineHeight: 1.12,
                                        wordBreak: 'keep-all'
                                    }}
                                >
                                    <span style={{ whiteSpace: 'nowrap' }}>DeckSketch will help you</span>
                                    <br />
                                    <span style={{ whiteSpace: 'nowrap' }}>scale your business!</span>
                                </h2>
                                <div className="heading-desc" style={{ fontSize: 18, lineHeight: 1.6, marginTop: 18 }}>
                                    Wearing too many hats? What can saving 10+ hours for each deck do for you?
                                </div>
                            </div>

                            {/* Feature List */}
                            <div className="block-list color-white layout-03">
                                <ul>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '36px' }}>
                                        <span style={iconStyle}><AiOutlineDollar /></span>
                                        <div>
                                            <h4 className="title" style={{ fontSize: 24, marginBottom: 8 }}>Instant Accurate Estimates</h4>
                                            <p className="desc" style={{ fontSize: 16, lineHeight: 1.6 }}>Clients want things now, with DeckSketch pinpoint accurate estimates are seconds away, and can be given in the field.</p>
                                        </div>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '36px' }}>
                                        <span style={iconStyle}><FaStopwatch /></span>
                                        <div>
                                            <h4 className="title" style={{ fontSize: 24, marginBottom: 8 }}>No More Waiting</h4>
                                            <p className="desc" style={{ fontSize: 16, lineHeight: 1.6 }}>Drawings and edits taking hours, days, or even weeks? DeckSketch creates permit & contractor ready drawings in seconds and edits are a breeze</p>
                                        </div>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <span style={iconStyle}><FaCheckCircle /></span>
                                        <div>
                                            <h4 className="title" style={{ fontSize: 24, marginBottom: 8 }}>Up to Code</h4>
                                            <p className="desc" style={{ fontSize: 16, lineHeight: 1.6 }} >Get started and customize DeckSketch per your building methodology, materials, and your municipalities building codes.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div
                        className="col-lg-8 d-none d-lg-block col-full-right"
                        style={{
                            paddingLeft: 64,
                            display: 'flex',
                            justifyContent: 'flex-end',
                            position: 'relative',
                            right: -250
                        }}
                    >
                        <img
                            className="wow animate__animated animate__fadeInRight"
                            src="/assets/images/saas-10.png"
                            alt="Banner"
                            style={{ transform: 'scale(1.08)', transformOrigin: 'right center', marginLeft: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
