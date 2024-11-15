import './sidebar.css';

export function SideBar() {

    return (
        <aside className="side-bar">

            <div className="side-bar-options">
                <ul>
                    <a href='#Home'>
                        <li>
                            Home
                        </li>
                    </a>
                    <a href='#HighLights'>
                        <li>
                            Destaques
                        </li>
                    </a>
                    <a href='#Our Chef'>
                        <li>
                            Nosso Chefe
                        </li>
                    </a>
                    <a href='#Testimonials'>
                        <li>
                            Recomendações
                        </li>
                    </a>
                </ul>
            </div>
        </aside>


    )
};
