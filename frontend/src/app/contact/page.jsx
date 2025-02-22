'use client';
import { useFormik } from 'formik';
import React from 'react';

const Contact = () => {
    const contactForm = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phoneNumber: '',
            details: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div className="max-w-lg mx-auto">
            {/* Contact Us */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-black sm:text-4xl">
                        Contact Us
                    </h1>
                    <p className="mt-1 text-gray-600">
                        We'd love to talk about how we can help you.
                    </p>
                </div>

                <div className="mt-12 max-w-lg mx-auto">
                    {/* Card */}
                    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 border-gray-300">
                        <h2 className="mb-8 text-xl font-semibold text-black">
                            Fill in the form
                        </h2>
                        <form onSubmit={contactForm.handleSubmit}>
                            <div className="grid gap-4 lg:gap-6">
                                {/* Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label
                                            htmlFor="firstname"
                                            className="block mb-2 text-sm text-gray-700 font-medium"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.firstname}
                                            className="py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="lastname"
                                            className="block mb-2 text-sm text-gray-700 font-medium"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastname"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.lastname}
                                            className="py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                {/* End Grid */}

                                {/* Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm text-gray-700 font-medium"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.email}
                                            autoComplete="email"
                                            className="py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phoneNumber"
                                            className="block mb-2 text-sm text-gray-700 font-medium"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="number"
                                            id="phoneNumber"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.phoneNumber}
                                            className="py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                {/* End Grid */}

                                <div>
                                    <label
                                        htmlFor="details"
                                        className="block mb-2 text-sm text-gray-700 font-medium"
                                    >
                                        Details
                                    </label>
                                    <textarea
                                        id="details"
                                        rows={4}
                                        onChange={contactForm.handleChange}
                                        value={contactForm.values.details}
                                        className="py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            {/* End Grid */}

                            <div className="mt-6 grid">
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                                >
                                    Send Inquiry
                                </button>
                            </div>
                            <div className="mt-3 text-center">
                                <p className="text-sm text-gray-500">
                                    We'll get back to you in 1-2 business days.
                                </p>
                            </div>
                        </form>
                    </div>
                    {/* End Card */}
                </div>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
                    {/* Icon Block */}
                    <a
                        className="group flex flex-col h-full text-center rounded-lg p-4 sm:p-6 border-2 border-gray-300 hover:bg-gray-100"
                        href="#"
                    >
                        <svg
                            className="text-gray-800 mx-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx={12} cy={12} r={10} />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <path d="M12 17h.01" />
                        </svg>
                        <div className="mt-5">
                            <h3 className="text-lg font-semibold text-black">
                                Knowledge base
                            </h3>
                            <p className="mt-1 text-gray-500">
                                We're here to help you with any questions.
                            </p>
                            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600">
                                Contact Support
                                <svg
                                    className="shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </p>
                        </div>
                    </a>
                    {/* End Icon Block */}

                    {/* Icon Block */}
                    <a
                        className="group flex flex-col h-full text-center rounded-lg p-4 sm:p-6 border-2 border-gray-300 hover:bg-gray-100"
                        href="#"
                    >
                        <svg
                            className="text-gray-800 mx-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                        </svg>
                        <div className="mt-5">
                            <h3 className="text-lg font-semibold text-black">
                                FAQ
                            </h3>
                            <p className="mt-1 text-gray-500">
                                Search our FAQ for answers to anything you might ask.
                            </p>
                            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600">
                                Visit FAQ
                                <svg
                                    className="shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </p>
                        </div>
                    </a>
                    {/* End Icon Block */}

                    {/* Icon Block */}
                    <a
                        className="group flex flex-col h-full text-center rounded-lg p-4 sm:p-6 border-2 border-gray-300 hover:bg-gray-100"
                        href="#"
                    >
                        <svg
                            className="text-gray-800 mx-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        <div className="mt-5">
                            <h3 className="text-lg font-semibold text-black">
                                Contact Sales
                            </h3>
                            <p className="mt-1 text-gray-500">
                                Let's talk about your needs and goals.
                            </p>
                            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600">
                                Contact Sales
                                <svg
                                    className="shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </p>
                        </div>
                    </a>
                    {/* End Icon Block */}
                </div>
            </div>
        </div>
    );
};

export default Contact;
