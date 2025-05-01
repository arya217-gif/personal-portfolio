document.addEventListener('DOMContentLoaded', function() {
    // Simple animation for sections
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
    
    // Print button functionality (optional)
    const printButton = document.createElement('button');
    printButton.textContent = 'Print Resume';
    printButton.className = 'print-button';
    printButton.addEventListener('click', () => window.print());
    document.body.appendChild(printButton);
    
    // Add print styles
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            body {
                padding: 0;
                background: white;
            }
            .resume-wrapper {
                box-shadow: none;
                border-radius: 0;
            }
            .print-button {
                display: none;
            }
        }
    `;
    document.head.appendChild(printStyles);
});