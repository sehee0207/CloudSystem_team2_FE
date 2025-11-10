import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

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
  const [code, setCode] = useState("");
  const [isError, setIsError] = useState(false);

  const handleConfirmationCode = () => {
    if (!code) { //백엔드 코드 검증 로직 추가
      setIsError(true);
       return;
    }

    setCode("");
    setIsError(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>인증 메일 전송</DialogTitle>
          <DialogDescription className="pt-4">
            <strong>{email}</strong>으로 확인 메일이 전송되었습니다.

            <div className="flex flex-row items-center justify-center w-full mt-10 mb-5 gap-2">
              <Input
                type="text"
                placeholder="인증번호(여섯자리)"
                className="flex-1 h-10"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleConfirmationCode}
              />
              <Button
                type="button"
                className="h-10"
                onClick={handleConfirmationCode}
              >
                확인
              </Button>
            </div>

            <div className="h-3 w-full"> 
              { isError && (
                <div className="text-xs text-red-500 w-full">인증번호가 불일치 합니다.</div> 
              )}
          </div>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
