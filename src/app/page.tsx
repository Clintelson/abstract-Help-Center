"use client";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="w-full h-full p-8 md:p-20">

      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">

        <div className="text-2xl flex flex-col items-start w-full max-w-[370] h-fit gap-3">
          <h1 className="font-bold">Using Abstract</h1>
            <p>
              Abstract lets you manage, version, and document your designs in one place.
            </p>
            <Link href="./" className="text-blue-500 flex flex-row items-center gap-8">
            Learn more
            <FaArrowRightLong className="w-6 h-6" />
            </Link>
        </div>

        <div className="text-2xl flex flex-col items-start w-full max-w-[370] h-fit gap-3">
          <h1 className="font-bold">Manage organizations, teams, and projects</h1>
            <p>
            Use Abstract organizations, teams, and projects to organize your people and your work.
            </p>
            <Link href="./" className="text-blue-500 flex flex-row items-center gap-8">
            Learn more
            <FaArrowRightLong className="w-6 h-6" />
            </Link>
        </div>

        <div className="text-2xl flex flex-col items-start w-full max-w-[370] h-fit gap-3">
          <h1 className="font-bold">Authenticate to Abstract</h1>
            <p>
              Set up and configure SSO, SCIM, and Just-in-Time provisioning.
            </p>
            <Link href="./" className="text-blue-500 flex flex-row items-center gap-8">
            Learn more
            <FaArrowRightLong className="w-6 h-6" />
            </Link>
        </div>

        <div className="text-2xl flex flex-col items-start w-full max-w-[370] h-fit gap-3">
          <h1 className="font-bold">Manage your account</h1>
            <p>
              Configure your account settings, such as your email, profile details, and password.
            </p>
            <Link href="./" className="text-blue-500 flex flex-row items-center gap-8">
            Learn more
            <FaArrowRightLong className="w-6 h-6" />
            </Link>
        </div>

        <div className="text-2xl flex flex-col items-start w-full max-w-[370] h-fit gap-3">
          <h1 className="font-bold">Manage billing</h1>
            <p>
              Change subscriptions and payment details.
            </p>
            <Link href="./" className="text-blue-500 flex flex-row items-center gap-8">
            Learn more
            <FaArrowRightLong className="w-6 h-6" />
            </Link>
        </div>

        <div className="text-2xl flex flex-col items-start w-full max-w-[370] h-fit gap-3">
          <h1 className="font-bold">Abstract support</h1>
            <p>
              Get in touch with a human.
            </p>
            <Link href="./" className="text-blue-500 flex flex-row items-center gap-8">
            Learn more
            <FaArrowRightLong className="w-6 h-6" />
            </Link>
        </div>
      </div>
      
    </main>
  );
}
