// src/component/Modal.jsx
import React from 'react';

export default function Modal({ show, onClose, title, content }) {
    if (!show) return null;

    return (
        <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', paddingRight: '17px' }}
            aria-modal="true"
            role="dialog"
        >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div
                    className="modal-content"
                    style={{
                        backgroundColor: 'var(--bg-dark)',
                        border: '2px solid rgba(0, 0, 0, 0.15)',
                        borderRadius: '0.75rem'
                    }}
                >
                    <div className="modal-header border-bottom-0">
                        <h5 className="modal-title" style={{ color: 'var(--primary-blue)' }}>
                            {title}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={onClose}
                            style={{ filter: 'brightness(0)' }}
                        ></button>
                    </div>

                    <div className="modal-body" style={{ lineHeight: '1.6' }}>
                        <div
                            dangerouslySetInnerHTML={{ __html: content }}
                            style={{ color: 'var(--text-secondary)' }}
                        />
                    </div>

                    <div className="modal-footer border-top-0">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
