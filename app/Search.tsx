export default function Search() {
  return (
    <div>
      <div>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
      </div>

      <div>
        <ul role="list" className="p-6 divide-y divide-slate-200">
          <li className="flex py-4 first:pt-0 last:pb-0">
            <img
              className="h-10 w-10 rounded-full"
              src="{person.imageUrl}"
              alt=""
            />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">이름</p>
              <p className="text-sm text-slate-500 truncate">이메일</p>
            </div>
          </li>
          <li className="flex py-4 first:pt-0 last:pb-0">
            <img
              className="h-10 w-10 rounded-full"
              src="{person.imageUrl}"
              alt=""
            />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">이름</p>
              <p className="text-sm text-slate-500 truncate">이메일</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
