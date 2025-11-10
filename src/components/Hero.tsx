import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BackgroundImage from '../assets/gradient.png';

export function Hero() {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubmittedEmail(email);
      setIsDialogOpen(true);
      setEmail("");
    }
  };

  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center pb-15 px-4 text-center bg-center bg-no-repeat bg-contain bg-center"
        style={{backgroundImage: `url(${BackgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize: "contain"}}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800">
          Bit-Bite
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          
        </h1>
        <p className="text-center mt-6 px-4 max-w-2xl mx-auto">
          매일 한입, CS 지식을 설명하는 습관을 들여보세요!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full max-w-md mx-auto">
          <div className="relative w-full">
            <Input
              type="email"
              placeholder="이메일 주소 입력하고 구독 신청하기"
              className="w-full pr-24 py-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
            />
            <Button
              type="button"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-10"
              onClick={handleSubscribe}
            >
              구독
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>구독 신청 완료!</DialogTitle>
            <DialogDescription className="pt-4">
              다음 이메일로 구독이 신청되었습니다: <strong>{submittedEmail}</strong>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}