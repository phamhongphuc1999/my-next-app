import { AppSvgProps } from 'src/global';

export function SunIcon(props: AppSvgProps) {
  return (
    <svg {...props} viewBox="0 0 32 32">
      <rect width="32" height="32" fill="none" />
      <path
        d="M19.493,11.3a7.555,7.555,0,1,0,7.555,7.555A7.564,7.564,0,0,0,19.493,11.3Zm0,12.951a5.4,5.4,0,1,1,5.4-5.4A5.4,5.4,0,0,1,19.493,24.247Zm0-15.11a1.08,1.08,0,0,0,1.079-1.079V5.9a1.079,1.079,0,1,0-2.159,0V8.058A1.08,1.08,0,0,0,19.493,9.137Zm0,19.427a1.08,1.08,0,0,0-1.079,1.079V31.8a1.079,1.079,0,0,0,2.159,0V29.643A1.08,1.08,0,0,0,19.493,28.564Zm8.394-16.582,1.526-1.526a1.079,1.079,0,0,0-1.526-1.526l-1.526,1.526a1.079,1.079,0,1,0,1.526,1.526ZM11.1,25.719,9.573,27.246A1.079,1.079,0,1,0,11.1,28.772l1.526-1.526A1.079,1.079,0,0,0,11.1,25.719ZM9.78,18.85A1.08,1.08,0,0,0,8.7,17.771H6.542a1.079,1.079,0,1,0,0,2.159H8.7A1.08,1.08,0,0,0,9.78,18.85Zm22.664-1.079H30.286a1.079,1.079,0,0,0,0,2.159h2.159a1.079,1.079,0,0,0,0-2.159ZM11.1,11.981a1.079,1.079,0,1,0,1.526-1.526L11.1,8.929a1.079,1.079,0,1,0-1.526,1.526Zm16.79,13.737a1.079,1.079,0,0,0-1.526,1.526l1.526,1.526a1.079,1.079,0,1,0,1.526-1.526Z"
        transform="translate(-3.492 -2.85)"
        fill="#7994c1"
      />
    </svg>
  );
}

export function MoonIcon(props: AppSvgProps) {
  return (
    <svg {...props} viewBox="0 0 32 32">
      <rect width="32" height="32" fill="none" />
      <path
        d="M16.661,29.4c-.133,0-.267,0-.4-.006a12.848,12.848,0,0,1-.788-25.635,1.09,1.09,0,0,1,.977,1.733A8.055,8.055,0,0,0,27.715,16.753a1.09,1.09,0,0,1,1.733.977A12.848,12.848,0,0,1,16.661,29.4ZM13.468,6.367a10.668,10.668,0,0,0,2.859,20.844c.111,0,.223.005.333.005a10.672,10.672,0,0,0,10.175-7.477A10.237,10.237,0,0,1,13.468,6.367Z"
        transform="translate(-0.809 -0.75)"
        fill="#354455"
      />
    </svg>
  );
}

export function RightArrowIcon(props: AppSvgProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
      <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
    </svg>
  );
}

export function LeftArrowIcon(props: AppSvgProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z" />
      <path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" />
    </svg>
  );
}

export function CloseIcon(props: AppSvgProps) {
  return (
    <svg {...props} focusable="false" aria-hidden="true" viewBox="0 0 24 24">
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

export function GithubIcon(props: AppSvgProps) {
  return (
    <svg {...props} focusable="false" aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
    </svg>
  );
}
