import NavbarComponent from "../../components/Navbar/Navbar"
import AllListingComponent from '../../components/AllListing/AllListing'
import { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function Home({user, setUser}) {
    const [properties, setProperties] = useState([])
    const [search, setSearch] = useState('')
    const [error, setError] = useState('')

    function handleChange(e) {
        setSearch(e.target.value)
        console.log(search)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            searchQuery: search
            })
        }
        const fetchResponse = await fetch('/api/property/search', options)
        const response = await fetchResponse.json()
        console.log("Response of Search: ", response)
        if(response.length){
            setProperties(response)
            setError('')
        }else{
            setError('No result found')
            setProperties(null)
        }
        
    }   

    useEffect(() => {
        const fetchData = async () => {
            try {
                let propertyData = await fetch("/api/property/index")
                let propertiesObjects = await propertyData.json()
                console.log("Inside Home > useEffect : ", propertiesObjects)
                setProperties(propertiesObjects)
            } catch(error) {
                setProperties(null)
                console.log("Error: ", error)
            }
        }

        fetchData().catch(console.error);
    }, [])

    return (
        <div>
            <NavbarComponent user={user} setUser={setUser}/>
            <br></br>
            <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Control
                     type="search"
                     placeholder="Search By City"
                     className="me-2"
                     aria-label="Search"
                     onChange={handleChange}
                     value = {search}
                 />
                <Button  variant="outline-success" type="submit">Search</Button>
            </Form>
            {
            error && <h4>No results found</h4>
            }
            {
            properties &&
            <AllListingComponent properties={properties}/>
            }
        </div>
    )
}
