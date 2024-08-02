import Nav from "./Nav";

export default function Header(){
    return(
        <div style={{width: '80%', margin: 'auto', paddingTop: '20px'}}>
            <img src="/images/logo.png" alt="logo"/>
            <Nav/>
        </div>
    );
}