
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

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
`

const FilterText = styled.span`
    margin-right: 20px;
    font-size: 20px;

`
const Select = styled.select`
    padding: 5px;
    margin-right: 10px;
`
const Option = styled.option`
    &:hover {
        background-color:#3dc3b6 ;
    }
`

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Products</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Genre</Option>
                    <Option>Action</Option>
                    <Option>Adventure</Option>
                    <Option>Sport</Option>
                    <Option>RPG</Option>
                    <Option>FPS</Option>
                    <Option>MMORPG</Option>
                    <Option>Puzzel</Option>
                </Select>

                <Select>
                    <Option disabled selected>Platform</Option>
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
                <Select>
                    <Option disabled selected>Price</Option>
                    <Option>Free unlimited</Option>
                    <Option>Free limited </Option>
                    <Option>Less than 20 Eur</Option>
                    <Option>Less than 50 Eur</Option>
                    <Option>More than 100 Eur</Option>
                </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
