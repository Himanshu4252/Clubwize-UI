import React from "react";
import PostInteractionButtons from "./PostInteractionButtons/PostInteractionButtons";

const EngagementBar = () => {
  const likeSvg = `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9345 0.934972L6.47928 6.36529C6.11495 6.72797 5.90816 7.22787 5.90816 7.74738V17.5396C5.90816 18.6178 6.79438 19.5 7.87755 19.5H16.7398C17.5275 19.5 18.2365 19.0295 18.5516 18.314L21.7617 10.8546C22.5889 8.91382 21.1611 6.75737 19.044 6.75737H13.4805L14.4159 2.26805C14.5144 1.77795 14.3667 1.27804 14.0122 0.92517C13.4312 0.356653 12.5056 0.356653 11.9345 0.934972ZM1.96939 19.5C3.05255 19.5 3.93877 18.6178 3.93877 17.5396V9.69798C3.93877 8.61976 3.05255 7.73758 1.96939 7.73758C0.886224 7.73758 0 8.61976 0 9.69798V17.5396C0 18.6178 0.886224 19.5 1.96939 19.5Z" fill="#22B573"/>
</svg>
`;
  const disLikeSvg = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9215 14.3085H19.1491C19.9048 14.3071 20.6291 14.0063 21.1635 13.4719C21.6978 12.9376 21.9986 12.2132 22 11.4576V3.67193C21.9986 2.91626 21.6978 2.19193 21.1635 1.65759C20.6291 1.12325 19.9048 0.822439 19.1491 0.821051H4.25323C3.5843 0.821419 2.93675 1.0568 2.42373 1.48608C1.9107 1.91536 1.56481 2.51125 1.44648 3.16963L0.0448151 10.9519C-0.028841 11.3625 -0.0115414 11.7843 0.0954971 12.1875C0.202534 12.5907 0.396704 12.9656 0.66432 13.2856C0.931938 13.6057 1.26649 13.8631 1.6444 14.0398C2.02231 14.2165 2.43438 14.3082 2.85157 14.3084H7.96279V18.4218C7.96276 18.9786 8.13126 19.5223 8.44613 19.9814C8.76099 20.4405 9.20746 20.7936 9.72681 20.9941C10.2462 21.1946 10.814 21.2333 11.3558 21.1049C11.8975 20.9765 12.3876 20.6872 12.7618 20.2749L12.7652 20.2715C13.9869 18.9106 14.6352 16.7894 15.3275 15.2689C15.4442 14.9971 15.5862 14.7369 15.7518 14.4917C15.8033 14.4262 15.8601 14.3649 15.9215 14.3085ZM17.0313 3.26469H19.1491C19.203 3.26461 19.2563 3.27539 19.3059 3.29639C19.3554 3.31738 19.4003 3.34815 19.4377 3.38687C19.4756 3.42399 19.5056 3.46837 19.526 3.51735C19.5464 3.56632 19.5568 3.6189 19.5564 3.67196V11.4576C19.5568 11.5106 19.5464 11.5632 19.526 11.6122C19.5056 11.6612 19.4756 11.7055 19.4377 11.7427C19.4003 11.7814 19.3554 11.8122 19.3059 11.8332C19.2563 11.8541 19.203 11.8649 19.1491 11.8648H17.0313V3.26469ZM14.5877 12.2585C14.1329 12.5799 13.7579 13.0014 13.4915 13.4905C13.0316 14.3954 12.6237 15.3257 12.2696 16.2769C11.9624 17.1298 11.5176 17.9266 10.9528 18.6357C10.9095 18.6818 10.8536 18.7142 10.792 18.7287C10.7304 18.7432 10.6659 18.7392 10.6066 18.7171C10.5472 18.6942 10.4961 18.6536 10.4603 18.6008C10.4246 18.5481 10.4057 18.4856 10.4064 18.4219V13.0867C10.4065 12.9262 10.375 12.7672 10.3136 12.619C10.2523 12.4707 10.1623 12.3359 10.0488 12.2225C9.93529 12.109 9.80055 12.019 9.65226 11.9576C9.50397 11.8963 9.34504 11.8647 9.18456 11.8648H2.85152C2.79164 11.8649 2.73251 11.8515 2.67848 11.8257C2.62446 11.7998 2.57691 11.7622 2.53935 11.7156C2.50047 11.6704 2.47233 11.617 2.45702 11.5594C2.44172 11.5018 2.43966 11.4414 2.451 11.3829L3.85277 3.60069C3.87014 3.50692 3.91959 3.4221 3.99265 3.3608C4.06571 3.2995 4.15782 3.26552 4.25319 3.2647H14.5877L14.5877 12.2585Z" fill="#DC3545"/>
</svg>
`;
  const commentSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C15.5142 0 20 4.48583 20 10C20 15.5142 15.5142 20 10 20H0V10C0 4.48583 4.48583 0 10 0ZM1.66667 18.3333H10C14.595 18.3333 18.3333 14.595 18.3333 10C18.3333 5.405 14.595 1.66667 10 1.66667C5.405 1.66667 1.66667 5.405 1.66667 10V18.3333ZM8.75 10C8.75 10.69 9.31 11.25 10 11.25C10.69 11.25 11.25 10.69 11.25 10C11.25 9.31 10.69 8.75 10 8.75C9.31 8.75 8.75 9.31 8.75 10ZM4.58333 10C4.58333 10.69 5.14333 11.25 5.83333 11.25C6.52333 11.25 7.08333 10.69 7.08333 10C7.08333 9.31 6.52333 8.75 5.83333 8.75C5.14333 8.75 4.58333 9.31 4.58333 10ZM12.9167 10C12.9167 10.69 13.4767 11.25 14.1667 11.25C14.8567 11.25 15.4167 10.69 15.4167 10C15.4167 9.31 14.8567 8.75 14.1667 8.75C13.4767 8.75 12.9167 9.31 12.9167 10Z" fill="#495057"/>
</svg>
`;
  const saveSvg = `<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1626 19.9173C13.5501 19.917 12.9544 19.717 12.4657 19.3479L9.06641 16.7979C8.90236 16.6762 8.70351 16.6105 8.49923 16.6105C8.29496 16.6105 8.09611 16.6762 7.93206 16.7979L4.53274 19.3478C4.11184 19.6635 3.61136 19.8557 3.08738 19.903C2.56339 19.9502 2.0366 19.8506 1.56603 19.6153C1.09546 19.38 0.699706 19.0184 0.42311 18.5708C0.146514 18.1233 5.26126e-06 17.6076 0 17.0815V3.38826C0.00105963 2.51198 0.349632 1.67189 0.969258 1.05227C1.58888 0.432639 2.42897 0.0840674 3.30526 0.0830078H13.6932C14.5695 0.0840674 15.4096 0.432639 16.0292 1.05227C16.6488 1.67189 16.9974 2.51198 16.9985 3.38826V17.0815C16.9972 17.8332 16.698 18.5538 16.1665 19.0853C15.6349 19.6169 14.9144 19.9161 14.1626 19.9173ZM13.5982 17.8372C13.7386 17.9425 13.9055 18.0066 14.0802 18.0223C14.2549 18.038 14.4306 18.0048 14.5875 17.9264C14.7444 17.8479 14.8764 17.7273 14.9686 17.5781C15.0609 17.4289 15.1097 17.2569 15.1097 17.0815V3.38826C15.1093 3.0127 14.96 2.65264 14.6944 2.38707C14.4288 2.12151 14.0688 1.97214 13.6932 1.97173H3.30526C2.92969 1.97214 2.56963 2.12151 2.30407 2.38707C2.0385 2.65264 1.88913 3.0127 1.88872 3.38826V17.0815C1.88874 17.2569 1.93762 17.4289 2.02986 17.5781C2.1221 17.7273 2.25407 17.8479 2.41098 17.9264C2.56789 18.0048 2.74355 18.038 2.91827 18.0223C3.093 18.0066 3.25989 17.9425 3.40025 17.8372L6.79958 15.2873C7.29084 14.9217 7.88687 14.7243 8.49923 14.7243C9.11159 14.7243 9.70763 14.9217 10.1989 15.2873L13.5982 17.8372Z" fill="#495057"/>
<path d="M12.7483 5.74907H4.24905C3.99859 5.74907 3.75839 5.64958 3.58128 5.47247C3.40418 5.29537 3.30469 5.05517 3.30469 4.80471C3.30469 4.55425 3.40418 4.31405 3.58128 4.13695C3.75839 3.95985 3.99859 3.86035 4.24905 3.86035H12.7483C12.9987 3.86035 13.2389 3.95985 13.416 4.13695C13.5931 4.31405 13.6926 4.55425 13.6926 4.80471C13.6926 5.05517 13.5931 5.29537 13.416 5.47247C13.2389 5.64958 12.9987 5.74907 12.7483 5.74907Z" fill="#495057"/>
</svg>
`;
  const shareSvg = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 14C16.5 14 15.6 14.5 14.9 15.2L10.8 13.2C10.9 12.8 11 12.4 11 12C11 11.4 10.9 10.8 10.7 10.2L14.3 7.9C15 8.6 15.9 9 17 9C19.2 9 21 7.2 21 5C21 2.8 19.2 1 17 1C14.8 1 13 2.8 13 5C13 5.4 13.1 5.8 13.2 6.2L9.6 8.5C8.7 7.6 7.4 7 6 7C3.2 7 1 9.2 1 12C1 14.8 3.2 17 6 17C7.6 17 9.1 16.2 10 15L14.1 17C14.1 17.2 14 17.4 14 17.5C14 19.4 15.6 21 17.5 21C19.4 21 21 19.4 21 17.5C21 15.6 19.4 14 17.5 14ZM17 3C18.1 3 19 3.9 19 5C19 6.1 18.1 7 17 7C15.9 7 15 6.1 15 5C15 3.9 15.9 3 17 3ZM6 15C4.3 15 3 13.7 3 12C3 10.3 4.3 9 6 9C7.7 9 9 10.3 9 12C9 13.7 7.7 15 6 15ZM17.5 19C16.7 19 16 18.3 16 17.5C16 16.7 16.7 16 17.5 16C18.3 16 19 16.7 19 17.5C19 18.3 18.3 19 17.5 19Z" fill="#495057" stroke="white" stroke-width="0.2"/>
</svg>

`;
  const pinSvg = `<svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.45 18.4286C2.85643 18.4286 0 15.5721 0 11.9786V4.60714C0 2.02714 2.02714 0 4.60714 0C7.18714 0 9.21429 2.02714 9.21429 4.60714V11.9786C9.21429 13.545 8.01643 14.7429 6.45 14.7429C4.88357 14.7429 3.68571 13.545 3.68571 11.9786V4.60714C3.68571 4.05429 4.05429 3.68571 4.60714 3.68571C5.16 3.68571 5.52857 4.05429 5.52857 4.60714V11.9786C5.52857 12.5314 5.89714 12.9 6.45 12.9C7.00286 12.9 7.37143 12.5314 7.37143 11.9786V4.60714C7.37143 3.04071 6.17357 1.84286 4.60714 1.84286C3.04071 1.84286 1.84286 3.04071 1.84286 4.60714V11.9786C1.84286 14.5586 3.87 16.5857 6.45 16.5857C9.03 16.5857 11.0571 14.5586 11.0571 11.9786V4.60714C11.0571 4.05429 11.4257 3.68571 11.9786 3.68571C12.5314 3.68571 12.9 4.05429 12.9 4.60714V11.9786C12.9 15.5721 10.0436 18.4286 6.45 18.4286Z" fill="#495057"/>
</svg>
`;
  const emojiSvg = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9004 9.21436C18.9004 14.1849 14.8709 18.2144 9.90039 18.2144C4.92983 18.2144 0.900391 14.1849 0.900391 9.21436C0.900391 4.24379 4.92983 0.214355 9.90039 0.214355C14.8709 0.214355 18.9004 4.24379 18.9004 9.21436ZM8.10039 6.51436C8.10039 6.0173 7.69744 5.61436 7.20039 5.61436C6.70334 5.61436 6.30039 6.0173 6.30039 6.51436V7.41436C6.30039 7.91143 6.70334 8.31435 7.20039 8.31435C7.69744 8.31435 8.10039 7.91143 8.10039 7.41436V6.51436ZM12.6004 5.61436C13.0975 5.61436 13.5004 6.0173 13.5004 6.51436V7.41436C13.5004 7.91143 13.0975 8.31435 12.6004 8.31435C12.1033 8.31435 11.7004 7.91143 11.7004 7.41436V6.51436C11.7004 6.0173 12.1033 5.61436 12.6004 5.61436ZM5.61374 11.2394C5.42734 10.9165 5.01452 10.8059 4.69167 10.9923C4.36882 11.1787 4.2582 11.5915 4.4446 11.9144C4.99754 12.872 5.79284 13.6674 6.75056 14.2203C7.70828 14.7733 8.79465 15.0644 9.90057 15.0644C11.0064 15.0644 12.0929 14.7733 13.0506 14.2203C14.0083 13.6674 14.8036 12.872 15.3566 11.9144C15.5429 11.5915 15.4323 11.1787 15.1094 10.9923C14.7866 10.8059 14.3738 10.9165 14.1874 11.2394C13.7529 11.9918 13.1281 12.6167 12.3756 13.0511C11.6231 13.4857 10.7694 13.7144 9.90057 13.7144C9.03162 13.7144 8.17806 13.4857 7.42556 13.0511C6.67306 12.6167 6.04818 11.9918 5.61374 11.2394Z" fill="#212529"/>
</svg>
`;
  const photoSvg = `<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5669 4.63697L17.5313 12.0412C17.5055 12.4325 17.3952 12.8134 17.2079 13.1579C17.0206 13.5023 16.7609 13.8021 16.4466 14.0364C16.407 14.0639 16.3608 14.0802 16.3128 14.0836C16.2647 14.087 16.2167 14.0775 16.1736 14.0559C16.1306 14.0344 16.0941 14.0017 16.068 13.9612C16.0419 13.9207 16.0272 13.874 16.0254 13.8259V6.4121C16.0701 5.9287 16.0078 5.4414 15.8428 4.98484C15.6778 4.52828 15.4142 4.11369 15.0708 3.77054C14.7274 3.4274 14.3127 3.16413 13.856 2.99946C13.3993 2.8348 12.912 2.77278 12.4286 2.81783H4.30632C4.04743 2.81783 4.04138 2.58482 4.05951 2.48127C4.13236 1.77927 4.47674 1.13355 5.01913 0.681974C5.32536 0.476714 5.6696 0.334848 6.03153 0.264744C6.39347 0.19464 6.76578 0.197715 7.1265 0.273789L16.2403 1.55099C16.6092 1.57782 16.969 1.67823 17.2985 1.8463C17.628 2.01437 17.9204 2.2467 18.1587 2.52959C18.3644 2.83564 18.5065 3.17987 18.5766 3.54187C18.6467 3.90387 18.6434 4.27626 18.5669 4.63697ZM14.7284 6.4121V13.8923C14.7729 14.2048 14.7441 14.5233 14.6442 14.8227C14.5444 15.1221 14.3763 15.3942 14.1532 15.6174C13.9302 15.8407 13.6582 16.009 13.3589 16.109C13.0596 16.209 12.7411 16.2381 12.4286 16.1939H3.22243C2.90978 16.2386 2.59101 16.2099 2.29137 16.11C1.99174 16.0102 1.71947 15.8419 1.49614 15.6186C1.27281 15.3953 1.10456 15.123 1.00471 14.8234C0.904864 14.5237 0.876164 14.205 0.920885 13.8923V6.4121C0.876462 6.09958 0.905385 5.781 1.00537 5.4816C1.10535 5.18219 1.27364 4.91016 1.49693 4.68703C1.72022 4.46391 1.99238 4.29582 2.29186 4.19606C2.59135 4.09631 2.90994 4.06762 3.22243 4.11228H12.4286C12.7409 4.06792 13.0593 4.09683 13.3586 4.19672C13.6579 4.29661 13.9298 4.46474 14.1529 4.68782C14.3759 4.91091 14.5441 5.18283 14.644 5.48209C14.7439 5.78135 14.7728 6.09974 14.7284 6.4121ZM2.21534 6.4121V12.6065L3.45198 11.3699C3.52314 11.2981 3.60783 11.2411 3.70114 11.2022C3.79446 11.1633 3.89455 11.1432 3.99565 11.1432C4.09674 11.1432 4.19684 11.1633 4.29015 11.2022C4.38347 11.2411 4.46815 11.2981 4.53932 11.3699L5.25558 12.0861C5.32849 12.1567 5.42597 12.1961 5.52742 12.1961C5.62887 12.1961 5.72635 12.1567 5.79925 12.0861L9.58769 8.29769C9.73351 8.1566 9.92846 8.07772 10.1314 8.07772C10.3343 8.07772 10.5292 8.1566 10.675 8.29769L13.4365 11.0661V6.4121C13.4365 5.59314 13.2475 5.40501 12.4286 5.40501H3.22243C2.40347 5.40674 2.21534 5.59314 2.21534 6.4121ZM4.80425 8.85862C5.03312 8.85862 5.25262 8.7677 5.41446 8.60586C5.5763 8.44402 5.66722 8.22452 5.66722 7.99565C5.66722 7.76677 5.5763 7.54727 5.41446 7.38543C5.25262 7.2236 5.03312 7.13268 4.80425 7.13268H4.79907C4.5702 7.13359 4.35106 7.22539 4.18987 7.38787C4.02868 7.55036 3.93864 7.77022 3.93955 7.9991C3.94047 8.22797 4.03227 8.44711 4.19475 8.6083C4.35724 8.76949 4.5771 8.85953 4.80598 8.85862H4.80425Z" fill="#212529"/>
</svg>
`;

  return (
    <div className="flex flex-col">
      {/* like save share */}
      <div className="py-6 w-full flex flex-row justify-around border-b">
        <PostInteractionButtons
          count={`5k`}
          svgIcon={likeSvg}
          countColor="text-green-600"
          interactionTitle="Relevant"
        />
        <PostInteractionButtons
          count={`5k`}
          svgIcon={disLikeSvg}
          countColor="text-red-600"
          interactionTitle="Not Relevant"
        />
        <PostInteractionButtons
          count={`5k`}
          svgIcon={commentSvg}
          countColor="text-black"
          interactionTitle="Not Relevant"
        />
        <PostInteractionButtons
          count={""}
          svgIcon={saveSvg}
          countColor="text-black"
          interactionTitle="Save"
        />
        <PostInteractionButtons
          count={""}
          svgIcon={shareSvg}
          countColor="text-black"
          interactionTitle="Share"
        />
      </div>

      {/* comment */}
      <div className="pt-6 pb-0 w-full flex flex-row justify-center items-center ">
        <div className="flex flex-row gap-2 items-center w-full h-10 bg-gray-100 rounded-md p-3 justify-between">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-gray-100 outline-none"
          />

          {/* Options */}
          <div className="flex gap-3 items-center">
            <span dangerouslySetInnerHTML={{ __html: pinSvg }}  className="cursor-pointer"/>
            <div className="h-4 w-0.5 bg-gray-300 rounded-full"></div>
            <span dangerouslySetInnerHTML={{ __html: emojiSvg }} className="cursor-pointer" />
            <div className="h-4 w-0.5 bg-gray-300 rounded-full"></div>
            <span dangerouslySetInnerHTML={{ __html: photoSvg }} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementBar;
