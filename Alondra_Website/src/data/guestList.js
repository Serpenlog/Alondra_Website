import guestListCsv from './GuestList.csv?raw';

const REGION_EXPERIENCE_CONFIG = {
    default: {
        defaultLanguage: 'en',
        pages: {
            home: true,
            travel: true
        },
        sections: {
            flyingIn: true,
            travelRequirements: true,
            arrivalTransportation: true,
            rentals: true,
            weather: true,
            curatedDining: true,
            islandExperiences: true,
            culturalScenic: true
        }
    },
    PR: {
        defaultLanguage: 'es',
        pages: {
            travel: true
        },
        sections: {
            flyingIn: false,
            travelRequirements: false,
            arrivalTransportation: false,
            rentals: false,
            weather: false,
            curatedDining: false,
            islandExperiences: false,
            culturalScenic: false
        }
    },
    US: {
        defaultLanguage: 'en',
        pages: {
            travel: true
        },
        sections: {
            flyingIn: true,
            travelRequirements: true,
            arrivalTransportation: true,
            rentals: true,
            weather: true,
            curatedDining: true,
            islandExperiences: true,
            culturalScenic: true
        }
    }
};

export const normalizePhone = (value = '') => value.replace(/\D/g, '');

const normalizeRegion = (value = '') => value.trim().toUpperCase();

const parseInteger = (value) => {
    const parsed = Number.parseInt(String(value).trim(), 10);
    return Number.isFinite(parsed) ? parsed : 0;
};

const DATE_CHANGE_DEADLINE_KEYS = {
    X: 'dateChanged',
    Y: 'dateChangedJune11',
    Z: 'dateChangedJune25'
};

const parseDateChangeDeadlineKey = (value = '') => DATE_CHANGE_DEADLINE_KEYS[String(value).trim().toUpperCase()] ?? null;

const DATE_CHANGE_DEADLINE_PRIORITY = [
    'dateChanged',
    'dateChangedJune11',
    'dateChangedJune25'
];

const getPreferredDeadlineKey = (currentKey, nextKey) => {
    if (!currentKey) {
        return nextKey;
    }

    if (!nextKey) {
        return currentKey;
    }

    const currentPriority = DATE_CHANGE_DEADLINE_PRIORITY.indexOf(currentKey);
    const nextPriority = DATE_CHANGE_DEADLINE_PRIORITY.indexOf(nextKey);

    return nextPriority > currentPriority ? nextKey : currentKey;
};

const parseCsvRow = (row = '') => {
    const columns = [];
    let value = '';
    let insideQuotes = false;

    for (let index = 0; index < row.length; index += 1) {
        const character = row[index];

        if (character === '"') {
            if (insideQuotes && row[index + 1] === '"') {
                value += '"';
                index += 1;
            } else {
                insideQuotes = !insideQuotes;
            }
            continue;
        }

        if (character === ',' && !insideQuotes) {
            columns.push(value.trim());
            value = '';
            continue;
        }

        value += character;
    }

    columns.push(value.trim());
    return columns;
};

const parseGuestList = (csvText) => {
    const [headerLine = '', ...rows] = csvText.replace(/^\uFEFF/, '').split(/\r?\n/);
    const headers = parseCsvRow(headerLine).map((header) => header.trim().toLowerCase());
    const regionIndex = headers.findIndex((header) => header === 'invitados de');
    const phoneIndex = headers.findIndex((header) => header === 'num de teléfono');
    const ticketsIndex = headers.findIndex((header) => header === 'cantidad de invitados');
    const titleIndex = headers.findIndex((header) => header === 'titulo');
    const dateChangeIndex = headers.findIndex((header) => header === 'date change');

    if (regionIndex === -1 || phoneIndex === -1 || ticketsIndex === -1 || titleIndex === -1) {
        return [];
    }

    const guestsByPhone = new Map();

    for (const row of rows) {
        if (!row.trim()) {
            continue;
        }

        const columns = parseCsvRow(row);
        const phone = normalizePhone(columns[phoneIndex] ?? '');

        if (!phone) {
            continue;
        }

        const region = normalizeRegion(columns[regionIndex] ?? '');
        const tickets = parseInteger(columns[ticketsIndex] ?? '');
        const title = String(columns[titleIndex] ?? '').trim();
        const dateChangeDeadlineKey = dateChangeIndex !== -1 ? parseDateChangeDeadlineKey(columns[dateChangeIndex] ?? '') : null;
        const existing = guestsByPhone.get(phone);

        if (!existing) {
            guestsByPhone.set(phone, {
                phone,
                region,
                tickets,
                title,
                hasDateChange: Boolean(dateChangeDeadlineKey),
                dateChangeDeadlineKey
            });
            continue;
        }

        guestsByPhone.set(phone, {
            ...existing,
            region: existing.region || region,
            tickets: Math.max(existing.tickets, tickets),
            title: existing.title || title,
            dateChangeDeadlineKey: getPreferredDeadlineKey(existing.dateChangeDeadlineKey, dateChangeDeadlineKey),
            hasDateChange: existing.hasDateChange || Boolean(dateChangeDeadlineKey)
        });
    }

    return Array.from(guestsByPhone.values());
};

const mergeExperienceConfig = (region) => {
    const baseConfig = REGION_EXPERIENCE_CONFIG.default;
    const regionalConfig = REGION_EXPERIENCE_CONFIG[region] ?? {};

    return {
        defaultLanguage: regionalConfig.defaultLanguage ?? baseConfig.defaultLanguage,
        pages: {
            ...baseConfig.pages,
            ...(regionalConfig.pages ?? {})
        },
        sections: {
            ...baseConfig.sections,
            ...(regionalConfig.sections ?? {})
        }
    };
};

export const guestList = parseGuestList(guestListCsv).map((entry) => ({
    ...entry,
    experience: mergeExperienceConfig(entry.region)
}));
