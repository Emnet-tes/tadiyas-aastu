import { FormData } from '@/app/components/contact';
import { toast } from 'react-toastify';
export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success("Email sent successfully!",{position: "bottom-right"});
    })
    .catch((err) => {
      toast.error("Failed to send email. Please try again later.",{position: "bottom-right"});
    });
}