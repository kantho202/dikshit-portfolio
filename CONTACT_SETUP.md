# Contact Form Setup Instructions

## 1. Install Required Dependencies

Run the following command to install MongoDB and Nodemailer:

```bash
npm install mongodb nodemailer
npm install --save-dev @types/nodemailer
```

## 2. MongoDB Setup

1. Create a free MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Create a database user with password
4. Whitelist your IP address (or use 0.0.0.0/0 for all IPs)
5. Get your connection string (it looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)

## 3. Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security > 2-Step Verification > App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password

## 4. Configure Environment Variables

Update the `.env.local` file with your credentials:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_character_app_password
EMAIL_TO=dikshitchakma2002@gmail.com
```

## 5. Test the Setup

1. Start your development server: `npm run dev`
2. Go to the contact section on your website
3. Fill out and submit the form
4. Check:
   - MongoDB Atlas dashboard for the new entry in the `contacts` collection
   - Your email inbox for the notification

## Database Structure

The contact form data is stored in MongoDB with the following structure:

```javascript
{
  name: string,
  email: string,
  subject: string,
  company: string,
  message: string,
  createdAt: Date,
  read: boolean
}
```

## Troubleshooting

- If emails aren't sending, verify your Gmail app password is correct
- If MongoDB connection fails, check your connection string and IP whitelist
- Check the browser console and server logs for error messages
