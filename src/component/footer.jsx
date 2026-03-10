// src/component/footer.jsx
import { useEffect, useRef, useState } from "react" 
import Typed from "typed.js"
import Modal from "./Modal" 

export default function Footer(){
    const el = useRef(null)
    const typed = useRef(null)

    // State for managing the modal
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');

    // Policy content from your request
const POLICY_CONTENT = {
    'Copyright Claims': `
        <p>If you believe your copyright has been infringed, please contact us:</p>
        <p><strong>Email:</strong> <a href="mailto:copyright@ytdownload.com">copyright@ytdownload.com</a></p>
    `,
    'Terms and Conditions': `
        <h3>1. Introduction</h3>
        <p>Welcome to YouTube Download Pro (“the Website link”). These Terms & Conditions govern your access and use of our online video conversion and downloading service. By using this Website, you agree to follow all terms stated here. If you do not agree, you must discontinue using the Website immediately.</p>

        <h3>2. Purpose of the Service</h3>
        <p>Our Website provides tools that allow users to convert publicly accessible online videos into downloadable MP3 or MP4 files for personal use. We do not host any copyrighted content and do not store or reproduce any video or audio files. All conversions occur only when initiated by the user.</p>

        <h3>3. User Responsibility & Legal Compliance</h3>
        <p>You, the user, are solely responsible for:</p>
        <ul>
            <li>Ensuring you have the legal right to download or convert any content.</li>
            <li>Complying with all copyright laws in your country.</li>
            <li>Using the service only for personal, non-commercial, lawful purposes.</li>
            <li>Avoiding any use that violates YouTube’s Terms of Service or other platform policies.</li>
        </ul>
        <p>The Website does not condone piracy and will not be held liable for users who download copyrighted material without permission from the copyright owner.</p>

        <h3>4. Copyright & Intellectual Property Protection</h3>
        <p>You agree not to use the Website to:</p>
        <ul>
            <li>Download content you do not have permission to access.</li>
            <li>Circumvent digital rights management (DRM) protections.</li>
            <li>Download paid, restricted, or premium content.</li>
            <li>Distribute downloaded content in any way that infringes on copyright.</li>
        </ul>
        <p>If a copyright owner believes their rights have been violated, they may contact us for removal under our DMCA Policy (Section 9).</p>
    `,
    'Privacy Policy': `
        <p>At YouTube Download Pro, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights when using our service.</p>

        <h3>1. Information We Do Not Collect</h3>
        <p>We do not collect or store:</p>
        <ul>
            <li>Downloaded files</li>
            <li>Video or audio links submitted by users</li>
            <li>Any personal content or account data</li>
            <li>Any login information from third-party platforms (e.g., YouTube)</li>
        </ul>
        <p>All conversions occur instantly and are not saved on our servers.</p>

        <h3>2. Information We May Collect</h3>
        <p>To improve site performance and security, we may collect non-personal technical data, such as:</p>
        <ul>
            <li>Cookies</li>
            <li>Browser type and device information</li>
            <li>Anonymous usage statistics</li>
            <li>IP address for security and anti-abuse monitoring</li>
        </ul>
        <p>This data cannot identify you personally.</p>

        <h3>3. How We Use the Data</h3>
        <ul>
            <li>Improving site speed and functionality</li>
            <li>Preventing abuse or automated attacks</li>
            <li>Analytics and service optimization</li>
            <li>Enhancing user experience</li>
        </ul>
        <p>We do not sell, share, or trade your data with advertisers or third parties.</p>

        <h3>4. Third-Party Services</h3>
        <p>Our Website may contain links or ads from third parties. We are not responsible for the privacy practices of external websites or services. Please review their privacy policies before interacting with their content.</p>

        <h3>5. Security</h3>
        <p>We use reasonable technical measures to protect against unauthorized access and ensure the safe operation of our service. However, no online service is 100% secure.</p>

        <h3>6. Your Choices</h3>
        <p>You may disable cookies or analytics tracking through your browser settings. Continued use of the Website indicates acceptance of this Privacy Policy.</p>

        <h3>7. Updates to This Policy</h3>
        <p>We may revise this Privacy Policy at any time. Changes take effect immediately upon posting.</p>
    `
};


    // Function to handle opening the modal with specific content

    const openModal = (type) => {
        setModalTitle(type);
        setModalContent(POLICY_CONTENT[type]);
        setShowModal(true);
    }

    return (
        <>
            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                title={modalTitle}
                content={modalContent}
            />

            <footer style={{ marginTop: '3rem', background: 'rgba(255, 255, 255, 0.95)', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <div className="container py-3">

                    {/* Buttons Section */}
                    <div className="row justify-content-center mb-2">
                        <div className="col-12 text-center d-flex justify-content-center flex-wrap gap-2">
                            {['Copyright Claims', 'Terms and Conditions', 'Privacy Policy'].map(type => (
                                <button
                                    key={type}
                                    className="btn btn-link p-1"
                                    onClick={() => openModal(type)}
                                    style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.85rem',
                                        fontWeight: '500',
                                        textDecoration: 'none'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--primary-blue)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                                >
                                    {type.includes('Terms') ? 'T&Cs' : type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <hr style={{ borderColor: 'rgba(0,0,0,0.2)', margin: '0.5rem 0 1rem 0' }} />

                    {/* Bottom Footer */}
                    <div className="row align-items-center">
                        {/* Left: Made by */}
                        <div className="col-md-6 text-center text-md-start mb-1 mb-md-0">
                            <h5 className="mb-0" style={{ fontSize: '1rem', color: 'var(--primary-blue)', fontWeight: '600' }}>
                                Made with ❤️ by <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#1f22ffff', fontWeight: '700', textDecoration: 'none' }}>13 COMPANY.</a>
                            </h5>
                        </div>

                        {/* Right: Copyright */}
                        <div className="col-md-6 text-center text-md-end">
                            <p className="mb-0" style={{ fontSize: '0.85rem', color: 'var(--primary-blue)', fontWeight: '500' }}>
                                © 2026 <a href="https://youtubedownloadpro.com" style={{ color: '#1f22ffff', textDecoration: 'none', fontWeight: '600' }}>YouTube Download Pro</a>. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}