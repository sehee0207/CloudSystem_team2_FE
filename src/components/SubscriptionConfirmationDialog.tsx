import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SubscriptionConfirmationDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  email: string;
}

export function SubscriptionConfirmationDialog({
  isOpen,
  onOpenChange,
  email,
}: SubscriptionConfirmationDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>확인 메일 전송</DialogTitle>
          <DialogDescription className="pt-4">
            <strong>{email}</strong>으로 확인 메일이 전송되었습니다.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
