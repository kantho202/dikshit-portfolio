@echo off
echo Installing MongoDB and Nodemailer dependencies...
npm install mongodb nodemailer
npm install --save-dev @types/nodemailer
echo.
echo Dependencies installed successfully!
echo.
echo Next steps:
echo 1. Set up MongoDB Atlas account
echo 2. Configure Gmail app password
echo 3. Update .env.local with your credentials
echo 4. Read CONTACT_SETUP.md for detailed instructions
pause
