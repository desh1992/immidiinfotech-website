import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
const EMAILJS_TEMPLATE_ID_CAREERS = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CAREERS;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface CareersFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
  resume?: File;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'contact@immidiinfotech.com'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );

    console.log('Contact email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
};

export const sendCareersEmail = async (formData: CareersFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      position: formData.position,
      experience: formData.experience,
      message: formData.message,
      to_email: 'careers@immidiinfotech.com'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CAREERS,
      templateParams
    );

    console.log('Careers email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Error sending careers email:', error);
    return false;
  }
};
