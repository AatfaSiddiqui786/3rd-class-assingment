// pages/contact.js

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      
      <form className="bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 border border-gray-800 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 border border-gray-800 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full p-3 border border-gray-800 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
