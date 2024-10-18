// import logo from './images/logo.svg'


export default function Navbar(){
    return <div className='flex justify-between bg-gray-100 hover:bg-gray-300'>
    <img src={`./images/logo.svg`}/>

    <div className="flex justify-between gap-8 mr-8 my-4">
        <div>HOME</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
    </div>
        
    </div>
}