'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var ethers = require('ethers');
var errors = require('../../../../dist/errors-54656a30.cjs.dev.js');
var normalizeChainId = require('../../../../dist/normalizeChainId-8778491e.cjs.dev.js');
var oauth = require('@magic-ext/oauth');
var magicSdk = require('magic-sdk');
var connect = require('@magic-ext/connect');
require('@thirdweb-dev/chains');
require('eventemitter3');

const MagicLogo = `
<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="65" height="65" rx="14" fill="#6851FF"/>
<path d="M32.9375 10C34.9919 12.3852 37.258 14.6002 39.7083 16.6194C38.0756 21.6391 37.1965 26.9723 37.1965 32.5C37.1965 38.0277 38.0756 43.3609 39.7083 48.3806C37.258 50.3997 34.9919 52.6149 32.9375 55C30.883 52.6149 28.617 50.3997 26.1666 48.3806C27.7994 43.3609 28.6784 38.0277 28.6784 32.5C28.6784 26.9723 27.7994 21.6391 26.1666 16.6194C28.617 14.6002 30.883 12.3852 32.9375 10Z" fill="white"/>
<path d="M21.4831 44.9102C18.8894 43.1868 16.1367 41.6639 13.25 40.365C14.0507 37.8772 14.4815 35.2363 14.4815 32.5C14.4815 29.7638 14.0507 27.123 13.25 24.635C16.1366 23.3361 18.8894 21.8132 21.4831 20.09C22.4749 24.074 22.9997 28.2288 22.9997 32.5C22.9997 36.7712 22.4749 40.9261 21.4831 44.9102Z" fill="white"/>
<path d="M42.8753 32.5C42.8753 36.7712 43.4001 40.9261 44.3919 44.9102C46.9856 43.1868 49.7384 41.6639 52.625 40.365C51.8242 37.8772 51.3935 35.2363 51.3935 32.5C51.3935 29.7638 51.8242 27.123 52.625 24.635C49.7384 23.3361 46.9856 21.8132 44.3919 20.09C43.4001 24.074 42.8753 28.2288 42.8753 32.5Z" fill="white"/>
</svg>
`;
const googleLogo = `
<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.5624 18.0934H42.75V18H22.5V27H35.2159C33.3607 32.2391 28.3759 36 22.5 36C15.0446 36 9 29.9554 9 22.5C9 15.0446 15.0446 9 22.5 9C25.9414 9 29.0722 10.2982 31.4561 12.4189L37.8202 6.05475C33.8017 2.30962 28.4265 0 22.5 0C10.0744 0 0 10.0744 0 22.5C0 34.9256 10.0744 45 22.5 45C34.9256 45 45 34.9256 45 22.5C45 20.9914 44.8447 19.5187 44.5624 18.0934Z" fill="#FBC02D"/>
<path d="M2.59421 12.0274L9.98658 17.4487C11.9868 12.4965 16.8311 9 22.5 9C25.9413 9 29.0722 10.2982 31.4561 12.4189L37.8202 6.05475C33.8017 2.30962 28.4265 0 22.5 0C13.8577 0 6.36296 4.87912 2.59421 12.0274Z" fill="#E53935"/>
<path d="M22.4998 45C28.3116 45 33.5923 42.7759 37.585 39.159L30.6212 33.2663C28.3622 34.9774 25.5542 36 22.4998 36C16.6476 36 11.6785 32.2684 9.80646 27.0608L2.46921 32.7139C6.19296 40.0005 13.7552 45 22.4998 45Z" fill="#4CAF50"/>
<path d="M44.5621 18.0934L44.5441 18H42.7498H22.4998V27H35.2156C34.3246 29.5166 32.7058 31.6867 30.6178 33.2674C30.6189 33.2662 30.62 33.2662 30.6211 33.2651L37.5849 39.1579C37.0921 39.6056 44.9998 33.75 44.9998 22.5C44.9998 20.9914 44.8445 19.5187 44.5621 18.0934Z" fill="#1565C0"/>
</svg>
`;
const twitchLogo = `
<svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5104 45C34.9368 45 45.0104 34.9264 45.0104 22.5C45.0104 10.0736 34.9368 0 22.5104 0C10.084 0 0.010437 10.0736 0.010437 22.5C0.010437 34.9264 10.084 45 22.5104 45Z" fill="#6441A4"/>
<path d="M13.2204 12.2168L11.7526 16.1323V31.7813H17.1315V34.7168H20.0671L22.9982 31.7813H27.4016L33.2683 25.9146V12.2168H13.2204ZM15.176 14.1724H31.3171V24.9346L27.8937 28.3579H22.5104L19.5793 31.2891V28.3579H15.176V14.1724ZM20.5549 23.9546H22.5104V18.0879H20.5549V23.9546ZM25.9338 23.9546H27.8893V18.0879H25.9338V23.9546Z" fill="white"/>
</svg>
`;
const discordLogo = `
<svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5208 45C34.9473 45 45.0208 34.9264 45.0208 22.5C45.0208 10.0736 34.9473 0 22.5208 0C10.0944 0 0.0208435 10.0736 0.0208435 22.5C0.0208435 34.9264 10.0944 45 22.5208 45Z" fill="#586CF5"/>
<path d="M31.9325 13.8447C30.2018 13.0504 28.3451 12.4653 26.4045 12.1302C26.3693 12.124 26.3341 12.1401 26.3156 12.1722C26.0767 12.5968 25.8126 13.1504 25.6274 13.5861C23.5399 13.2738 21.4629 13.2738 19.4186 13.5861C19.2334 13.1411 18.9593 12.5968 18.7192 12.1722C18.7007 12.1407 18.6655 12.1247 18.6303 12.1302C16.6903 12.4641 14.8343 13.0492 13.1023 13.8447C13.0875 13.8508 13.0745 13.8619 13.0659 13.8761C9.54515 19.1356 8.5804 24.266 9.05382 29.3322C9.05567 29.3569 9.06987 29.381 9.089 29.3958C11.4117 31.1016 13.6622 32.1372 15.8706 32.8235C15.9058 32.834 15.9435 32.8216 15.9657 32.792C16.4879 32.0786 16.9539 31.3269 17.3533 30.5357C17.3767 30.4894 17.3545 30.4345 17.3063 30.4159C16.5675 30.1357 15.8645 29.7945 15.188 29.4063C15.1343 29.3748 15.13 29.2983 15.1793 29.2619C15.3219 29.1551 15.4639 29.044 15.6003 28.9323C15.625 28.9119 15.6589 28.9076 15.6879 28.9206C20.1327 30.9498 24.9447 30.9498 29.337 28.9206C29.366 28.9064 29.4 28.9107 29.4259 28.9311C29.5617 29.0434 29.7043 29.1551 29.8475 29.2619C29.8968 29.2983 29.8938 29.3748 29.8401 29.4063C29.1636 29.8019 28.4599 30.1357 27.7205 30.4147C27.6723 30.4332 27.6507 30.4888 27.6742 30.5357C28.0822 31.3256 28.5476 32.0773 29.0605 32.7908C29.0821 32.821 29.1204 32.834 29.1555 32.8228C31.3745 32.1366 33.625 31.101 35.9477 29.3952C35.968 29.3803 35.981 29.3575 35.9829 29.3328C36.5489 23.4754 35.0342 18.3876 31.9677 13.8768C31.9603 13.8619 31.9473 13.8508 31.9325 13.8447ZM18.0168 26.247C16.6786 26.247 15.5762 25.0189 15.5762 23.51C15.5762 22.001 16.6576 20.7729 18.0168 20.7729C19.3871 20.7729 20.479 22.0121 20.4574 23.51C20.458 25.0183 19.3766 26.247 18.0168 26.247ZM27.0415 26.247C25.7033 26.247 24.6009 25.0189 24.6009 23.51C24.6009 22.001 25.6823 20.7729 27.0415 20.7729C28.4118 20.7729 29.5037 22.0121 29.4821 23.51C29.4821 25.0183 28.4118 26.247 27.0415 26.247Z" fill="white"/>
</svg>
`;
const bitbucketLogo = `
<svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5313 45C34.9577 45 45.0313 34.9264 45.0313 22.5C45.0313 10.0736 34.9577 0 22.5313 0C10.1049 0 0.0312805 10.0736 0.0312805 22.5C0.0312805 34.9264 10.1049 45 22.5313 45Z" fill="#0052CC"/>
<path d="M12.0107 12.3882C11.6151 12.3838 11.2856 12.7002 11.2812 13.1001C11.2812 13.144 11.2812 13.1836 11.2899 13.2275L14.3485 31.7988C14.4276 32.2646 14.8319 32.6118 15.3065 32.6162H29.9843C30.3402 32.6206 30.6479 32.3613 30.705 32.0098L33.7724 13.2275C33.8383 12.8364 33.5702 12.4673 33.1791 12.4014C33.1352 12.3926 33.0956 12.3926 33.0561 12.3926L12.0107 12.3882ZM24.8954 25.8091H20.2065L18.9408 19.1865H26.0292L24.8954 25.8091Z" fill="white"/>
</svg>
`;
const linkedinLogo = `
<svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5417 45C34.9681 45 45.0417 34.9264 45.0417 22.5C45.0417 10.0736 34.9681 0 22.5417 0C10.1153 0 0.0417023 10.0736 0.0417023 22.5C0.0417023 34.9264 10.1153 45 22.5417 45Z" fill="#0A66C2"/>
<path d="M30.5001 30.4629H27.1602V25.2334C27.1602 23.9854 27.1339 22.3813 25.42 22.3813C23.6798 22.3813 23.4117 23.7393 23.4117 25.1411V30.4629H20.0719V19.7051H23.2799V21.1729H23.3238C23.772 20.3291 24.8619 19.437 26.4879 19.437C29.8717 19.437 30.4957 21.665 30.4957 24.561L30.5001 30.4629ZM16.3057 18.2329C15.2291 18.2329 14.3678 17.3628 14.3678 16.2949C14.3678 15.2271 15.2335 14.3569 16.3057 14.3569C17.378 14.3569 18.2437 15.2271 18.2437 16.2949C18.2437 17.3628 17.3736 18.2329 16.3057 18.2329ZM17.9801 30.4629H14.6314V19.7051H17.9801V30.4629ZM32.17 11.25H12.9571C12.0387 11.25 11.2916 11.9751 11.2916 12.876V32.168C11.2916 33.0645 12.0343 33.7939 12.9571 33.7939H32.1656C33.0841 33.7939 33.8355 33.0688 33.8355 32.168V12.876C33.8355 11.9751 33.0841 11.25 32.17 11.25V11.25Z" fill="white"/>
</svg>
`;
const appleLogo = `
<svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5521 45C34.9785 45 45.0521 34.9264 45.0521 22.5C45.0521 10.0736 34.9785 0 22.5521 0C10.1257 0 0.0521393 10.0736 0.0521393 22.5C0.0521393 34.9264 10.1257 45 22.5521 45Z" fill="#999999"/>
<path d="M17.9465 31.7329C17.5026 31.4385 17.1115 31.0737 16.7819 30.6563C16.4216 30.2212 16.092 29.7642 15.7844 29.2939C15.0681 28.2437 14.5056 27.0967 14.1144 25.8882C13.6442 24.4819 13.4201 23.1328 13.4201 21.8145C13.4201 20.3423 13.7365 19.0591 14.3605 17.9824C14.8176 17.1387 15.5031 16.4355 16.3293 15.939C17.1247 15.4424 18.0519 15.1699 18.9924 15.1523C19.322 15.1523 19.6779 15.2007 20.0515 15.293C20.3239 15.3677 20.6491 15.4907 21.0534 15.6401C21.5676 15.8379 21.8488 15.9565 21.9455 15.9873C22.2443 16.1016 22.4992 16.1455 22.697 16.1455C22.8464 16.1455 23.0617 16.0972 23.3034 16.0225C23.4396 15.9741 23.6989 15.8906 24.0637 15.7324C24.424 15.6006 24.714 15.4907 24.9382 15.4028C25.2853 15.3018 25.6193 15.2051 25.9225 15.1611C26.2873 15.104 26.652 15.0864 26.9992 15.1128C27.6628 15.1611 28.2736 15.3018 28.8185 15.5083C29.7722 15.8906 30.5456 16.4927 31.1213 17.3452C30.8796 17.4946 30.6511 17.6704 30.4401 17.8594C29.9831 18.2637 29.5964 18.7383 29.2888 19.27C28.8845 19.9907 28.6779 20.8081 28.6867 21.6299C28.6999 22.645 28.9592 23.5371 29.4733 24.3105C29.8381 24.873 30.3215 25.3564 30.9103 25.7476C31.2004 25.9453 31.4553 26.0815 31.697 26.1694C31.5827 26.521 31.4597 26.8638 31.319 27.2021C30.9938 27.958 30.6071 28.6831 30.1457 29.3687C29.7414 29.9575 29.4206 30.4014 29.1789 30.6914C28.801 31.1397 28.4406 31.478 28.0715 31.7197C27.6672 31.9878 27.197 32.1284 26.7092 32.1284C26.3796 32.1416 26.0544 32.1021 25.7424 32.0098C25.4699 31.9219 25.2018 31.8208 24.9382 31.7065C24.6657 31.5791 24.3801 31.4736 24.09 31.3901C23.7341 31.2979 23.3693 31.2495 23.0002 31.2539C22.6266 31.2539 22.2619 31.3022 21.9147 31.3901C21.6247 31.4736 21.3434 31.5747 21.0666 31.6934C20.6711 31.856 20.4162 31.9658 20.2668 32.0098C19.9636 32.0977 19.6515 32.1548 19.3395 32.1724C18.8517 32.1724 18.3991 32.0317 17.9465 31.7505V31.7329ZM24.3669 14.436C23.7297 14.7524 23.1232 14.8887 22.5168 14.8447C22.4245 14.2383 22.5168 13.6187 22.7717 12.9375C22.9958 12.3574 23.2946 11.8301 23.7077 11.3643C24.1384 10.8765 24.6525 10.4722 25.237 10.1821C25.8566 9.86572 26.4455 9.69434 27.008 9.66797C27.0827 10.3052 27.008 10.9336 26.7751 11.606C26.5598 12.2036 26.2433 12.7573 25.839 13.2539C25.4304 13.7417 24.925 14.146 24.3537 14.436H24.3669Z" fill="white"/>
</svg>
`;
const twitterLogo = `
<svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5626 45C34.989 45 45.0626 34.9264 45.0626 22.5C45.0626 10.0736 34.989 0 22.5626 0C10.1362 0 0.062561 10.0736 0.062561 22.5C0.062561 34.9264 10.1362 45 22.5626 45Z" fill="#1DA1F2"/>
<path d="M34.2521 15.5918C33.4259 15.9565 32.5426 16.2026 31.611 16.3169C32.5602 15.7456 33.2897 14.8447 33.6325 13.7725C32.7448 14.291 31.756 14.6689 30.7101 14.8799C29.8708 13.9834 28.6799 13.4209 27.3527 13.4209C24.8127 13.4209 22.7516 15.4819 22.7516 18.0176C22.7516 18.3823 22.7956 18.7339 22.8703 19.0679C19.047 18.8877 15.6545 17.0508 13.3869 14.2734C12.987 14.9502 12.7629 15.7324 12.7629 16.5894C12.7629 18.189 13.5759 19.5952 14.8107 20.4214C14.0549 20.395 13.3473 20.1885 12.7277 19.8457V19.9028C12.7277 22.1353 14.3097 23.9941 16.4191 24.416C16.0324 24.5215 15.6237 24.5742 15.2062 24.5742C14.9118 24.5742 14.6305 24.5479 14.3493 24.4951C14.9382 26.3232 16.6344 27.6548 18.6559 27.6899C17.0871 28.9248 15.092 29.6587 12.9518 29.6587C12.5871 29.6587 12.2223 29.6367 11.8576 29.5972C13.9054 30.9023 16.318 31.6626 18.924 31.6626C27.3835 31.6626 32.0109 24.6533 32.0109 18.5845C32.0109 18.3911 32.0109 18.1934 31.9977 17.9956C32.8942 17.3496 33.6808 16.5366 34.2961 15.6138L34.2521 15.5918Z" fill="white"/>
</svg>
`;
const facebookLogo = `
<svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.573 0C10.1462 0 0.0729866 10.0783 0.0729866 22.5114C0.0729866 33.7986 8.37436 43.1442 19.2025 44.7717C20.3016 44.9372 21.4277 41.646 22.573 41.646C23.6069 41.646 24.625 44.9529 25.6229 44.8179C36.6074 43.3287 45.073 33.91 45.073 22.5114C45.073 10.0783 34.9997 0 22.573 0Z" fill="url(#paint0_linear_4_56)"/>
<path opacity="0.05" d="M26.7561 19.3289C26.7561 17.7277 27.0989 15.8196 28.731 15.8196H33.5454L33.5443 9.50388L33.4881 8.54589L32.5371 8.41771C31.8537 8.32551 30.4317 8.13324 27.8093 8.13324C21.5494 8.13324 18.1019 11.8606 18.1019 18.6284V21.4371H12.5401V29.598H18.1019V44.5502C19.552 44.8437 21.0526 45 22.5892 45C24.0145 45 25.4038 44.8527 26.7561 44.5986V29.5969H32.4135L33.6747 21.436H26.7561V19.3289Z" fill="black"/>
<path opacity="0.05" d="M26.1865 19.3091C26.1865 17.7867 26.5164 15.2346 28.7275 15.2346H32.9865V9.50924L32.9572 9.01412L32.4697 8.94773C31.7976 8.85659 30.4005 8.66754 27.8055 8.66754C21.8127 8.66754 18.6458 12.1052 18.6458 18.6081V21.9816H13.0741V29.0235H18.6447V44.6354C19.9236 44.8605 21.2318 45 22.576 45C23.8077 45 25.0078 44.874 26.1865 44.6838V29.0224H31.9327L33.0214 21.9805H26.1854V19.3091H26.1865Z" fill="black"/>
<path d="M25.6374 28.4741H31.4564L32.3704 22.5626H25.6374V19.3314C25.6374 16.876 26.4401 14.6982 28.7369 14.6982H32.4277V9.54002C31.7791 9.45233 30.4075 9.2612 27.8162 9.2612C22.4042 9.2612 19.2316 12.1191 19.2316 18.631V22.5637H13.6678V28.4752H19.2305V44.7493C20.3322 44.9134 21.4486 45 22.5942 45C23.6296 45 24.6403 44.9303 25.6374 44.7954V28.4741Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_4_56" x1="6.81511" y1="6.74553" x2="41.2823" y2="41.1953" gradientUnits="userSpaceOnUse">
<stop stop-color="#2AA4F4"/>
<stop offset="1" stop-color="#007AD9"/>
</linearGradient>
</defs>
</svg>
`;
const githubLogo = `
<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 22.5C0 10.0736 10.0736 0 22.5 0V0C34.9264 0 45 10.0736 45 22.5V22.5C45 34.9264 34.9264 45 22.5 45V45C10.0736 45 0 34.9264 0 22.5V22.5Z" fill="black"/>
<rect x="7" y="4" width="31" height="32" rx="15.5" fill="white"/>
<path d="M22.3626 4.00406C13.3264 4.00406 6 11.2809 6 20.2562C6 27.4376 10.6879 33.5281 17.19 35.6774C18.0081 35.8277 18.3088 35.3239 18.3088 34.8953L18.3088 34.8912C18.3087 34.4984 18.2924 33.2227 18.2863 31.8703C13.7334 32.8536 12.7741 29.9526 12.7741 29.9526C12.0296 28.0734 10.9579 27.5737 10.9579 27.5737C9.47296 26.564 11.0704 26.5864 11.0704 26.5864C12.7128 26.7001 13.5779 28.2603 13.5779 28.2603C15.0383 30.7449 17.4068 30.0257 18.3395 29.6113C18.4867 28.561 18.9101 27.8439 19.3785 27.4376C15.7439 27.0272 11.9233 25.6336 11.9233 19.405C11.9233 17.6315 12.5635 16.181 13.6086 15.0433C13.4389 14.6329 12.8784 12.9813 13.7661 10.7426C13.7661 10.7426 15.1406 10.3058 18.2679 12.4084C19.5728 12.0489 20.9718 11.8681 22.3626 11.862C23.7534 11.8681 25.1545 12.0489 26.4614 12.4084C29.5847 10.3058 30.9571 10.7426 30.9571 10.7426C31.8468 12.9813 31.2884 14.635 31.1187 15.0433C32.1679 16.181 32.802 17.6315 32.802 19.405C32.802 25.6478 28.9731 27.0211 25.3304 27.4234C25.9174 27.9272 26.441 28.9165 26.441 30.432C26.441 32.6058 26.4226 34.3569 26.4226 34.8912C26.4226 35.3239 26.7171 35.8298 27.5475 35.6713C34.0455 33.5199 38.7273 27.4295 38.7273 20.2521C38.7273 11.2769 31.4009 4 22.3647 4L22.3626 4.00406Z" fill="black"/>
</svg>

`;
const gitlabLogo = `
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.5 48C35.9264 48 46 37.9264 46 25.5C46 13.0736 35.9264 3 23.5 3C11.0736 3 1 13.0736 1 25.5C1 37.9264 11.0736 48 23.5 48Z" fill="#E8E8E8"/>
<path d="M24 39L18.2857 22.6579H29.7143L24 39Z" fill="#E53935"/>
<path d="M24 39L36.8571 22.6579H29.7143L24 39Z" fill="#FF7043"/>
<path d="M33.2857 12L36.8571 22.6579H29.7143L33.2857 12Z" fill="#E53935"/>
<path d="M24 39L36.8571 22.6579L39 28.3421L24 39Z" fill="#FFA726"/>
<path d="M24 39L11.1429 22.6579H18.2857L24 39Z" fill="#FF7043"/>
<path d="M14.7143 12L11.1429 22.6579H18.2857L14.7143 12Z" fill="#E53935"/>
<path d="M24 39L11.1429 22.6579L9 28.3421L24 39Z" fill="#FFA726"/>
</svg>
`;
const microsoftLogo = `
<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45Z" fill="#E8E8E8"/>
<path d="M20.7609 21.7391H10.7609L10.7609 11.7391L20.7609 11.7391V21.7391Z" fill="#FF5722"/>
<path d="M33.2609 21.7391H23.2609V11.7391L33.2609 11.7391V21.7391Z" fill="#4CAF50"/>
<path d="M33.2609 34.2391H23.2609V24.2391H33.2609V34.2391Z" fill="#FFC107"/>
<path d="M20.7609 34.2391H10.7609L10.7609 24.2391H20.7609V34.2391Z" fill="#03A9F4"/>
</svg>
`;

const modalStyles = function () {
  let accentColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#6452f7";
  return `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');  
.Magic__formOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(6px);
    z-index: 2147483647;
  }
 .Magic__formOverlay.Magic__dark {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .Magic__formContainer {
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    text-align: center;
    gap: 30px;
    align-items: center;
    justify-content: start;
    position: fixed;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2s ease-in-out;
    width: min(400px, 90%);
    z-index: 9999;
    box-shadow: 0 12px 56px rgb(119 118 122 / 15%);
    border-radius: 30px;
    padding: 80px 20px;
    background-color: #fff;
  }
  .Magic__formContainer.Magic__dark {
    background-color: #333333;
    box-shadow: 0 12px 56px #00000021;
    color: white;
  }
  .Magic__closeButton {
    position: absolute;
    top: 0;
    right: 15px;
    padding: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 30px;
    color: #ccc;
    z-index: 9999;
  }
  .Magic__dark .Magic__closeButton {
    color: #555;
  }
  .Magic__formHeader{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
  }
  .Magic__customLogo{
    height: 80px;
    object-fit: contain;
  }
  .Magic__logoText{
    font-size: 22px;
    font-weight: bold;
    color: #333;
  }
  .Magic__dark .Magic__logoText{
    color: white;
  }
  .Magic__formBody{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 100%;
  }
  .Magic__formLabel{
    font-size: 17px;
    font-weight: 500;
  }
  .Magic__formInput {
    padding: 10px;
    width: 100%;
    height: 45px;
    max-width: 300px;
    text-align: center;
    margin-bottom: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: #D6D6D6;
    color: #333;
    font-size: 17px;
    font-weight: 400;
    border-radius: 10px;
    accent-color: ${accentColor};
    background-color: transparent;
  }
  .Magic__dark .Magic__formInput {
    border-color: #444;
    color: white;
  }
  .Magic__formInput::placeholder { 
    color: #D6D6D6;
    opacity: 1; 
  }
  .Magic__dark .Magic__formInput::placeholder {
    color: #555;
  }
  .Magic__divider {
      display: block;
      text-align: center;
      color: #D6D6D6;
      font-size: 14px;
  }
  .Magic__dark .Magic__divider {
    color: #444;
  }
  .Magic__submitButton {
    display: block;
    width: 100%;
    max-width: 300px;
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    color: white;
    margin-bottom: 10px;
    font-size: 17px;
    font-weight: 500;
    border-radius: 100px;
    background-color: ${accentColor};
  }
  .Magic__submitButton:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0 0)
  }
  .Magic__oauthButtonsContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 90%;
  }
  .Magic__oauthButton{
    display: block;
    padding: 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 100px;
  }
  .Magic__aloneOauthContainer > .Magic__oauthButton{
    width: 100%;
    max-width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border: 1px solid #D6D6D6;
    color: #333;
  }
  .Magic__dark .Magic__aloneOauthContainer > .Magic__oauthButton{
    border-color: #444;
    color: white;
  }
  .Magic__aloneOauthContainer .Magic__oauthButtonIcon > svg{
    width: 30px;
    margin-top: 5px;
  }
  .Magic__aloneOauthContainer .Magic__oauthButtonName{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    text-transform: capitalize;
  }
`;
};

const createModal = async props => {
  // INJECT FORM STYLES
  const style = document.createElement("style");
  style.innerHTML = modalStyles(props.accentColor);
  document.head.appendChild(style);

  // PROVIDERS FOR OAUTH BUTTONS
  const allProviders = [{
    name: "google",
    icon: googleLogo
  }, {
    name: "facebook",
    icon: facebookLogo
  }, {
    name: "apple",
    icon: appleLogo
  }, {
    name: "github",
    icon: githubLogo
  }, {
    name: "bitbucket",
    icon: bitbucketLogo
  }, {
    name: "gitlab",
    icon: gitlabLogo
  }, {
    name: "linkedin",
    icon: linkedinLogo
  }, {
    name: "twitter",
    icon: twitterLogo
  }, {
    name: "discord",
    icon: discordLogo
  }, {
    name: "twitch",
    icon: twitchLogo
  }, {
    name: "microsoft",
    icon: microsoftLogo
  }];

  // make providers included in oauthProviders
  const providers = props.oauthProviders?.map(provider => {
    return allProviders.find(p => p.name === provider);
  }).filter(p => p !== undefined);
  const phoneNumberRegex = `(\\+|00)[0-9]{1,3}[0-9]{4,14}(?:x.+)?$`;
  const emailRegex = `^([a-zA-Z0-9_.-])+(\\+[a-zA-Z0-9-]+)?@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})`;

  // MODAL HTML
  const modal = `
    <div class="Magic__formContainer ${props.isDarkMode ? `Magic__dark` : ``}" id="MagicModalBody">
      <button class="Magic__closeButton" id="MagicCloseBtn">&times;</button>
      <div class="Magic__formHeader">
        ${props.customLogo ? `<img class="Magic__customLogo" src="${props.customLogo}" />` : `<div class="Magic__logo">${MagicLogo}</div>`}
        <h1 class='Magic__logoText'> ${props.customHeaderText || "Magic"} </h1>

        <form class="Magic__formBody" id="MagicForm">
          ${props.enableSMSLogin && props.enableEmailLogin ? `
               <label class="Magic__FormLabel">Sign-in with Phone or Email</label>
               <input class="Magic__formInput" id="MagicFormInput" required pattern = "${emailRegex}|${phoneNumberRegex}" placeholder="Phone or Email" />
               ` : props.enableEmailLogin ? `
               <label class="Magic__FormLabel">Sign-in with Email</label>
               <input class="Magic__formInput" id="MagicFormInput" required type="email" placeholder="address@example.com" />
               ` : props.enableSMSLogin ? `
                <label class="Magic__FormLabel">Sign-in with Phone</label>
                <input class="Magic__formInput" id="MagicFormInput" required type="tel" pattern="${phoneNumberRegex}" placeholder="+11234567890" />
              ` : ``}
          ${props.enableSMSLogin || props.enableEmailLogin ? ` <button class="Magic__submitButton" type="submit">
                Send login link
              </button>` : ``}
        </form>
        ${providers && providers.length > 0 && (props.enableSMSLogin || props.enableEmailLogin) ? `<div class="Magic__divider">
        &#9135;&#9135;&#9135; OR &#9135;&#9135;&#9135;
        </div>` : ``}
        <div class="${!props.enableEmailLogin && !props.enableSMSLogin ? `Magic__oauthButtonsContainer Magic__aloneOauthContainer` : `Magic__oauthButtonsContainer`}">
          ${providers?.map(provider => {
    return `
                <button class="Magic__oauthButton" id="MagicOauth${provider?.name}" data-provider="${provider?.name}" >
                  <span class="Magic__oauthButtonIcon">${provider?.icon}</span>
                  ${!props.enableSMSLogin && !props.enableEmailLogin ? `<span class="Magic__oauthButtonName">${provider?.name}</span>` : ``}
                </button>
              `;
  }).join("")}
        </div>
        ${!props.enableEmailLogin && !props.enableEmailLogin && providers?.length === 0 ? `<div>No Login Methods Configured 😥</div>` : ``}
      </div>
    </div>
  `;

  // ADD FORM TO BODY
  const overlay = document.createElement("div");
  overlay.classList.add("Magic__formOverlay");
  if (props.isDarkMode) {
    overlay.classList.add("Magic__dark");
  }
  document.body.appendChild(overlay);
  overlay.innerHTML = modal;
  const formBody = document.getElementById("MagicModalBody");
  setTimeout(() => {
    if (formBody) {
      formBody.style.transform = "translate(-50%, -50%) scale(1)";
    }
  }, 100);

  // FORM SUBMIT HANDLER
  const removeForm = () => {
    if (formBody) {
      formBody.style.transform = "translate(-50%, -50%) scale(0)";
    }
    setTimeout(() => {
      overlay.remove();
    }, 200);
  };
  return new Promise(resolve => {
    // FORM CLOSE BUTTON
    document.getElementById("MagicCloseBtn")?.addEventListener("click", () => {
      removeForm();
      resolve({
        email: "",
        phoneNumber: "",
        isGoogle: false,
        isDiscord: false
      });
    });

    // EMAIL FORM SUBMIT HANDLER
    document.getElementById("MagicForm")?.addEventListener("submit", e => {
      e.preventDefault();
      const formInputField = document.getElementById("MagicFormInput");
      const isFormValid = formInputField?.checkValidity();
      if (isFormValid) {
        let output;
        if (RegExp(phoneNumberRegex).test(formInputField.value)) {
          output = {
            phoneNumber: formInputField?.value
          };
        } else {
          output = {
            email: formInputField?.value
          };
        }
        removeForm();
        resolve(output);
      }
    });

    // OAUTH BUTTONS
    providers?.forEach(provider => {
      const oauthButton = document.getElementById(`MagicOauth${provider?.name}`);
      oauthButton?.addEventListener("click", () => {
        const output = {
          oauthProvider: provider?.name
        };
        removeForm();
        resolve(output);
      });
    });
  });
};

const IS_SERVER = typeof window === "undefined";
class MagicConnector extends errors.Connector {
  constructor(config) {
    super(config);
    defineProperty._defineProperty(this, "ready", !IS_SERVER);
    defineProperty._defineProperty(this, "id", "magic");
    defineProperty._defineProperty(this, "name", "Magic");
    defineProperty._defineProperty(this, "provider", void 0);
    defineProperty._defineProperty(this, "isModalOpen", false);
    defineProperty._defineProperty(this, "magicOptions", void 0);
    this.magicOptions = config.options;
  }
  async getAccount() {
    const provider = new ethers.providers.Web3Provider(await this.getProvider());
    const signer = provider.getSigner();
    const account = await signer.getAddress();
    return ethers.utils.getAddress(account);
  }
  async getUserDetailsByForm(enableSMSLogin, enableEmailLogin, oauthProviders) {
    const output = await createModal({
      accentColor: this.magicOptions.accentColor,
      isDarkMode: this.magicOptions.isDarkMode,
      customLogo: this.magicOptions.customLogo,
      customHeaderText: this.magicOptions.customHeaderText,
      enableSMSLogin: enableSMSLogin,
      enableEmailLogin: enableEmailLogin || true,
      oauthProviders
    });
    this.isModalOpen = false;
    return output;
  }
  async getProvider() {
    if (this.provider) {
      return this.provider;
    }
    const magic = this.getMagicSDK();
    this.provider = magic.rpcProvider;
    return this.provider;
  }
  async getSigner() {
    const provider = new ethers.providers.Web3Provider(await this.getProvider());
    return provider.getSigner();
  }
  async isAuthorized() {
    const magic = this.getMagicSDK();
    try {
      return await magic.user.isLoggedIn();
    } catch (e) {
      return false;
    }
  }
  onAccountsChanged(accounts) {
    if (accounts.length === 0) {
      this.emit("disconnect");
    } else {
      this.emit("change", {
        account: ethers.utils.getAddress(accounts[0])
      });
    }
  }
  onChainChanged(chainId) {
    const id = normalizeChainId.normalizeChainId(chainId);
    const unsupported = this.isChainUnsupported(id);
    this.emit("change", {
      chain: {
        id,
        unsupported
      }
    });
  }
  onDisconnect() {
    this.emit("disconnect");
  }
  async disconnect() {
    const magic = this.getMagicSDK();
    await magic.user.logout();
  }
}

class MagicAuthConnector extends MagicConnector {
  constructor(config) {
    super(config);
    defineProperty._defineProperty(this, "magicSDK", void 0);
    defineProperty._defineProperty(this, "magicSdkConfiguration", void 0);
    defineProperty._defineProperty(this, "enableSMSLogin", void 0);
    defineProperty._defineProperty(this, "enableEmailLogin", void 0);
    defineProperty._defineProperty(this, "oauthProviders", void 0);
    defineProperty._defineProperty(this, "oauthCallbackUrl", void 0);
    this.magicSdkConfiguration = config.options.magicSdkConfiguration || {};
    this.oauthProviders = config.options.oauthOptions?.providers || [];
    this.oauthCallbackUrl = config.options.oauthOptions?.callbackUrl;
    this.enableSMSLogin = config.options.enableSMSLogin || false;
    this.enableEmailLogin = config.options.enableEmailLogin || false;
  }
  async connect(_ref) {
    let {
      chainId
    } = _ref;
    // for a specific chainId we will overwrite the magicSDKConfiguration
    if (chainId) {
      const chain = this.chains.find(c => c.chainId === chainId);
      if (chain) {
        this.magicSdkConfiguration = {
          ...this.magicSdkConfiguration,
          network: {
            chainId: chain.chainId,
            rpcUrl: chain.rpc[0]
          }
        };
      }
    }
    try {
      const provider = await this.getProvider();
      this.setupListeners();

      // Check if there is a user logged in
      const isAuthenticated = await this.isAuthorized();

      // Check if we have a chainId, in case of error just assign 0 for legacy
      let chainId_;
      try {
        chainId_ = await this.getChainId();
      } catch (e) {
        chainId_ = 0;
      }

      // if there is a user logged in, return the user
      if (isAuthenticated) {
        return {
          provider,
          chain: {
            id: chainId_,
            unsupported: false
          },
          account: ethers.utils.getAddress(await this.getAccount())
        };
      }

      // open the modal and process the magic login steps
      if (!this.isModalOpen) {
        const output = await this.getUserDetailsByForm(this.enableSMSLogin, this.enableEmailLogin, this.oauthProviders);
        const magic = this.getMagicSDK();

        // LOGIN WITH MAGIC LINK WITH OAUTH PROVIDER
        if (output.oauthProvider) {
          await magic.oauth.loginWithRedirect({
            provider: output.oauthProvider,
            redirectURI: this.oauthCallbackUrl || window.location.href
          });
        }

        // LOGIN WITH MAGIC LINK WITH EMAIL
        if (output.email) {
          await magic.auth.loginWithMagicLink({
            email: output.email
          });
        }

        // LOGIN WITH MAGIC LINK WITH PHONE NUMBER
        if (output.phoneNumber) {
          await magic.auth.loginWithSMS({
            phoneNumber: output.phoneNumber
          });
        }
        const signer = await this.getSigner();
        const account = await signer.getAddress();
        return {
          account: ethers.utils.getAddress(account),
          chain: {
            id: chainId_,
            unsupported: false
          },
          provider
        };
      }
      throw new errors.UserRejectedRequestError("User rejected request");
    } catch (error) {
      throw new errors.UserRejectedRequestError("Something went wrong");
    }
  }
  async getChainId() {
    const networkOptions = this.magicSdkConfiguration?.network;
    if (typeof networkOptions === "object") {
      const chainID = networkOptions.chainId;
      if (chainID) {
        return normalizeChainId.normalizeChainId(chainID);
      }
    }
    throw new Error("Chain ID is not defined");
  }
  getMagicSDK() {
    if (!this.magicSDK) {
      this.magicSDK = new magicSdk.Magic(this.magicOptions.apiKey, {
        ...this.magicSdkConfiguration,
        extensions: [new oauth.OAuthExtension()]
      });
      return this.magicSDK;
    }
    return this.magicSDK;
  }
  async switchChain(chainId) {
    // check if the chain is supported
    const chain = this.chains.find(c => c.chainId === chainId);
    if (!chain) {
      throw new errors.ChainNotConfiguredError({
        chainId,
        connectorId: this.id
      });
    }
    await this.connect({
      chainId
    });
    return chain;
  }
  async setupListeners() {
    const provider = await this.getProvider();
    if (provider.on) {
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
    }
  }
}

const CONNECT_TIME_KEY = "wagmi-magic-connector.connect.time";
const CONNECT_DURATION = 604800000; // 7 days in milliseconds

class MagicConnectConnector extends MagicConnector {
  constructor(config) {
    super(config);
    defineProperty._defineProperty(this, "magicSDK", void 0);
    defineProperty._defineProperty(this, "magicSdkConfiguration", void 0);
    this.magicSdkConfiguration = config.options.magicSdkConfiguration || {};
  }
  async connect(_ref) {
    let {
      chainId
    } = _ref;
    // for a specific chainId we will overwrite the magicSDKConfiguration
    if (chainId) {
      const chain = this.chains.find(c => c.chainId === chainId);
      if (chain) {
        this.magicSdkConfiguration = {
          ...this.magicSdkConfiguration,
          network: {
            chainId: chain.chainId,
            rpcUrl: chain.rpc[0]
          }
        };
      }
    }
    try {
      const provider = await this.getProvider();
      this.setupListeners();

      // Check if there is a user logged in
      const isAuthenticated = await this.isAuthorized();

      // Check if we have a chainId, in case of error just assign 0 for legacy
      let chainId_;
      try {
        chainId_ = await this.getChainId();
      } catch (e) {
        chainId_ = 0;
      }

      // if there is a user logged in, return the user
      if (isAuthenticated) {
        return {
          provider,
          chain: {
            id: chainId_,
            unsupported: false
          },
          account: await this.getAccount()
        };
      }

      // open the modal and process the magic login steps
      if (!this.isModalOpen) {
        const output = await this.getUserDetailsByForm(false, true, []);
        const magic = this.getMagicSDK();

        // LOGIN WITH MAGIC LINK WITH EMAIL
        if (output.email) {
          await magic.auth.loginWithEmailOTP({
            email: output.email
          });
          const signer = await this.getSigner();
          const account = await signer.getAddress();

          // As we have no way to know if a user is connected to Magic Connect we store a connect timestamp
          // in local storage
          window.localStorage.setItem(CONNECT_TIME_KEY, String(new Date().getTime()));
          return {
            account: ethers.utils.getAddress(account),
            chain: {
              id: chainId_,
              unsupported: false
            },
            provider
          };
        }
      }
      throw new errors.UserRejectedRequestError("User rejected request");
    } catch (error) {
      throw new errors.UserRejectedRequestError("Something went wrong");
    }
  }
  async getChainId() {
    const networkOptions = this.magicSdkConfiguration?.network;
    if (typeof networkOptions === "object") {
      const chainID = networkOptions.chainId;
      if (chainID) {
        return normalizeChainId.normalizeChainId(chainID);
      }
    }
    throw new Error("Chain ID is not defined");
  }
  getMagicSDK() {
    if (!this.magicSDK) {
      this.magicSDK = new magicSdk.Magic(this.magicOptions.apiKey, {
        ...this.magicSdkConfiguration,
        extensions: [new connect.ConnectExtension()]
      });
      return this.magicSDK;
    }
    return this.magicSDK;
  }

  // Overrides isAuthorized because Connect opens overlay whenever we interact with one of its methods.
  // Moreover, there is currently no proper way to know if a user is currently logged in to Magic Connect.
  // So we use a local storage state to handle this information.
  // TODO Once connect API grows, integrate it
  async isAuthorized() {
    if (localStorage.getItem(CONNECT_TIME_KEY) === null) {
      return false;
    }
    return parseInt(window.localStorage.getItem(CONNECT_TIME_KEY) || "") + CONNECT_DURATION > new Date().getTime();
  }

  // Overrides disconnect because there is currently no proper way to disconnect a user from Magic
  // Connect.
  // So we use a local storage state to handle this information.
  async disconnect() {
    window.localStorage.removeItem(CONNECT_TIME_KEY);
  }
  async switchChain(chainId) {
    // check if the chain is supported
    const chain = this.chains.find(c => c.chainId === chainId);
    if (!chain) {
      throw new errors.ChainNotConfiguredError({
        chainId,
        connectorId: this.id
      });
    }
    await this.connect({
      chainId
    });
    return chain;
  }
  async setupListeners() {
    const provider = await this.getProvider();
    if (provider.on) {
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
    }
  }
}

exports.MagicAuthConnector = MagicAuthConnector;
exports.MagicConnectConnector = MagicConnectConnector;
