import React from "react";

interface Props{
    svgIcon: string;
    countColor: string;
    interactionTitle: string;
    count: string | number;
}

const PostInteractionButtons = ({svgIcon, countColor, interactionTitle, count} : Props) => {

    // const svgIcon = `<svg
    //     width="22"
    //     height="20"
    //     viewBox="0 0 22 20"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       d="M11.9345 0.934972L6.47928 6.36529C6.11495 6.72797 5.90816 7.22787 5.90816 7.74738V17.5396C5.90816 18.6178 6.79438 19.5 7.87755 19.5H16.7398C17.5275 19.5 18.2365 19.0295 18.5516 18.314L21.7617 10.8546C22.5889 8.91382 21.1611 6.75737 19.044 6.75737H13.4805L14.4159 2.26805C14.5144 1.77795 14.3667 1.27804 14.0122 0.92517C13.4312 0.356653 12.5056 0.356653 11.9345 0.934972ZM1.96939 19.5C3.05255 19.5 3.93877 18.6178 3.93877 17.5396V9.69798C3.93877 8.61976 3.05255 7.73758 1.96939 7.73758C0.886224 7.73758 0 8.61976 0 9.69798V17.5396C0 18.6178 0.886224 19.5 1.96939 19.5Z"
    //       fill="#22B573"
    //     />
    //   </svg>`
    // const countColor = "text-green-600";
    // const interactionTitle = "Relevant"

  return (
    <div className="inline-flex gap-1 justify-center items-center">
        <span dangerouslySetInnerHTML={{__html: svgIcon}} />

        <span className={`font-semibold  ${countColor}`  }> {count ? count+ "+" : ""} </span>
        <span className=" text-gray-500">{interactionTitle}</span>
    </div>
  );
};

export default PostInteractionButtons;
