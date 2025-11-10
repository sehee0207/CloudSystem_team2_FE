interface NavbarProps {
  onGetStartedClick: () => void;
}

export function Navbar({ onGetStartedClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 font-medium bg-white/80 backdrop-blur-md">
      <div className="text-m">BitBite</div>

      <button className="group flex items-center gap-2" onClick={onGetStartedClick}>
        시작하기
        <svg
          className="group-hover:translate-x-1 transition pt-0.5"
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
            stroke="#6B7280"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
}