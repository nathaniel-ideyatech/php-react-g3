import React from 'react';



const CustomerDashboardSideNav = () => {
    return (
        <section>
            {/* Customer Dashboard Side Nav */}
            <a href="/" tabIndex={0}>
                <span aria-hidden="true">💁🏻‍♂️</span>
                About us
            </a>
            <a href="/" tabIndex={0}>
                <span aria-hidden="true">💸</span>
                Pricing
            </a>
            <a href="/" tabIndex={0}>
                <span aria-hidden="true">📩</span>
                Contact
            </a>
        </section>
    )
}

export default CustomerDashboardSideNav