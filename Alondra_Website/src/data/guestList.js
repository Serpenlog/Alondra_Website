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
            travelRequirements: true
        }
    },
    PR: {
        defaultLanguage: 'es',
        pages: {
            travel: true
        },
        sections: {
            flyingIn: false,
            travelRequirements: false
        }
    },
    US: {
        defaultLanguage: 'en',
        pages: {
            travel: true
        },
        sections: {
            flyingIn: true,
            travelRequirements: true
        }
    }
};

export const normalizePhone = (value = '') => value.replace(/\D/g, '');

const normalizeRegion = (value = '') => value.trim().toUpperCase();

const parseInteger = (value) => {
    const parsed = Number.parseInt(String(value).trim(), 10);
    return Number.isFinite(parsed) ? parsed : 0;
};

const parseGuestList = (csvText) => {
    const [headerLine = '', ...rows] = csvText.replace(/^\uFEFF/, '').split(/\r?\n/);
    const headers = headerLine.split(',').map((header) => header.trim().toLowerCase());
    const regionIndex = headers.findIndex((header) => header === 'invitados de');
    const phoneIndex = headers.findIndex((header) => header === 'num de teléfono');
    const ticketsIndex = headers.findIndex((header) => header === 'cantidad de invitados');

    if (regionIndex === -1 || phoneIndex === -1 || ticketsIndex === -1) {
        return [];
    }

    const guestsByPhone = new Map();

    for (const row of rows) {
        if (!row.trim()) {
            continue;
        }

        const columns = row.split(',');
        const phone = normalizePhone(columns[phoneIndex] ?? '');

        if (!phone) {
            continue;
        }

        const region = normalizeRegion(columns[regionIndex] ?? '');
        const tickets = parseInteger(columns[ticketsIndex] ?? '');
        const existing = guestsByPhone.get(phone);

        if (!existing) {
            guestsByPhone.set(phone, {
                phone,
                region,
                tickets
            });
            continue;
        }

        guestsByPhone.set(phone, {
            ...existing,
            region: existing.region || region,
            tickets: Math.max(existing.tickets, tickets)
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
