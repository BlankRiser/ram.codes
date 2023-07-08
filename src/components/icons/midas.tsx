import * as React from "react"
import { SVGProps, memo } from "react"


const MidasIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 96"
    width={300}
    height={96}
    fill="none"
    {...props}
  >
    <g fill="#fff" clipPath="url(#a)">
      <path
        fillRule="evenodd"
        d="M71.287 0H48.041v44.548h23.246V0Zm0 50.488H48.041v44.547h23.246V50.489Zm-30.994-5.94V15.839H21.696v28.709h18.597Zm-18.597 5.94h18.597v28.708H21.696V50.488Zm-7.749-5.94v-12.87H0v12.87h13.947ZM0 50.488v12.869h13.947v-12.87H0Z"
        clipRule="evenodd"
      />
      <path d="M151.4 71.276V32.645l-16.681 29.722h-3.921l-16.753-29.722v38.631h-6.416V20.67h6.773l18.32 32.859 18.393-32.859h6.701v50.606H151.4Zm17.538-44.19v-7.841h6.273v7.84h-6.273Zm0 44.19V34.07h6.273v37.206h-6.273Zm14.006-18.531c0-3.517.713-6.724 2.138-9.623 1.474-2.946 3.47-5.298 5.988-7.056 2.567-1.758 5.489-2.637 8.769-2.637 2.994 0 5.679.784 8.055 2.352 2.376 1.568 4.23 3.469 5.561 5.702V19.245h6.273v44.904c0 1.473.665 2.233 1.996 2.28v4.847c-1.188.19-2.115.286-2.78.286-1.236 0-2.329-.428-3.28-1.283-.903-.856-1.354-1.806-1.354-2.851V64.29c-1.473 2.376-3.446 4.253-5.917 5.631-2.471 1.378-5.037 2.067-7.699 2.067-3.422 0-6.487-.879-9.196-2.637-2.661-1.806-4.752-4.158-6.273-7.056-1.521-2.946-2.281-6.13-2.281-9.551Zm30.511 5.488V47.54c-.571-1.615-1.497-3.064-2.781-4.347a14.698 14.698 0 0 0-4.348-3.137c-1.568-.807-3.137-1.211-4.705-1.211-2.424 0-4.562.665-6.416 1.995-1.806 1.33-3.232 3.065-4.277 5.204a15.82 15.82 0 0 0-1.497 6.77c0 2.472.546 4.753 1.639 6.843 1.141 2.091 2.686 3.778 4.634 5.061 1.949 1.236 4.111 1.853 6.487 1.853 1.521 0 3.089-.356 4.705-1.069a14.388 14.388 0 0 0 4.277-3.065c1.236-1.283 1.996-2.684 2.282-4.205Zm13.823 2.28c0-2.375.665-4.418 1.996-6.129 1.378-1.758 3.255-3.112 5.631-4.063 2.377-.95 5.133-1.425 8.27-1.425 1.663 0 3.422.142 5.275.427 1.853.238 3.493.618 4.919 1.14v-2.708c0-2.85-.856-5.084-2.567-6.7-1.71-1.663-4.134-2.494-7.271-2.494-2.043 0-4.016.38-5.917 1.14-1.853.713-3.825 1.758-5.916 3.136l-2.282-4.419c2.424-1.663 4.848-2.898 7.272-3.706a22.535 22.535 0 0 1 7.556-1.283c4.753 0 8.507 1.33 11.263 3.991 2.757 2.614 4.135 6.273 4.135 10.977v15.752c0 1.473.665 2.233 1.996 2.28v4.847a31.6 31.6 0 0 1-1.639.214 10.02 10.02 0 0 1-1.07.072c-1.473 0-2.59-.404-3.35-1.212-.713-.808-1.117-1.663-1.212-2.566l-.143-2.352c-1.616 2.09-3.73 3.706-6.344 4.847-2.614 1.14-5.204 1.71-7.771 1.71-2.471 0-4.681-.499-6.629-1.496-1.949-1.046-3.47-2.424-4.563-4.134-1.093-1.759-1.639-3.707-1.639-5.845Zm24.237 2.638a9.87 9.87 0 0 0 1.355-1.996c.332-.712.499-1.306.499-1.782V54.74a25.649 25.649 0 0 0-9.41-1.782c-3.184 0-5.774.642-7.77 1.925-1.949 1.235-2.923 2.946-2.923 5.132 0 1.188.309 2.352.927 3.492.665 1.093 1.615 1.996 2.851 2.709 1.283.713 2.852 1.07 4.705 1.07 1.949 0 3.802-.381 5.56-1.141 1.759-.808 3.161-1.806 4.206-2.994Zm30.918 8.838c-3.089 0-5.988-.499-8.697-1.496-2.709-1.046-5.037-2.59-6.986-4.633l2.424-4.42c2.138 1.996 4.277 3.422 6.416 4.277A17.511 17.511 0 0 0 282.148 67c2.566 0 4.657-.475 6.273-1.426 1.616-.998 2.424-2.447 2.424-4.347 0-1.378-.428-2.4-1.283-3.065-.808-.666-1.972-1.212-3.493-1.64a156.869 156.869 0 0 0-5.418-1.568c-3.85-1.093-6.796-2.376-8.84-3.849-1.996-1.52-2.994-3.73-2.994-6.628 0-3.517 1.331-6.225 3.992-8.126 2.709-1.948 6.155-2.922 10.337-2.922 5.608 0 10.028 1.687 13.259 5.06l-2.851 4.348c-2.899-2.993-6.487-4.49-10.764-4.49-1.284 0-2.543.166-3.779.499-1.235.285-2.257.831-3.065 1.64-.808.76-1.212 1.852-1.212 3.278 0 1.758.713 3.017 2.139 3.777 1.426.76 3.517 1.545 6.273 2.353 2.804.807 5.228 1.615 7.271 2.423 2.091.808 3.707 1.853 4.848 3.136 1.14 1.283 1.711 3.065 1.711 5.346 0 3.516-1.331 6.272-3.992 8.268-2.662 1.948-6.179 2.922-10.551 2.922Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h300v95.035H0z" />
      </clipPath>
    </defs>
  </svg>
)
export const Midas = memo(MidasIcon)
