import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css'; 

  const tiffinData = [
    {
      name: "Dosa",
      ingredients: "a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice",
      price: 45,
      photoName: "tiffins/masala-dosa.webp",
      soldOut: true,
    },
    {
      name: "Bajji",
      ingredients: "South Indian style onion bajji or vengaya bajji is made with onions, gram flour, rice flour, spices and herbs.",
      price: 30,
      photoName: "tiffins/bajji.jpeg",
      soldOut: false,
    },
    {
      name: "Chapathi",
      ingredients: "Traditional unleavened Indian flatbread made with just 3 ingredients – whole wheat flour, ghee/oil & water",
      price: 30,
      photoName: "tiffins/chapathi.jpeg",
      soldOut: false,
    },
    {
        name: "Daddojanam",
        ingredients: "Andhra style Curd Rice recipe and it has a few assorted spices apart from the regular ingredients",
        price: 25,
        photoName: "tiffins/daddojanam.webp",
        soldOut: false,
      },
      {
        name: "Gari",
        ingredients: "The basic gari is made with just urad dal, water and salt. To flavor them ingredients like crushed black pepper, green chilies",
        price: 30,
        photoName: "tiffins/gari.jpeg",
        soldOut: false,
      },
      {
        name: "Pulihora",
        ingredients: "rice,raw peanuts,curry leaves,green chilli.",
        price: 30,
        photoName: "tiffins/pulihora.jpeg",
        soldOut: false,
      },
      {
        name: "Puri",
        ingredients: "Same as chapathi",
        price: 30,
        photoName: "tiffins/puri.jpeg",
        soldOut: false,
      },
      {
        name: "Sambar-Idly",
        ingredients: "Rice, urad dal, fenugreek seeds, sambar",
        price: 30,
        photoName: "tiffins/sambar-idly.webp",
        soldOut: false,
      },
  ];

function App(){
    return (<div className="container">
        <Header/> 
        <Menu/>
        <Footer/>
        </div>);
};

function Header(){
    const style = {};
    return <header className='header'><h1 style={style} > Naveen Tiffin Hut </h1></header>;
}
function Menu(){
    const tiffins = tiffinData;
    const numTiffins = tiffinData.length;
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            
            {numTiffins>0 ? (<>
            <p>Authentic Indian (Desi) tiffins. {numTiffins} creative
            dishes to choose from. All from our stove, all organic, all delicious</p>
            <ul className='tiffins'>
                {
                tiffins.map((tiffin)=>(<Tiffin tiffinObj={tiffin} key={tiffin.name}/>))
                }
            </ul></>):<p>We are still working on our menu, please come back later!</p>}
        </main>
    
    );

}

function Tiffin(props){
    const {tiffinObj} = props;//props destrcturing
    return (
    (<li className={`tiffin ${tiffinObj.soldOut? "sold-out":null}`}>
    <img src={tiffinObj.photoName} alt = {tiffinObj.name}/>
    <div>
    <h3>{tiffinObj.name}</h3>
    <p>{tiffinObj.ingredients}</p>
    {!tiffinObj.soldOut?<span>{tiffinObj.price}rs</span>:<span>SOLD OUT</span>}
    </div>
    </li> )
    );
}

function Footer(props){
    const hour = new Date().getHours();
    const openHour = 1;
    const closeHour = 22;
    const isOpen = hour>=openHour && hour<= closeHour
   return <footer className='footer '>
    {isOpen? <Order closeHour={closeHour}/>
    :<p>We are happy to welcome you here between {openHour}:00 Hrs and {closeHour}:00 Hrs</p>
    }
    </footer>;
}


function Order(props)
{
    const {closeHour}= props
    return <div className='order'>
    <p>We are open until {closeHour}:00 Hrs. Come visit us or order online!! !</p>
   <button className='btn'>Order</button>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>);
//this is similar to root.render(App());