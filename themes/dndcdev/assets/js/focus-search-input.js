document.addEventListener('DOMContentLoaded', function() {
    // Ctrl+G で searchKeyword にフォーカスを当てる
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'g') {
            event.preventDefault();
            const searchInput = document.getElementById('searchKeyword');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });

    // Enter キーで searchButton をクリックする
    const searchInput = document.getElementById('searchKeyword');
    if (searchInput) {
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const searchButton = document.getElementById('searchButton');
                if (searchButton) {
                    searchButton.click();
                }
            }
        });
    }
});
