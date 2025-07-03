const { createElement, useState } = React;
const { createRoot } = ReactDOM;

function Letter({ onOpen }) {
    return createElement(
        'div',
        { className: 'letter-screen' },
        createElement(
            'button',
            { className: 'open-btn', onClick: onOpen },
            createElement('i', { className: 'fas fa-envelope fa-5x' }),
            createElement('p', null, 'Abrir Invitación')
        )
    );
}

function HomeContent() {
    return createElement(
        'div',
        { className: 'home-container' },
        createElement(
            'header',
            { className: 'hero' },
            createElement('h1', { className: 'title' }, "Alondra's Quinceañera"),
            createElement('p', { className: 'date' }, 'February 1, 2025')
        ),
        createElement(
            'section',
            { className: 'invitation' },
            createElement(
                'p',
                null,
                'Hay momentos inolvidables que se atesoran en el corazón para siempre, por esa razón quiero que compartas conmigo este día tan especial.'
            ),
            createElement('p', null, '¡Me encantaría contar con tu presencia!')
        ),
        createElement(
            'section',
            { className: 'schedule' },
            createElement('h2', null, 'Itinerary'),
            createElement(
                'ul',
                null,
                createElement('li', null, createElement('strong', null, 'Ceremony:'), ' 2:30 pm'),
                createElement('li', null, createElement('strong', null, 'Dinner:'), ' 6:00 pm'),
                createElement('li', null, createElement('strong', null, 'Dance:'), ' 8:00 pm')
            )
        ),
        createElement(
            'footer',
            null,
            createElement('p', null, '© 2025 Serpenlog')
        )
    );
}

function HomePage() {
    const [open, setOpen] = useState(false);
    return open
        ? createElement(HomeContent)
        : createElement(Letter, { onOpen: () => setOpen(true) });
}

createRoot(document.getElementById('root')).render(createElement(HomePage));