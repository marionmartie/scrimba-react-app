const Main = () => {
    return (
        <main className="p-10">
            <h1 className="text-2xl font-bold">Fun Facts About React</h1>
            <ul className="pt-4 list-disc ps-8 text-blue-400">
                <li className="py-1 text-lg">
                    <span className="text-black">
                        Was first released in 2013
                    </span>
                </li>
                <li className="py-1 text-lg">
                    <span className="text-black">
                        Was originally created by Jordan Wilke
                    </span>
                </li>
                <li className="py-1 text-lg">
                    <span className="text-black">
                        Has well over 100K stars on GitHub
                    </span>
                </li>
                <li className="py-1 text-lg">
                    <span className="text-black">
                        Is maintained by Meta
                    </span>
                </li>
                <li className="py-1 text-lg">
                    <span className="text-black">
                        Powered by thousands of enterprise apps, including mobile apps
                    </span>
                </li>
            </ul>
        </main>       
   )
}

export default Main