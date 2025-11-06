import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { EmailInputDialog } from "@/components/EmailInputDialog";
import { SubscriptionConfirmationDialog } from "@/components/SubscriptionConfirmationDialog";

function App() {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for dialogs
  const [isEmailInputDialogOpen, setIsEmailInputDialogOpen] = useState(false);
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handler to open the email input dialog (from navbar)
  const handleGetStartedClick = () => {
    setIsEmailInputDialogOpen(true);
  };

  // Handler for when email is submitted from the EmailInputDialog
  const handleEmailDialogSubmit = (email: string) => {
    setSubmittedEmail(email);
    setIsEmailInputDialogOpen(false);
    setIsConfirmationDialogOpen(true);
  };

  // Handler for when email is submitted from the Hero section input
  const handleHeroSubscribe = (email: string) => {
    setSubmittedEmail(email);
    setIsConfirmationDialogOpen(true);
  };

  return (
    <>
      <Navbar
        toggleMenu={toggleMenu}
        onGetStartedClick={handleGetStartedClick}
      />
      <main>
        <div className="bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png)] text-sm text-gray-500">
          <Hero />
        </div>
        <Features />
      </main>

      <EmailInputDialog
        isOpen={isEmailInputDialogOpen}
        onOpenChange={setIsEmailInputDialogOpen}
        onEmailSubmit={handleEmailDialogSubmit}
      />
      <SubscriptionConfirmationDialog
        isOpen={isConfirmationDialogOpen}
        onOpenChange={setIsConfirmationDialogOpen}
        email={submittedEmail}
      />
    </>
  );
}

export default App;
