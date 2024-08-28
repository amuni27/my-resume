import Image from "./Image.tsx";
import Button from "./Button.tsx";

function About() {
    return (
        <div className="w-full flex h-96 mt-24 pb-20 ">
            <div className="w-2/5 flex justify-end items-center mr-20 ">
                <Image></Image>
            </div>
            <div className="w-3/5">
                <h4 className="text-[#aaa]">Full-Stack Developer</h4>
                <h1 className="text-white text-5xl font-bold mt-3 mb-3">Amanuel Lawro</h1>
                <p className="text-[#d5d5d5] text-justify pr-10">I'm a React Developer with 5+ years of experience in building high-performance front-end architectures that boost user engagement and page speed. Skilled in integrating front-end with back-end, implementing automated tests, and optimizing components. I excel in resolving performance issues and staying current with emerging technologies to deliver efficient, scalable solutions.
                </p>
                <div className="pt-10">
                    <Button names="Download CV"/>
                    <Button names="Contact"/>
                </div>

            </div>
        </div>
    );
}

export default About;