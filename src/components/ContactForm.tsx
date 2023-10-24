"use client";

import { useForm } from "react-hook-form";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await fetch(`/api`, {
        method: "POST",
        headers: { body: JSON.stringify(data) },
      });
      reset();
      router.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full bg-primary text-center px-[10%] flex flex-col md:px-[15%] justify-center items-center py-[90px] xl:py-[120px]">
      <Link href="/" className="flex items-center gap-2 w-full mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-left"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <p className="text-lg">Back</p>
      </Link>
      <p className="display-sm md:display-lg font-light">Contact Us</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-dark flex flex-col gap-4 mt-8 flex-1 min-w-[300px] lg:min-w-[40%] max-w-[600px]"
      >
        <label className="flex flex-col items-start text-dark">
          Name*
          <input
            {...register("name", { required: true })}
            className="py-1.5 px-2 border text-dark w-full"
          />
        </label>
        <label className="flex flex-col items-start text-dark">
          Company
          <input
            {...register("company")}
            className="py-1.5 px-2 border text-dark w-full"
          />
        </label>
        <label className="flex flex-col items-start text-dark">
          Email*
          <input
            {...register("email", { required: true, minLength: 3 })}
            className="py-1.5 px-2 border text-dark w-full"
          />
        </label>
        <label className="flex flex-col items-start text-dark mb-4">
          Message*
          <textarea
            className="py-1.5 px-2 border text-dark h-40 w-full resize-none"
            {...register("message", { required: true, minLength: 3 })}
          />
        </label>
        <Button disabled={!isValid}>Submit</Button>
      </form>
    </div>
  );
}
