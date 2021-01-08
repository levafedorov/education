
export default function Flex(props){


    return(
        <div className={`flex ${props.classes || null}`}>
            {props.children.map((item, i) => 
            <div className="flex__elem" key={`${item}-${i}`}>{item}</div>)}
        </div>
    )
}