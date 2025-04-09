
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Luke. All rights reserved.
                </p>
                <p className="text-sm">
                    Built with <a href="https://nextjs.org/" className="text-indigo-400 hover:underline">Next.js</a> and <a href="https://tailwindcss.com/" className="text-indigo-400 hover:underline">Tailwind CSS</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer;