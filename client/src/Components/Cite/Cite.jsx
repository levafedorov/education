export default function Cite(props){

    const {children} = props;

    
    return (<figure className="cite">
    <blockquote className="cite__blockquate u-margin-bottom-tiny">
    <p className="cite__text">Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
    </blockquote>
    <figcaption className="cite__author u-margin-bottom-small">Aldous Huxley</figcaption>
    </figure>)
}