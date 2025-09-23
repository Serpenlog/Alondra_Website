export const EVENT_START = '2026-07-28T18:00:00-04:00';
export const EVENT_END = '2026-07-29T01:00:00-04:00';

export const EVENT_TITLE = "Alondra's Quinceañera Celebration";
export const EVENT_LOCATION =
    'Rincón of the Seas Grand Caribbean Hotel & Villa, Road 115 KM 12.2, Rincón, Puerto Rico';
export const EVENT_DESCRIPTION =
    "Join us in Rincón, Puerto Rico to honor fifteen unforgettable years with faith, family, music, and dancing.";

export const DRESS_CODE = {
    overall: 'Formal celebration attire',
    note: 'Please reserve gold and white ensembles for Alondra.'
};

export const ITINERARY = [
    {
        time: '4:00 PM',
        title: 'Welcome & Check-In',
        description: 'Arrive at the ballroom foyer, enjoy a refreshment, and find your table assignments.'
    },
    {
        time: '5:00 PM',
        title: 'Grand Entrance & Blessing',
        description: "Witness Alondra's elegant entrance followed by a blessing and words of gratitude from her parents."
    },
    {
        time: '6:00 PM',
        title: 'Dinner & Toasts',
        description: 'Savor a Caribbean-inspired dinner and heartfelt toasts from loved ones.'
    },
    {
        time: '7:30 PM',
        title: 'Traditional Dances',
        description: 'Enjoy the waltz, father-daughter dance, and the presentation of the last doll.'
    },
    {
        time: '9:00 PM',
        title: 'Open Dance Floor & Celebration',
        description: 'Dance the night away with family and friends as the DJ keeps the party going.'
    }
];

export const PARENTS = {
    names: 'Marisol Flores & Jesús López',
    message:
        'With grateful hearts, Marisol and Jesús invite you to share in the joy of watching their daughter step into a new chapter. Your presence and prayers have helped Alondra grow into the young woman she is today.'
};

export const VENUE = {
    name: 'Rincón of the Seas Grand Caribbean Hotel & Villa',
    addressLines: ['Road 115 KM 12.2', 'Rincón, Puerto Rico'],
    reservationCode: '334',
    reference: 'Quinceañera Alondra',
    mainPhone: '787-823-7500',
    contactName: 'Lisandra Ayala',
    contactPhone: '787-823-8114',
    contactEmail: 'LA@RINCONOFTHESEAS.COM',
    bookingNote:
        'Online reservations are not yet available for these dates. Please book directly with the hotel or with Sra. Lisandra Ayala. A one-night deposit is required.'
};

export const AIRPORTS = [
    {
        code: 'BQN',
        city: 'Aguadilla, PR (BQN)',
        description: 'Approximately 40 minutes to Rincón of the Seas (subject to traffic).'
    },
    {
        code: 'SJU',
        city: 'San Juan, PR (SJU)',
        description: 'Approximately 2 hours 20 minutes to Rincón of the Seas (subject to traffic).'
    }
];

export const TAXI_SERVICES = {
    SJU: [
        { name: 'Wilbert Taxis', phone: '787-479-9767' },
        { name: 'Puerto Rico Taxi', phone: '787-685-9666' },
        { name: 'Taxi PR Carolina', phone: '787-513-5916' }
    ],
    BQN: [
        { name: 'Aguadilla Taxi', phone: '787-318-9546' },
        { name: 'Aguadilla Borinquen Taxis', phone: '787-431-8179' },
        { name: "Manny's Taxis", phone: '939-366-2214' }
    ],
    rideshare: 'Uber is available in Puerto Rico.'
};

export const CAR_RENTALS = {
    BQN: [
        { name: 'Enterprise', phone: '787-890-3732' },
        { name: 'Sixt', phone: '787-890-2102' },
        { name: 'Aguadilla Car Rental', phone: '787-307-6662' },
        { name: 'Charlie Car Rental', phone: '787-728-2418 ext. 421' },
        { name: 'Borinquen Car Rental', phone: '787-966-3887' }
    ],
    SJU: [
        { name: 'Alamo', phone: '833-763-1735' },
        { name: 'Hertz', phone: '787-253-2525' },
        { name: 'Enterprise', phone: '844-794-8597' },
        { name: 'Target', phone: '787-728-1447' }
    ],
    note: 'Other companies are also available. You may call directly or book via email.'
};

export const IMPORTANT_CONTACTS = [
    {
        title: 'Parents of the Quinceañera',
        names: PARENTS.names,
        phone: null,
        email: null,
        note: 'Reach out to Marisol and Jesús with any family questions or support.'
    },
    {
        title: 'Hotel Front Desk',
        names: VENUE.name,
        phone: VENUE.mainPhone,
        email: VENUE.contactEmail,
        note: 'Use reservation code 334 and reference “Quinceañera Alondra.”'
    },
    {
        title: 'Hotel Coordinator',
        names: VENUE.contactName,
        phone: VENUE.contactPhone,
        email: VENUE.contactEmail,
        note: 'Contact Sra. Ayala for booking assistance or special accommodations.'
    }
];

export const WEEKEND_TIPS = [
    'Arrive a day early to enjoy Rincón’s sunsets and beaches.',
    'Pack light fabrics for the tropical climate and a wrap for ocean breezes at night.',
    'Bring cash for local vendors, tolls, and taxi rides—ATMs can be limited near the beach.',
    'Plan for traffic when traveling from San Juan and schedule extra time on travel days.'
];
