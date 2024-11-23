import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
<footer class="bg-white rounded-none shadow dark:bg-white m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            {/* <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a> */}
            <div className='flex flex-wrap items-center justify-around gap-10 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <a href="https://github.com/NISHAD-5123" target="_blank" rel="noopener noreferrer" style={{ color: "#333" }}>
                <FontAwesomeIcon icon={faGithub}  size='2x'/>
                </a>

                {/* LinkedIn Icon */}
                <a href="www.linkedin.com/in/arun-nishad-86a91422a" target="_blank" rel="noopener noreferrer" style={{ color: "#0077b5" }}>
                <FontAwesomeIcon icon={faLinkedin}  size='2x'/>
                </a>

                {/* Facebook Icon */}
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#1877f2" }}>
                <FontAwesomeIcon icon={faFacebook}  size='2x' />
                </a>

                {/* WhatsApp Icon */}
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#25d366" }}>
                <FontAwesomeIcon icon={faWhatsapp}  size='2x'/>
                </a>
            </div>

            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#Contact" class="hover:underline me-4 md:me-6">contact</a>
                </li>
                <li>
                    <a href="#Education" class="hover:underline me-4 md:me-6">education</a>
                </li>
                <li>
                    <a href="#Experience" class="hover:underline me-4 md:me-6">experience</a>
                </li>
                <li>
                    <a href="#Service" class="hover:underline">service</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">Arun</a>. All Rights Reserved.</span>
    </div>
</footer>
    </>
  )
}

export default Footer
