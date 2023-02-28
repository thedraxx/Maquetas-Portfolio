import React from 'react'

const Footer = () => {
    return (
        <footer
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60px',
                backgroundColor: 'black',
                bottom: '0',
                width: '100%',
                position: 'relative',
                padding: ' 50px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                    flexDirection: 'column',
                }}

            >
                <p style={{ color: 'white' }}>© 2021 - All rights reserved</p>
                <h1
                    style={{ color: 'white' }}
                >
                    Frank
                </h1>
                <h1
                    style={{ color: 'white' }}
                >
                    Tomas
                </h1>
            </div>


        </footer>

    )
}

export default Footer