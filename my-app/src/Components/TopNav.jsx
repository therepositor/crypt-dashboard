import React from 'react'

const TopNav = () =>   {
    return (
        <nav>
            <div className='night_mode_toggle'>
                 <svg width="56" height="28" viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 560">
                    <g id="Group 400">
                    <rect id="Rectangle 332" y="25.2" width="22.4" height="51.8" rx="11.2" transform="rotate(-90 0 25.2)" fill="#F1F2FF"/>
                    <g id="Vector">
                    <path d="M13.8537 17.2002C15.6191 17.2002 17.0552 15.7641 17.0552 13.9987C17.0552 12.2333 15.6191 10.7972 13.8537 10.7972C12.0884 10.7972 10.6523 12.2333 10.6523 13.9987C10.6523 15.7641 12.0884 17.2002 13.8537 17.2002ZM18.3296 14.6394V13.3606H20.2478V14.6394H18.3296ZM7.45972 14.6394V13.3606H9.37793L9.37793 14.6394H7.45972ZM13.2143 20.394V18.4758H14.4931V20.394H13.2143ZM13.2143 9.52419V7.60598H14.4931V9.52419H13.2143Z" fill="#0D0F2E"/>
                    <path d="M18.827 18.0685L17.9229 18.9727L16.5667 17.6165L17.4708 16.7124L18.827 18.0685Z" fill="#0D0F2E"/>
                    <path d="M10.2373 11.2877L8.88047 9.93085L9.78459 9.02674L11.1414 10.3836L10.2373 11.2877Z" fill="#0D0F2E"/>
                    <path d="M11.142 17.6165L9.78523 18.9727L8.88111 18.0679L10.2379 16.7124L11.142 17.6165Z" fill="#0D0F2E"/>
                    <path d="M17.9229 9.02674L18.827 9.93085L17.4702 11.2877L16.5661 10.3836L17.9229 9.02674Z" fill="#0D0F2E"/>
                    </g>
                    </g>
                    <path id="Ellipse 101" d="M42 0C49.732 0 56 6.26801 56 14C56 21.732 49.732 28 42 28C34.268 28 28 21.732 28 14C28 6.26801 34.268 0 42 0Z" fill="url(#paint0_linear)"/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear" x1="42" y1="8.76842" x2="42" y2="32.1263" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#29ABB5"/>
                    <stop offset="1" stopColor="#6CEDC0"/>
                    </linearGradient>
                    </defs>
                </svg>

            </div>
            <div className='topnav-sub-container'>
                
                <div className='wise-usd'>
                    <div className='wise'>Wise</div>
                    <div className='percentage-svgIcon'>
                        <div className='percentage'>5.14%</div>
                        <div>
                            <svg  className='nav-svg-icon' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group 293">
                                <ellipse id="Ellipse 48" opacity="0.1" cx="9" cy="9.05" rx="9" ry="8.55" fill="#2BB596"/>
                                <path id="Vector" d="M9.13467 9.42914L10.3464 10.5242L13.0652 8.10373V9.10755H14.2105V6.34998H11.1593V7.38502H12.2405L10.3525 9.06591L9.13467 7.96534L4.26311 12.3681L5.07292 13.1L9.13467 9.42914Z" fill="#2BB596"/>
                            </g>
                            </svg>
                        </div>
                    </div>
                    <div className='usd-eth'>
                        $0.0521 USD
                    </div>
                </div>
                <div className='eth'>
                    <div className='percentage-svgIcon'>
                        <div className='percentage'>2.13%</div>
                        <div>
                            <svg className='nav-svg-icon' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group 293">
                                <ellipse id="Ellipse 48" opacity="0.1" cx="9" cy="9.05" rx="9" ry="8.55" fill="#2BB596"/>
                                <path id="Vector" d="M9.13467 9.42914L10.3464 10.5242L13.0652 8.10373V9.10755H14.2105V6.34998H11.1593V7.38502H12.2405L10.3525 9.06591L9.13467 7.96534L4.26311 12.3681L5.07292 13.1L9.13467 9.42914Z" fill="#2BB596"/>
                            </g>
                            </svg>
                        </div>
                    </div>
                    <div className='usd-eth'>
                        0.0001564 ETH
                    </div>
                </div>
            </div>
            <div className='topnav-sub-container'>
                <div className='roi-eth'>
                    <div className='roi'>ROI<sub>ETH</sub></div>
                    <div className='no-x'>0.73X</div>
                </div>
                <div className='roi-usd'>
                    <div className='roi'>ROI<sub>USD</sub></div>
                    <div className='no-x'>3.26X</div>
                </div>
            </div>
            
        </nav>

    )
}

export default TopNav