const SharePost = () => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          分享文章
        </h4>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="social share"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-meta text-white duration-300 ease-in-out hover:bg-opacity-90"
            >
              <svg
                className="fill-current"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3442 0H1.12455C0.499798 0 0 0.497491 0 1.11936V14.3029C0 14.8999 0.499798 15.4222 1.12455 15.4222H14.2942C14.919 15.4222 15.4188 14.9247 15.4188 14.3029V1.09448C15.4688 0.497491 14.969 0 14.3442 0ZM4.57316 13.1089H2.29907V5.7709H4.57316V13.1089ZM3.42362 4.75104C2.67392 4.75104 2.09915 4.15405 2.09915 3.43269C2.09915 2.71133 2.69891 2.11434 3.42362 2.11434C4.14833 2.11434 4.74809 2.71133 4.74809 3.43269C4.74809 4.15405 4.19831 4.75104 3.42362 4.75104ZM13.1947 13.1089H10.9206V9.55183C10.9206 8.7061 10.8956 7.58674 9.72108 7.58674C8.52156 7.58674 8.34663 8.53198 8.34663 9.47721V13.1089H6.07255V5.7709H8.29665V6.79076H8.32164C8.64651 6.19377 9.37122 5.59678 10.4958 5.59678C12.8198 5.59678 13.2447 7.08925 13.2447 9.12897V13.1089H13.1947Z"
                  fill=""
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="social share"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1877F2] text-white duration-300 ease-in-out hover:bg-opacity-90"
            >
              <svg
                className="fill-current"
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.83947 11.2501L9.26553 7.86889H6.00006V5.62918C6.00006 4.66936 6.48884 3.73347 7.9472 3.73347H9.40994V0.928472C9.40994 0.928472 8.07467 0.708344 6.79758 0.708344C4.15506 0.708344 2.50006 2.20209 2.50006 5.25347V7.86889H-0.390625V11.2501H2.50006V19.7918H6.00006V11.2501H8.83947Z"
                  fill=""
                />
              </svg>
            </a>

            <a
              href="#"
              aria-label="social share"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#14171A] text-white duration-300 ease-in-out hover:bg-opacity-90"
            >
              <svg
                className="fill-current"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9968 1.68172C15.4077 1.93015 14.7825 2.10437 14.1281 2.19671C14.7962 1.79568 15.3156 1.16871 15.5597 0.42652C14.9344 0.80421 14.2397 1.07931 13.5156 1.23671C12.9156 0.616827 12.0844 0.25 11.1781 0.25C9.43125 0.25 8.01562 1.66562 8.01562 3.41249C8.01562 3.65624 8.04375 3.89531 8.09531 4.12499C5.29375 3.97968 2.82812 2.72499 1.15312 0.809365C0.884375 1.24374 0.73125 1.75937 0.73125 2.31249C0.73125 3.35624 1.26562 4.27499 2.07812 4.79999C1.58437 4.78437 1.11875 4.64687 0.71875 4.41562V4.45312C0.71875 5.98437 1.80937 7.26562 3.27187 7.55624C3.01562 7.62499 2.74375 7.65937 2.4625 7.65937C2.26562 7.65937 2.075 7.63906 1.89062 7.60312C2.275 8.86249 3.44062 9.79374 4.8125 9.82187C3.73125 10.6844 2.38437 11.1906 0.921875 11.1906C0.671875 11.1906 0.425 11.175 0.1875 11.1437C1.57812 12.0594 3.21875 12.5781 4.98437 12.5781C11.1719 12.5781 14.5469 7.71562 14.5469 3.77187C14.5469 3.63437 14.5437 3.49999 14.5375 3.36562C15.1719 2.91562 15.7219 2.34374 16.1562 1.68749L15.9968 1.68172Z"
                  fill=""
                />
              </svg>
            </a>
          </div>

          <div>
            <p>分享</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharePost;
