// Footer Component for AZMUN Website
function loadFooter() {
    const footerHTML = `
        <footer class="site-footer">
            <div class="footer-content">
                <div class="footer-section">
                    <img src="Ayoniz mum.png" alt="Ayoniz MUN Logo" class="footer-logo">
                    <h1>Empowering Youth. Inspiring Change. Shaping Tomorrow.</h1>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="registration.html">Registration</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <p><i class="fas fa-envelope"></i> contactayonizmun@gmail.com</p>
                    <p><i class="fas fa-phone"></i> +91 8106500777</p>
                </div>
                <div class="footer-section">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="https://instagram.com/ayonizmun" target="_blank" class="social-link instagram-link">
                            <img src="Insta.avif" alt="Instagram" class="insta-logo">
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Ayoniz Model United Nations. All rights reserved.</p>
            </div>
        </footer>
    `;

    // Add footer styles if not already present
    if (!document.getElementById('footer-styles')) {
        const footerStyles = document.createElement('style');
        footerStyles.id = 'footer-styles';
        footerStyles.textContent = `
            .site-footer {
                background: #1a237e;
                color: white;
                padding: 40px 0 20px 0;
                margin-top: auto;
            }

            .footer-content {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 30px;
            }

            .footer-section h3 {
                color: #ffd700;
                margin-bottom: 15px;
                font-size: 1.5em;
            }

            .footer-section h4 {
                color: #ffd700;
                margin-bottom: 15px;
                font-size: 1.2em;
            }

            .footer-section p {
                line-height: 1.6;
                margin-bottom: 10px;
            }

            .footer-section ul {
                list-style: none;
                padding: 0;
            }

            .footer-section ul li {
                margin-bottom: 8px;
            }

            .footer-section ul li a {
                color: white;
                text-decoration: none;
                transition: color 0.3s ease;
            }

            .footer-section ul li a:hover {
                color: #ffd700;
            }

            .social-links {
                display: flex;
                gap: 15px;
            }

            .social-links a {
                color: white;
                font-size: 1.5em;
                transition: color 0.3s ease;
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                border-radius: 5px;
                background: rgba(255, 255, 255, 0.1);
            }

            .social-links a:hover {
                color: #ffd700;
                background: rgba(255, 255, 255, 0.2);
                transform: scale(1.05);
            }

            .social-links a span {
                font-size: 0.8em;
                font-weight: 500;
            }

            .instagram-link {
                background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
                padding: 10px 15px;
                border-radius: 8px;
                transition: all 0.3s ease;
            }

            .instagram-link:hover {
                transform: scale(1.05);
                box-shadow: 0 4px 15px rgba(220, 39, 67, 0.4);
            }

            .footer-bottom {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }

            .footer-bottom p {
                margin: 0;
                color: rgba(255, 255, 255, 0.8);
            }

            @media (max-width: 768px) {
                .footer-content {
                    grid-template-columns: 1fr;
                    text-align: center;
                }
                
                .social-links {
                    justify-content: center;
                }
            }

            .insta-logo {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                object-fit: cover;
                background: none;
                border: none;
                box-shadow: none;
                transition: box-shadow 0.3s;
            }
            .instagram-link:hover .insta-logo {
                box-shadow: none;
            }

            .footer-logo {
                max-width: 120px;
                height: auto;
                margin-bottom: 12px;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
        `;
        document.head.appendChild(footerStyles);
    }

    // Replace existing footer or append new footer
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
        existingFooter.outerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
}

// Load footer when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
} 