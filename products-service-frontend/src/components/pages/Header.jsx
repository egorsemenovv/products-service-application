import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import SearchPage from "./SearchPage/SearchPage";
import CreateSkuPage from "./CreateSkuPage/CreateSkuPage";
import CreateProductPage from "./CreateProductPage/CreateProductPage";
import LoadFromDbToElasticPage from "./LoadFromDbToElasticPage/LoadFromDbToElasticPage";
import HelloPage from "./HelloPage/HelloPage";
import "./Header.css"


function Header() {
    return (
        <Router>
            <header className="header">
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link to="/search">Search products</Link>
                        </li>
                        <li>
                            <Link to="/create-products">Create new products</Link>
                        </li>
                        <li>
                            <Link to="/create-skus">Create SKUs</Link>
                        </li>
                        <li>
                            <Link to="/load-from-elastic">Load from database to ElasticSearch</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<HelloPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/create-products" element={<CreateProductPage/>}/>
                <Route path="/create-skus" element={<CreateSkuPage/>}/>
                <Route path="/load-from-elastic" element={<LoadFromDbToElasticPage/>}/>
            </Routes>
        </Router>
    );
}

export default Header;