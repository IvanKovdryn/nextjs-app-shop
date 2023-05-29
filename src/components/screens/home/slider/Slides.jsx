import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const slides = [
  {
    id: 1,
    html: (
      <>
        <div className="text-4xl">Новые поступления в этом сезоне</div>
        <div className="w-[55%] text-end">
          Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
          этом сезоне. Время исследовать.
        </div>
        <div className="flex justify-center">
          <Link
            href="/shop"
            className="flex items-center justify-center px-10 py-3 w-fit rounded-md bg-red-400 hover:bg-red-500 text-white font-medium transition-all"
          >
            Go to Shop
          </Link>
        </div>
      </>
    ),
  },
  {
    id: 2,
    html: (
      <>
        <div className="text-4xl">Новые поступления в этом сезоне</div>
        <div className="w-[55%] text-end">
          Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
          этом сезоне. Время исследовать.
        </div>
        <div className="flex justify-center">
          <Link
            href="/shop"
            className="flex items-center justify-center px-10 py-3 w-fit rounded-md bg-red-400 hover:bg-red-500 text-white font-medium transition-all"
          >
            Go to Shop
          </Link>
        </div>
      </>
    ),
  },
  {
    id: 3,
    html: (
      <>
        <div className="text-4xl">Новые поступления в этом сезоне</div>
        <div className="w-[55%] text-end">
          Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
          этом сезоне. Время исследовать.
        </div>
        <div className="flex justify-center">
          <Link
            href="/shop"
            className="flex items-center justify-center px-10 py-3 w-fit rounded-md bg-red-400 hover:bg-red-500 text-white font-medium transition-all"
          >
            Go to Shop
          </Link>
        </div>
      </>
    ),
  },
];
