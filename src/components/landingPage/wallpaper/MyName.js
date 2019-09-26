import React from 'react'
import './wallpaper.css'
import { useSpring, animated } from 'react-spring'

const MyName = () => {

    const props = useSpring({config: {duration: 5000}, opacity: 1, from: {opacity: 0}})

    return(
        <animated.div style={props} >
            <div id="my-name">
                <svg width="233" height="268" viewBox="0 0 263 268" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="7.5" y="6.5" width="247" height="227" stroke="white" strokeWidth="13"/>
                    <path d="M31.2815 136.886V152H34.8785V136.886H43.7885V133.586H22.3715V136.886H31.2815ZM50.9147 152V135.434H47.4167V152H50.9147ZM75.8186 146.753C75.8186 145.136 74.7626 143.453 73.3766 142.595C74.0036 141.902 74.3336 141.044 74.3336 140.153C74.3336 136.127 70.4726 135.434 67.4366 135.434H57.5036V152H69.0206C72.0896 152 75.8186 150.515 75.8186 146.753ZM61.0016 148.766V144.806H69.0536C70.4396 144.806 72.1226 145.202 72.1226 146.819C72.1226 148.436 70.3406 148.766 68.9546 148.766H61.0016ZM67.4036 138.668C68.7236 138.668 70.7036 138.734 70.7036 140.186C70.7036 141.407 69.0536 141.572 67.9646 141.572H61.0016V138.668H67.4036ZM96.9335 152H101.124L89.6075 134.114L78.1235 152H82.3145L85.3835 147.248H93.7985L96.9335 152ZM89.6075 140.648L91.7525 144.014H87.4295L89.6075 140.648ZM108.246 145.103H114.021L118.41 152H122.535C121.149 149.855 119.235 147.017 117.783 144.74C119.763 144.113 121.314 142.793 121.314 140.252C121.314 136.589 117.849 135.434 114.78 135.434H104.748V152H108.246V145.103ZM108.246 138.668H114.516C116.793 138.668 117.651 139.229 117.651 140.252C117.651 141.275 116.793 141.869 114.516 141.869H108.246V138.668ZM125.503 143.717C125.503 148.601 130.717 152.594 137.086 152.594C143.488 152.594 148.636 148.601 148.636 143.717C148.636 138.833 143.488 134.807 137.086 134.807C130.717 134.807 125.503 138.833 125.503 143.717ZM129.199 143.717C129.199 140.582 132.697 138.074 137.086 138.074C141.442 138.074 144.973 140.582 144.973 143.717C144.973 146.819 141.442 149.327 137.086 149.327C132.697 149.327 129.199 146.819 129.199 143.717ZM160.796 152.99L172.115 135.467H167.858L160.796 146.456L153.734 135.467H149.543L160.796 152.99ZM191.379 147.182C191.379 140.747 177.915 143.123 177.915 139.922C177.915 138.536 180.819 138.206 182.139 138.206C184.845 138.206 187.518 139.064 189.762 140.648V136.721C188.211 135.566 185.175 134.972 182.436 134.972C178.509 134.972 174.219 136.457 174.219 139.889C174.219 146.753 187.716 144.377 187.716 147.38C187.716 148.37 185.802 149.327 182.733 149.327C179.829 149.327 176.331 147.842 174.615 146.291V150.581C176.397 151.769 179.598 152.594 182.7 152.594C187.023 152.594 191.379 151.142 191.379 147.182ZM199.374 146.588L203.07 143.486L210.33 152H214.719L205.875 141.176L212.442 135.434H207.558L199.374 142.463V135.434H195.909V152H199.374V146.588ZM220.587 135.434H215.505L225.306 144.905V152H228.837V144.905L238.638 135.434H233.589L227.022 141.737L220.587 135.434Z" fill="white"/>
                    <path d="M31.2815 136.886H31.7815V136.386H31.2815V136.886ZM31.2815 152H30.7815V152.5H31.2815V152ZM34.8785 152V152.5H35.3785V152H34.8785ZM34.8785 136.886V136.386H34.3785V136.886H34.8785ZM43.7885 136.886V137.386H44.2885V136.886H43.7885ZM43.7885 133.586H44.2885V133.086H43.7885V133.586ZM22.3715 133.586V133.086H21.8715V133.586H22.3715ZM22.3715 136.886H21.8715V137.386H22.3715V136.886ZM30.7815 136.886V152H31.7815V136.886H30.7815ZM31.2815 152.5H34.8785V151.5H31.2815V152.5ZM35.3785 152V136.886H34.3785V152H35.3785ZM34.8785 137.386H43.7885V136.386H34.8785V137.386ZM44.2885 136.886V133.586H43.2885V136.886H44.2885ZM43.7885 133.086H22.3715V134.086H43.7885V133.086ZM21.8715 133.586V136.886H22.8715V133.586H21.8715ZM22.3715 137.386H31.2815V136.386H22.3715V137.386ZM50.9147 152V152.5H51.4147V152H50.9147ZM50.9147 135.434H51.4147V134.934H50.9147V135.434ZM47.4167 135.434V134.934H46.9167V135.434H47.4167ZM47.4167 152H46.9167V152.5H47.4167V152ZM51.4147 152V135.434H50.4147V152H51.4147ZM50.9147 134.934H47.4167V135.934H50.9147V134.934ZM46.9167 135.434V152H47.9167V135.434H46.9167ZM47.4167 152.5H50.9147V151.5H47.4167V152.5ZM73.3766 142.595L73.0058 142.26L72.6034 142.704L73.1134 143.02L73.3766 142.595ZM57.5036 135.434V134.934H57.0036V135.434H57.5036ZM57.5036 152H57.0036V152.5H57.5036V152ZM61.0016 148.766H60.5016V149.266H61.0016V148.766ZM61.0016 144.806V144.306H60.5016V144.806H61.0016ZM61.0016 141.572H60.5016V142.072H61.0016V141.572ZM61.0016 138.668V138.168H60.5016V138.668H61.0016ZM76.3186 146.753C76.3186 144.94 75.1521 143.106 73.6398 142.17L73.1134 143.02C74.3731 143.8 75.3186 145.332 75.3186 146.753H76.3186ZM73.7474 142.93C74.4556 142.148 74.8336 141.171 74.8336 140.153H73.8336C73.8336 140.917 73.5517 141.656 73.0058 142.26L73.7474 142.93ZM74.8336 140.153C74.8336 139.063 74.5711 138.168 74.1024 137.445C73.635 136.725 72.9823 136.206 72.2483 135.837C70.7964 135.107 68.9756 134.934 67.4366 134.934V135.934C68.9337 135.934 70.5614 136.108 71.7989 136.73C72.4097 137.038 72.912 137.448 73.2634 137.989C73.6135 138.529 73.8336 139.23 73.8336 140.153H74.8336ZM67.4366 134.934H57.5036V135.934H67.4366V134.934ZM57.0036 135.434V152H58.0036V135.434H57.0036ZM57.5036 152.5H69.0206V151.5H57.5036V152.5ZM69.0206 152.5C70.6239 152.5 72.4237 152.114 73.8399 151.208C75.2758 150.29 76.3186 148.831 76.3186 146.753H75.3186C75.3186 148.437 74.4969 149.601 73.3011 150.366C72.0856 151.143 70.4864 151.5 69.0206 151.5V152.5ZM61.5016 148.766V144.806H60.5016V148.766H61.5016ZM61.0016 145.306H69.0536V144.306H61.0016V145.306ZM69.0536 145.306C69.7139 145.306 70.3897 145.403 70.8818 145.652C71.1219 145.774 71.3028 145.924 71.4242 146.103C71.5429 146.278 71.6226 146.506 71.6226 146.819H72.6226C72.6226 146.323 72.4919 145.896 72.2518 145.542C72.0143 145.192 71.6878 144.94 71.3339 144.76C70.638 144.407 69.7793 144.306 69.0536 144.306V145.306ZM71.6226 146.819C71.6226 147.125 71.5404 147.344 71.4188 147.51C71.2931 147.682 71.1037 147.828 70.8494 147.945C70.329 148.184 69.6233 148.266 68.9546 148.266V149.266C69.6719 149.266 70.5503 149.183 71.2673 148.853C71.6318 148.685 71.9745 148.445 72.2263 148.1C72.4821 147.75 72.6226 147.321 72.6226 146.819H71.6226ZM68.9546 148.266H61.0016V149.266H68.9546V148.266ZM67.4036 139.168C68.0715 139.168 68.8253 139.188 69.4049 139.361C69.6907 139.447 69.8914 139.559 70.0166 139.686C70.1288 139.801 70.2036 139.95 70.2036 140.186H71.2036C71.2036 139.696 71.0309 139.292 70.7306 138.986C70.4433 138.693 70.0666 138.516 69.6923 138.404C68.952 138.181 68.0558 138.168 67.4036 138.168V139.168ZM70.2036 140.186C70.2036 140.366 70.1475 140.485 70.0603 140.58C69.963 140.686 69.8048 140.785 69.5759 140.865C69.1115 141.03 68.4983 141.072 67.9646 141.072V142.072C68.5199 142.072 69.2762 142.032 69.9091 141.808C70.2288 141.695 70.5512 141.524 70.7972 141.256C71.0535 140.976 71.2036 140.616 71.2036 140.186H70.2036ZM67.9646 141.072H61.0016V142.072H67.9646V141.072ZM61.5016 141.572V138.668H60.5016V141.572H61.5016ZM61.0016 139.168H67.4036V138.168H61.0016V139.168ZM96.9335 152L96.5161 152.275L96.6643 152.5H96.9335V152ZM101.124 152V152.5H102.041L101.545 151.729L101.124 152ZM89.6075 134.114L90.0278 133.843L89.6069 133.19L89.1867 133.844L89.6075 134.114ZM78.1235 152L77.7027 151.73L77.2082 152.5H78.1235V152ZM82.3145 152V152.5H82.5868L82.7345 152.271L82.3145 152ZM85.3835 147.248V146.748H85.1112L84.9634 146.977L85.3835 147.248ZM93.7985 147.248L94.2158 146.973L94.0676 146.748H93.7985V147.248ZM89.6075 140.648L90.0291 140.379L89.6107 139.723L89.1877 140.376L89.6075 140.648ZM91.7525 144.014V144.514H92.664L92.1741 143.745L91.7525 144.014ZM87.4295 144.014L87.0097 143.742L86.5104 144.514H87.4295V144.014ZM96.9335 152.5H101.124V151.5H96.9335V152.5ZM101.545 151.729L90.0278 133.843L89.1871 134.385L100.704 152.271L101.545 151.729ZM89.1867 133.844L77.7027 151.73L78.5442 152.27L90.0282 134.384L89.1867 133.844ZM78.1235 152.5H82.3145V151.5H78.1235V152.5ZM82.7345 152.271L85.8035 147.519L84.9634 146.977L81.8944 151.729L82.7345 152.271ZM85.3835 147.748H93.7985V146.748H85.3835V147.748ZM93.3811 147.523L96.5161 152.275L97.3508 151.725L94.2158 146.973L93.3811 147.523ZM89.1858 140.917L91.3308 144.283L92.1741 143.745L90.0291 140.379L89.1858 140.917ZM91.7525 143.514H87.4295V144.514H91.7525V143.514ZM87.8492 144.286L90.0272 140.92L89.1877 140.376L87.0097 143.742L87.8492 144.286ZM108.246 145.103V144.603H107.746V145.103H108.246ZM114.021 145.103L114.443 144.835L114.295 144.603H114.021V145.103ZM118.41 152L117.988 152.268L118.135 152.5H118.41V152ZM122.535 152V152.5H123.453L122.955 151.729L122.535 152ZM117.783 144.74L117.632 144.263L117.011 144.46L117.361 145.009L117.783 144.74ZM104.748 135.434V134.934H104.248V135.434H104.748ZM104.748 152H104.248V152.5H104.748V152ZM108.246 152V152.5H108.746V152H108.246ZM108.246 138.668V138.168H107.746V138.668H108.246ZM108.246 141.869H107.746V142.369H108.246V141.869ZM108.246 145.603H114.021V144.603H108.246V145.603ZM113.599 145.371L117.988 152.268L118.832 151.732L114.443 144.835L113.599 145.371ZM118.41 152.5H122.535V151.5H118.41V152.5ZM122.955 151.729C121.555 149.562 119.661 146.755 118.204 144.471L117.361 145.009C118.809 147.279 120.743 150.148 122.115 152.271L122.955 151.729ZM117.934 145.217C118.98 144.885 119.953 144.359 120.667 143.543C121.389 142.718 121.814 141.633 121.814 140.252H120.814C120.814 141.412 120.463 142.257 119.914 142.884C119.358 143.521 118.566 143.968 117.632 144.263L117.934 145.217ZM121.814 140.252C121.814 138.227 120.84 136.868 119.454 136.04C118.098 135.23 116.364 134.934 114.78 134.934V135.934C116.265 135.934 117.798 136.216 118.941 136.899C120.055 137.564 120.814 138.614 120.814 140.252H121.814ZM114.78 134.934H104.748V135.934H114.78V134.934ZM104.248 135.434V152H105.248V135.434H104.248ZM104.748 152.5H108.246V151.5H104.748V152.5ZM108.746 152V145.103H107.746V152H108.746ZM108.246 139.168H114.516V138.168H108.246V139.168ZM114.516 139.168C115.633 139.168 116.314 139.309 116.701 139.517C116.884 139.616 116.989 139.722 117.051 139.827C117.113 139.932 117.151 140.068 117.151 140.252H118.151C118.151 139.925 118.082 139.606 117.912 139.319C117.741 139.031 117.489 138.805 117.174 138.636C116.562 138.308 115.676 138.168 114.516 138.168V139.168ZM117.151 140.252C117.151 140.436 117.113 140.575 117.049 140.685C116.985 140.794 116.879 140.905 116.695 141.007C116.309 141.22 115.629 141.369 114.516 141.369V142.369C115.679 142.369 116.567 142.221 117.179 141.882C117.495 141.707 117.745 141.477 117.913 141.188C118.082 140.898 118.151 140.579 118.151 140.252H117.151ZM114.516 141.369H108.246V142.369H114.516V141.369ZM108.746 141.869V138.668H107.746V141.869H108.746ZM125.003 143.717C125.003 146.348 126.408 148.703 128.602 150.384C130.796 152.065 133.8 153.094 137.086 153.094V152.094C134.003 152.094 131.216 151.127 129.21 149.59C127.205 148.053 126.003 145.97 126.003 143.717H125.003ZM137.086 153.094C143.635 153.094 149.136 148.99 149.136 143.717H148.136C148.136 148.212 143.341 152.094 137.086 152.094V153.094ZM149.136 143.717C149.136 138.446 143.638 134.307 137.086 134.307V135.307C143.338 135.307 148.136 139.22 148.136 143.717H149.136ZM137.086 134.307C133.799 134.307 130.794 135.345 128.601 137.034C126.408 138.723 125.003 141.086 125.003 143.717H126.003C126.003 141.464 127.205 139.372 129.211 137.827C131.217 136.282 134.004 135.307 137.086 135.307V134.307ZM129.699 143.717C129.699 142.35 130.46 141.077 131.788 140.126C133.116 139.176 134.982 138.574 137.086 138.574V137.574C134.8 137.574 132.724 138.226 131.206 139.313C129.687 140.4 128.699 141.949 128.699 143.717H129.699ZM137.086 138.574C139.172 138.574 141.04 139.175 142.372 140.127C143.706 141.078 144.473 142.352 144.473 143.717H145.473C145.473 141.947 144.475 140.399 142.953 139.313C141.432 138.227 139.356 137.574 137.086 137.574V138.574ZM144.473 143.717C144.473 145.064 143.707 146.329 142.373 147.278C141.04 148.226 139.172 148.827 137.086 148.827V149.827C139.356 149.827 141.431 149.174 142.953 148.093C144.473 147.012 145.473 145.472 145.473 143.717H144.473ZM137.086 148.827C134.982 148.827 133.115 148.225 131.787 147.278C130.458 146.331 129.699 145.065 129.699 143.717H128.699C128.699 145.471 129.689 147.01 131.206 148.092C132.724 149.175 134.8 149.827 137.086 149.827V148.827ZM160.796 152.99L160.375 153.26L160.795 153.913L161.216 153.261L160.796 152.99ZM172.115 135.467L172.535 135.738L173.033 134.967H172.115V135.467ZM167.858 135.467V134.967H167.585L167.437 135.197L167.858 135.467ZM160.796 146.456L160.375 146.726L160.796 147.381L161.217 146.726L160.796 146.456ZM153.734 135.467L154.155 135.197L154.007 134.967H153.734V135.467ZM149.543 135.467V134.967H148.628L149.122 135.737L149.543 135.467ZM161.216 153.261L172.535 135.738L171.695 135.196L160.376 152.719L161.216 153.261ZM172.115 134.967H167.858V135.967H172.115V134.967ZM167.437 135.197L160.375 146.186L161.217 146.726L168.279 135.737L167.437 135.197ZM161.217 146.186L154.155 135.197L153.313 135.737L160.375 146.726L161.217 146.186ZM153.734 134.967H149.543V135.967H153.734V134.967ZM149.122 135.737L160.375 153.26L161.217 152.72L149.964 135.197L149.122 135.737ZM189.762 140.648L189.474 141.056L190.262 141.613V140.648H189.762ZM189.762 136.721H190.262V136.47L190.061 136.32L189.762 136.721ZM174.615 146.291L174.951 145.92L174.115 145.165V146.291H174.615ZM174.615 150.581H174.115V150.849L174.338 150.997L174.615 150.581ZM191.879 147.182C191.879 145.35 190.9 144.147 189.527 143.35C188.182 142.571 186.423 142.153 184.737 141.847C183.006 141.533 181.385 141.34 180.145 141.018C179.53 140.858 179.073 140.681 178.778 140.477C178.5 140.286 178.415 140.109 178.415 139.922H177.415C177.415 140.535 177.752 140.985 178.21 141.301C178.652 141.605 179.246 141.818 179.893 141.986C181.178 142.319 182.923 142.535 184.558 142.831C186.238 143.136 187.844 143.531 189.025 144.216C190.176 144.883 190.879 145.796 190.879 147.182H191.879ZM178.415 139.922C178.415 139.777 178.483 139.629 178.695 139.465C178.917 139.294 179.252 139.145 179.67 139.025C180.502 138.786 181.507 138.706 182.139 138.706V137.706C181.451 137.706 180.345 137.791 179.395 138.064C178.921 138.199 178.449 138.392 178.085 138.673C177.711 138.961 177.415 139.374 177.415 139.922H178.415ZM182.139 138.706C184.74 138.706 187.313 139.531 189.474 141.056L190.051 140.24C187.724 138.597 184.951 137.706 182.139 137.706V138.706ZM190.262 140.648V136.721H189.262V140.648H190.262ZM190.061 136.32C189.205 135.683 187.981 135.225 186.655 134.926C185.32 134.624 183.839 134.472 182.436 134.472V135.472C183.773 135.472 185.179 135.617 186.435 135.901C187.7 136.187 188.769 136.604 189.464 137.122L190.061 136.32ZM182.436 134.472C180.421 134.472 178.282 134.851 176.628 135.698C174.966 136.549 173.719 137.919 173.719 139.889H174.719C174.719 138.427 175.618 137.338 177.083 136.589C178.555 135.835 180.525 135.472 182.436 135.472V134.472ZM173.719 139.889C173.719 141.812 174.683 143.096 176.064 143.957C177.414 144.799 179.18 145.253 180.875 145.574C181.727 145.735 182.581 145.866 183.366 145.994C184.158 146.122 184.878 146.246 185.49 146.394C186.109 146.544 186.57 146.709 186.867 146.899C187.15 147.08 187.216 147.234 187.216 147.38H188.216C188.216 146.775 187.861 146.347 187.406 146.056C186.965 145.774 186.371 145.579 185.725 145.422C185.072 145.263 184.316 145.134 183.526 145.006C182.73 144.877 181.896 144.749 181.061 144.591C179.381 144.273 177.774 143.845 176.593 143.109C175.443 142.391 174.719 141.398 174.719 139.889H173.719ZM187.216 147.38C187.216 147.456 187.181 147.582 187.015 147.75C186.848 147.918 186.575 148.098 186.182 148.264C185.398 148.594 184.222 148.827 182.733 148.827V149.827C184.314 149.827 185.63 149.581 186.57 149.186C187.039 148.988 187.437 148.744 187.724 148.454C188.013 148.164 188.216 147.799 188.216 147.38H187.216ZM182.733 148.827C181.36 148.827 179.822 148.474 178.41 147.925C176.997 147.375 175.751 146.644 174.951 145.92L174.28 146.662C175.196 147.489 176.557 148.276 178.048 148.857C179.54 149.438 181.203 149.827 182.733 149.827V148.827ZM174.115 146.291V150.581H175.115V146.291H174.115ZM174.338 150.997C176.228 152.257 179.536 153.094 182.7 153.094V152.094C179.661 152.094 176.567 151.281 174.893 150.165L174.338 150.997ZM182.7 153.094C184.905 153.094 187.166 152.726 188.894 151.815C190.645 150.893 191.879 149.391 191.879 147.182H190.879C190.879 148.933 189.936 150.137 188.428 150.931C186.898 151.736 184.819 152.094 182.7 152.094V153.094ZM199.374 146.588L199.053 146.205L198.874 146.355V146.588H199.374ZM203.07 143.486L203.45 143.162L203.129 142.784L202.749 143.103L203.07 143.486ZM210.33 152L209.95 152.324L210.099 152.5H210.33V152ZM214.719 152V152.5H215.773L215.106 151.684L214.719 152ZM205.875 141.176L205.546 140.8L205.182 141.118L205.488 141.492L205.875 141.176ZM212.442 135.434L212.771 135.81L213.773 134.934H212.442V135.434ZM207.558 135.434V134.934H207.373L207.232 135.055L207.558 135.434ZM199.374 142.463H198.874V143.552L199.7 142.842L199.374 142.463ZM199.374 135.434H199.874V134.934H199.374V135.434ZM195.909 135.434V134.934H195.409V135.434H195.909ZM195.909 152H195.409V152.5H195.909V152ZM199.374 152V152.5H199.874V152H199.374ZM199.695 146.971L203.391 143.869L202.749 143.103L199.053 146.205L199.695 146.971ZM202.69 143.81L209.95 152.324L210.71 151.676L203.45 143.162L202.69 143.81ZM210.33 152.5H214.719V151.5H210.33V152.5ZM215.106 151.684L206.262 140.86L205.488 141.492L214.332 152.316L215.106 151.684ZM206.204 141.552L212.771 135.81L212.113 135.058L205.546 140.8L206.204 141.552ZM212.442 134.934H207.558V135.934H212.442V134.934ZM207.232 135.055L199.048 142.084L199.7 142.842L207.884 135.813L207.232 135.055ZM199.874 142.463V135.434H198.874V142.463H199.874ZM199.374 134.934H195.909V135.934H199.374V134.934ZM195.409 135.434V152H196.409V135.434H195.409ZM195.909 152.5H199.374V151.5H195.909V152.5ZM199.874 152V146.588H198.874V152H199.874ZM220.587 135.434L220.937 135.077L220.791 134.934H220.587V135.434ZM215.505 135.434V134.934H214.268L215.158 135.794L215.505 135.434ZM225.306 144.905H225.806V144.693L225.654 144.545L225.306 144.905ZM225.306 152H224.806V152.5H225.306V152ZM228.837 152V152.5H229.337V152H228.837ZM228.837 144.905L228.49 144.545L228.337 144.693V144.905H228.837ZM238.638 135.434L238.986 135.794L239.875 134.934H238.638V135.434ZM233.589 135.434V134.934H233.388L233.243 135.073L233.589 135.434ZM227.022 141.737L226.672 142.094L227.019 142.433L227.369 142.098L227.022 141.737ZM220.587 134.934H215.505V135.934H220.587V134.934ZM215.158 135.794L224.959 145.265L225.654 144.545L215.853 135.074L215.158 135.794ZM224.806 144.905V152H225.806V144.905H224.806ZM225.306 152.5H228.837V151.5H225.306V152.5ZM229.337 152V144.905H228.337V152H229.337ZM229.185 145.265L238.986 135.794L238.291 135.074L228.49 144.545L229.185 145.265ZM238.638 134.934H233.589V135.934H238.638V134.934ZM233.243 135.073L226.676 141.376L227.369 142.098L233.936 135.795L233.243 135.073ZM227.372 141.38L220.937 135.077L220.237 135.791L226.672 142.094L227.372 141.38Z" fill="white"/>
                    <path d="M25.4 110.785C26.66 111.01 27.965 111.19 29.09 111.19C32.87 111.19 35.57 109.885 36.695 107.275C37.37 105.655 37.46 103.36 37.46 100.75V77.89H32.51V101.155C32.51 104.44 30.665 106.15 28.685 106.15C27.56 106.15 26.345 105.565 25.4 104.485V110.785ZM44.0047 91.705C44.0047 98.365 51.1147 103.81 59.7997 103.81C68.5297 103.81 75.5497 98.365 75.5497 91.705C75.5497 85.045 68.5297 79.555 59.7997 79.555C51.1147 79.555 44.0047 85.045 44.0047 91.705ZM49.0447 91.705C49.0447 87.43 53.8147 84.01 59.7997 84.01C65.7397 84.01 70.5547 87.43 70.5547 91.705C70.5547 95.935 65.7397 99.355 59.7997 99.355C53.8147 99.355 49.0447 95.935 49.0447 91.705ZM87.0377 103V88.285L108.503 104.485V80.41H103.733V95.035L82.3127 78.835V103H87.0377ZM138.552 103H144.267L128.562 78.61L112.902 103H118.617L122.802 96.52H134.277L138.552 103ZM128.562 87.52L131.487 92.11H125.592L128.562 87.52ZM152.484 84.82V103H157.299V84.82H168.009V80.41H141.774V84.82H152.484ZM191.155 103H196.87L181.165 78.61L165.505 103H171.22L175.405 96.52H186.88L191.155 103ZM181.165 87.52L184.09 92.11H178.195L181.165 87.52ZM206.086 103V88.285L227.551 104.485V80.41H222.781V95.035L201.361 78.835V103H206.086Z" fill="white"/>
                    <path d="M25.4 110.785H24.9V111.204L25.3121 111.277L25.4 110.785ZM36.695 107.275L37.1542 107.473L37.1565 107.467L36.695 107.275ZM37.46 77.89H37.96V77.39H37.46V77.89ZM32.51 77.89V77.39H32.01V77.89H32.51ZM25.4 104.485L25.7763 104.156L24.9 103.154V104.485H25.4ZM25.3121 111.277C26.5796 111.504 27.9196 111.69 29.09 111.69V110.69C28.0104 110.69 26.7404 110.516 25.4879 110.293L25.3121 111.277ZM29.09 111.69C32.9719 111.69 35.9176 110.342 37.1542 107.473L36.2358 107.077C35.2224 109.428 32.7681 110.69 29.09 110.69V111.69ZM37.1565 107.467C37.8766 105.739 37.96 103.34 37.96 100.75H36.96C36.96 103.38 36.8634 105.571 36.2335 107.083L37.1565 107.467ZM37.96 100.75V77.89H36.96V100.75H37.96ZM37.46 77.39H32.51V78.39H37.46V77.39ZM32.01 77.89V101.155H33.01V77.89H32.01ZM32.01 101.155C32.01 102.705 31.5756 103.831 30.9582 104.562C30.3426 105.29 29.5249 105.65 28.685 105.65V106.65C29.8251 106.65 30.9199 106.155 31.7218 105.207C32.5219 104.261 33.01 102.89 33.01 101.155H32.01ZM28.685 105.65C27.7306 105.65 26.6453 105.149 25.7763 104.156L25.0237 104.814C26.0447 105.981 27.3894 106.65 28.685 106.65V105.65ZM24.9 104.485V110.785H25.9V104.485H24.9ZM43.5047 91.705C43.5047 95.2243 45.3841 98.3861 48.3412 100.652C51.2983 102.918 55.356 104.31 59.7997 104.31V103.31C55.5584 103.31 51.7186 101.98 48.9494 99.8581C46.1803 97.7364 44.5047 94.8457 44.5047 91.705H43.5047ZM59.7997 104.31C68.677 104.31 76.0497 98.7544 76.0497 91.705H75.0497C75.0497 97.9756 68.3824 103.31 59.7997 103.31V104.31ZM76.0497 91.705C76.0497 84.6576 68.6796 79.055 59.7997 79.055V80.055C68.3798 80.055 75.0497 85.4324 75.0497 91.705H76.0497ZM59.7997 79.055C55.355 79.055 51.2971 80.4592 48.3402 82.7364C45.3836 85.0133 43.5047 88.1861 43.5047 91.705H44.5047C44.5047 88.5639 46.1807 85.6617 48.9504 83.5286C51.7198 81.3958 55.5594 80.055 59.7997 80.055V79.055ZM49.5447 91.705C49.5447 89.7683 50.6236 87.982 52.4689 86.6609C54.3143 85.3397 56.8981 84.51 59.7997 84.51V83.51C56.7162 83.51 53.9226 84.3903 51.8867 85.8478C49.8508 87.3054 48.5447 89.3667 48.5447 91.705H49.5447ZM59.7997 84.51C62.6781 84.51 65.2624 85.3394 67.1142 86.6613C68.9663 87.9835 70.0547 89.77 70.0547 91.705H71.0547C71.0547 89.365 69.7356 87.304 67.6952 85.8474C65.6545 84.3906 62.8612 83.51 59.7997 83.51V84.51ZM70.0547 91.705C70.0547 93.6158 68.9681 95.3912 67.115 96.7087C65.2628 98.0256 62.6781 98.855 59.7997 98.855V99.855C62.8613 99.855 65.6541 98.9744 67.6944 97.5238C69.7338 96.0738 71.0547 94.0242 71.0547 91.705H70.0547ZM59.7997 98.855C56.8982 98.855 54.3139 98.0253 52.4681 96.7091C50.6218 95.3927 49.5447 93.6175 49.5447 91.705H48.5447C48.5447 94.0225 49.8526 96.0723 51.8875 97.5234C53.923 98.9747 56.7162 99.855 59.7997 99.855V98.855ZM87.0377 103V103.5H87.5377V103H87.0377ZM87.0377 88.285L87.3389 87.8859L86.5377 87.2812V88.285H87.0377ZM108.503 104.485L108.201 104.884L109.003 105.489V104.485H108.503ZM108.503 80.41H109.003V79.91H108.503V80.41ZM103.733 80.41V79.91H103.233V80.41H103.733ZM103.733 95.035L103.431 95.4338L104.233 96.04V95.035H103.733ZM82.3127 78.835L82.6143 78.4362L81.8127 77.83V78.835H82.3127ZM82.3127 103H81.8127V103.5H82.3127V103ZM87.5377 103V88.285H86.5377V103H87.5377ZM86.7365 88.6841L108.201 104.884L108.804 104.086L87.3389 87.8859L86.7365 88.6841ZM109.003 104.485V80.41H108.003V104.485H109.003ZM108.503 79.91H103.733V80.91H108.503V79.91ZM103.233 80.41V95.035H104.233V80.41H103.233ZM104.034 94.6362L82.6143 78.4362L82.0111 79.2338L103.431 95.4338L104.034 94.6362ZM81.8127 78.835V103H82.8127V78.835H81.8127ZM82.3127 103.5H87.0377V102.5H82.3127V103.5ZM138.552 103L138.135 103.275L138.283 103.5H138.552V103ZM144.267 103V103.5H145.184L144.688 102.729L144.267 103ZM128.562 78.61L128.983 78.3393L128.562 77.6855L128.141 78.3399L128.562 78.61ZM112.902 103L112.481 102.73L111.987 103.5H112.902V103ZM118.617 103V103.5H118.889L119.037 103.271L118.617 103ZM122.802 96.52V96.02H122.53L122.382 96.2487L122.802 96.52ZM134.277 96.52L134.695 96.2447L134.546 96.02H134.277V96.52ZM128.562 87.52L128.984 87.2513L128.565 86.5947L128.142 87.2484L128.562 87.52ZM131.487 92.11V92.61H132.399L131.909 91.8413L131.487 92.11ZM125.592 92.11L125.172 91.8384L124.673 92.61H125.592V92.11ZM138.552 103.5H144.267V102.5H138.552V103.5ZM144.688 102.729L128.983 78.3393L128.142 78.8807L143.847 103.271L144.688 102.729ZM128.141 78.3399L112.481 102.73L113.323 103.27L128.983 78.8801L128.141 78.3399ZM112.902 103.5H118.617V102.5H112.902V103.5ZM119.037 103.271L123.222 96.7913L122.382 96.2487L118.197 102.729L119.037 103.271ZM122.802 97.02H134.277V96.02H122.802V97.02ZM133.86 96.7953L138.135 103.275L138.97 102.725L134.695 96.2447L133.86 96.7953ZM128.14 87.7887L131.065 92.3787L131.909 91.8413L128.984 87.2513L128.14 87.7887ZM131.487 91.61H125.592V92.61H131.487V91.61ZM126.012 92.3816L128.982 87.7916L128.142 87.2484L125.172 91.8384L126.012 92.3816ZM152.484 84.82H152.984V84.32H152.484V84.82ZM152.484 103H151.984V103.5H152.484V103ZM157.299 103V103.5H157.799V103H157.299ZM157.299 84.82V84.32H156.799V84.82H157.299ZM168.009 84.82V85.32H168.509V84.82H168.009ZM168.009 80.41H168.509V79.91H168.009V80.41ZM141.774 80.41V79.91H141.274V80.41H141.774ZM141.774 84.82H141.274V85.32H141.774V84.82ZM151.984 84.82V103H152.984V84.82H151.984ZM152.484 103.5H157.299V102.5H152.484V103.5ZM157.799 103V84.82H156.799V103H157.799ZM157.299 85.32H168.009V84.32H157.299V85.32ZM168.509 84.82V80.41H167.509V84.82H168.509ZM168.009 79.91H141.774V80.91H168.009V79.91ZM141.274 80.41V84.82H142.274V80.41H141.274ZM141.774 85.32H152.484V84.32H141.774V85.32ZM191.155 103L190.737 103.275L190.886 103.5H191.155V103ZM196.87 103V103.5H197.786L197.29 102.729L196.87 103ZM181.165 78.61L181.585 78.3393L181.164 77.6855L180.744 78.3399L181.165 78.61ZM165.505 103L165.084 102.73L164.589 103.5H165.505V103ZM171.22 103V103.5H171.492L171.64 103.271L171.22 103ZM175.405 96.52V96.02H175.132L174.985 96.2487L175.405 96.52ZM186.88 96.52L187.297 96.2447L187.149 96.02H186.88V96.52ZM181.165 87.52L181.586 87.2513L181.168 86.5947L180.745 87.2484L181.165 87.52ZM184.09 92.11V92.61H185.001L184.511 91.8413L184.09 92.11ZM178.195 92.11L177.775 91.8384L177.276 92.61H178.195V92.11ZM191.155 103.5H196.87V102.5H191.155V103.5ZM197.29 102.729L181.585 78.3393L180.744 78.8807L196.449 103.271L197.29 102.729ZM180.744 78.3399L165.084 102.73L165.925 103.27L181.585 78.8801L180.744 78.3399ZM165.505 103.5H171.22V102.5H165.505V103.5ZM171.64 103.271L175.825 96.7913L174.985 96.2487L170.8 102.729L171.64 103.271ZM175.405 97.02H186.88V96.02H175.405V97.02ZM186.462 96.7953L190.737 103.275L191.572 102.725L187.297 96.2447L186.462 96.7953ZM180.743 87.7887L183.668 92.3787L184.511 91.8413L181.586 87.2513L180.743 87.7887ZM184.09 91.61H178.195V92.61H184.09V91.61ZM178.614 92.3816L181.584 87.7916L180.745 87.2484L177.775 91.8384L178.614 92.3816ZM206.086 103V103.5H206.586V103H206.086ZM206.086 88.285L206.387 87.8859L205.586 87.2812V88.285H206.086ZM227.551 104.485L227.249 104.884L228.051 105.489V104.485H227.551ZM227.551 80.41H228.051V79.91H227.551V80.41ZM222.781 80.41V79.91H222.281V80.41H222.781ZM222.781 95.035L222.479 95.4338L223.281 96.04V95.035H222.781ZM201.361 78.835L201.662 78.4362L200.861 77.83V78.835H201.361ZM201.361 103H200.861V103.5H201.361V103ZM206.586 103V88.285H205.586V103H206.586ZM205.784 88.6841L227.249 104.884L227.852 104.086L206.387 87.8859L205.784 88.6841ZM228.051 104.485V80.41H227.051V104.485H228.051ZM227.551 79.91H222.781V80.91H227.551V79.91ZM222.281 80.41V95.035H223.281V80.41H222.281ZM223.082 94.6362L201.662 78.4362L201.059 79.2338L222.479 95.4338L223.082 94.6362ZM200.861 78.835V103H201.861V78.835H200.861ZM201.361 103.5H206.086V102.5H201.361V103.5Z" fill="white"/>
                    <path d="M5.068 265C7.196 265 9.94 264.034 9.94 261.486C9.94 258.938 7.196 257.972 5.068 257.972H1.19V265H5.068ZM2.366 259.008H4.97C6.538 259.008 8.708 259.498 8.708 261.486C8.708 263.474 6.538 263.964 4.97 263.964H2.366V259.008ZM11.9634 265H18.9634V263.964H13.1394V261.85H18.0394V260.8H13.1534V259.008H18.9634V257.972H11.9634V265ZM27.6805 263.04C27.6805 261.542 25.8325 261.22 24.1805 260.968C22.9065 260.758 21.6325 260.548 21.6325 259.778C21.6325 258.994 23.0745 258.798 23.7465 258.798C24.9925 258.798 26.1265 259.12 26.9525 259.694V258.448C26.3505 258 25.0625 257.762 23.8725 257.762C22.2065 257.762 20.3865 258.364 20.3865 259.764C20.3865 261.416 22.3465 261.766 24.0265 262.018C25.2165 262.214 26.4625 262.452 26.4625 263.138C26.4625 263.684 25.5105 264.216 24.0125 264.216C22.6545 264.216 21.1985 263.67 20.5685 263.11V264.468C21.2685 264.944 22.6265 265.266 23.9845 265.266C25.8325 265.266 27.6805 264.664 27.6805 263.04ZM30.8898 265V257.972H29.7418V265H30.8898ZM34.365 261.472C34.365 259.946 36.045 258.728 38.131 258.728C39.489 258.728 40.749 259.288 41.477 260.17V258.658C40.567 258.056 39.405 257.678 38.131 257.678C35.373 257.678 33.133 259.386 33.133 261.472C33.133 263.558 35.373 265.252 38.131 265.252C39.909 265.252 41.631 264.594 42.247 263.264C42.457 262.788 42.527 262.13 42.527 261.192H39.027V262.228H41.365C41.309 263.642 39.643 264.202 38.131 264.202C36.045 264.202 34.365 262.984 34.365 261.472ZM45.7752 265V259.932L52.8452 265.28V257.972H51.6972V262.984L44.6272 257.664V265H45.7752ZM55.2623 265H62.2623V263.964H56.4383V261.85H61.3383V260.8H56.4523V259.008H62.2623V257.972H55.2623V265ZM65.5893 261.906H68.5013L70.4753 265H71.8333L69.7473 261.808C70.6713 261.584 71.4553 261.038 71.4553 259.932C71.4553 258.434 70.0133 257.972 68.7393 257.972H64.4273V265H65.5893V261.906ZM65.5893 259.008H68.6133C69.7893 259.008 70.2373 259.33 70.2373 259.932C70.2373 260.534 69.7893 260.87 68.6133 260.87H65.5893V259.008Z" fill="white"/>
                    <path d="M180.502 265C182.868 265 185.934 263.922 185.934 261.094C185.934 258.266 182.868 257.188 180.502 257.188H176.19V265H180.502ZM177.38 258.238H180.376C182.182 258.238 184.674 258.812 184.674 261.094C184.674 263.376 182.182 263.95 180.376 263.95H177.38V258.238ZM187.961 265H194.961V263.964H189.137V261.85H194.037V260.8H189.151V259.008H194.961V257.972H187.961V265ZM200.641 265.266L205.331 257.986H203.945L200.641 263.124L197.337 257.986H195.965L200.641 265.266ZM206.76 265H213.76V263.964H207.936V261.85H212.836V260.8H207.95V259.008H213.76V257.972H206.76V265ZM216.891 257.972H215.715V265H222.589V263.964H216.891V257.972ZM223.569 261.5C223.569 263.586 225.809 265.28 228.567 265.28C231.325 265.28 233.551 263.586 233.551 261.5C233.551 259.414 231.325 257.706 228.567 257.706C225.809 257.706 223.569 259.414 223.569 261.5ZM224.801 261.5C224.801 259.974 226.481 258.756 228.567 258.756C230.639 258.756 232.319 259.974 232.319 261.5C232.319 263.012 230.639 264.23 228.567 264.23C226.481 264.23 224.801 263.012 224.801 261.5ZM236.953 261.906H240.089C241.377 261.906 242.819 261.43 242.819 259.932C242.819 258.434 241.377 257.972 240.089 257.972H235.791V265H236.953V261.906ZM236.953 259.008H239.977C241.153 259.008 241.601 259.33 241.601 259.932C241.601 260.534 241.153 260.87 239.977 260.87H236.953V259.008ZM244.563 265H251.563V263.964H245.739V261.85H250.639V260.8H245.753V259.008H251.563V257.972H244.563V265ZM254.89 261.906H257.802L259.776 265H261.134L259.048 261.808C259.972 261.584 260.756 261.038 260.756 259.932C260.756 258.434 259.314 257.972 258.04 257.972H253.728V265H254.89V261.906ZM254.89 259.008H257.914C259.09 259.008 259.538 259.33 259.538 259.932C259.538 260.534 259.09 260.87 257.914 260.87H254.89V259.008Z" fill="white"/>
                    <path d="M99.952 263.04C99.952 261.542 98.104 261.22 96.452 260.968C95.178 260.758 93.904 260.548 93.904 259.778C93.904 258.994 95.346 258.798 96.018 258.798C97.264 258.798 98.398 259.12 99.224 259.694V258.448C98.622 258 97.334 257.762 96.144 257.762C94.478 257.762 92.658 258.364 92.658 259.764C92.658 261.416 94.618 261.766 96.298 262.018C97.488 262.214 98.734 262.452 98.734 263.138C98.734 263.684 97.782 264.216 96.284 264.216C94.926 264.216 93.47 263.67 92.84 263.11V264.468C93.54 264.944 94.898 265.266 96.256 265.266C98.104 265.266 99.952 264.664 99.952 263.04ZM104.281 259.008V265H105.457V259.008H108.985V257.972H100.753V259.008H104.281ZM116.775 261.612C116.775 263.39 115.431 264.216 114.087 264.216C112.757 264.216 111.399 263.39 111.399 261.612V257.972H110.251V261.794C110.251 264.188 112.169 265.266 114.087 265.266C116.019 265.266 117.951 264.188 117.951 261.794V257.972H116.775V261.612ZM124.138 265C126.266 265 129.01 264.034 129.01 261.486C129.01 258.938 126.266 257.972 124.138 257.972H120.26V265H124.138ZM121.436 259.008H124.04C125.608 259.008 127.778 259.498 127.778 261.486C127.778 263.474 125.608 263.964 124.04 263.964H121.436V259.008ZM131.034 265H138.034V263.964H132.21V261.85H137.11V260.8H132.224V259.008H138.034V257.972H131.034V265ZM141.207 265V259.932L148.277 265.28V257.972H147.129V262.984L140.059 257.664V265H141.207ZM153.172 259.008V265H154.348V259.008H157.876V257.972H149.644V259.008H153.172Z" fill="white"/>
                </svg>
            </div>
        </animated.div>
    )
}

export default MyName