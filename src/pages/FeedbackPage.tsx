import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function FeedbackPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4">피드백 결과</h1>
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <p className="text-lg mb-4">답변이 성공적으로 제출되었습니다. AI가 답변을 검토하고 있습니다.</p>
        <p className="text-gray-600">피드백 결과는 여기에 표시됩니다. (구현 예정)</p>
      </div>
      <Link to="/">
        <Button className="mt-8">홈으로 돌아가기</Button>
      </Link>
    </div>
  );
}
