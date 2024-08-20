import React from 'react';
import Button from 'components/Button';

const Login = () => {
    return (
        <section
            className="w-full h-screen bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url('/assets/images/login2.jpg')` }}
        >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full backdrop-blur-[3px]">
                <div>
                    <img
                        src="/assets/logo.png"
                        alt="logo"
                        className="w-[210px] align-middle p-4"
                    />
                </div>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="px-6 py-8 space-y-7">
                        <p className="text-3xl font-semibold">
                            Welcome to Olympia Portal
                        </p>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="username" className="block mb-2 text-md font-bold text-gray-900">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-md font-bold text-gray-900">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div>
                                <Button title="Login" width="w-full" bg="bg-green-600" hover="hover:bg-green-700" text="text-white" href="/home" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
