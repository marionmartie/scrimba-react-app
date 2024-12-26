import { FaMapMarker } from "react-icons/fa"

const Entry = () => {
    return (
        <div className="container mx-auto">
            <div className="px-5 py-10 grid grid-cols-12 gap-4">
                <div className="col-span-4 md:col-span-2 lg:col-span-1 rounded h-52 overflow-hidden">
                    <img src="https://scrimba.com/links/travel-journal-japan-image-url" className="rounded max-w-screen-sm h-[100%] object-fill"  alt="" />
                </div>
                <div className="gap-2 col-span-8">
                    <div className="flex items-center gap-2">
                        <FaMapMarker className="text-red-800" />
                        <span>JAPAN</span>
                        <a className="underline text-gray-400" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                    </div>

                    <h3 className="text-3xl font-bold mb-4">Mount Fuji</h3>

                    <p className="mb-2">12 Jan, 2021 - 24 Jan, 2021</p>

                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </div>
    )
}

export default Entry