import {useState} from 'react'

export const Add = () => {
    const [query, setQuery] = useState('')

    const onChange = event => {
        event.preventDefault()

        setQuery(event.target.value)
    }

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Procure por um filme"
                            value={query}
                            onChange={onChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
