import { COMPANY_INFO } from '../data/tours';

export function generateWhatsAppLink(
  packageName?: string,
  details?: Record<string, string | number>
): string {
  const phone = COMPANY_INFO.whatsappNumber;
  let text = `Hello Mansu's World!`;

  if (packageName) {
    text += `\n\nI am interested in learning more about:\n*${packageName}*`;
  } else {
    text += `\n\nI would like to enquire about your Dubai holiday packages and travel services.`;
  }

  if (details && Object.keys(details).length > 0) {
    text += `\n\n*Trip Enquiry Details:*`;
    Object.entries(details).forEach(([key, val]) => {
      if (val !== undefined && val !== null && String(val).trim() !== '') {
        text += `\n• ${key}: ${val}`;
      }
    });
  }

  text += `\n\nPlease let me know package availability and quotation details. Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
