import Image from "next/image";
import Layout from "../Layout/Layout";

function ComingSoon() {
    return (
        <Layout customClass="flex flex-col md:flex-row items-center justify-center gap-16 p-8 md:px-8 md:py-16 bg-gray-50 min-h-screen">
            {/* Text Section */}
            <div className="flex flex-col items-start max-w-md space-y-4 text-left">
                <p className="text-gray-500">— Coming soon</p>
                <h1 className="text-4xl font-bold text-[#373656] leading-tight">
                    Get notified <br /> when we launch
                </h1>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt.
                </p>

                {/* Email Input Section */}
                <div className="flex items-center w-full mt-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-700">
                        Notify Me
                    </button>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                    *Don&apos;t worry, we will not spam you.
                </p>
            </div>

            {/* Illustration Section */}
            <div className="hidden md:block">
                <Image
                    src={"https://dev.tnvlei.com/assets/img-1.1efc744d.svg"}
                    alt={"Illustration"}
                    width={400}
                    height={400}
                    // className="w-full max-w-sm"
                />
            </div>
        </Layout>
    );
}

export default ComingSoon;
