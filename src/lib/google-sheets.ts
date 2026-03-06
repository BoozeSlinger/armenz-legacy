interface InquiryData {
  company_name: string;
  email: string;
  phone: string;
  message: string;
  sponsorship_tier?: string;
}

export async function syncToGoogleSheets(data: InquiryData): Promise<void> {
  const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';

  if (!APPS_SCRIPT_URL) {
    console.warn('Google Sheets sync skipped: NEXT_PUBLIC_APPS_SCRIPT_URL not configured');
    return;
  }

  // Google Apps Script redirects POST requests — follow redirects and treat any response as success
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
      },
    }),
    redirect: 'follow',
  });

  console.log('Synced inquiry to Google Sheets');
}

export default syncToGoogleSheets;
