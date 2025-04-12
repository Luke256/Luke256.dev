
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white h-(--footer-height) content-center">
            <p className="text-sm text-center">
                &copy; {new Date().getFullYear()} Luke. All rights reserved.
            </p>
            <p className="text-sm text-center">
                Built with <a href="https://nextjs.org/" className="text-indigo-400 hover:underline">Next.js</a> and <a href="https://tailwindcss.com/" className="text-indigo-400 hover:underline">Tailwind CSS</a>.
            </p>
        </footer>
    )
}

export default Footer;