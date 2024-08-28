
function Button(props:{names:string}) {
    return (
            <span className="bg-[#333333] ring-2 ring-blue-500 p-2 pl-4 pr-4 mr-4  rounded-full text-white cursor-pointer">{props.names}</span>
    );
}

export default Button;