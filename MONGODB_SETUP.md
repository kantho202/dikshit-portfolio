# MongoDB Setup Guide

## Step 1: Create MongoDB Atlas Account (Free)

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up with your email or Google account
3. Choose the **FREE** tier (M0 Sandbox)

## Step 2: Create a Cluster

1. After signing up, click **"Build a Database"**
2. Choose **"M0 FREE"** tier
3. Select a cloud provider and region (choose one closest to you)
4. Click **"Create Cluster"** (takes 1-3 minutes)

## Step 3: Create Database User

1. Click **"Database Access"** in the left sidebar
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Username: `portfolio_user` (or any name you want)
5. Password: Click **"Autogenerate Secure Password"** and COPY IT
6. Database User Privileges: Select **"Read and write to any database"**
7. Click **"Add User"**

## Step 4: Whitelist Your IP Address

1. Click **"Network Access"** in the left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (or add your specific IP)
4. Click **"Confirm"**

## Step 5: Get Connection String

1. Click **"Database"** in the left sidebar
2. Click **"Connect"** button on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string (looks like this):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` with your database username
6. Replace `<password>` with the password you copied earlier
7. Add `/portfolio` before the `?` to specify the database name

## Step 6: Update .env.local

Your final connection string should look like:
```
mongodb+srv://portfolio_user:YOUR_PASSWORD_HERE@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

Update your `.env.local` file:
```env
MONGODB_URI=mongodb+srv://portfolio_user:YOUR_PASSWORD_HERE@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

## Step 7: Restart Your Server

```bash
# Stop the server (Ctrl+C)
npm run dev
```

## Step 8: Test the Form

1. Fill out the contact form on your website
2. Submit it
3. Check your email for the notification
4. Go to MongoDB Atlas > Database > Browse Collections
5. You should see a `portfolio` database with a `contacts` collection

## Database Structure

Each contact form submission is stored with:
```javascript
{
  _id: ObjectId,
  name: "John Doe",
  email: "john@example.com",
  subject: "Project Inquiry",
  company: "ABC Corp",
  message: "Hello, I'd like to discuss...",
  createdAt: ISODate("2024-01-15T10:30:00Z"),
  read: false
}
```

## View Your Data

1. Go to MongoDB Atlas Dashboard
2. Click **"Database"** > **"Browse Collections"**
3. Select `portfolio` database > `contacts` collection
4. You'll see all contact form submissions

## Troubleshooting

- **Connection timeout**: Check Network Access settings, make sure your IP is whitelisted
- **Authentication failed**: Verify username and password in connection string
- **Database not created**: The database is created automatically on first insert
- **Still not working**: The form will still send emails even if MongoDB fails

## Current Status

✅ Email notifications working (via Web3Forms)
⏳ MongoDB storage (needs connection string)

Once you add the MongoDB connection string, both will work together!
