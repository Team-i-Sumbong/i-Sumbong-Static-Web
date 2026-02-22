// ── Tab switching ──
const tabs = document.querySelectorAll('.tab');
const htmlSections = document.querySelectorAll('[data-type="html"]');
const cssSections = document.querySelectorAll('[data-type="css"]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.className = 'tab');
        const type = tab.dataset.tab;

        if (type === 'all') {
            tab.classList.add('active-all');
            [...htmlSections, ...cssSections].forEach(el => el.classList.remove('hidden'));
        } else if (type === 'html') {
            tab.classList.add('active-html');
            htmlSections.forEach(el => el.classList.remove('hidden'));
            cssSections.forEach(el => el.classList.add('hidden'));
        } else {
            tab.classList.add('active-css');
            cssSections.forEach(el => el.classList.remove('hidden'));
            htmlSections.forEach(el => el.classList.add('hidden'));
        }

        filterCards(document.getElementById('searchInput').value);
    });
});

// ── Search ──
document.getElementById('searchInput').addEventListener('input', function () {
    filterCards(this.value);
});

function filterCards(query) {
    const q = query.toLowerCase().trim();
    const cards = document.querySelectorAll('.card:not(.hidden-by-tab)');
    let visible = 0;

    document.querySelectorAll('.card').forEach(card => {
        if (card.closest('[data-type]') && card.closest('[data-type]').classList.contains('hidden')) {
            card.classList.add('hidden');
            return;
        }
        const keywords = card.dataset.keywords || '';
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const match = !q || keywords.includes(q) || title.includes(q);
        card.classList.toggle('hidden', !match);
        if (match) visible++;
    });

    // Section headers: hide if all cards in grid are hidden
    document.querySelectorAll('.cards-grid').forEach(grid => {
        const header = grid.previousElementSibling;
        const anyVisible = [...grid.querySelectorAll('.card')].some(c => !c.classList.contains('hidden'));
        if (header) header.classList.toggle('hidden', !anyVisible);
        grid.classList.toggle('hidden', !anyVisible);
    });

    const noResults = document.getElementById('noResults');
    const allHidden = [...document.querySelectorAll('.card')].every(c => c.classList.contains('hidden'));
    noResults.style.display = allHidden && q ? 'block' : 'none';
    document.getElementById('searchTerm').textContent = query;
}

// ── Copy button ──
function copyCode(btn) {
    const pre = btn.nextElementSibling;
    const text = pre.innerText || pre.textContent;
    navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'COPIED!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = 'COPY';
            btn.classList.remove('copied');
        }, 1800);
    });
}

// ── Staggered card animations ──
document.querySelectorAll('.card').forEach((card, i) => {
    card.style.animationDelay = `${i * 0.04}s`;
});