/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

export default function Contact() {
  return (
    <div className="mt-5">
        <h2 className='text-3xl md:text-5xl font-bold tracking-tighter leading-tight'>Contact</h2>
        <form className="">
        <div className="space-y-5">
            <div className="pb-3">
            <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                {/* <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                </label> */}
                <div className="">
                    <div className="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Your Email Here</span>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>

        <div className="flex items-center justify-center gap-x-6">
            {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
            </button> */}
            <button
            type="submit"
            className=" bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full md:w-[7rem] border-[.5px] border-white"
            >
            Subscribe
            </button>
        </div>
        </form>
    </div>
  )
}
