import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  console.log('=== API Route Called ===');
  
  try {
    const body = await request.json();
    console.log('Body parsed:', body);
    
    const { name, email, subject, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Validation failed');
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Save to MongoDB (if configured)
    let mongoSaved = false;
    try {
      if (process.env.MONGODB_URI && process.env.MONGODB_URI !== 'your_mongodb_connection_string_here') {
        const client = await clientPromise;
        const db = client.db('portfolio');
        const collection = db.collection('contacts');

        const contactData = {
          name,
          email,
          subject: subject || '',
          company: company || '',
          message,
          createdAt: new Date(),
          read: false,
        };

        await collection.insertOne(contactData);
        console.log('Saved to MongoDB');
        mongoSaved = true;
      } else {
        console.log('MongoDB not configured, skipping database save');
      }
    } catch (mongoError) {
      console.error('MongoDB error (continuing anyway):', mongoError);
    }

    // Send email via Web3Forms
    const accessKey = 'b87b175c-27aa-4df0-8a7d-9ff5e71d9358';
    
    const payload = {
      access_key: accessKey,
      name: name,
      email: email,
      subject: subject || 'New Contact Form Submission from Portfolio',
      message: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nSubject: ${subject || 'Not provided'}\n\nMessage:\n${message}`,
    };

    console.log('Sending to Web3Forms...');

    const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('Web3Forms status:', web3FormsResponse.status);
    
    const web3FormsData = await web3FormsResponse.json();
    console.log('Web3Forms response:', web3FormsData);

    if (web3FormsData.success) {
      console.log('Success!');
      return NextResponse.json(
        { 
          success: true, 
          message: 'Contact form submitted successfully',
          savedToDatabase: mongoSaved
        },
        { status: 200 }
      );
    } else {
      console.error('Web3Forms returned error:', web3FormsData);
      return NextResponse.json(
        { 
          success: false,
          error: web3FormsData.message || 'Failed to send email' 
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('=== API Route Error ===');
    console.error(error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Server error: ' + (error instanceof Error ? error.message : 'Unknown error') 
      },
      { status: 500 }
    );
  }
}
