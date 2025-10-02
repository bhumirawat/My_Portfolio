import mongoose from 'mongoose';
import Contact from './model/Contact.js';
import dotenv from 'dotenv';

dotenv.config();

const sampleContacts = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    message: 'Hello, I would like to discuss a potential project collaboration. Your work looks amazing!'
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    message: 'I am interested in your services for our upcoming web application. Please let me know your availability.'
  },
  {
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    message: 'Great portfolio! I would love to learn more about your technical stack and experience.'
  },
  {
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    message: 'Looking for a frontend developer for our startup. Your projects demonstrate exactly the skills we need.'
  },
  {
    name: 'David Brown',
    email: 'david.brown@example.com',
    message: 'Impressive work! Do you accept freelance projects? I have a React application that needs some enhancements.'
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/contactdb';
    await mongoose.connect(MONGODB_URI);
    console.log(' Connected to MongoDB');


    // Insert sample contacts
    await Contact.insertMany(sampleContacts);
    console.log('Sample contacts inserted successfully');

    // Display inserted contacts
    const contacts = await Contact.find().sort({ createdAt: -1 });
    console.log('\n Inserted contacts:');
    contacts.forEach(contact => {
      console.log(`   - ${contact.name} (${contact.email})`);
    });

    console.log(`\n Database seeded with ${contacts.length} contacts`);

  } catch (error) {
    console.error(' Seeding error:', error);
  } finally {
    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  }
};

// Run seeding
seedDatabase();