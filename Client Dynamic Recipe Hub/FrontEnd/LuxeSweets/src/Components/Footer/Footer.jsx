function Footer() {
  return (
    <>
      <footer className="bg-[#F5F3F0] border-t-2 border-[#f1d2a4]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/026/419/556/original/sweet-sugar-chocolate-cake-black-forest-western-food-dessert-3d-render-icon-illustration-isolated-png.png"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#8F6C49]">
                  LuxeSweets
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-[#8F6C49] uppercase">
                  Resources
                </h2>
                <ul className="text-[#8F6C49] font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Dish
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      Recipes
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-[#8F6C49] uppercase">
                  Follow us
                </h2>
                <ul className="text-[#8F6C49] font-medium">
                  <li className="mb-4">
                    <a href="https://facebook.com/" className="hover:underline ">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      className="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-[#8F6C49] uppercase">
                  Legal
                </h2>
                <ul className="text-[#8F6C49] font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-[#8F6C49] sm:text-center">
              © 2024
              <a href="https://flowbite.com/" className="hover:underline ml-1">
                LuxeSweets™
              </a>
              . All rights reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-[#8F6C49] hover:text-gray-900">
              <i className="fa-brands fa-instagram"></i>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-[#8F6C49] hover:text-gray-900 ms-5">
              <i className="fa-brands fa-facebook"></i>
                <span className="sr-only">Discord community</span>
              </a>
              {/* <!-- Add more social icons similarly --> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
