
import ShadButton from "@/components/ui/Button/ShadButton";
import ShadInput from "@/components/ui/Input/ShadInput";
import ShadTextArea from "@/components/ui/TextArea/ShadTextArea";
import { Formik } from "formik";
import ShadSelect from "@/components/ui/Select/ShadSelect";
import Layout from "@/components/global/Layout/Layout";
import { ShadButtonType } from "@/components/ui/Button/button.enums";



const INITIAL_VALUES = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    legalJurisdictionCountry: "",
    category: "",
    phone: ""
}

const legalJurisdictionOptions = [
    { value: "IND", label: "India" },
    { value: "SA", label: "South Africa" },
    { value: "AUS", label: "Australia" },
    { value: "NZ", label: "New Zealand" }
]

const categoryOptions = [
    { value: "new-lei", label: "New Lei" },
    { value: "transfer-lei", label: "Transfer Lei" },
    { value: "change-lei", label: "Change Lei" },
    { value: "renewal-lei", label: "Renewal Lei" },
    { value: "challenge-lei", label: "Challenge Lei" },
    { value: "other-remarks", label: "Other Remarks" }
]

export type contactFormValuesType = {
    firstName:string,
    lastName:string
    email: string,
    message: string,
    legalJurisdictionCountry:string,
    category:string
    phone:string
}

const Contact = () => {

    const onSubmit = (values: contactFormValuesType) => {
        console.log('values from Contact form', values)
    }


    return (
        <Layout>
            <section className="text-gray-600 body-font relative">
                <div className="absolute inset-0 bg-gray-300">
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="map"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.075386916591!2d80.93741157522395!3d26.90110247665417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999563752e1662d%3A0x76e01d02cfa2c18c!2sTNV%20System%20Certification%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1732167084588!5m2!1sen!2sin"
                        style={{
                            filter: "grayscale(1) contrast(1.2) opacity(0.4)",
                        }}
                    ></iframe>
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <Formik
                        initialValues={INITIAL_VALUES}
                        onSubmit={(values) => onSubmit(values)}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            setFieldValue
                        }) => (
                            <form onSubmit={handleSubmit} className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                                <p className="leading-relaxed mb-5 text-gray-600">
                                    Have questions about your Legal Entity Identifier (LEI) application or renewal? Reach out to our
                                    team for prompt assistance.
                                </p>
                                <div className="relative flex flex-col gap-4 mb-6">
                                    <ShadSelect
                                        placeholder="Select Country"
                                        options={legalJurisdictionOptions}
                                        label="Country"
                                        onChange={(value) => setFieldValue('legalJurisdictionCountry', value)}
                                        value={values.legalJurisdictionCountry}
                                        required={true}
                                    />
                                    <ShadInput
                                        label={"First Name"}
                                        type={"text"}
                                        name={"firstName"}
                                        value={values.firstName}
                                        onChange={handleChange}
                                        required={true}
                                    />
                                    <ShadInput
                                        label={"Last Name"}
                                        type={"text"}
                                        name={"lastName"}
                                        value={values.lastName}
                                        onChange={handleChange}
                                        required={true}
                                    />
                                    <ShadInput
                                        label={"Email Address"}
                                        type={"email"}
                                        name={"email"}
                                        value={values.email}
                                        onChange={handleChange}
                                        required={true}
                                    />
                                    <ShadTextArea
                                        label={"Your message"}
                                        placeholder={"How can we assist you?"}
                                        name={"message"}
                                        value={values.message}
                                        onChange={handleChange}
                                        required={true}
                                    />
                                    <ShadSelect
                                        placeholder="Select Category"
                                        options={categoryOptions}
                                        label="Category"
                                        onChange={(value) => setFieldValue('category', value)}
                                        value={values.category}
                                        required={true}
                                    />

                                </div>

                                <ShadButton
                                    buttonText={"Submit"}
                                    type={ShadButtonType.PRIMARY}
                                />
                                <p className="text-xs text-gray-500 mt-3">
                                    Our team strives to provide timely and accurate support for all your LEI needs. Expect a response within 24 hours.
                                </p>
                            </form>
                        )}
                    </Formik>
                    {/* <form
                            className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
                            onSubmit={handleSubmit}
                        >

                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-[#32736A] focus:ring-2 focus:ring-[#32736A] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-[#32736A] focus:ring-2 focus:ring-[#32736A] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    placeholder="How can we assist you?"
                                    required
                                ></textarea>

                            </div>
                            <Button
                                text={"Submit"}
                                type={ButtonType.PRIMARY}
                                onClick={() => ""}
                            />
                            <p className="text-xs text-gray-500 mt-3">
                                Our team strives to provide timely and accurate support for all your LEI needs. Expect a response within 24 hours.
                            </p>
                        </form> */}
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
