 class ImgFigure extends React.Component{
    render(){
        return(
            <figure>
                <img src=""/>
                <figcaption>
                    <h3>Have a good trip</h3>
                    <h3></h3>
                </figcaption>
            </figure>
        )
    }
}
class Controller extends React.Component{
    render(){
        return(
            <span></span>
        )
    }
}
class Photowall extends React.Component{
    render(){
    console.log(111);
        var imgArr = [];
        imgArr.forEach(function(item,index){
            imgArr.push(<ImgFigure/>);
         }) 
        return(
            <section>
                {imgArr}
            </section>
        )
    }
}

ReactDOM.render(
    <Photowall/>,
    document.getElementById('photowall')
);