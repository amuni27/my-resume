import image_url from '../assets/aman1.jpg'
function Image() {
    return (
        <div className="w-80 h-80 overflow-hidden rounded-full ring-8 ring-offset-8 ring-offset-[#444444] ring-[#444444]">
            <img  src={image_url} alt="aman"/>
        </div>
    );
}

export default Image;