# Armenz Legacy Setup Guide

## Environment Variables Configuration

The form submission requires the following environment variables to be set in Vercel:

### Supabase Configuration (Required)

1. **NEXT_PUBLIC_SUPABASE_URL**
   - Value: Your Supabase project URL (e.g., `https://mfhvdruyalxqssigaijs.supabase.co`)
   - Environment: Production, Preview, Development

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Value: Your Supabase anonymous key (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)
   - Environment: Production, Preview, Development

3. **SUPABASE_SERVICE_ROLE_KEY**
   - Value: Your Supabase service role key (for server-side operations)
   - Environment: Production, Preview, Development

### Google Sheets Configuration (Optional)

Choose ONE of the following approaches:

#### Option A: Google Forms Integration
- **NEXT_PUBLIC_GOOGLE_FORM_ID**: Your Google Form ID
- **NEXT_PUBLIC_FORM_ENTRY_COMPANY**: Entry ID for company name field
- **NEXT_PUBLIC_FORM_ENTRY_EMAIL**: Entry ID for email field
- **NEXT_PUBLIC_FORM_ENTRY_PHONE**: Entry ID for phone field
- **NEXT_PUBLIC_FORM_ENTRY_MESSAGE**: Entry ID for message field

#### Option B: Google Apps Script Webhook
- **NEXT_PUBLIC_APPS_SCRIPT_URL**: Your Google Apps Script deployment URL

## Setting Environment Variables in Vercel

### Via Vercel Dashboard

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable with the appropriate value
4. Select the environments where it should be available (Production, Preview, Development)
5. Save and redeploy

### Via Vercel CLI

```bash
# Set Supabase URL
echo 'https://your-project.supabase.co' | npx vercel env add NEXT_PUBLIC_SUPABASE_URL production preview development

# Set Supabase Anon Key
echo 'your-anon-key-here' | npx vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production preview development

# Set Supabase Service Role Key
echo 'your-service-role-key-here' | npx vercel env add SUPABASE_SERVICE_ROLE_KEY production preview development
```

## Database Schema

The form submission requires the following table in Supabase:

### inquiries table

```sql
CREATE TABLE inquiries (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  sponsorship_tier TEXT,
  price TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Testing the Form

1. Navigate to the sponsorships page
2. Click "Claim Now" on any sponsorship tier
3. Fill in the form with:
   - Company/Individual Name
   - Email Address
   - Phone Number
   - Additional Message (optional)
4. Click "Submit Inquiry"
5. You should see a success message
6. Check Supabase to verify the data was inserted

## Troubleshooting

### Form submission fails with "Supabase not configured"
- Verify that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set in Vercel
- Ensure the values are correct and not truncated
- Redeploy after setting environment variables

### Form submission succeeds but data doesn't appear in Supabase
- Check the Supabase table exists and has the correct schema
- Verify the Supabase credentials have write access to the `inquiries` table
- Check Vercel runtime logs for detailed error messages

### Google Sheets sync fails silently
- This is expected if Google Sheets environment variables are not configured
- The form submission will still succeed and data will be saved to Supabase
- To enable Google Sheets sync, configure either Google Forms or Google Apps Script integration

## Files Modified

- `src/lib/supabase.ts` - Updated to use environment variables
- `src/app/api/inquiry/route.ts` - Fixed field mapping and added sponsorship_tier/price fields
- `src/lib/google-sheets.ts` - Updated to handle new fields
- `.env.example` - Added all required environment variables
