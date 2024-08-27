const Footer=()=>{
    const currentYear=new Date().getFullYear();
    return (
        <footer className="flex flex-col justify-center items-center bg-zinc-900 p-4">
             
            <p className="text-white text-sm md:text-xl">
            MoviesFinder - Find Movies. This is the best place to find full HD Movies online wherever you are.
            </p>    
            <p className="text-slate-400 text-sm my-4">
            Copyright © {currentYear} - MoviesFinder
            </p>
            <p className="text-slate-500 text-center">©️ Coded by Helen Sobia</p>
        </footer>
    )
}

export default Footer;