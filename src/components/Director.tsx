import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const careerData = [
    {
        date: "2005 – 2010",
        title: "약력1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere convallis lorem, nec vulputate libero.",
    },
    {
        date: "2011 – 2020",
        title: "약력2",
        description: "Sed euismod sapien ac nulla hendrerit, a feugiat justo lacinia. Donec fringilla purus in lacus fermentum.",
    },
];

const Director: React.FC = () => {
    return (
        <section id="director" className="py-16 px-4 bg-gray-100">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">원장 약력</h2>

                {/* <div className="flex justify-center mb-8">
                    <Image
                        src="/1d8d3cdd-7e4d-4131-8243-c17436e755df.png"
                        alt="Director"
                        width={100}
                        height={100}
                        className="rounded-full border shadow"
                    />
                </div> */}

                <div className="relative border-l-2 border-gray-300 pl-6">
                    {careerData.map((item, idx) => (
                        <div key={idx} className="mb-10 relative">
                            <div className="absolute -left-4 top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white z-10" />

                            <div className="text-sm text-gray-500 mb-1">{item.date}</div>

                            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>

                            <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Director;