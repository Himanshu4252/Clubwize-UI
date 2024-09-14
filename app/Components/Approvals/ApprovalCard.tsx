import React from "react";
import PostCardHeader from "../NewsFeed/PostCard/PostCardHeader/PostCardHeader";

const ApprovalCard = () => {
    var  threeDotMenus = {
        "Send a message": "#",
        "View Profile": "#",
        "Report ": "#",
      };
  return (
    <div className="flex flex-col bg-white p-4 rounded-md shadow-md">
      <PostCardHeader  threeDotLinks={threeDotMenus} />

      <div className="flex flex-col gap-6 p-4 text-sm">
        <p className="font-medium">
          Creating a code of conduct for a social media group is essential to
          maintain a positive and respectful online community. Here are some
          general rules and guidelines you might consider.
        </p>
        <p className="text-gray-600">
          Creating a code of conduct for a social media group is essential to
          maintain a positive and respectful online community. Here are some
          general rules and guidelines you might consider. see more
        </p>
      </div>

      <hr />

      <div className="inline-flex justify-end items-center gap-4 mt-4">
        <div className=" inline-flex py-1 px-6 gap-2 items-center border rounded-md border-red-500 text-red-500 cursor-pointer hover:bg-red-100">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.682992 0.682993C0.800196 0.565823 0.959139 0.500001 1.12487 0.500001C1.29059 0.500001 1.44954 0.565823 1.56674 0.682993L5.49987 4.61612L9.43299 0.682993C9.49065 0.623299 9.55961 0.575685 9.63586 0.542929C9.71212 0.510174 9.79413 0.492932 9.87712 0.492211C9.9601 0.49149 10.0424 0.507304 10.1192 0.538729C10.196 0.570155 10.2658 0.616563 10.3245 0.675246C10.3832 0.733929 10.4296 0.803711 10.461 0.880521C10.4924 0.957332 10.5082 1.03963 10.5075 1.12262C10.5068 1.20561 10.4896 1.28762 10.4568 1.36387C10.424 1.44012 10.3764 1.50909 10.3167 1.56674L6.38362 5.49987L10.3167 9.43299C10.4306 9.55087 10.4936 9.70875 10.4922 9.87262C10.4907 10.0365 10.425 10.1932 10.3091 10.3091C10.1932 10.425 10.0365 10.4907 9.87262 10.4922C9.70874 10.4936 9.55087 10.4306 9.43299 10.3167L5.49987 6.38362L1.56674 10.3167C1.44887 10.4306 1.29099 10.4936 1.12712 10.4922C0.963243 10.4907 0.806485 10.425 0.690605 10.3091C0.574725 10.1932 0.508994 10.0365 0.50757 9.87262C0.506146 9.70875 0.569143 9.55087 0.682992 9.43299L4.61612 5.49987L0.682992 1.56674C0.565822 1.44954 0.5 1.2906 0.5 1.12487C0.5 0.95914 0.565822 0.800197 0.682992 0.682993Z"
              fill="#DC3545"
            />
          </svg>
          Reject{" "}
        </div>
        <div className=" inline-flex py-1 px-6 gap-2 items-center border rounded-md border-green-500 text-green-500 cursor-pointer hover:bg-green-100">
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8243 0.699426C11.59 0.433525 11.2101 0.433525 10.9757 0.699426L3.78737 8.85645L1.02428 5.72105C0.789972 5.45515 0.410097 5.45518 0.175746 5.72105C-0.058582 5.98693 -0.058582 6.41799 0.175746 6.68389L3.3631 10.3007C3.59734 10.5665 3.97749 10.5664 4.21163 10.3007L11.8243 1.66229C12.0586 1.39641 12.0586 0.965328 11.8243 0.699426Z" fill="#22B573"/>
</svg>

          Accept{" "}
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
