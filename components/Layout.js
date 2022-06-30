import Header from "./Header"

export default function Layout(props) {
    return(
        <div>
            <Header/>
            <main>
                <div>
                    {props.children}
                </div>
            </main>
        </div>
    )
}