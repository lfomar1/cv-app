const PersonalDetails = ({
  name,
  email,
  phone,
  nameHandler,
  emailHandler,
  phoneHandler,
  address,
  addressHandler,
}) => {
  return (
    <div className="">
      <div>
        <form className="max-w-lg bg-white p-8 rounded-md shadow-lg">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Full Name"
              value={name}
              onChange={nameHandler}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@email.com"
              value={email}
              onChange={emailHandler}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Your Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Phone Number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              value={phone}
              onChange={phoneHandler}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="adress"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Your Address
            </label>
            <input
              type="text"
              id="adress"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Address"
              value={address}
              onChange={addressHandler}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default PersonalDetails;
