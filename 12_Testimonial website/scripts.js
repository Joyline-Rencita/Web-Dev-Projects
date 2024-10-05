        const helpButton = document.getElementById('helpButton');
        const helpPopup = document.getElementById('helpPopup');
        let isPopupOpen = false;

        helpButton.addEventListener('click', () => {
            isPopupOpen = !isPopupOpen;
            if (isPopupOpen) {
                helpPopup.classList.add('show');
            } else {
                helpPopup.classList.remove('show');
            }
        });

        // Close popup when clicking outside
        document.addEventListener('click', (event) => {
            if (isPopupOpen && !helpPopup.contains(event.target) && event.target !== helpButton) {
                helpPopup.classList.remove('show');
                isPopupOpen = false;
            }
        });
