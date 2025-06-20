import { AiOutlineDollar } from 'react-icons/ai';
import { FaStopwatch } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

export default function Saas_Section51() {
const iconStyle = {
    backgroundColor: '#fff',
    color: '#0d6efd',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    marginRight: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    lineHeight: '0',            // KEY FIX: Prevent vertical stretch
    overflow: 'hidden',         // Trims any oversized content
    flexShrink: 0,              // Prevent shrinking in flex layouts
};

    return (
        <section className="section background-navy background-half-right spdtb overflow-hidden" style={{ backgroundImage: 'url(/assets/images/wave-02.png)' }}>
            <div className="container">
                <div className="row row-full flex-align-c">
                    
                    {/* Left Column */}
                    <div className="col-lg-5">
                        <div className="pdr80">
                            <div className="heading heading-alway-white mb32">
                                <div className="heading-sub">Level Up</div>
                                <h2 className="heading-title">DeckSketch will help you scale your business!</h2>
                                <div className="heading-desc">Wearing too many hats? What can saving 10+ hours for each deck do for you?</div>
                            </div>

                            {/* Feature List */}
                            <div className="block-list color-white layout-03">
                                <ul>
                                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                                        <span style={iconStyle}><AiOutlineDollar /></span>
                                        <div>
                                            <h4 className="title">Instant Accurate Estimates</h4>
                                            <p className="desc" style={{ fontSize: '14px', }}>Clients want things now, with DeckSketch pinpoint accurate estimates are seconds away, and can be given in the field.</p>
                                        </div>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                                        <span style={iconStyle}><FaStopwatch /></span>
                                        <div>
                                            <h4 className="title">No More Waiting</h4>
                                            <p className="desc"style={{ fontSize: '14px',  }}>Drawings and edits taking hours, days, or even weeks? DeckSketch creates permit & contractor ready drawings in seconds and edits are a breeze</p>
                                        </div>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={iconStyle}><FaCheckCircle /></span>
                                        <div>
                                            <h4 className="title">Up to Code</h4>
                                            <p className="desc" style={{ fontSize: '14px',  }} >Get started and customize DeckSketch per your building methodology, materials, and your municipalities building codes.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="col-lg-7 d-none d-lg-block col-full-right">
                        <img className="wow animate__animated animate__fadeInRight" src="/assets/images/saas-10.png" alt="Banner" />
                    </div>
                </div>
            </div>
        </section>
    );
}
