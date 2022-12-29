import './Home.css';
import Categories from './components/Categories/Categories'
import Posts from './components/Categories/Posts';
import AddPostCategory from './components/Categories/AddPostCategory'

function Home() {
    return (
        <div className="App">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img width="161" height="37" src="https://linkgraph.io/wp-content/themes/linkgraph-new/img/header/logo.svg" alt="LinkGraph Logo" itemProp="logo" />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link active">Grow your Revenue through Transparent & Results-Driven SEO</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Categories />
            <Posts />
            <AddPostCategory />

        </div>
    );
}

export default Home;