const features = [
  {
    title: "로그인 없이 간단한 사용",
    description: "계정 생성의 번거로움 없이 바로 서비스를 이용해 보세요! 꾸준한 학습이 가능합니다.",
  },
  {
    title: "AI 기반 분야에 맞는 질문 생성",
    description: "매일 오전 8시, AI/클라우드/CS 중 1개의 질문을 받아보세요! 매일매일 달라지는 분야별 질문을 체험하세요.",
  },
  {
    title: "AI 기반 답변 확인 및 피드백 제공",
    description: "제한 시간 내에 오늘의 질문에 대한 답변을 입력하세요! 인공지능이 답변을 분석하여 = 구체적인 피드백을 제공합니다.",
  },
];

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800">
              Bit-Bite 주요 기능
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              AI와 함께 CS 지식을 설명하는 습관을 만들어보세요.
            </p>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Bit-Bite는 다음과 같은 핵심 기능을 제공합니다.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl items-start gap-8 py-12 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="grid gap-4 p-6 rounded-lg shadow-lg bg-white">
              <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
