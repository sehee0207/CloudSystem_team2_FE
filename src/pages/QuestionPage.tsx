import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function QuestionPage() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    // TODO: Fetch question from backend based on category
    // For now, using a placeholder
    setQuestion(`오늘의 ${category?.toUpperCase()} 질문입니다. 답변을 입력해주세요.`);
  }, [category]);

  const handleSubmit = () => {
    // TODO: Submit answer to the backend
    console.log({ category, answer });
    // Navigate to the feedback page
    navigate('/feedback');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">오늘의 {category?.toUpperCase()} 질문</h1>
      <p className="text-lg mb-8">{question}</p>
      <Textarea
        placeholder="여기에 답변을 입력하세요..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="min-h-[200px] text-base"
      />
      <Button onClick={handleSubmit} className="mt-4 w-full md:w-auto">
        제출하기
      </Button>
    </div>
  );
}
