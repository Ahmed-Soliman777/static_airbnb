import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaEnvelope } from "react-icons/fa";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Country code: ${data.countryCode}, Phone number: ${data.phone}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50 flex flex-col py-[50px]">
      {/* Centered Card */}
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10 transition hover:shadow-2xl">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Log in or Sign up
          </h2>
          <p className="text-gray-500 text-center mb-6 text-sm">
            Welcome to your next adventure 🌍
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
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
                className="w-full px-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{6,15}$/,
                    message: "Enter a valid phone number (6-15 digits).",
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
              className="w-full bg-pink-600 text-white py-3 rounded-xl font-semibold hover:bg-pink-700 transition transform hover:scale-[1.02]"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-400 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Alternative login options */}
          <div className="space-y-3">
            <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition">
              <FaEnvelope className="text-pink-500" />
              Continue with Email
            </button>
            <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition">
              <FaGoogle className="text-red-500" />
              Continue with Google
            </button>
            <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition">
              <FaFacebook className="text-blue-600" />
              Continue with Facebook
            </button>
          </div>

          {/* Footer text */}
          <p className="text-xs text-gray-400 text-center mt-6">
            By continuing, you agree to our{" "}
            <span className="text-pink-600 cursor-pointer hover:underline">
              Terms
            </span>{" "}
            and{" "}
            <span className="text-pink-600 cursor-pointer hover:underline">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
