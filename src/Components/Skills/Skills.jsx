import React from 'react'

export function Skills () {
  return (
    <>
      <h3 className='lg:col-span-6 md:col-span-4 col-span-3 pb-20 text-4xl font-bold dark:text-gray-50 text-black'>
        Habilidades
      </h3>
      <section className='flex flex-col justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-html5 md:w-24 md:h-24 h-10 w-10'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z'></path>
          <path d='M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5'></path>
        </svg>
        <h5 className='md:text-xl text-sm py-3'>HTML</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-css3 md:w-24 md:h-24 h-10 w-10'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z'></path>
          <path d='M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5'></path>
        </svg>
        <h5 className='md:text-xl text-sm py-3'>CSS</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-javascript md:w-24 md:h-24 h-10 w-10'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z'></path>
          <path d='M7.5 8h3v8l-2 -1'></path>
          <path d='M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5'></path>
        </svg>
        <h5 className='md:text-xl text-sm py-3'>Java Script</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-react md:w-24 md:h-24 h-10 w-10'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102'></path>
          <path d='M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102'></path>
          <path d='M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2'></path>
          <path d='M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2'></path>
          <path d='M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896'></path>
          <path d='M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897'></path>
          <path d='M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z'></path>
        </svg>
        <h5 className='md:text-xl text-sm py-3'>React JS</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          className='icon icon-tabler icon-tabler-brand-react-native md:w-20 md:h-20 h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          width='128'
          height='128'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M18.665 21.978A11.94 11.94 0 0 1 12 24C5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251zm-3.332-8.533l1.6 2.061V7.2h-1.6z'
          />
        </svg>
        <h5 className='md:text-xl text-sm py-3'>Next.js</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-react-native md:w-24 md:h-24 h-10 w-10'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097'></path>
          <path d='M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254'></path>
          <path d='M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978'></path>
          <path d='M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8'></path>
          <path d='M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087'></path>
          <path d='M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393'></path>
          <path d='M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24'></path>
        </svg>
        <h5 className='md:text-xl text-sm py-3'>React Native</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          className='icon icon-tabler icon-tabler-brand-react-native md:w-20 md:h-20 h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          width='128'
          height='128'
          viewBox='0 0 128 128'
        >
          <path
            fill='currentColor'
            d='m78.36 0l41.77 89.9l4.34-68.57zM38.87 94.47l-6.42 15.54L64 128l31.55-17.99l-6.42-15.54zM80.53 74.3L64 34.11L47.47 74.3zm-77-52.97L7.87 89.9L49.64 0z'
          />
        </svg>
        <h5 className='md:text-xl text-sm py-3'>Angular</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-bootstrap md:w-24 md:h-24 h-10 w-10'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2'></path>
          <path d='M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2'></path>
          <path d='M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z'></path>
        </svg>
        <h5 className='md:text-xl text-sm py-3'>Boostrap</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-tailwind md:w-24 md:h-24 h-10 w-10'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z'></path>
        </svg>
        <h5 className='md:text-xl text-sm py-3'>Tailwind</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-php md:w-24 md:h-24 h-10 w-10'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0'></path>
          <path d='M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653'></path>
          <path d='M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653'></path>
          <path d='M12 7.5l-1 5.5'></path>
          <path d='M11.6 10h2.4l-.5 3'></path>
        </svg>
        <h5 className='md:text-xl text-sm py-3'>PHP</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-python md:w-24 md:h-24 h-10 w-10'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3'></path>
          <path d='M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3'></path>
          <path d='M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4'></path>
          <path d='M11 6l0 .01'></path>
          <path d='M13 18l0 .01'></path>
        </svg>
        <h5 className='md:text-xl text-sm py-3'>Python</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-wordpress md:w-24 md:h-24 h-10 w-10'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M9.5 9h3'></path>
          <path d='M4 9h2.5'></path>
          <path d='M11 9l3 11l4 -9'></path>
          <path d='M5.5 9l3.5 11l3 -7'></path>
          <path d='M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571z'></path>
          <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
        </svg>
        <h5 className='md:text-xl text-sm py-3'>Wordpress</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brand-firebase md:w-24 md:h-24 h-10 w-10'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M4.53 17.05l6.15 -11.72h-.02c.38 -.74 1.28 -1.02 2.01 -.63c.26 .14 .48 .36 .62 .62l1.06 2.01'></path>
          <path d='M15.47 6.45c.58 -.59 1.53 -.59 2.11 -.01c.22 .22 .36 .5 .41 .81l1.5 9.11c.1 .62 -.2 1.24 -.76 1.54l-6.07 2.9c-.46 .25 -1.01 .26 -1.46 0l-6.02 -2.92c-.55 -.31 -.85 -.92 -.75 -1.54l1.96 -12.04c.12 -.82 .89 -1.38 1.7 -1.25c.46 .07 .87 .36 1.09 .77l1.24 1.76'></path>
          <path d='M4.57 17.18l10.93 -10.68'></path>
        </svg>
        <h5 className='md:text-xl text-sm py-3'>Firebase</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          className='icon icon-tabler icon-tabler-brand-firebase md:w-24 md:h-24 h-10 w-10'
          xmlns='http://www.w3.org/2000/svg'
          width='128'
          height='128'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            fill-rule='evenodd'
            d='M7.294 11.804c0-3.966 2.14-6.417 3.533-8.014C11.501 3.02 12 2.447 12 2c0 .447.5 1.019 1.172 1.79c1.394 1.597 3.534 4.048 3.534 8.014c0 4.326-2.75 6.95-4.077 7.765L12.37 22h-.707l-.29-2.43c-1.326-.813-4.079-3.437-4.079-7.766m4.064 6.7L12 9.06l.649 9.446l-.65.75z'
            clip-rule='evenodd'
          />
        </svg>
        <h5 className='md:text-xl text-sm py-3'>MongoDB</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          className='icon icon-tabler icon-tabler-brand-firebase md:w-24 md:h-24 h-10 w-10'
          xmlns='http://www.w3.org/2000/svg'
          width='128'
          height='128'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273c.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333c-.04-.047-.046-.094-.08-.14c-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a51 51 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a73 73 0 0 0-.195 4.41H0q.083-2.95.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095q.363 3.024.428 5.53zm4.017-4.08q-.567 3.069-1.492 4.46q-.723 1.074-1.583 1.073q-.228 0-.566-.138v-.494q.166.026.386.026q.402 0 .647-.222q.295-.27.295-.605q0-.233-.23-.944L6.23 14.615h.91l.727 2.36q.247.804.205 1.123q.6-1.598.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5q.136-.113.255-.25q.649-.76.648-2.253q0-2.745-2.155-2.746q-1.056 0-1.65.697q-.646.762-.646 2.245q-.001 1.459.574 2.14q.524.615 1.583.615q.396 0 .725-.098l1.325.772l.36-.622zM15.5 17.588q-.337-.541-.337-1.736q0-2.09 1.27-2.09q.666 0 .977.5q.336.543.336 1.723q0 2.107-1.27 2.108q-.667 0-.978-.5zm-1.658-.425q0 .706-.516 1.156q-.514.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476q.656.329 1.19.328q.498 0 .783-.22a.75.75 0 0 0 .3-.615c0-.33-.23-.61-.648-.845c-.388-.213-1.163-.657-1.163-.657c-.422-.307-.632-.636-.632-1.177q0-.674.47-1.085q.471-.416 1.22-.415q.769 0 1.4.41l-.213.476a2.7 2.7 0 0 0-1.064-.23q-.425 0-.654.206a.69.69 0 0 0-.248.524c0 .328.234.61.666.85c.393.215 1.187.67 1.187.67c.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188c-.1.04-.26.04-.274.167c.055.053.063.14.11.214c.08.134.218.313.346.407q.208.167.427.31c.26.16.555.255.81.416c.145.094.293.213.44.313c.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214c-.067-.067-.134-.127-.2-.193a3.2 3.2 0 0 0-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106c.227-.06.435-.047.67-.106q.16-.042.32-.094v-.06c-.12-.12-.21-.283-.334-.395a9 9 0 0 0-1.104-.823c-.21-.134-.476-.22-.697-.334c-.08-.04-.214-.06-.26-.127c-.12-.146-.19-.34-.275-.514a18 18 0 0 1-.547-1.163c-.12-.262-.193-.523-.34-.763c-.69-1.137-1.437-1.826-2.586-2.5c-.247-.14-.543-.2-.856-.274c-.167-.008-.334-.02-.5-.027c-.11-.047-.216-.174-.31-.235c-.38-.24-1.364-.76-1.644-.072c-.18.434.267.862.422 1.082c.115.153.26.328.34.5c.047.116.06.235.107.356c.106.294.207.622.347.897c.073.14.153.287.247.413c.054.073.146.107.167.227c-.094.136-.1.334-.154.5c-.24.757-.146 1.693.194 2.25c.107.166.362.534.703.393c.3-.12.234-.5.32-.835c.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555c.206.328.566.668.867.895c.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.5 3.5 0 0 1-.35-.4a9 9 0 0 1-.747-1.218c-.11-.21-.202-.436-.29-.643c-.04-.08-.04-.2-.107-.24c-.1.146-.247.273-.32.453c-.127.288-.14.642-.188 1.01c-.027.007-.014 0-.027.014c-.214-.052-.287-.274-.367-.46c-.2-.475-.233-1.238-.06-1.785c.047-.14.247-.582.167-.716c-.042-.127-.174-.2-.247-.303a2.5 2.5 0 0 1-.24-.427c-.16-.374-.24-.788-.414-1.162c-.08-.173-.22-.354-.334-.513c-.127-.18-.267-.307-.368-.52c-.033-.073-.08-.194-.027-.274c.014-.054.042-.075.094-.09c.088-.072.335.022.422.062c.247.1.455.194.662.334c.094.066.195.193.315.226h.14c.214.047.455.014.655.073c.355.114.675.28.962.46a5.95 5.95 0 0 1 2.085 2.286c.08.154.115.295.188.455c.14.33.313.663.455.982c.14.315.275.636.476.897c.1.14.502.213.682.286c.133.06.34.115.46.188c.23.14.454.3.67.454c.11.076.443.243.463.378'
          />
        </svg>
        <h5 className='md:text-xl text-sm py-3'>MySQL</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          className='icon icon-tabler icon-tabler-brand-firebase md:w-24 md:h-24 h-10 w-10'
          xmlns='http://www.w3.org/2000/svg'
          width='128'
          height='128'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M21.81 10.25c-.06-.04-.56-.43-1.64-.43c-.28 0-.56.03-.84.08c-.21-1.4-1.38-2.11-1.43-2.14l-.29-.17l-.18.27c-.24.36-.43.77-.51 1.19c-.2.8-.08 1.56.33 2.21c-.49.28-1.29.35-1.46.35H2.62c-.34 0-.62.28-.62.63c0 1.15.18 2.3.58 3.38c.45 1.19 1.13 2.07 2 2.61c.98.6 2.59.94 4.42.94c.79 0 1.61-.07 2.42-.22c1.12-.2 2.2-.59 3.19-1.16A8.3 8.3 0 0 0 16.78 16c1.05-1.17 1.67-2.5 2.12-3.65h.19c1.14 0 1.85-.46 2.24-.85c.26-.24.45-.53.59-.87l.08-.24zm-17.96.99h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H3.85c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.43 0h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H6.28c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.47 0h1.75c.1 0 .17-.07.17-.16V9.5c0-.08-.06-.16-.17-.16H8.75c-.08 0-.15.07-.15.16v1.58c0 .09.06.16.15.16m2.44 0h1.77c.08 0 .15-.07.15-.16V9.5c0-.08-.06-.16-.15-.16h-1.77c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16M6.28 9h1.76c.08 0 .16-.09.16-.18V7.25c0-.09-.07-.16-.16-.16H6.28c-.09 0-.16.06-.16.16v1.57c.01.09.07.18.16.18m2.47 0h1.75c.1 0 .17-.09.17-.18V7.25c0-.09-.06-.16-.17-.16H8.75c-.08 0-.15.06-.15.16v1.57c0 .09.06.18.15.18m2.44 0h1.77c.08 0 .15-.09.15-.18V7.25c0-.09-.07-.16-.15-.16h-1.77c-.08 0-.15.06-.15.16v1.57c0 .09.07.18.15.18m0-2.28h1.77c.08 0 .15-.07.15-.16V5c0-.1-.07-.17-.15-.17h-1.77c-.08 0-.15.06-.15.17v1.56c0 .08.07.16.15.16m2.46 4.52h1.76c.09 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16h-1.76c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16'
          />
        </svg>
        <h5 className='md:text-xl text-sm py-3'>Docker</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          className='icon icon-tabler icon-tabler-brand-firebase md:w-24 md:h-24 h-10 w-10'
          xmlns='http://www.w3.org/2000/svg'
          width='128'
          height='128'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            fill-rule='evenodd'
            d='M21.623 11.11L12.89 2.376a1.29 1.29 0 0 0-1.821 0L9.256 4.191l2.3 2.3a1.53 1.53 0 0 1 1.937 1.95l2.217 2.217a1.532 1.532 0 1 1-.918.864l-2.068-2.068v5.441a1.533 1.533 0 1 1-1.26-.045V9.36a1.53 1.53 0 0 1-.832-2.01L8.365 5.081l-5.988 5.987a1.29 1.29 0 0 0 0 1.822l8.733 8.732a1.29 1.29 0 0 0 1.821 0l8.692-8.692a1.29 1.29 0 0 0 0-1.822'
          />
        </svg>
        <h5 className='md:text-xl text-sm py-3'>Git</h5>
      </section>
      <section className='flex flex-col justify-center items-center'>
        <svg
          className='icon icon-tabler icon-tabler-brand-firebase md:w-24 md:h-24 h-10 w-10'
          xmlns='http://www.w3.org/2000/svg'
          width='128'
          height='128'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M8.5 2a3 3 0 0 0 0 6h7a3 3 0 1 0 0-6zm7 7a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-10 3a3 3 0 0 1 3-3h3v6h-3a3 3 0 0 1-3-3m3 4a3 3 0 1 0 3 3v-3z'
          />
        </svg>
        <h5 className='md:text-xl text-sm py-3'>Figma</h5>
      </section>
    </>
  )
}
