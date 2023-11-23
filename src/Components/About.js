import React,{useState, useRef, useEffect} from 'react'
// import PropTypes from 'prop-types'
export default function About(props) {

    
    const [myStyleBLack, setMyStyleBLack] = useState({
        backgroundColor:'black',
        color:'white'
    })
    const [myStyleGrey, setMyStyleGrey] = useState({
        backgroundColor:'grey',
        color:'white'
    })
    // const [modeChangeText, setModeChangeText] = useState('Dark Mode');

    

    const modeChange = () =>{
        if(myStyleBLack.color == 'white'){
            setMyStyleBLack({
                backgroundColor:'white',
                color:'black'
            })
            setMyStyleGrey({
                backgroundColor:'beige',
                color:'black'
            })
            
            console.log("calledmodechangeBlack");
        }        
        else{
            setMyStyleBLack({
                backgroundColor:'black',
                color:'white'
            })
            setMyStyleGrey({
                backgroundColor:'grey',
                color:'white'
            })
            
            console.log("calledmodechangeWhite");
        }
    };

    //   if(props.mode === 'dark'){  //  infinite loops rendering
    //         modeChange();
    //     }

    useEffect(() => {
        modeChange();
      }, [props.mode]);
      

  return (
    <div className="container" style={myStyleGrey}>
        <h1 id="about" >About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyleBLack} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyleBLack}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyleBLack} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyleBLack}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={myStyleBLack} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyleBLack}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>


        {/* <button className="btn btn-dark my-2 mx-1" onClick={modeChange} >{modeChangeText}</button> */}


        
    </div>
  )
}
