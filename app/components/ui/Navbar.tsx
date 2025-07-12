'use client';

export default function Navbar() {
  const menuItems = [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  w-full flex justify-center ">
      <div className="backdrop-blur-md w-full mt-5 rounded-lg md:w-[80%] bg-sky-100/50 border-1 border-sky-600/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-10">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl mr-2">🚀</div>
              <span className="text-xl font-bold text-black">
                PostPilot
              </span>
            </div>

            {/* Center Menu */}
            <div className="hidden md:flex items-center space-x-8 ">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-black/90 hover:text-black transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Get Started Button */}
            <div className="flex items-center">
              <button className="text-black transition-all duration-300 font-medium px-4 py-2 rounded-full text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 