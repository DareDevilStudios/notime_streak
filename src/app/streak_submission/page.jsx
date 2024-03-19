"use client";
import React, {useEffect, useState} from "react";
import {fetcher} from "@/utils/supabaseAuthCheck";
import Loading from "@/common/components/Loading";
import {useRouter} from "next/navigation";
import {useForm} from 'react-hook-form'

export default function page() {

    const {register, handleSubmit, reset, watch, errors} = useForm();

    const [User, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        fetcher().then((user) => {
            console.log(user?.user?.user_metadata);
            if (!user?.user?.user_metadata) {
                return router.push("/");
            }
            setUser(user?.user?.user_metadata);
        });
    }, []);

    const dataSubmit = async (data) => {
        console.log(data);
        const {taskName, taskDescription, taskLink, linkedinLink, blogLink} = data;

        try {
            setButtonLoading(true)
            // Fetch the existing user data
            const response = await fetch("https://65e9ea73c9bf92ae3d3a9cdc.mockapi.io/developers");
            let users = await response.json();

            // Find the user by name
            let user = users.find(user => user.name === User.full_name);

            if (!user) {
                // If the user doesn't exist, create a new user entry
                const newUserResponse = await fetch("https://65e9ea73c9bf92ae3d3a9cdc.mockapi.io/developers", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: User.full_name,
                        tasks: [{
                            taskName,
                            taskDescription,
                            taskLink,
                            linkedinLink,
                            blogLink,
                        }],
                    }),
                });

                if (!newUserResponse.ok) {
                    console.error('Failed to create new user');
                    return;
                }

                console.log('User created successfully');

                // Fetch the updated user list after creating the new user
                const updatedResponse = await fetch("https://65e9ea73c9bf92ae3d3a9cdc.mockapi.io/developers");
                users = await updatedResponse.json();

                // Find the newly created user
                user = users.find(user => user.name === User.full_name);
            } else {
                // Update the tasks array for the existing user
                user.tasks.push({
                    taskName,
                    taskDescription,
                    taskLink,
                    linkedinLink,
                    blogLink,
                });

                // Update the user data on the server
                const updateResponse = await fetch(`https://65e9ea73c9bf92ae3d3a9cdc.mockapi.io/developers/${user.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                });

                if (!updateResponse.ok) {
                    console.error('Failed to update user data');
                    return;
                }

                console.log('Tasks updated successfully');
                reset()
                router.push("/profile")
            }
        } catch (error) {
            setButtonLoading(true)
            console.error('Error:', error);
        }
    }

    return loading ? (
        <Loading/>
    ) : (
        <div className="flex justify-center items-center w-full bg-black">
            <div className="relative sm:p-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative p-4 rounded-lg shadow bg-black sm:p-5">
                    <div
                        className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-white">
                            Welcome{" "}
                            {!User.full_name ? (
                                <span>Streaker....</span>
                            ) : (
                                <span>{User.full_name}</span>
                            )}
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit(dataSubmit)}>
                        <div className="flex gap-4 mb-4 flex-col">
                            {/* task part */}
                            <div className="flex flex-col gap-4 border-2 p-4 rounded-lg">
                                <label
                                    for="name"
                                    className="block mb-2 text-sm font-medium text-green-500 border-gray-300"
                                >
                                    Task and Desciption ( 5 points )
                                </label>

                                <div className="">
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Name of task you have done
                                    </label>
                                    <input
                                        type="text"
                                        name="taskName"
                                        id="taskName"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="task name"
                                        required=""
                                        {...register('taskName')}
                                    />
                                </div>
                                <div className="">
                                    <label
                                        for="brand"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Provide a brief description about it
                                    </label>
                                    <textarea
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Description"
                                        required=""
                                        name="taskDescription"
                                        id="taskDescription"
                                        {...register('taskDescription')}
                                    />
                                </div>
                            </div>
                            {/* task part */}

                            {/* github part */}
                            <div className="flex flex-col gap-4 border-2 p-4 rounded-lg">
                                <label
                                    for="name"
                                    className="block mb-2 text-sm font-medium text-green-500 border-gray-300"
                                >
                                    Add the task link ( 5 points )
                                </label>

                                <div className="">
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Github / Figma / Google docs link
                                    </label>
                                    <input
                                        type="text"
                                        name="taskLink"
                                        id="taskLink"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="google.com"
                                        required=""
                                        {...register('taskLink')}
                                    />
                                </div>
                            </div>
                            {/* task part */}

                            {/* Linkedin part */}
                            <div className="flex flex-col gap-4 border-2 p-4 rounded-lg">
                                <label
                                    for="name"
                                    className="block mb-2 text-sm font-medium text-green-500 border-gray-300"
                                >
                                    Have you posted it on linkedin ? ( 5 points )
                                </label>

                                <div className="">
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Linkedin Link
                                    </label>
                                    <input
                                        type="text"
                                        name="linkedinLink"
                                        id="linkedinLink"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="linkedin.com"
                                        required=""
                                        {...register('linkedinLink')}
                                    />
                                </div>
                            </div>
                            {/* task part */}

                            {/* Linkedin part */}
                            <div className="flex flex-col gap-4 border-2 p-4 rounded-lg">
                                <label
                                    for="name"
                                    class="block mb-2 text-sm font-medium text-green-500 border-gray-300"
                                >
                                    Have you Learned some thing new. then write a blog about it (
                                    5 points )
                                </label>

                                <div className="">
                                    <label
                                        for="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Blog link ( you can write blogs in medium, hashnode, dev.to
                                        etc.)
                                    </label>
                                    <input
                                        type="text"
                                        name="blogLink"
                                        id="blogLink"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="link here"
                                        required=""
                                        {...register('blogLink')}
                                    />
                                </div>
                            </div>
                            {/* task part */}
                        </div>
                        {buttonLoading ? (
                            <div className="flex justify-center items-center">
                                Loading...
                            </div>

                        ) : (
                            <div>
                                <button
                                    type="submit"
                                    className="text-white border-2 px-4 py-2 rounded-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

