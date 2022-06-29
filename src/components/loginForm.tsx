import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { __regexPhoneNumber__ } from "../util/regex"

type LoginInputs = {
  phoneNumber: string
  privacyPolicy: boolean
  ageGate: boolean
  userConsent: boolean
}

const CheckBox = ({ register, label }: any) => {
  return (
    <div className="flex justify-between items-center py-1">
      <label>{label}</label>
      <input type="checkbox" {...register} />
    </div>
  )
}

const LoginForm = ({
  onSubmit,
  postedPhoneNumber = "",
}: {
  onSubmit: SubmitHandler<LoginInputs>
  postedPhoneNumber?: string
}) => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>()

  useEffect(() => {
    if (postedPhoneNumber) {
      setValue("phoneNumber", postedPhoneNumber)
    }
  }, [postedPhoneNumber])
  return (
    <>
      <div className="h-72 bg-primary">
        <div className="z-20 flex items-center flex-col pt-2">
          <StaticImage
            src="../images/Sebenza_Logo.png"
            alt={"logo"}
            width={245}
            height={95}
          />
          <p className="text-center m-2">
            Content for the people <br /> Get access to free Wi-Fi and <br />
            loads of awesome content
          </p>
          <StaticImage
            src="../images/SB_Equals_Social_Media.svg"
            alt="social media"
            height={50}
          />
          <form
            action=""
            className="py-10 flex items-center flex-col w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="phoneNumber" className="text-xl">
              Cellphone number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              {...register("phoneNumber", {
                required: true,
                pattern: __regexPhoneNumber__,
              })}
              className="text-center border-gray-400 border-2 p-2 rounded-3xl w-9/12 mb-4"
            />
            <div className="w-5/6 mt-4">
              <CheckBox
                register={register("privacyPolicy", { required: true })}
                label={
                  <>
                    I agree to the Site's{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://sebenza.s3.af-south-1.amazonaws.com/dev/pdf/Privacy_Policy.pdf"
                      className="font-bold"
                    >
                      Privacy Policy*
                    </a>
                  </>
                }
              />
              <CheckBox
                register={register("userConsent", { required: true })}
                label={
                  <>
                    I consent to the terms of the{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://sebenzacms74811-production.s3.eu-west-1.amazonaws.com/legal/User_Consent_Form.pdf"
                      className="font-bold"
                    >
                      User Consent Form*
                    </a>
                  </>
                }
              />
              <CheckBox
                register={register("ageGate", { required: false })}
                label="I am over the age of 18"
              />
            </div>
            <button
              type="submit"
              className="h-12 mt-6 w-40 p-2 rounded-md mx-auto text-primary bg-secondary"
            >
              LOG IN
            </button>
            {postedPhoneNumber !== "" && (
              <span className="text-green-500 font-bold">
                Please check your sms for a link or
              </span>
            )}
            {postedPhoneNumber !== "" && (
              <span className="text-green-500 font-bold">
                enter a new phone number to retry
              </span>
            )}
            {errors.phoneNumber && (
              <span className="text-red-500 font-bold">
                Please enter a valid phone number
              </span>
            )}
            {errors.privacyPolicy && (
              <span className="text-red-500 font-bold">
                Please agree to the sites privacy policy
              </span>
            )}
            {errors.userConsent && (
              <span className="text-red-500 font-bold">
                Please agree to the sites User Consent Form
              </span>
            )}
          </form>
        </div>
      </div>
      <div className="h-12 rounded-tl-full rounded-tr-full bg-white -mt-8" />
    </>
  )
}

export default LoginForm
