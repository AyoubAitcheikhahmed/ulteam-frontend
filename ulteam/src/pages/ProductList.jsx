
import { useLocation } from 'react-router'
import { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({
        width: "0px 20px",
        display: "flex",
        flexDirection: "column"
    })}
`

const FilterText = styled.span`
    margin-right: 20px;
    font-size: 20px;
    ${mobile({
        marginRight: "0px"
    })}

`
const Select = styled.select`
    padding: 5px;
    margin-right: 10px;
    ${mobile({
        margin: "10px 0px"
    })}
`
const Option = styled.option`
    &:hover {
        background-color:#3dc3b6 ;
    }
`

const ProductList = () => {

    
    const catName = useLocation().pathname.split("/")[2];
    const [filter, setFilter] = useState({})
    const [sort, setSort] = useState({})
    
    const filterHandle = (event) =>{
        const value = event.target.value;
        setFilter({
            [event.target.name]:value
        });
        
    }

    const sortHandle = (event) => setSort(event.target.value)

    


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Products</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                <Select name="categories" onChange={filterHandle}>
                    <Option disabled>Genre</Option>
                    <Option>Action</Option>
                    <Option>Adventure</Option>
                    <Option>SPORT</Option>
                    <Option>RPG</Option>
                    <Option>FPS</Option>
                    <Option>MMORPG</Option>
                    <Option>Puzzel</Option>
                </Select>

                <Select name="platform" onChange={filterHandle}>
                    <Option disabled>Platform</Option>
                    <Option>PC</Option>
                    <Option>Nintendo</Option>
                    <Option>PS</Option>
                    <Option>XBOX</Option>
                    <Option>Windows</Option>
                    <Option>MAC OS</Option>
                    <Option>Linux</Option>
                </Select>

       

                
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                <Select onChange={sortHandle}>
                    <Option value="free" >Free items</Option>
                    <Option value="inc" >Prijs Low &gt; High</Option>
                    <Option value="dec" >Prijs High &gt; low </Option>
                </Select>
                </Filter>
            </FilterContainer>
            <Products category = {catName} filters = {filter} sort = {sort}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
