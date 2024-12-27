import { FaMapMarker } from "react-icons/fa"

const Entry = ({entry}) => {
    return (
        <div className="container mx-auto">
            <div className="px-5 py-10 grid grid-cols-12 gap-4">
                <div className="col-span-4 md:col-span-2 lg:col-span-1 rounded h-52 overflow-hidden">
                    <img src={entry.img.src} className="rounded max-w-screen-sm h-[100%] object-fill"  alt={entry.img.alt} />
                </div>
                <div className="gap-2 col-span-8">
                    <div className="flex items-center gap-2">
                        <FaMapMarker className="text-red-800" />
                        <span>{ entry.country }</span>
                        <a className="underline text-gray-400" href={entry.googleMapsLink}>View on Google Maps</a>
                    </div>

                    <h3 className="text-3xl font-bold mb-4">{ entry.title }</h3>

                    <p className="mb-2">{ entry.dates }</p>

                    <p>{ entry.text }</p>
                </div>
            </div>
        </div>
    )
}

export default Entry