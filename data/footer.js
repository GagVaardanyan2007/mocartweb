import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const footerdata = {
    text: "© 2024 Mocart. Բոլոր իրավունքները պաշտպանված են։",
    links: [
        { name: "Գլխավոր", href: "/" },
        { name: "Մեր Մասին", href: "/about" },
        { name: "Կոնտակտներ", href: "/contact" },   
    ],
    social: [
        { name: "Facebook",icon: FaFacebook(), href: "https://www.facebook.com/mocart" },
        { name: "Instagram", icon: FaInstagram(), href: "https://www.instagram.com/mocart" },
        { name: "Twitter", icon: FaTwitter(), href: "https://www.twitter.com/mocart" },
    ],
};