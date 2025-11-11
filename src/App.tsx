import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SubscriptionConfirmationDialog } from "@/components/SubscriptionConfirmationDialog";
import { SelectFieldDialog } from "./components/SelectFieldDialog";

function App() {
  // State for dialogs
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false);
  const [isSelectFieldDialogOpen, setIsSelectFieldDialogOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  // Handler for when email is submitted from the Hero section input
  const handleHeroSubscribe = (email: string) => {
    setSubmittedEmail(email);
    setIsConfirmationDialogOpen(true);
  };

  const handleConfirmationSuccess = () => {
    setIsConfirmationDialogOpen(false);
    setIsSelectFieldDialogOpen(true);
  };

  const handleConfirmationDialogClose = (open: boolean) => {
    setIsConfirmationDialogOpen(open);
    if (!open) {
      setSubmittedEmail(""); // Clear email when dialog closes
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="text-sm text-gray-500">
          <Hero confirmationEmail={handleHeroSubscribe} />
        </div>
        <Features />
      </main>

      <SubscriptionConfirmationDialog
        isOpen={isConfirmationDialogOpen}
        onOpenChange={handleConfirmationDialogClose}
        email={submittedEmail}
        onConfirm={handleConfirmationSuccess}
      />

      <SelectFieldDialog
        isOpen={isSelectFieldDialogOpen}
        onOpenChange={setIsSelectFieldDialogOpen}
        email={submittedEmail}
      />
    </>
  );
}

export default App;
