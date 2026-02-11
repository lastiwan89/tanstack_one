import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="p-4 lg:p-8 flex flex-col gap-1 items-center bg-sky-950">
      <div className="flex flex-col gap-0.5">
        <div className="flex gap-2 py-2">
          <FaInstagram size={24} color="red" />
          <FaFacebook size={24} color="#0E8BEB" />
          <FaXTwitter size={24} color="black" />
          <FaYoutube size={24} color="#FF0033" />
          <FaWhatsapp size={24} color="green" />
        </div>
        <small className="text-center text-xs text-gray-400">
          Privacy Policy
        </small>
        <small className="text-center text-xs text-gray-400">
          Terms of Services
        </small>
      </div>
      <div>
        <p className="font-semibold text-xs text-center text-gray-300">
          &copy; 2026 Jago Jalan Nusantara
        </p>
      </div>
    </footer>
  )
}
