import Button from '../Button/Button';
import classNames from 'classnames';


export default function Article(props){


    const {classes, type, h, p, b} = props;
    const  className = classNames('article', classes);
   

       let header;

       if(type === 'primary'){
           header = <h1 className={`header--primary`}>{h}</h1>
       }else if(type === 'secondary'){
        header = <h2 className={`header--secondary`}>{h}</h2>
       }else if(type === 'tertiary'){
        header = <h2 className={`header--tertiary`}>{h}</h2>
       }

        return <article className={className}>
                 {header}
                 <p className={`paragraph--${type} article__p u-margin-bottom-medium`}>{p}</p>
                 <Button classes='btn--red btn--animated'>{b}</Button>
              </article>
    
}