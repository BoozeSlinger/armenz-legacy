interface SponsorshipData {
  company_name: string;
  email: string;
  phone: string;
  message: string;
  sponsorship_tier?: string;
  shirt_size?: string;
}

interface GolfRegistrationData {
  name: string;
  email: string;
  phone: string;
  entry_type: string;
  handicap?: string;
  shirt_size?: string;
  additional_players?: string;
}

export async function syncSponsorshipToSheets(data: SponsorshipData): Promise<void> {
  const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';

  if (!APPS_SCRIPT_URL) {
    console.warn('Sponsorship Sheets sync skipped: NEXT_PUBLIC_APPS_SCRIPT_URL not configured');
    return;
  }

  await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: {
        company_name: data.company_name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        sponsorship_tier: data.sponsorship_tier || '',
        shirt_size: data.shirt_size || '',
      },
    }),
    redirect: 'follow',
  });

  console.log('Synced sponsorship inquiry to Google Sheets');
}

export async function syncGolfRegistrationToSheets(data: GolfRegistrationData): Promise<void> {
  const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_GOLF_URL || '';

  if (!APPS_SCRIPT_URL) {
    console.warn('Golf Sheets sync skipped: APPS_SCRIPT_GOLF_URL not configured');
    return;
  }

  await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        entry_type: data.entry_type,
        handicap: data.handicap || '',
        shirt_size: data.shirt_size || '',
        additional_players: data.additional_players || '',
      },
    }),
    redirect: 'follow',
  });

  console.log('Synced golf registration to Google Sheets');
}

// Keep old export for backwards compatibility
export const syncToGoogleSheets = syncSponsorshipToSheets;
export default syncSponsorshipToSheets;
