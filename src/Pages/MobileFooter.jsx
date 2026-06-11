import { HomeIcon, HeartIcon, UserIcon } from "@heroicons/react/24/outline";

export default function MobileFooter() {
  return (
    <div className="mt-10">
      <svg className="hidden">
        <symbol
          id="layoutGrid"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-layout-grid-icon lucide-layout-grid"
        >
          <rect width="7" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
        </symbol>
      </svg>
      <div className="flex items-center justify-between bg-pink-100/50 text-gray-400 py-5 px-4">
        <div className="flex flex-col items-center hover:cursor-pointer hover:bg-white/70 hover:text-pink-600 hover:rounded-xl transition-all pl-5">
          <HomeIcon className="w-6 h-6"></HomeIcon>
          <span className="text-sm">Home</span>
        </div>
        <div className="flex flex-col items-center hover:cursor-pointer hover:bg-white/70 hover:text-pink-600 hover:rounded-xl transition-all">
          <svg className="w-6 h-6">
            <use href="#layoutGrid"></use>
          </svg>
          <span className="text-sm">Categories</span>
        </div>
        <div className="flex flex-col items-center hover:cursor-pointer hover:bg-white/70 hover:text-pink-600 hover:rounded-xl transition-all">
          <HeartIcon className="w-6 h-6"></HeartIcon>
          <span className="text-sm">Favorites</span>
        </div>
        <div className="flex flex-col items-center hover:cursor-pointer hover:bg-white/70 hover:text-pink-600 hover:rounded-xl transition-all pr-5">
          <UserIcon className="w-6 h-6"></UserIcon>
          <span className="text-sm">Profile</span>
        </div>
      </div>
    </div>
  );
}
