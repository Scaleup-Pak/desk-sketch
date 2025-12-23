import Link from "next/link";
import { useState } from "react";
export default function Saas_Section6() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => { setToggled(!isToggled) };

    const isMonthly = isToggled;
    const periodLabel = isMonthly ? 'month' : 'year';
    const periodKey = isMonthly ? 'monthly' : 'yearly';

    const formatPrice = (amount) => new Intl.NumberFormat('en-US').format(amount);

    const plans = {
        foundation: {
            price: isMonthly ? 199 : 1999,
            per: periodLabel,
        },
        enterprise: {
            price: isMonthly ? 169 : 1699,
            per: periodLabel,
        }
    };

    const CheckIcon = () => (
        <svg width="58" height="58" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0.956543C6.57158 0.956543 5.17523 1.38012 3.98754 2.17371C2.79986 2.9673 1.87417 4.09525 1.32753 5.41494C0.7809 6.73463 0.637876 8.18678 0.916547 9.58775C1.19522 10.9887 1.88307 12.2756 2.89311 13.2856C3.90316 14.2957 5.19004 14.9835 6.59101 15.2622C7.99199 15.5409 9.44413 15.3979 10.7638 14.8512C12.0835 14.3046 13.2115 13.3789 14.0051 12.1912C14.7986 11.0035 15.2222 9.60719 15.2222 8.17877C15.2202 6.26393 14.4586 4.42811 13.1046 3.07412C11.7507 1.72012 9.91483 0.958565 8 0.956543ZM11.1708 6.90515L7.28194 10.794C7.23035 10.8457 7.16907 10.8867 7.10163 10.9146C7.03419 10.9426 6.96189 10.957 6.88889 10.957C6.81588 10.957 6.74358 10.9426 6.67614 10.9146C6.6087 10.8867 6.54743 10.8457 6.49583 10.794L4.82916 9.12738C4.72492 9.02313 4.66635 8.88175 4.66635 8.73432C4.66635 8.5869 4.72492 8.44551 4.82916 8.34127C4.93341 8.23702 5.07479 8.17846 5.22222 8.17846C5.36964 8.17846 5.51103 8.23702 5.61527 8.34127L6.88889 9.61557L10.3847 6.11904C10.4363 6.06743 10.4976 6.02648 10.5651 5.99855C10.6325 5.97061 10.7048 5.95623 10.7778 5.95623C10.8508 5.95623 10.9231 5.97061 10.9905 5.99855C11.0579 6.02648 11.1192 6.06743 11.1708 6.11904C11.2224 6.17066 11.2634 6.23194 11.2913 6.29938C11.3193 6.36682 11.3336 6.4391 11.3336 6.5121C11.3336 6.5851 11.3193 6.65738 11.2913 6.72482C11.2634 6.79226 11.2224 6.85354 11.1708 6.90515Z" fill="url(#paint0_linear_15_368)"/>
            <defs>
                <linearGradient id="paint0_linear_15_368" x1="7.36129" y1="3.1698" x2="15.8628" y2="5.14192" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0057FC"/>
                    <stop offset="1" stopColor="#003496"/>
                </linearGradient>
            </defs>
        </svg>
    );

    const DisabledIcon = () => (
        <svg width="62" height="62" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.72206 1.17871C5.04872 1.17871 2.05539 4.17204 2.05539 7.84538C2.05539 11.5187 5.04872 14.512 8.72206 14.512C12.3954 14.512 15.3887 11.5187 15.3887 7.84538C15.3887 4.17204 12.3954 1.17871 8.72206 1.17871ZM10.9621 9.37871C11.1554 9.57204 11.1554 9.89204 10.9621 10.0854C10.8621 10.1854 10.7354 10.232 10.6087 10.232C10.4821 10.232 10.3554 10.1854 10.2554 10.0854L8.72206 8.55204L7.18872 10.0854C7.08872 10.1854 6.96206 10.232 6.83539 10.232C6.70872 10.232 6.58206 10.1854 6.48206 10.0854C6.28872 9.89204 6.28872 9.57204 6.48206 9.37871L8.01539 7.84538L6.48206 6.31204C6.28872 6.11871 6.28872 5.79871 6.48206 5.60538C6.67539 5.41204 6.99539 5.41204 7.18872 5.60538L8.72206 7.13871L10.2554 5.60538C10.4487 5.41204 10.7687 5.41204 10.9621 5.60538C11.1554 5.79871 11.1554 6.11871 10.9621 6.31204L9.42872 7.84538L10.9621 9.37871Z" fill="#292D32" fillOpacity="0.4"/>
        </svg>
    );

    const planDetails = {
        foundation: {
            monthly: {
                subtitle: 'Less than $7/day you get:',
                features: [
                    { label: 'Business Customization', included: true },
                    { label: 'Unlimited Users', included: true },
                    { label: 'Unlimited Drawings', included: true },
                    { label: 'Access To Material Takeoff Beta', included: false },
                ],
            },
            yearly: {
                subtitle: 'Less than $6/day you get:',
                features: [
                    { label: 'Business Customization', included: true },
                    { label: 'Unlimited Users', included: true },
                    { label: 'Unlimited Drawings', included: true },
                    { label: 'Access To Material Takeoff Beta', included: true },
                ],
            },
        },
        enterprise: {
            monthly: {
                subtitle: 'Perfect for businesses',
                features: [
                    { label: 'Business Customization', included: true },
                    { label: 'Unlimited Users', included: true },
                    { label: 'Unlimited Drawings', included: true },
                    { label: 'Access To Betas', included: true },
                    { label: 'Material Takeoffs', included: true },
                ],
            },
            yearly: {
                subtitle: 'Perfect for businesses',
                features: [
                    { label: 'Business Customization', included: true },
                    { label: 'Unlimited Users', included: true },
                    { label: 'Unlimited Drawings', included: true },
                    { label: 'Access To Betas', included: true },
                    { label: 'Material Takeoffs', included: true },
                ],
            },
        },
    };

    const FeatureItem = ({ label, included }) => (
        <li style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
            fontSize: '16px',
            color: included ? undefined : '#999'
        }}>
            <span style={{
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px'
            }}>
                {included ? <CheckIcon /> : <DisabledIcon />}
            </span>
            {label}
        </li>
    );

    const buttonStyle = {
        display: 'block',
        background: 'linear-gradient(103.06deg, #0057FC 39.88%, #003496 90.23%)',
        color: '#fff',
        fontWeight: 600,
        textAlign: 'center',
        padding: '14px',
        borderRadius: '4px',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1,
        boxShadow: '0 3px 10px rgba(0, 87, 252, 0.2)',
        ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 5px 15px rgba(0, 87, 252, 0.4)'
        }
    };

    return (
        <>
            <div className="section-pricing section spdt" style={{ backgroundColor: '#f8f9fc' }}>
                <div className="container">
                    <div className="heading align-center mb-5">
                        <h2 className="heading-title size-l" style={{ marginBottom: '15px', fontSize: '36px' }}>
                            Less Than $6/Day
                        </h2>
                        <div className="heading-desc" style={{color: '#696969', fontSize: '18px'}}>Cancel anytime, no hidden fees</div>
                    </div>
                    <div className="toggle" onClick={toggleTrueFalse} style={{ marginBottom: '40px' }}>
                        <span className="text" style={{ fontSize: 18, color: '#555' }}>Annually</span>
                        <span className={`switch ${isToggled ? ' is-active' : ''}`} />
                        <span className="text" style={{ fontSize: 18, color: '#555' }}>Monthly</span>
                    </div>
                    <div className="pricing-table is-active" style={{ padding: '40px 0' }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '5px',
                                    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
                                    padding: '30px 25px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    maxWidth: '320px',
                                    margin: '0 auto',
                                    width: '100%'
                                }}>
                                    <div style={{
                                        width: '56px',
                                        height: '56px',
                                        backgroundColor: "transparent",
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '20px'
                                    }}>
                                        <img 
                                            src="/assets/images/saas-foundation-icon.png" 
                                            alt="Foundation" 
                                            style={{
                                                width: '64px',
                                                height: '64px',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                    <h3 style={{ 
                                        fontWeight: 600, 
                                        fontSize: '24px', 
                                        marginBottom: '18px' 
                                    }}>Foundation</h3>
                                    <div style={{
                                        marginBottom: '10px',
                                        display: 'flex',
                                        alignItems: 'baseline'
                                    }}>
                                        <span style={{ 
                                            fontSize: '42px',
                                            fontWeight: '700',
                                            lineHeight: '1',
                                            color: '#222'
                                        }}>${formatPrice(plans.foundation.price)}</span>
                                        <span style={{ 
                                            fontSize: '16px',
                                            color: '#666',
                                            marginLeft: '5px'
                                        }}>/per {plans.foundation.per}</span>
                                    </div>
                                    <p style={{ 
                                        fontSize: '16px',
                                        color: '#555',
                                        marginBottom: '24px'
                                    }}>{planDetails.foundation[periodKey].subtitle}</p>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: '0 0 30px 0',
                                        flexGrow: 1
                                    }}>
                                        {planDetails.foundation[periodKey].features.map((feature) => (
                                            <FeatureItem
                                                key={feature.label}
                                                label={feature.label}
                                                included={feature.included}
                                            />
                                        ))}
                                    </ul>
                                    <div>
                                        <Link href="/contact-01" style={buttonStyle}>
                                            Start for Free
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}