import classNames from 'classnames';

export default function Button(props){
    
    const {fn, classes} = props;
    const  className = classNames('btn', classes);
    return <button className={className} onClick={fn}>{props.children}</button>
}


Button.defaultProps = {
    fn: ()=>{},
    classes: '',
}