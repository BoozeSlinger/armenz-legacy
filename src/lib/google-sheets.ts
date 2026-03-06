/**
 * Google Sheets Sync Module
 * Logs sponsorship inquiries to a Google Sheet via Google Forms or Apps Script
 */

interface InquiryData {
  company_name: string;
  email: string;
  phone: string;
  message: string;
  sponsorship_tier?: string;
  price?: string;
}

/**
 * Syncs inquiry data to Google Sheets
 * Uses Google Forms pre-filled URL or Apps Script webhook
 * @param data - The inquiry data to sync
 */
export async function syncToGoogleSheets(data: InquiryData): Promise<void> {
  try {
    // Google Forms pre-filled URL approach
    // Replace these IDs with your actual Google Form entry IDs
    const GOOGLE_FORM_ID = process.env.NEXT_PUBLIC_GOOGLE_FORM_ID || '';
    const FORM_ENTRY_IDS = {
      company_name: process.env.NEXT_PUBLIC_FORM_ENTRY_COMPANY || '',
      email: process.env.NEXT_PUBLIC_FORM_ENTRY_EMAIL || '',
      phone: process.env.NEXT_PUBLIC_FORM_ENTRY_PHONE || '',
      message: process.env.NEXT_PUBLIC_FORM_ENTRY_MESSAGE || '',
    };

    // If using Google Forms, construct the pre-filled URL
    if (GOOGLE_FORM_ID && Object.values(FORM_ENTRY_IDS).every(id => id)) {
      const params = new URLSearchParams({
        [FORM_ENTRY_IDS.company_name]: data.company_name,
        [FORM_ENTRY_IDS.email]: data.email,
        [FORM_ENTRY_IDS.phone]: data.phone,
        [FORM_ENTRY_IDS.message]: data.message,
      });

      const formUrl = `https://docs.google.com/forms/d/${GOOGLE_FORM_ID}/formResponse?${params.toString()}`;

      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
      });

      console.log('Successfully synced inquiry to Google Sheets');
      return;
    }

    // Alternative: Use Google Apps Script webhook
    const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';
    if (APPS_SCRIPT_URL) {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'appendRow',
          data: {
            company_name: data.company_name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            sponsorship_tier: data.sponsorship_tier || '',
            price: data.price || '',
            timestamp: new Date().toISOString(),
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Apps Script returned status ${response.status}`);
      }

      console.log('Successfully synced inquiry to Google Sheets via Apps Script');
      return;
    }

    // If no Google Sheets configuration is provided, log a warning
    console.warn(
      'Google Sheets sync skipped: No GOOGLE_FORM_ID or APPS_SCRIPT_URL configured'
    );
  } catch (error) {
    console.error('Error syncing to Google Sheets:', error);
    // Re-throw to allow caller to handle
    throw error;
  }
}

export default syncToGoogleSheets;
