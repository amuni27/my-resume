import Service from "./Service.tsx";

function Services() {
    return (
        <div className="w-full">
            <p className="mt-20  ml-20 text-gray-50 text-xl font-bold">My Service</p>
            <section className=" mt-3 ml-20 w-10 h-1 rounded-full bg-blue-500">f</section>
            <span className=" w-10 h-1  rounded-full bg-[#333333] mb-32"></span>
            <div className="flex w-full p-10 justify-center">
                <Service/>
                <Service/>
                <Service/>
            </div>

        </div>
    );
}

export default Services;