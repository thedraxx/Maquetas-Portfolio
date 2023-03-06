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
                top: "0",
                width: '100%',
                position: 'relative',
                padding: ' 100px',
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
                <h3 style={{ color: 'white' }}>© 2021 - All rights reserved</h3>
                <p />
                <h3 style={{ color: 'white' }}>Developed by <a href="https://www.linkedin.com/in/eduardo-ram%C3%ADrez-ram%C3%ADrez-5b1b1b1b3/" style={{ color: 'white' }}>Francisco Cerrano</a></h3>
                <p />
                <h3 style={{ color: 'white' }}> & <a href="https://www.linkedin.com/in/eduardo-ram%C3%ADrez-ram%C3%ADrez-5b1b1b1b3/" style={{ color: 'white' }}>Tomas Guida</a></h3>
            </div>
        </footer>
    )
}

export default Footer