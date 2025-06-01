const Header = ({ currentSection, navigateToSection, sections }) => (
  <header className="w-full flex justify-between items-center py-4 fixed top-0 z-50 px-4 min-[400px]:px-8 sm:px-12 lg:px-16">
    <div className="text-xl font-bold text-neutral-200 whitespace-nowrap">MiSitio</div>
    
    <nav className="flex gap-3 sm:gap-5 md:gap-8">
      {sections.map((section, idx) => (
        <button
          key={section.id}
          onClick={() => navigateToSection(idx)}
          className={`text-zinc-300 cursor-pointer hover:text-white transition text-sm sm:text-base ${currentSection === idx ? "font-bold underline" : ""}`}
        >
          {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
        </button>
      ))}
    </nav>
  </header>
);

export default Header;