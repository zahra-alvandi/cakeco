export default function Features() {
  return (
    <div>
      {/* icons */}
      <svg className="hidden">
        <symbol
          id="RoseIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-rose-icon lucide-rose"
        >
          <path d="M17 10h-1a4 4 0 1 1 4-4v.534" />
          <path d="M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31" />
          <path d="M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" />
          <path d="M9.77 12C4 15 2 22 2 22" />
          <circle cx="17" cy="8" r="2" />
        </symbol>
        <symbol
          id="satisfy"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-message-circle-heart-icon lucide-message-circle-heart"
        >
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
          <path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z" />
        </symbol>
        <symbol
          id="truck"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </symbol>
        <symbol
          id="cake"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-cake-icon lucide-cake"
        >
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
          <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
          <path d="M2 21h20" />
          <path d="M7 8v3" />
          <path d="M12 8v3" />
          <path d="M17 8v3" />
          <path d="M7 4h.01" />
          <path d="M12 4h.01" />
          <path d="M17 4h.01" />
        </symbol>
      </svg>
      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-6">
        <div className="flex items-center justify-evenly gap-2 bg-pink-100/50 rounded-xl px-1 py-4">
          <svg className="w-6 h-6 md:w-10 md:h-10 text-pink-600">
            <use href="#RoseIcon"></use>
          </svg>
          <div>
            <p className="text-sm">Fresh Ingredients</p>
            <span className="text-[10px] text-gray-500">
              Only the finest quality
            </span>
          </div>
        </div>
        <div className="flex items-center justify-evenly gap-2 bg-pink-100/50 rounded-xl px-1 py-4">
          <svg className="w-6 h-6 md:w-10 md:h-10 text-pink-600">
            <use href="#cake"></use>
          </svg>
          <div>
            <p className="text-sm">Made with love</p>
            <span className="text-[10px] text-gray-500">
              Handcrafted just for you
            </span>
          </div>
        </div>
        <div className="flex items-center justify-evenly gap-2 bg-pink-100/50 rounded-xl px-1 py-4">
          <svg className="w-6 h-6 md:w-10 md:h-10 text-pink-600">
            <use href="#truck"></use>
          </svg>
          <div>
            <p className="text-sm">Fast Delivery</p>
            <span className="text-[10px] text-gray-500">
              Quick & reliable delivery
            </span>
          </div>
        </div>
        <div className="flex items-center justify-evenly gap-2 bg-pink-100/50 rounded-xl px-1 py-4">
          <svg className="w-6 h-6 md:w-10 md:h-10 text-pink-600">
            <use href="#satisfy"></use>
          </svg>
          <div>
            <p className="text-sm">100% Satisfaction</p>
            <span className="text-[10px] text-gray-500">
              We care about happiness
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
