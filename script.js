document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const historyList = document.getElementById('history-list');
    const clearHistoryButton = document.getElementById('clear-history');

    // Load search history from localStorage
    const loadHistory = () => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        history.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            historyList.appendChild(li);
        });
    };

    // Save search term and update history
    const saveSearch = (term) => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        history.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(history));
    };

    // Handle search button click
    searchButton.addEventListener('click', () => {
        const term = searchInput.value.trim();
        if (term) {
            saveSearch(term);
            const li = document.createElement('li');
            li.textContent = term;
            historyList.appendChild(li);
            searchInput.value = ''; // Clear input
        }
    });

    // Clear search history
    clearHistoryButton.addEventListener('click', () => {
        historyList.innerHTML = ''; // Clear displayed history
        localStorage.removeItem('searchHistory'); // Clear stored history
    });

    loadHistory(); // Load history on page load
});
