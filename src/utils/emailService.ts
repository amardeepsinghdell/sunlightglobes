
import { useToast } from "@/hooks/use-toast";

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * Send an email using the provided form data
 */
export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log("Sending email with data:", data);
    
    // This is where you would integrate with an email service API
    // For now, we'll simulate a successful email send
    // In a production environment, you could use services like:
    // - EmailJS
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Or any other email service with a JavaScript SDK

    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success response
    return {
      success: true,
      message: "Email sent successfully!"
    };
    
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again."
    };
  }
};

/**
 * Hook for using email functionality with built-in toast notifications
 */
export const useEmail = () => {
  const { toast } = useToast();
  
  const sendEmailWithNotification = async (data: EmailData) => {
    const result = await sendEmail(data);
    
    if (result.success) {
      toast({
        title: "Message Sent Successfully",
        description: "We will get back to you as soon as possible.",
        variant: "default",
      });
      return true;
    } else {
      toast({
        title: "Failed to Send Message",
        description: result.message,
        variant: "destructive",
      });
      return false;
    }
  };
  
  return { sendEmailWithNotification };
};
