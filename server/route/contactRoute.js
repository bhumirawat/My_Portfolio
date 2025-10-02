import express from 'express';
import {
  createContact,
  getAllContacts,
  getContactById
} from '../controller/contactController.js';

const router = express.Router();

// Public route - anyone can submit contact form
router.post('/', createContact);

// Admin routes (public for demo - add authentication in production)
router.get('/', getAllContacts);
router.get('/:id', getContactById);

export default router;