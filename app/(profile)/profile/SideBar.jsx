import Link from "next/link";

const SideBar = ({links}) => {
  return (
    <aside className="m-0 right-0 top-0  h-screen w-[200px] z-20 hidden md:block">
      <div className="flex flex-col h-[100dvh] w-full bg-white text-slate-700 shadow-md">
        {/* links */}
        <ul className="pt-0 font-semibold flex flex-col">
          {links.map(({ title, href }, index) => {
            return (
              <li key={title}>
                <Link
                  className="px-4 flex  items-center  w-full duration-300 ease-in hover:-translate-x-2 h-14"
                  href={href}
                >
                  {title}
                </Link>
                {index + 1 !== links.length && (
                  <hr className="h-px self-stretch opacity-20 bg-slate-900" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
