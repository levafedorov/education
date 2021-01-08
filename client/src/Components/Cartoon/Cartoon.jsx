export default function Cartoon(props){

    
    const {background} = props;
      
    return <div className="cartoon" style={{backgroundImage: `url(${background})`}}>
          
        </div>
    }