import { useForm } from "react-hook-form";


export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(
      `Country code: ${data.countryCode}, Phone number: ${data.phone}`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
  

      {/* Login Form */}
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow p-8">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Log in or sign up
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Country Code Dropdown */}
            <div>
              <label
                htmlFor="countryCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country code
              </label>
              <select
                id="countryCode"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                {...register("countryCode", {
                  required: "Select your country code",
                })}
              >
                <option value="">Select code</option>
                <option value="+1">🇺🇸 +1 (US)</option>
                <option value="+44">🇬🇧 +44 (UK)</option>
                <option value="+20">🇪🇬 +20 (EG)</option>
                <option value="+971">🇦🇪 +971 (UAE)</option>
              </select>
              {errors.countryCode && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.countryCode.message}
                </p>
              )}
            </div>

            {/* Phone Number Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="e.g. 01012345678"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{6,15}$/,
                    message:
                      "Enter a valid phone number (6-15 digits).",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Continue Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Alternative login options */}
          <div className="space-y-2">
            <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-50 transition">
              Continue with Email
            </button>
            <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-50 transition">
              Continue with Google
            </button>
            <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center hover:bg-gray-50 transition">
              Continue with Facebook
            </button>
          </div>
        </div>
      </main>

    
    </div>
  );
}
