import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'

function Navbar({children}){
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  function handleShare() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  function handleBookmark() {
    setBookmarked(true);
    setTimeout(() => setBookmarked(false), 3000);
    if (window.sidebar && window.sidebar.addPanel) {
      window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) {
      window.external.AddFavorite(window.location.href, document.title);
    }
  }

  return(
    <>
      <nav 
        className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
        style={{
          background: scrolled ? 'rgba(15, 23, 42, 0.98)' : 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '2px solid rgba(59, 130, 246, 0.4)' : '2px solid rgba(59, 130, 246, 0.2)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 10px 40px rgba(0, 0, 0, 0.5)' : '0 5px 20px rgba(0, 0, 0, 0.3)',
          padding: scrolled ? '0.5rem 0' : '1rem 0'
        }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          {/* Brand Logo */}
          <a 
            className="navbar-brand d-flex align-items-center" 
            href="#"
            style={{ transition: 'transform 0.3s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              width: '45px',
              height: '45px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px',
              boxShadow: '0 5px 15px rgba(59, 130, 246, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.6)';
              e.currentTarget.style.transform = 'rotate(5deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(59, 130, 246, 0.4)';
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" opacity="0.9"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className='mb-0' style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              fontWeight: '800',
              letterSpacing: '-0.5px'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>YouTube</span>
              <span style={{ color: '#f8fafc', fontWeight: '700' }}>-Download Pro</span>
            </h1>
          </a>

          {/* Bookmark & Share Buttons */}
          <div className="d-flex align-items-center gap-2">
            {/* Bookmark */}
            <button
              onClick={handleBookmark}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.45rem 1rem',
                borderRadius: '10px',
                border: '1.5px solid rgba(59, 130, 246, 0.5)',
                background: bookmarked
                  ? 'linear-gradient(135deg, #3b82f6, #6366f1)'
                  : 'rgba(59, 130, 246, 0.1)',
                color: '#60a5fa',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6, #6366f1)'}
              onMouseLeave={(e) => {
                if (!bookmarked) e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill={bookmarked ? 'white' : 'none'} stroke={bookmarked ? 'white' : '#60a5fa'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
              <span style={{ color: bookmarked ? 'white' : '#60a5fa' }}>Bookmark</span>
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.45rem 1rem',
                borderRadius: '10px',
                border: '1.5px solid rgba(59, 130, 246, 0.5)',
                background: copied
                  ? 'linear-gradient(135deg, #10b981, #059669)'
                  : 'rgba(59, 130, 246, 0.1)',
                color: '#60a5fa',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6, #6366f1)'}
              onMouseLeave={(e) => {
                if (!copied) e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={copied ? 'white' : '#60a5fa'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {copied
                  ? <polyline points="20 6 9 17 4 12"/>
                  : <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></>
                }
              </svg>
              <span style={{ color: copied ? 'white' : '#60a5fa' }}>
                {copied ? 'Copied!' : 'Share Site'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Toast Notifications */}
      {bookmarked && (
        <div style={{
          position: 'fixed', bottom: '1.5rem', left: '50%',
          transform: 'translateX(-50%)',
          background: '#1e293b', color: '#fff',
          padding: '0.7rem 1.5rem', borderRadius: '999px',
          fontSize: '0.9rem', fontWeight: '600',
          zIndex: 9999, boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          animation: 'fadeInUp 0.3s ease', whiteSpace: 'nowrap',
        }}>
          🔖 Press {typeof navigator !== 'undefined' && navigator?.platform?.includes('Mac') ? '⌘+D' : 'Ctrl+D'} to bookmark!
        </div>
      )}

      {copied && (
        <div style={{
          position: 'fixed', bottom: '1.5rem', left: '50%',
          transform: 'translateX(-50%)',
          background: '#1e293b', color: '#fff',
          padding: '0.7rem 1.5rem', borderRadius: '999px',
          fontSize: '0.9rem', fontWeight: '600',
          zIndex: 9999, boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          animation: 'fadeInUp 0.3s ease', whiteSpace: 'nowrap',
        }}>
          ✅ Link copied to clipboard!
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @media (max-width: 576px) {
          button span { display: none; }
          button { padding: 0.45rem 0.6rem !important; }
        }
      `}</style>
    </>
  )
}

export default Navbar