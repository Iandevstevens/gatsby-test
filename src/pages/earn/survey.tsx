import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../../components/layout"
import PageHeader from "./../../components/PageHeader"
import { useForm } from "react-hook-form"

// export enum INPUT_TYPE {
//   TEXT = "TEXT",
//   NUMBER = "NUMBER",
//   PHONE = "PHONE",
//   DATE = "DATE",
//   EMAIL = "EMAIL",
//   MULTIPLE = "MULTIPLE",
//   RADIO = "RADIO",
//   DROPDOWN = "DROPDOWN",
//   CONFIRMATION = "CONFIRMATION",
// }

// const FieldInput = ({ label, type, placeholder, register }: any) => {
//   return (
//     <div className="flex flex-col border-b-2">
//       <label className="font-bold text-base" htmlFor={label}>
//         {label}
//       </label>
//       <input
//         {...register(label)}
//         id={label}
//         type={type}
//         className="rounded border-gray-400 border-2"
//         placeholder={placeholder}
//         required
//       />
//     </div>
//   )
// }

// const InputField = (props: any) => {
//   const { label, type, options, register = () => "" } = props

//   switch (type.toUpperCase()) {
//     case String(INPUT_TYPE.NUMBER):
//       return <FieldInput {...props} type="number" />
//     case String(INPUT_TYPE.PHONE):
//       return <FieldInput {...props} type="tel" />
//     case String(INPUT_TYPE.DATE):
//       return <FieldInput {...props} type="date" />
//     case String(INPUT_TYPE.EMAIL):
//       return <FieldInput {...props} type="email" />
//     case String(INPUT_TYPE.MULTIPLE):
//       return (
//         <div className="flex flex-col">
//           <label htmlFor={label} className="font-bold">
//             {label}
//           </label>
//           <select
//             {...register(label)}
//             className="p-1 my-1 bg-blue-50 rounded"
//             defaultValue={[]}
//             name={label}
//             id={label}
//             required
//             multiple={true}
//           >
//             <option hidden disabled value="">
//               Select...
//             </option>
//             {options?.map((option: any, i: number) => (
//               <option key={i} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>
//       )
//     case String(INPUT_TYPE.DROPDOWN):
//       return (
//         <div className="flex flex-col">
//           <label htmlFor={label} className="font-bold">
//             {label}
//           </label>
//           <select
//             {...register(label)}
//             className="p-1 my-1 bg-blue-50 rounded"
//             defaultValue=""
//             name={label}
//             id={label}
//             required
//           >
//             <option hidden disabled value="">
//               Select...
//             </option>
//             {options?.map((option: any, i: number) => (
//               <option key={i} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         </div>
//       )
//     default:
//       return <FieldInput {...props} type="text" />
//   }
// }

// const QuestionForm = () => {
//   const { register, handleSubmit, control } = useForm()

//   const submitQuestion = (formData: any) => {
//     // const valueArray = Object.values(formData)
//     // const answer: any = valueArray[valueArray.length - 1]
//     // const formattedAnswer = Array.isArray(answer) ? answer.join() : answer
//     // postSurvey({
//     //   variables: { questionID: question.id, questionAnswer: formattedAnswer },
//     // })
//   }
//   if (question.questionText === "all-done") {
//     return (
//       <div className="flex flex-col justify-center items-center rounded bg-yellow-200 py-5">
//         <p className="text-center font-bold">You have finished the survey</p>
//         <p className="text-center">No more questions left</p>
//       </div>
//     )
//   }
//   return (
//     <form onSubmit={handleSubmit(data => submitQuestion(data))}>
//       <div className="my-6">
//         <InputField
//           label={question?.questionText}
//           type={question?.questionType}
//           options={question?.possibleAnswers}
//           register={register}
//         />
//       </div>
//       <div className="flex justify-between mb-10">
//         <a
//           className="bg-trueGray-500 py-2 w-36 text-center rounded-md font-bold shadow text-black"
//           onClick={router.back}
//         >
//           Exit
//         </a>
//         <input
//           className="bg-yellow-400 py-2 w-36 text-center rounded-md font-bold text-black shadow"
//           type="submit"
//           value="Next"
//         />
//       </div>
//     </form>
//   )
// }

const Survey = ({ serverData }) => {
  return (
    <Layout>
      <StaticImage
        src="../../images/Surveys_Header.png"
        alt={"logo"}
        width={400}
      />
      <PageHeader
        header="Earn 20SB with Boost Your Bucks in June"
        subheader="Answer the questions to receive your SB reward"
      />
      {/* <QuestionForm /> */}
    </Layout>
  )
}

export default Survey

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: {
        big: "https://sebenza.s3.af-south-1.amazonaws.com/dev/images/ads/medium/Cadbury_Medium_Banner.gif",
        small:
          "https://sebenza.s3.af-south-1.amazonaws.com/dev/images/ads/small/McD_Small_Banner_R39.jpg",
      },
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
