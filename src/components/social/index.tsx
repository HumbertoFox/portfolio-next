import { SocialComponentProps } from '@/types';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

export default function SocialComponent({ socialRef }: SocialComponentProps) {
    return (
        <div className="social" ref={socialRef}>
            <Link href="https://www.linkedin.com/in/humberto-ribeiro-sales/" target='_blank'>
                <FaLinkedinIn />
            </Link>
            <Link href="https://github.com/HumbertoFox/" target='_blank'>
                <FaGithub />
            </Link>
            <Link href="https://www.instagram.com/betofoxnet_info/" target='_blank'>
                <FaInstagram />
            </Link>
            <Link href="https://api.whatsapp.com/send/?phone=5581988075408&text&type=phone_number&app_absent=0" target='_blank'>
                <FaWhatsapp />
            </Link>
        </div>
    );
}