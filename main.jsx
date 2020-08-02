class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bg: "gray"
        };
        this.colorUp = this.colorUp.bind(this);
        this.randMeUp = this.randMeUp.bind(this);
    }
    
    colorUp(){
        let newColor = "#";
        do{
            newColor += this.randMeUp();
        }while(newColor.length < 7);
        console.log(newColor);
        this.setState({
            bg: newColor
        })
    }
    
    randMeUp(){
        const base = Math.floor(Math.random() * 10) % 2;
        if(base == 0){
            return String.fromCharCode(Math.floor(Math.random() * 6) + 65);
        }else{
            return Math.floor(Math.random() * 9);
        }
    }
    
    componentDidMount(){
        this.colorUp();
    }
    
    render(){
        const color = this.state.bg;
        return(
            <div id="bg-rand" style={{backgroundColor: color}}>
                <button type="button" onClick={this.colorUp} className="btn btn-primary">Change!</button>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("body"));