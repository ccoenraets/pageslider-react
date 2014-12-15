var Header = React.createClass({
    render: function () {
        return (
            <header className="bar bar-nav">
                <a href="#" className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}></a>
                <h1 className="title">{this.props.text}</h1>
            </header>
        );
    }
});

var HomePage = React.createClass({
    render: function () {
        return (
            <div className={"page " + this.props.position}>
                <Header text="PageSlider"/>
                <div className="content">
                    <ul  className="table-view">
                        <li className="table-view-cell media"><a href="#page1">Page 1</a></li>
                        <li className="table-view-cell media"><a href="#page2">Page 2</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});

var Page1 = React.createClass({
    render: function () {
        return (
            <div className={"page page1 " + this.props.position}>
                <Header text="Page 1" back="true"/>
                <div className="content">
                    <div className="card">
                        <ul className="table-view">
                            <li className="table-view-cell media">
                                <a>
                                    <img className="media-object pull-left" src="images/avatar.png"/>
                                    <div className="media-body">Susan Smith</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

var Page2 = React.createClass({
    render: function () {
        return (
            <div className={"page page2 " + this.props.position}>
                <Header text="Page 2" back="true"/>
                <div className="content">
                    <img src="images/react.png"/>
                </div>
            </div>
        );
    }
});

var App = React.createClass({
    mixins: [PageSlider],
    componentDidMount: function() {
        router.addRoute('', function() {
            this.slidePage(<HomePage key="home"/>);
        }.bind(this));
        router.addRoute('page1', function() {
            this.slidePage(<Page1 key="page1"/>);
        }.bind(this));
        router.addRoute('page2', function() {
            this.slidePage(<Page2 key="page2"/>);
        }.bind(this));
        router.start();
    }
});

React.render(<App/>, document.body);