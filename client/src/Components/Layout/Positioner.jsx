import classNames from 'classnames';

export default function Positioner(props){
   
    const {classes} = props;
    const  className = classNames('positioner', classes);

    return(<div className={className}>
            {props.children}
        </div>
    )
}