# Quick Contact Form Setup (No Dependencies Required!)

## Option 1: Web3Forms (Recommended - Free & Easy)

1. Go to https://web3forms.com
2. Enter your email: `dikshitchakma2002@gmail.com`
3. Click "Get Access Key"
4. Copy the access key from your email
5. Update `.env.local`:
   ```
   WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```
6. Restart your dev server: `npm run dev`

That's it! No MongoDB or Gmail setup needed.

## Option 2: EmailJS (Alternative)

1. Go to https://www.emailjs.com
2. Sign up for free account
3. Create an email service
4. Create an email template
5. Get your Service ID, Template ID, and Public Key
6. Update the contact form to use EmailJS

## Option 3: Full MongoDB + Nodemailer Setup

Follow the instructions in `CONTACT_SETUP.md` for the complete setup with database storage.

## Testing

After setup:
1. Restart your development server
2. Fill out the contact form
3. Check your email inbox
4. Check browser console for any errors (F12 > Console tab)
