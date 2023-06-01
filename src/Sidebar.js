import SocialNetworks from './SocialNetworks';

import Avatar from './img/fotoryan2.png'

import Information from './information';



import './styles/Sidebar.css';


const Sidebar = () => {
    return(
    <aside className="sidebar">
        <img src={Avatar} alt="Luísa Magalhães"/>
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <Information />
        <a href="https://docs.google.com/document/d/15DQeYCQO7LrhHr9K5CXGrtEVhNHKMMoi5zoG08XH5go/edit" className="btn">
            Download curriculo
        </a>
    </aside>
    )
}
export default Sidebar