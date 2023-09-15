import { useReadLocalStorage } from 'usehooks-ts';

export default function DownloadIcon() {
  const isDarkMode = useReadLocalStorage('darkMode');

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_894_4190)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.9999 0.900024C9.37269 0.900024 9.6749 1.20223 9.6749 1.57502V9.48333L11.4671 7.82903C11.741 7.57617 12.168 7.59326 12.4209 7.86719C12.6738 8.14111 12.6567 8.56816 12.3827 8.82102L9.45774 11.521C9.19917 11.7597 8.80063 11.7597 8.54206 11.521L5.61706 8.82102C5.34313 8.56816 5.32605 8.14111 5.57891 7.86719C5.83177 7.59326 6.25881 7.57617 6.53274 7.82903L8.3249 9.48333V1.57502C8.3249 1.20223 8.62711 0.900024 8.9999 0.900024ZM1.5749 11.7C1.94769 11.7 2.2499 12.0022 2.2499 12.375V14.625C2.2499 15.2463 2.75358 15.75 3.3749 15.75H14.6249C15.2462 15.75 15.7499 15.2463 15.7499 14.625V12.375C15.7499 12.0022 16.0521 11.7 16.4249 11.7C16.7977 11.7 17.0999 12.0022 17.0999 12.375V14.625C17.0999 15.9919 15.9918 17.1 14.6249 17.1H3.3749C2.008 17.1 0.899902 15.9919 0.899902 14.625V12.375C0.899902 12.0022 1.20211 11.7 1.5749 11.7Z"
          fill={isDarkMode ? 'black' : 'white'}
        />
      </g>
      <defs>
        <clipPath id="clip0_894_4190">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
