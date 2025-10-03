# EmailJS Setup Guide

## Overview
Both contact forms (Contact Us and Careers) are now configured to use EmailJS for sending emails. Follow these steps to complete the setup.

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Templates

### Contact Us Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission - {{subject}}

**Body:**
```
New contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. Note down the **Template ID** for Contact Us

### Careers Template
1. Create another template for careers
2. Use this template content:

**Subject:** New Job Application - {{position}}

**Body:**
```
New job application received:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Position: {{position}}
Experience: {{experience}}

Message:
{{message}}

---
This application was submitted through your careers page.
```

4. Note down the **Template ID** for Careers

## 4. Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## 5. Create Environment File
Create a `.env` file in your project root with these values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID_CONTACT=your_contact_template_id_here
VITE_EMAILJS_TEMPLATE_ID_CAREERS=your_careers_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Test the Forms
1. Start your development server: `npm run dev`
2. Test the Contact Us form on the home page
3. Test the Careers form on the careers page
4. Check your email to confirm emails are being sent

## Features Implemented

### Contact Us Form
- ✅ Name, Email, Subject, Message fields
- ✅ EmailJS integration
- ✅ Loading states and success/error messages
- ✅ Form validation

### Careers Form
- ✅ Name, Email, Phone, Position, Experience, Message fields
- ✅ Resume file upload (PDF, DOC, DOCX)
- ✅ EmailJS integration
- ✅ Loading states and success/error messages
- ✅ Form validation

## Troubleshooting

### Common Issues:
1. **Emails not sending**: Check your EmailJS service configuration
2. **Template variables not working**: Ensure template variable names match exactly
3. **CORS errors**: Make sure your domain is added to EmailJS allowed origins
4. **Environment variables not loading**: Restart your development server after adding .env file

### Support:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Check browser console for error messages
- Verify all environment variables are set correctly
