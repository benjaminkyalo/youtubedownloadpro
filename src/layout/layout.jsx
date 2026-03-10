import HeaderFormat from "../component/Header";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Layout({format, children}){
    return(
        <>   
            <HeaderFormat format={format} />
            <section 
                className="container search-section" 
                style={{
                    maxWidth: '1100px',
                    padding: '1rem 1rem',
                    position: 'relative'
                }}
            >
                {/* Decorative Background Elements */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '10%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>
                
                <div style={{
                    position: 'absolute',
                    bottom: '-50px',
                    right: '10%',
                    width: '250px',
                    height: '250px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                {/* Main Content */}
                <div className="row g-3 align-items-center" style={{
                    position: 'relative',
                    zIndex: 1
                }}>
                    {children}
                </div>
            </section>

            {/* Pulse Animation */}
            <style jsx>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }
            `}</style>
        </> 
    )
}

export default Layout;