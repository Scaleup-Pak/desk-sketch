import Link from 'next/link'

export default function HeaderRight() {
    return (
        <>
            <div className="header-right flex flex-align-c flex-content-e">
                
                 <div className="customer">
                    <a
                        href="https://app.decksketch.ai/auth/signin"
                        style={{
                            outline: '1.5px solid black',
                            borderRadius: '4px',
                            padding: '11px 32px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px', // space between items
                            textDecoration: 'none'
                        }}
                    >
                        {/* Custom SVG Icon */}
                        <svg
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.8594 9.51635H2.82861"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.66357 7.32935L11.8596 9.51635L9.66357 11.7033"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.3783 6.04175V5.342C6.3783 3.81575 7.61505 2.579 9.14205 2.579H12.805C14.3275 2.579 15.5613 3.81275 15.5613 5.33525V13.6902C15.5613 15.2165 14.3238 16.454 12.7975 16.454H9.1338C7.61205 16.454 6.3783 15.2195 6.3783 13.6977V12.9912"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        {/* Login Text */}
                        <span>Log In</span>
                    </a>
                </div>

                
                {/* <div className="customer">
                    <a href="https://app.decksketch.ai/auth/signin" style={{ outline: '1.5px solid black', borderRadius: '4px', padding: '11px 42px' }}>
                        <i className="las la-user-circle" />
                        <span>Log In</span>
                    </a>
                </div> */}

                {/* <div className="buttons">
                    <Link href="/contact-01" className="button fullfield">
                        <i className="las la-headset" />
                        <span>Let's Talk</span>
                    </Link>
                </div> */}
                <div className="buttons">
                    <Link
                        href="/contact-01"
                        className="button fullfield"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '12px 24px',
                            textDecoration: 'none'
                        }}
                    >
                        {/* White SVG Icon */}
                        <svg
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.771 8.79172C6.25457 8.79172 6.64795 9.18457 6.64795 9.66672C6.64795 10.1503 6.25457 10.5427 5.771 10.5427C5.28763 10.5424 4.89502 10.1501 4.89502 9.66672C4.89502 9.18472 5.28763 8.79196 5.771 8.79172ZM9.17822 8.79172C9.66179 8.79172 10.0552 9.18457 10.0552 9.66672C10.0552 10.1503 9.66179 10.5427 9.17822 10.5427C8.69482 10.5425 8.30225 10.1502 8.30225 9.66672C8.30225 9.1847 8.69482 8.79192 9.17822 8.79172ZM12.5854 8.79172C13.069 8.79172 13.4624 9.18457 13.4624 9.66672C13.4624 10.1503 13.069 10.5427 12.5854 10.5427C12.102 10.5425 11.7095 10.1502 11.7095 9.66672C11.7095 9.18469 12.102 8.79191 12.5854 8.79172Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.015 2C4.6575 2 1.5 5.55959 1.5 9.51127C1.5 10.7732 1.8675 12.0719 2.5125 13.2586C2.6325 13.4547 2.6475 13.7018 2.565 13.9354L2.0625 15.6179C1.95 16.0235 2.295 16.3232 2.6775 16.2031L4.1925 15.7531C4.605 15.6179 4.9275 15.7899 5.31 16.0235C6.405 16.6688 7.77 17 9 17C12.72 17 16.5 14.1232 16.5 9.48873C16.5 5.49199 13.275 2 9.015 2Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span>Let's Talk</span>
                    </Link>
                </div>


            </div>

        </>
    )
}