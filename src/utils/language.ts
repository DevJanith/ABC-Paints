export const getLocalizedValue = (obj: any, key: string, lang: string): string => {
    if (!obj) return '';
    const localizedKey = `${key}_${lang}`;

    // Try localized key first (e.g., description_si)
    if (obj[localizedKey] && obj[localizedKey].trim() !== '') {
        return obj[localizedKey];
    }

    // Fallback to default/English key (e.g., description)
    if (obj[key] && obj[key].trim() !== '') {
        return obj[key];
    }

    // Fallback to English specific key
    if (obj[`${key}_en`] && obj[`${key}_en`].trim() !== '') {
        return obj[`${key}_en`];
    }

    return '';
};
