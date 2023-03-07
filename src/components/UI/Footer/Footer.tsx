import React from 'react'

const Footer = () => {
    return (
        <>


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
                    <h3 style={{ color: 'white' }}>© 2023</h3>
                    <p />
                    <h3 style={{ color: 'white' }}>Developed by</h3>
                    <p />
                    <div
                        className='flex flex-row'
                    >
                        <a href="https://www.linkedin.com/in/iscodev/" style={{ color: 'white', marginRight: 5 }}>Frank</a>
                        <a href="https://www.linkedin.com/in/tomás-guida-bb9335268/" style={{ color: 'white', marginLeft: 5 }}>Tomas</a>


                    </div>

                </div>
            </footer >
        </>
    )

}

export default Footer